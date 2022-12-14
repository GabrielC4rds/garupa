import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Form from "../components/Form";
import Extract from "../components/Extract";
import Separator from "../components/Separator";
import { ExtractProvider } from "../AppContext";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Garupa</title>
        <meta name="description" content="Test made by Gabriel Cardoso" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ExtractProvider>
        <Header />
        <Form />
        <Separator />
        <Extract />
      </ExtractProvider>
    </div>
  );
}
