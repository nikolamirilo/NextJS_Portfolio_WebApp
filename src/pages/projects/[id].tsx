import { Loader } from "@/components";
import { SingleProjectProps } from "@/typescript/interfaces/pages";
import { Project } from "@/typescript/types/types";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";

//!SERVER-SIDE RENDERING
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const id = context.params?.id;
//   const response = await fetch(`${process.env.WEB_APP_URL}/api/projects/${id}`);
//   const data = await response.json();
//   context.res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");
//   return {
//     props: {
//       project: data.singleProject ? data.singleProject : null,
//     },
//   };
// }

//!INCREMENTAL STATIC REGENERATION
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
    // revalidate: 60,
  };
};

const SingleProject: React.FC<SingleProjectProps> = ({ project }) => {
  const [loading, setLoading] = useState(true);
  const images = [
    "/images/projects/swapabee.webp",
    "/images/projects/webuyindubai.webp",
    "/images/projects/ariosoinvestment.webp",
    "/images/projects/reactifysolutions.webp",
  ];
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
              <Image
                src={
                  project.id === "1"
                    ? images[0]
                    : project.id === "2"
                    ? images[1]
                    : project.id === "3"
                    ? images[2]
                    : project.id === "4"
                    ? images[3]
                    : ""
                }
                alt={project.title}
                width={400}
                height={200}
              />
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
