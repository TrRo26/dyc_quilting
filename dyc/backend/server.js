const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const conCred = require('./credentials.js')

// ==============================================================================
// CONFIG
// ==============================================================================
app.use(cors())
app.use(bodyParser.json())
const connection = mysql.createConnection(conCred.credentials())

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

app.get('/comments/:quiltId', function (req, res) {
	connection.query('SELECT * FROM comment WHERE quilt_id = ' + req.params.quiltId, function (error, jsonResponse, fields) {
		if (error) throw error
		res.send(jsonResponse)
		// console.log("AUTHOR: " + jsonResponse[0].author)
	})
})

app.post('/comment/post', cors(), function (req, res) {
	var data = req.body
	connection.query('INSERT INTO comment SET ?', {
			comment_text: data.commentText,
			author: data.author,
			location: data.location,
			email: data.email,
			quilt_id: data.quiltId
		}, function (error, results) {
			if (error) throw error
			console.log(results)
		}
	)
	console.log("NEW QUILT INSERT COMPLETE:")
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
