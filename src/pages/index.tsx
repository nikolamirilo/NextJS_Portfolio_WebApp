import { Hero } from "@/sections";
import { HomeProps } from "@/typescript/interfaces/pages";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { Suspense } from "react";
const Portfolio = dynamic(() => import("@/sections/Portfolio"), { suspense: true });
const Timeline = dynamic(() => import("@/sections/Timeline"), { suspense: true });
const Services = dynamic(() => import("@/sections/Services"), { suspense: true });

export async function getStaticProps() {
  const services_response = await fetch(`${process.env.WEB_APP_URL}/api/services`);
  const services_data = await services_response.json();
  const projects_response = await fetch(`${process.env.WEB_APP_URL}/api/projects`);
  const projects_data = await projects_response.json();
  return {
    props: {
      projects: projects_data.allProjects ? projects_data.allProjects : [],
      services: services_data.allServices ? services_data.allServices : [],
    },
  };
}

const Home: React.FC<HomeProps> = ({ projects, services }) => {
  console.log(services);
  return (
    <main className="home">
      <Head>
        <title>Nikola Mirilo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/NM.png" />
      </Head>
      <Hero
        title="Empowering IT projects to success"
        subtitle="Utilizing my skills in project management and programming to drive successful results by effective planning and executing projects, delivering on deadlines and goals, and developing customized solutions through programming."
        image="/images/office.webp"
      />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Portfolio data={projects} />
      </Suspense>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Services data={services} />
      </Suspense>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Timeline />
      </Suspense>
    </main>
  );
};
export default Home;
