import { Item } from "../Item/Item";
import styles from "./List.module.css";
export function List({ data, onDelete }) {
  return (
    <ul className={styles.list}>
      {data.map(({ id, word, translation }) => (
        <Item
          key={id}
          id={id}
          word={word}
          translation={translation}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
