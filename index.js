const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")
const cors = require("cors")
const env = process.env.NODE_ENV || "development"
const config = require("./server/config/config.json").token[env]
const route = require("./route")
const whitelistDomain = require("./server/config/config.json").whitelistDomain
const jwtConfig = require("./server/config/jwtConfig")
const errorHandler = require("./server/helper/errorHelper")
const i18n = require("i18n")
const fileUpload = require("express-fileupload")
const fs = require("fs")
const path = require("path")
const session = require("express-session")
const sequelize = require("./server/models/index").sequelize
const sessionStore = require("connect-session-sequelize")(session.Store)
const moment = require("moment")
const http = require('http')
const store = new sessionStore({
	db: sequelize,
	checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
	expiration: 1000 * 60 * 30,
})

// setup express app
const app = express()
app.use(express.static(path.join(__dirname, "/public/")))

// log request to the console
app.use(logger("dev"))

// parse incoming request data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(
	cors({
		credentials: true,
		origin: function (option, callback) {
			if (!option) return callback(null, true)

			if (whitelistDomain.indexOf(option) === -1) return callback(new Error("CORS Policy error, your domain doesn't have access"), false)

			return callback(null, true)
		},
	})
)
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
	next()
})

// use express fileupload
app.use(fileUpload())

// use express-session
var sessionConfig = {
	name: "api.sid",
	store: store,
	secret: config.secret,
	resave: false,
	saveUninitialized: false,
	cookie: {
		secure: false,
		maxAge: 1000 * 60 * 30,
	},
}
if (app.get("env") === "production") {
	app.set("trust proxy", 1) // trust first proxy
	sessionConfig.cookie.secure = true // serve secure cookies
}
app.use(session(sessionConfig))
store.sync()

i18n.configure({
	locales: ["en", "id"],
	directory: __dirname + "/server/locales",
	defaultLocale: "id",
})

app.use(i18n.init)
app.use(jwtConfig())
app.use(errorHandler)

// setup a default catch-all route that sends back a welcome message json format
route(app)

// define upload folder
if (!fs.existsSync("./public")) {
	fs.mkdirSync("./public")
}
if (!fs.existsSync("./public/upload")) {
	fs.mkdirSync("./public/upload")
	fs.mkdirSync("./public/upload/image")
	fs.mkdirSync("./public/upload/file")
}
if (!fs.existsSync("./public/upload/image")) {
	fs.mkdirSync("./public/upload/image")
	fs.mkdirSync("./public/upload/file")
}
if (!fs.existsSync("./public/upload/file")) {
	fs.mkdirSync("./public/upload/file")
}

// define app root
global.appRoot = path.resolve(__dirname)

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);