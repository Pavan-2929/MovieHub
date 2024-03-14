import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Card from "@/components/Card";

const API_KEY = process.env.API_KEY;

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}

const HomeContent = () => {
  const searchParams = useSearchParams();
  const search = searchParams.search || "fetchTrending";

  const fetchData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3${
        search === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
      }?api_key=${API_KEY}&language=en-US&page=1`
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return data.results;
  };

  return (
    <div>
      <Card fetchData={fetchData} />
    </div>
  );
};
