const hour = new Date().getHours();
const openOrder = 20;
const closedOrder = 22;
const isOpen = hour >= openOrder && hour <= closedOrder;

export function Footer() {
	return (
		<footer className='footer'>{isOpen ? <Order /> : <p>Closed</p>}</footer>
	);
}

function Order() {
	return (
		<div className='order'>
			<p>{new Date().toLocaleDateString()} We are open today!</p>
			<button className='btn'>Order</button>
		</div>
	);
}
