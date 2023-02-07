import { Card, Hero } from "@/components";
import Head from "next/head";
import React from "react";

const Home: React.FC = () => {
  return (
    <main className="home">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero
        title="Empowering IT projects to success"
        subtitle="Utilizing my skills in project management and programming to drive successful results by effective planning and executing projects, delivering on deadlines and goals, and developing customized solutions through programming."
        image="/images/office.png"
      />
      <div className="cards-container">
        <Card
          title="Portfolio"
          subtitle="Lorem Ipsum"
          image="https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg?fit=2309%2C1154&strip=all"
        />
        <Card
          title="Portfolio"
          subtitle="Lorem Ipsum"
          image="https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg?fit=2309%2C1154&strip=all"
        />
        <Card
          title="Portfolio"
          subtitle="Lorem Ipsum"
          image="https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg?fit=2309%2C1154&strip=all"
        />
        <Card
          title="Portfolio"
          subtitle="Lorem Ipsum"
          image="https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg?fit=2309%2C1154&strip=all"
        />
        <Card
          title="Portfolio"
          subtitle="Lorem Ipsum"
          image="https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg?fit=2309%2C1154&strip=all"
        />
        <Card
          title="Portfolio"
          subtitle="Lorem Ipsum"
          image="https://venturebeat.com/wp-content/uploads/2021/05/GettyImages-1291886933-e1624308433688.jpg?fit=2309%2C1154&strip=all"
        />
      </div>
    </main>
  );
};
export default Home;
