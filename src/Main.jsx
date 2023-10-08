import { pizzaData } from "./_DATA";
import { Pizza } from "./Pizza";
export function Main() {
	const pizza = pizzaData.length;
	return (
		<main className='menu'>
			<h2>Menu</h2>
			{pizza && (
				<ul className='pizzas'>
					{pizzaData.map((pizza) => (
						<Pizza singleObj={pizza} key={pizza.name} />
					))}
				</ul>
			)}
			{/* <Pizza
          name="Pizza Prosciutto"
          ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
          price={18}
          image="pizzas/prosciutto.jpg"
        />
        <Pizza
          name="Pizza Prosciutto"
          ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
          price={18}
          image="pizzas/prosciutto.jpg"
        />
        <Pizza
          name="Pizza Prosciutto"
          ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
          price={18}
          image="pizzas/prosciutto.jpg"
        />
        <Pizza
          name="Pizza Prosciutto"
          ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
          price={18}
          image="pizzas/prosciutto.jpg"
        /> */}
		</main>
	);
}
