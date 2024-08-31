import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Axios from "../../utils/Axios";

function Topnav() {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSearches = useCallback(async () => {
    if (query.trim() !== "") {
      setLoading(true);
      try {
        const { data } = await axios.get(`/search/multi?query=${query}`);
        setSearches(data.results);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    } else {
      setSearches([]); // Clear searches if query is empty
    }
  }, [query]);

  useEffect(() => {
    const debouncedGetSearches = setTimeout(getSearches, 500);
    return () => clearTimeout(debouncedGetSearches);
  }, [query, getSearches]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const clearSearch = () => {
    setQuery("");
    setSearches([]);
  };

  return (
    <div className="w-[80%] h-[10vh] relative flex mx-auto items-center">
      <i className="text-zinc-400 text-3xl ri-search-line"></i>
      <input
        onChange={handleInputChange}
        value={query}
        className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
        type="text"
        placeholder="Search anything"
      />
      {query.length > 0 && (
        <i
          onClick={clearSearch}
          className="absolute text-zinc-400 text-3xl ri-close-fill cursor-pointer right-0"
        ></i>
      )}

      <div className="w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[50%] translate-x-[-50%] overflow-auto rounded absolute z-10">
        {loading ? (
          <p>Loading...</p>
        ) : (
          searches.map((s, i) => (
            <Link
              key={i}
              to="#"
              className="hover:text-black hover:bg-zinc-300 duration-300 font-semibold text-zinc-700 p-5 flex justify-start items-center border-b-2 border-zinc-100"
            >
              <img
                className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
                src={
                  s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.profile_path
                      }`
                    : ""
                }
                alt={s.name || s.title || s.original_name || s.original_title}
              />

              <span>
                {s.name || s.title || s.original_name || s.original_title}
              </span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default Topnav;