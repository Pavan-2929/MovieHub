import React from "react";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <div className="flex justify-center gap-8 bg-gray-200 mt-6 p-5 font-bold text-xl">
      <CategoryItem text="Trending" param="fetchTrending" />
      <CategoryItem text="Top Rated" param="fetchTopRated" />
    </div>
  );
};

export default Category;
