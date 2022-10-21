// Author : Darosh Irani
// Student ID : 822955068
// Filename : index.js
// Dated : October 2nd, 2022



// Importing the needed modules
import express  from "express";
//****************************************************************************************** */
//********************************************** Assignment 3 needed modules added here */
import cookieParser from "cookie-parser";
import logger from 'morgan';
import session from "express-session"
//********************************************** Assignment 3 */
//********************************************************************************************* */
// ES Module fix for __dirname
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));


//****************************************************************************************** */
////*********************************************** Assignment 3 needed modules added here - Auth Step 1 - importing passprt, passport-local and flash modules */
//import passport from 'passport';
//import passportLocal from 'passport-local';
//import flash from 'connect-flash';
////*********************************************** Assignment 3 */
//****************************************************************************************** */

//****************************************************************************************** */
//************************************************* Assignment 3 - Mongoose modeule imopirted and DB setup with configuration module */
import mongoose from "mongoose";
import { MongoURI, Secret } from "../config/config.js";
//************************************************* Assignment 3 */
//****************************************************************************************** */


// Importing the 'router' object created in the index.route.server.js file
import indexRouter from './routes/index.route.server.js';


//****************************************************************************************** */
//************************************************** Assignment 3 - import contactRouter object for redirection */
import contactRouter from "./routes/contacts.route.server.js";
//************************************************** Assignment 3 */
//****************************************************************************************** */

// Instantiating the express module to be used later as an object
const index = express();


//****************************************************************************************** */
//*************************************************** Assignment 3 - completing db config */
mongoose.connect(MongoURI); // connection to mongo db opened using mongoose module
const db = mongoose.connection // 'db' constant stores the connection opened above within it (instantiating the mongoose connection to listen for events from mongoDB)
// We now use the 'db' onject to Listen for connection successes/errors
db.on('open', () => console.log("connected to MongoDB"));
db.on('error', () => console.log("Mongo connection error"));
//*************************************************** Assignment 3 */
//****************************************************************************************** */

// Setting up the view engine to be using EJS
index.set('views', path.join(__dirname, '/views') );
index.set('view engine', 'ejs'); 


//****************************************************************************************** */
//**************************************************** Assignment 3 - Usage of imported modules for cookie parsing - requests that we will be making with the form etc. */
index.use(logger('dev'));
index.use(express.json());
index.use(express.urlencoded({ extended: false}));
index.use(cookieParser());
//**************************************************** Assingment 3 */
//****************************************************************************************** */


// Code that tells the client browser that the public folder is static so that it can be rendered on the client end - Remember that the public being joined to the 
// url (our 'app/') only indicates that statically the public folder is to be used, you have to direct in 'href=' for stylesheets and content as '/'+ public + rest of folder hierarchy....
index.use(express.static(path.join(__dirname, '../public')));


// telling this file to use routing logic for index.ejs file from router folder which contains the file above
index.use('/', indexRouter);

//****************************************************************************************** */
//**************************************************** Assinment 3 - WIring up the contact router */
index.use('/', contactRouter)
//**************************************************** Assignment 3 */
//****************************************************************************************** */

export default index;
