import { useState, useEffect } from "react";
import ChartExample from "../components/chart_test.jsx";


export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setData({ message: "Welcome to the Home Page!" });
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      {data ? (
        <p>{data.message}</p>
      ) : (
        <p>Loading...</p>
      )}
      <ChartExample />
    </div>
  );
}