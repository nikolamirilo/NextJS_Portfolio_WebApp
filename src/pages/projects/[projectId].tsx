import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const SingleProject: React.FC = () => {
  const router = useRouter();
  const { query } = router;
  const id = query.projectId as string;
  return (
    <>
      <Head>
        <title>Swapabee</title>
      </Head>
      <main>
        <h1>Project with Id: {id}</h1>
      </main>
    </>
  );
};
export default SingleProject;
