import { Loader, Form } from "@/components";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { Suspense } from "react";

const contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <main className="contact">
        <Form />
      </main>
    </>
  );
};
export default contact;
