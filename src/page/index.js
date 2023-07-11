const express = require('express');
const cors = require('cors')
// const axios = require('axios')
const server = express();
const filmes = require('../data/filmes.json')

server.use(cors())

server.get('/', async (req, res) => {
	//usar o axios somennte para o back-end
	
	//const { data } = await axios('https://jsonplaceholder.typicode.com/users')
	//return res.json(data)

	return res.json(filmes)
});

server.listen(4444, () => {
	console.log('Servindo está funcionando')
});