// Author : Darosh Irani
// Student ID : 822955068
// Filename : index.controller.server.js
// Dated : October 2nd, 2022

// Exporting functions that the router will use to render content into the template. Content and the template both are from View folder

import { UserDisplayName } from '../utils/index.js';

// Here we implement a middleware function to handle the responses
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

 // rendereing the second template other than index - contact me template stored under views
 export function displaycontactPage(req,res,next){
     res.render('index', {title:"Contact Me", page:'contact-add', contact:{}});
 }

export function displayresumeMe(req,res,next){
    res.render('contactme', {title:"Darosh Irani Resume", page : "resumeMe", displayName: UserDisplayName(req)})
}

// export function displaycontactInfo(req,res,next){
//     res.render('contactme', {title:"Contact Form info", page : "contactCollection"})
// }