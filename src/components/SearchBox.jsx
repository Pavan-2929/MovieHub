"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`, undefined, { replace: true });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center my-5"
    >
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mr-2 px-4 py-2 rounded border border-amber-500 focus:outline-none focus:border-amber-500"
      />
      <button
        type="submit"
        disabled={search === ""}
        className="px-4 py-2 rounded bg-amber-500 text-white font-semibold disabled:bg-amber-500 disabled:cursor-not-allowed"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
