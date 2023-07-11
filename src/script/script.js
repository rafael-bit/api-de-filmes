async function getContent() {
	try {
		const response = await fetch('http://localhost:8080/');
		const data = await response.json()
		show(data)
	} catch (error) {
		console.log(error)
	}
}

getContent()

function show(filmes) {
	let titles = '';
	let out = '';

	for (let filme of filmes) {
		titles += `
			<h1>${filme.nome}</h1>
		`;

		out += `
			<ul>
				<li><img src="${filme.foto}" /></li>
			</ul>
		`;
	}
	document.querySelector('.list').innerHTML = titles + out;
}