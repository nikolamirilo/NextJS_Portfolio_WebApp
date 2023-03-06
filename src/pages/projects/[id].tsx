import { Loader } from "@/components";
import { Project } from "@/typescript/types/types";
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
  const response = await fetch(`${process.env.WEB_APP_URL}/api/projects`);
  const data = await response.json();
  // Get the paths we want to pre-render based on posts
  const allProjects: Project[] = data.allProjects;
  const paths = allProjects.map((item: Project) => ({
    params: { id: item.id },
  }));
  return { paths, fallback: "blocking" };
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
