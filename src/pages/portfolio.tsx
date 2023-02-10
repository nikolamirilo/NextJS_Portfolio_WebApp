import Head from "next/head";
import React from "react";

const Portfolio: React.FC = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main>
        <h1>Portfolio Page</h1>
        <div className="cards-container"></div>
      </main>
    </>
  );
};
export default Portfolio;
