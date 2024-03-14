"use client";

import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

const CategoryItem = ({ text, param }) => {
  const searchParams = useSearchParams();

  const searchItem = searchParams.get("search");

  const isTrending = param === "fetchTrending" && !searchItem
  return (
    <div
      className={`hover:text-amber-500 ${
        (searchItem === param || isTrending)
          ? "text-amber-500 underline underline-offset-4 decoration-2 decoration-amber-500"
          : ""
      } `}
    >
      <Link href={`/?search=${param}`}>{text}</Link>
    </div>
  );
};

export default CategoryItem;
