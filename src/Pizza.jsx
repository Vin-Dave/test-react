export function Pizza(props) {
  return (
    <li className="pizza">
      <div>
        <h3>{props.singleObj.name}</h3>
        <p>{props.singleObj.ingredients}</p>
        <img src={props.singleObj.photoName} alt={props.singleObj.name} />
        <span>{props.singleObj.price}</span>
      </div>
    </li>
  );
}
