/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNewsStore } from "../store/news-store";

const HackerNew = () => {
  const { fetch, hits, loading, errorMessage } = useNewsStore((state) => state);
  console.log("🚀 ~ HackerNew ~ errorMessage:", errorMessage);
  console.log("🚀 ~ HackerNew ~ loading:", loading);
  console.log("🚀 ~ HackerNew ~ hits:", hits);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="max-w-lg p-5 mx-auto bg-white rounded-lg">
      {loading && (
        <div className="w-10 h-10 mx-auto border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item) => (
            <div
              key={item.title}
              className="p-3 border rounded-xl border-slate-200"
            >
              {item.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default HackerNew;
