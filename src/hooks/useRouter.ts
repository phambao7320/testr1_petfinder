import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const useCustormRouter = () => {
  const location = useLocation();
  let [search] = useSearchParams();
  const pathName = location.pathname;
  let searchParams = location.search;

  return {};
};
