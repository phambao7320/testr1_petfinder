import PetItem from "../../components/PetItem";
import { Category, Filter } from "../../components";
import { useForm, FormProvider } from "react-hook-form";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import { useAppDispatch, useAppSelector } from "../../hooks/hookRedux";
import { getAllAnimalAction } from "../../stores/actions/petAction";
import { useLocation } from "react-router-dom";
import { isEmpty, parseItem } from "../../utils";

interface FormFilter {
  coat: string;
  color: string;
  gender: string;
}

const Home = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const form = useForm<FormFilter>();
  const { watch, getValues, reset } = form;
  const { animals, isLoading, error } = useAppSelector(
    (state) => state.animalState
  );

  const watchColor = watch("color");
  const watchGender = watch("gender");
  const watchCoat = watch("coat");

  const getFilter = () => {
    const values = getValues();
    const url = parseItem(values);
    if (isEmpty(url)) {
      dispatch(getAllAnimalAction(location.search));
    } else {
      const result = isEmpty(location.search)
        ? `?${url}`
        : `${location.search}&${url}`;
      dispatch(getAllAnimalAction(result));
    }
  };

  useEffect(() => {
    getFilter();
  }, [watchColor, watchGender, watchCoat, location.search]);

  useEffect(() => {
    reset();
  }, [location.search]);

  return (
    <div className="container">
      <div className="grid wide">
        <div className="row">
          <div className="col l-2 c-12">
            <Category />
          </div>
          <div className="col l-10 c-12">
            <div className="container__filter-pet">
              <FormProvider {...form}>
                <form>
                  <Filter />
                </form>
              </FormProvider>
            </div>
            <div className="container__show-pet">
              <div className="row">
                {animals.map((item: any) => {
                  return (
                    <div className="col l-2-4 m-4 c-6" key={item?.id}>
                      <PetItem item={item} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
