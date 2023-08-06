import { Loader } from "@/components";
import { SingleProjectProps } from "@/typescript/interfaces/pages";
import data from "../../data.json";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Project } from "@/typescript/types/types";

const SingleProject: React.FC<SingleProjectProps> = () => {
  const [loading, setLoading] = useState(true);
  const project: any = data?.projects.filter((project) => project.id === "1");
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
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
          <div className="image">
            <Image
              src={project.image}
              alt={project.title ? project.title : "Project Title"}
              width={400}
              height={200}
            />
          </div>
          <div className="content">
            <h1>Project: {project.title ? project.title : "Project Title"}</h1>
            <p>
              {project.description
                ? project.description
                : "Project Description"}
            </p>
            <Link href={project.link ? project.link : ""}>
              {project.title ? project.title : "Project Title"}
            </Link>
          </div>
        </main>
      )}
    </>
  );
};
export default SingleProject;
