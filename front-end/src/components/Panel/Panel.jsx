import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { List } from "../List/List";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { FilterButton } from "../FilterButton/FilterButton";
import styles from "./Panel.module.css";
import { Form } from "../Form/Form";

export function Panel() {
  const _url = "http://localhost:3000/words";

  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const params = selectedCategory ? `?category=${selectedCategory}` : "";
    console.log(params);
    fetch(`${_url}${params}`)
      .then((r) => r.json())
      .then((d) => {
        setData(d);
        setisLoading(false);
      })
      .catch((e) => console.log(e));
  }, [selectedCategory]);

  function handleFormSubmit(data) {
    fetch(_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.category === null || res.category === selectedCategory)
          setData((prev) => [...prev, res]);
      });
  }

  function handleDeleteItem(id) {
    fetch(`${_url}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setData((prev) => prev.filter((item) => item.id !== id));
        } else {
          throw new Error("Błąd usuwania");
        }
      })
      .catch((e) => {
        setError(e.message);
        setTimeout(() => {
          setError(null);
        }, 3000);
      });
  }

  function handleFilterClick(category) {
    setSelectedCategory(category);
  }
  if (isLoading) return <p>Loading</p>;
  return (
    <>
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      <section className={styles.section}>
        <Form onSubmit={handleFormSubmit} />
        <div className={styles.filters}>
          <FilterButton
            active={selectedCategory === null}
            onClick={() => handleFilterClick(null)}
          >
            Wszystkie
          </FilterButton>
          <FilterButton
            active={selectedCategory === "noun"}
            onClick={() => handleFilterClick("noun")}
          >
            Rzeczowniki
          </FilterButton>
          <FilterButton
            active={selectedCategory === "verb"}
            onClick={() => handleFilterClick("verb")}
          >
            Czasowniki
          </FilterButton>
        </div>
        <List data={data} onDelete={handleDeleteItem}></List>
      </section>
    </>
  );
}
