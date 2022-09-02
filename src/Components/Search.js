import searchImage from "../Assets/search.svg";
import { useDispatch } from "react-redux";
import { titleChanged } from "../Redux/Filters/actions";
import { useMemo, useEffect } from "react";
import debouce from "lodash.debounce";

export default function Search() {
  const dispatch = useDispatch();

  const onFormChange = (e) => {
    dispatch(titleChanged(e.target.value));
  };

  const debouncedResults = useMemo(() => {
    return debouce(onFormChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
      <input
        className="outline-none border-none bg-gray-50 h-full w-full mr-2"
        type="search"
        name="search"
        placeholder="Search"
        onChange={debouncedResults}
      />
      <img
        className="inline h-6 cursor-pointer"
        src={searchImage}
        alt="Search"
      />
    </div>
  );
}
