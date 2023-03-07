import Head from "next/head";
import React from "react";
import { Form } from "@/components";

const Contact: React.FC = () => {
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
export default Contact;
