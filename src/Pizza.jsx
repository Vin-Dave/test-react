export function Pizza({ singleObj }) {
	console.log(singleObj.soldOut);
	return (
		<li className={`pizza ${singleObj.soldOut ? "sold-out" : ""}`}>
			<div>
				<h3>{singleObj.name}</h3>
				<p>{singleObj.ingredients}</p>
				<img src={singleObj.photoName} alt={singleObj.name} />
				<span>{singleObj.soldOut ? "SOLD OUT" : singleObj.price}</span>
			</div>
		</li>
	);
}
