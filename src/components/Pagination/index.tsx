import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/hookRedux";
import { changeParams } from "../../utils";

const Pagination = () => {
  const location = useLocation();
  const { pagination, isLoading, error } = useAppSelector(
    (state) => state.animalState
  );
  const { current_page, total_pages } = pagination;
  const number_page_default = total_pages > 10 ? 10 : total_pages;

  const arr = Array.from({ length: number_page_default });

  return (
    <ul className="pagination pagination-list">
      <li className="pagination-item">
        <Link
          to={changeParams(location, "page", current_page - 1, false)}
          className={`pagination-item__link ${
            current_page === 1 ? "disabled" : ""
          }`}
        >
          <FaAngleLeft />
        </Link>
      </li>

      {arr.map((i, index) => (
        <li
          className={`pagination-item ${
            index + 1 === current_page ? "pagination-item--active" : ""
          }`}
          key={index}
        >
          <Link
            to={changeParams(location, "page", index + 1, false)}
            className="pagination-item__link"
          >
            {index + 1}
          </Link>
        </li>
      ))}

      <li className="pagination-item">
        <Link
          to={changeParams(location, "page", current_page + 1, false)}
          className={`pagination-item__link ${
            current_page === number_page_default ? "disabled" : ""
          }`}
        >
          <FaAngleRight />
        </Link>
      </li>
    </ul>
  );
};

export default Pagination;
