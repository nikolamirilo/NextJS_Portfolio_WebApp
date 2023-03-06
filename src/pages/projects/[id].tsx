import { Loader } from "@/components";
import { Project } from "@/types/api_responses";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";

// export async function getServerSideProps(context) {
//   const id = context.params.id;
//   const response = await fetch(`${process.env.WEB_APP_URL}/api/projects/${id}`);
//   const data = await response.json();
//   return {
//     props: {
//       project: data.singleProject ? data.singleProject : null,
//     },
//   };
// }

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
      { params: { id: "4" } },
    ], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const response = await fetch(`${process.env.WEB_APP_URL}/api/projects/${id}`);

  const data = await response.json();
  return {
    props: {
      project: data.singleProject ? data.singleProject : null,
    },
    revalidate: 10,
  };
};

interface SingleProjectProps {
  project: Project;
}

const SingleProject: React.FC<SingleProjectProps> = ({ project }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 600);
  });
  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>
      <main>
        {loading ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <h1>Project: {project.title}</h1>
            <Link href={project.link}>{project.title}</Link>
            <Image src={project.image} alt={project.title} width={300} height={150} />
          </Suspense>
        )}
      </main>
    </>
  );
};
export default SingleProject;
