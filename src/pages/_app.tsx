import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Head from "next/head";
import "../styles/index.scss";
import { Loader } from "@/components";

const App = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  });
  return (
    <>
      <Head>
        <title>Nikola Mirilo</title>
        <meta
          name="description"
          content="Utilizing my skills in project management and programming to drive successful results by effective planning and executing projects, delivering on deadlines and goals, and developing customized solutions through programming."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/NM.jpg" />
      </Head>
      {loading ? <Loader /> : <Component {...pageProps} />}
    </>
  );
};
export default App;
