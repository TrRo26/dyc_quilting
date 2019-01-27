const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())

// ==============================================================================
// CONNECTION CONFIG
// ==============================================================================
const connection = mysql.createConnection({
	host     : 'mysql.darleyclevenger.com',
  	user     : 'dyc_admin',
  	password : '',
  	database : 'dyc_quilts'
})

// ==============================================================================
// ROUTES
// ==============================================================================
app.get('/', function (req, res) {
	res.send('SUCCESSFUL GET TO /')
	// res.sendFile('index.html')
})

app.get('/quilts', function (req, res) {
	// connection.connect()
	connection.query('SELECT * FROM quilt', function (error, jsonResponse, fields) {
	 	if (error) throw error
		res.send(jsonResponse)
	})
	// connection.end()
})

app.get('/comments', function (req, res) {
	connection.query('SELECT * FROM comment', function (error, jsonResponse, fields) {
		if (error) throw error
		res.send(jsonResponse)
		console.log("AUTHOR: " + jsonResponse[0].author)
	})
})

app.post('/quilt/post', cors(), function (req, res) {
	var data = req.body
	connection.query('INSERT INTO quilt SET ?', {
			title: data.titleValue,
			completed_date: data.completedDateValue,
			dimension: data.dimensionValue,
			about: data.aboutValue
		}, function (error, results) {
			if (error) throw error
			console.log(results)
		}
	)
	console.log("NEW QUILT INSERT COMPLETE:")
})

// ==============================================================================
// START SERVER
// ==============================================================================
app.listen(3000, () => {
	console.log('Go to http://localhost:3000/')
})
