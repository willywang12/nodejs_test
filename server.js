'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
	res.write('Hello World\n');
	res.write('Express with Docker');
	res.end();
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
