import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/_index.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nikola Mirilo</title>
        <meta
          name="description"
          content="Utilizing my skills in project management and programming to drive successful results by effective planning and executing projects, delivering on deadlines and goals, and developing customized solutions through programming."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/NM.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
