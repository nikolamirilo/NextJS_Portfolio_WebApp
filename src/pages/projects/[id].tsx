import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { Suspense } from "react";
import { Project } from "@/types/api_responses";
import Link from "next/link";
import { Loader } from "@/components";

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params.id;
  const response = await fetch(`${process.env.WEB_APP_URL}/api/projects/${id}`);
  const data = await response.json();
  return {
    props: {
      project: data.singleProject ? data.singleProject : null,
    },
  };
}

interface SingleProjectProps {
  project: Project;
}

const SingleProject: React.FC<SingleProjectProps> = ({ project }) => {
  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>
      <main>
        <Suspense fallback={<Loader />}>
          <h1>Project: {project.title}</h1>
          <Link href={project.link}>{project.title}</Link>
          <Image src={project.image} alt={project.title} width={300} height={150} />
        </Suspense>
      </main>
    </>
  );
};
export default SingleProject;
