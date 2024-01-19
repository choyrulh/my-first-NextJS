"use client";

import { RootState } from "@/lib/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "counter/increment" });
  };

  const decrement = () => {
    dispatch({ type: "counter/decrement" });
  };

  console.log(count);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={increment}>increment</button>
      <h1>Count: {count}</h1>
      <button onClick={decrement}>decrement</button>
    </main>
  );
}
