import { useEffect, useState } from "react";
import { FaList } from "react-icons/fa";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { changeParams, compareString, isArrayHasItem } from "../../utils";
import { getAllTypeAnimals } from "../../apis";

const Category = () => {
  const location = useLocation();
  const [listCategory, setListCategory] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("type") || "All";

  useEffect(() => {
    const callApiType = async () => {
      try {
        const result = await getAllTypeAnimals();
        setListCategory(result?.data?.types);
      } catch (error) {
        console.log(error);
      }
    };
    callApiType();
  }, []);

  return (
    <div className="category">
      <div className="category__heading">
        <FaList className="category__heading-icon" />
        <h3 className="category__heading-title">Pet Type</h3>
      </div>
      <ul className="category__list">
        <li
          className={`category-item ${
            compareString(category, "all") ? "category-item-active" : ""
          }`}
        >
          <Link to="/" className="category-item__link">
            All
          </Link>
        </li>
        {isArrayHasItem(listCategory) &&
          listCategory?.map((item: any) => (
            <li
              className={`category-item ${
                compareString(category, item?.name)
                  ? "category-item-active"
                  : ""
              }`}
              key={item?.name}
            >
              <Link
                to={changeParams(location, "type", item?.name, true)}
                className="category-item__link"
              >
                {item?.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Category;
