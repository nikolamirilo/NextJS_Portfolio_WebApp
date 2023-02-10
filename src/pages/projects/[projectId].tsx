import Head from "next/head";
import React from "react";

const SingleProject: React.FC = () => {
  return (
    <>
      <Head>
        <title>Project</title>
      </Head>
      <main>
        <h1>Single Project Page</h1>
        <div className="cards-container"></div>
      </main>
    </>
  );
};
export default SingleProject;
