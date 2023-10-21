import React from "react";
import "./footer.css";
import Copyright from "../copyright/Copyright";

const elements = ["Home", "Page1"];
const item = [];
const elements2 = ["Contacts", "legal"];

for (const [index, value] of elements.entries()) {
  item.push(<li>{value}</li>);
}

function Footer(props) {
  let isLogged = true;
  let button;
  if (isLogged) {
    button = <button>Logout</button>;
  } else {
    button = <button>Login</button>;
  }

  return (
    <div>
      <footer>
        <ul>
          {item}
          <li>#DOM 1</li>
          <li>DOM 2</li>
          <li>
            Contact: {props.contcatEmail}, {props.dataCompany.city}
          </li>

          {elements2.map((value, index) => {
            return <li>{value}</li>;
          })}
        </ul>
        <Copyright year="2023" />
        {button};{isLogged && <div>Sprawdź pocztę</div>}
        {isLogged ? (
          <div>Zobacz elementy wyżej</div>
        ) : (
          <div>zaloguj się by zonaczyć elementy wyżej</div>
        )}
      </footer>
    </div>
  );
}

export default Footer;
