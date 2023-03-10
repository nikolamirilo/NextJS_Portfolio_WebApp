import { Loader } from "@/components";
import { SingleProjectProps } from "@/typescript/interfaces/pages";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";

//!SERVER-SIDE RENDERING
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id;
  const response = await fetch(`${process.env.WEB_APP_URL}/api/projects/${id}`);
  const data = await response.json();
  context.res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");
  return {
    props: {
      project: data.singleProject ? data.singleProject : null,
    },
  };
}

//!INCREMENTAL STATIC REGENERATION
// export const getStaticPaths = async () => {
//   const response = await fetch(`${process.env.WEB_APP_URL}/api/projects`);
//   const data = await response.json();
//   // Get the paths we want to pre-render based on posts
//   const allProjects: Project[] = data.allProjects;
//   const paths = allProjects.map((item: Project) => ({
//     params: { id: item.id },
//   }));
//   return { paths, fallback: "blocking" };
// };

// export const getStaticProps = async (context: any) => {
//   const id = context.params.id;
//   const response = await fetch(`${process.env.WEB_APP_URL}/api/projects/${id}`);
//   const data = await response.json();
//   return {
//     props: {
//       project: data.singleProject ? data.singleProject : null,
//     },
//     revalidate: 60,
//   };
// };

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
      {loading ? (
        <Loader />
      ) : (
        <main className="single-project">
          <Suspense fallback={<Loader />}>
            <div className="image">
              <Image src={project.image} alt={project.title} width={300} height={150} />
            </div>
            <div className="content">
              <h1>Project: {project.title}</h1>
              <p>{project.description ? project.description : null}</p>
              <Link href={project.link}>{project.title}</Link>
            </div>
          </Suspense>
        </main>
      )}
    </>
  );
};
export default SingleProject;
