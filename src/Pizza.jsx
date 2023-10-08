export function Pizza({ singleObj }) {
	if (singleObj.soldOut) return null;
	return (
		<li className='pizza'>
			<div>
				<h3>{singleObj.name}</h3>
				<p>{singleObj.ingredients}</p>
				<img src={singleObj.photoName} alt={singleObj.name} />
				<span>{singleObj.price}</span>
			</div>
		</li>
	);
}
