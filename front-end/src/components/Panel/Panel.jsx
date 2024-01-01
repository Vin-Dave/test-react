import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { List } from "../List/List";
import styles from "./Panel.module.css";

export function Panel() {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/words")
      .then((r) => r.json())
      .then((d) => {
        setData(d);
        setisLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  if (isLoading) return <p>Loading</p>;
  return (
    <>
      <Button>Załaduje dane</Button>
      <section className={styles.section}>
        <List data={data}></List>
      </section>
    </>
  );
}
