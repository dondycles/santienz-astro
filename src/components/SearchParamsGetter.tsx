import { useEffect } from "react";

export default function SearchParamsGetter() {
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryData = searchParams.get("query");
  }, []);

  return <p>Search Params Getter</p>;
}
