// Author : Darosh Irani
// Student ID : 822955068
// Filename : index.js
// Dated : October 2nd, 2022


// Importing the needed modules
import express  from "express";
// Instantiating the express module to be used later as an object
const index = express();


// ES Module fix for __dirname
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));


// Importing the 'router' object created in the index.route.server.js file
import indexRouter from './routes/index.route.server.js';

// Setting up the view engine to be using EJS
index.set('views', path.join(__dirname, '/views') );
index.set('view engine', 'ejs'); 


// Code that tells the client browser that the public folder is static so that it can be rendered on the client end - Remember that the public being joined to the 
// url (our 'app/') only indicates that statically the public folder is to be used, you have to direct in 'href=' for stylesheets and content as '/'+ public + rest of folder hierarchy....
index.use(express.static(path.join(__dirname, '../public')));


// telling this file to use routing logic for index.ejs file from router folder which contains the file above
index.use('/', indexRouter);


export default index;
