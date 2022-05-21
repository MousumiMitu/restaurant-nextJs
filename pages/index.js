import Head from "next/head";
import Image from "next/image";
import Featured from "../components/featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>pizza restaurant</title>
        <meta name="description" content="best pizza shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
