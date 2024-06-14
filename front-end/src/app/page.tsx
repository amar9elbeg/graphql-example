"use client";

import { useHelloMutationMutation } from "@/generated";
import { useGetHelloQueryQuery } from "@/generated/pages";

export default function Home() {
  const { data, loading, error } = useGetHelloQueryQuery();

  console.log(data);

  if (loading) {
    return <div>This is loading</div>;
  }

  if (!loading) {
    return (
      <div style={{ color: "white", fontSize: "40px" }}>
        {data?.getHelloQuery}
      </div>
    );
  }

  return <div>hello</div>;
}
