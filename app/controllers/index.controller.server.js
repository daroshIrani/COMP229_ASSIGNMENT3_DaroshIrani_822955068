// Author : Darosh Irani
// Student ID : 822955068
// Filename : index.controller.server.js
// Dated : October 22nd, 2022

// Exporting functions that the router will use to render content into the template. Content and the template both are from View folder

import { UserDisplayName } from '../Utils/utilsindex.js';

// Here we implement a middleware function to handle the responses

// Only Change for Assignment 3 is the addtition of displayName variable that allows a non signed in user to access the pages because the header was changed to allow access via 
// displayName being present or not 
export function displayhomePage(req,res,next){
    res.render('index', {title:"Home", page:'home', displayName: UserDisplayName(req)  });
}

export function displayaboutPage(req,res,next){
    res.render('index', {title:"About", page:'about', displayName: UserDisplayName(req)});
}

export function displayprojectsPage(req,res,next){
    res.render('index', {title:"Projects", page:'projects', displayName: UserDisplayName(req)});
}

export function displayservicesPage(req,res,next){
    res.render('index', {title:"Services", page:'services', displayName: UserDisplayName(req)});
}

 // rendereing the second template other than index - contact me template stored under views --- Assignment 3 addition - contact Me uses the code from index routing file which acceses the 
 // method of contact-add after importing that route from the contacts.routes file
 export function displaycontactPage(req,res,next){
     res.render('index', {title:"Contact Me", page:'contact-add', contact:{}});
 }

export function displayresumeMe(req,res,next){
    res.render('contactme', {title:"Darosh Irani Resume", page : "resumeMe", displayName: UserDisplayName(req)})
}

