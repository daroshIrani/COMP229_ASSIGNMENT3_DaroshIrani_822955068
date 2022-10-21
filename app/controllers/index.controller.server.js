// Author : Darosh Irani
// Student ID : 822955068
// Filename : index.controller.server.js
// Dated : October 2nd, 2022

// Exporting functions that the router will use to render content into the template. Content and the template both are from View folder

// Here we implement a middleware function to handle the responses
export function displayhomePage(req,res,next){
    res.render('index', {title:"Home", page:'home'});
}

export function displayaboutPage(req,res,next){
    res.render('index', {title:"About", page:'about'});
}

export function displayprojectsPage(req,res,next){
    res.render('index', {title:"Projects", page:'projects'});
}

export function displayservicesPage(req,res,next){
    res.render('index', {title:"Services", page:'services'});
}

// rendereing the second template other than index - contact me template stored under views
export function displaycontactPage(req,res,next){
    res.render('contactme', {title:"Contact Me", page:'contact'});
}

export function displayresumeMe(req,res,next){
    res.render('contactme', {title:"Darosh Irani Resume", page : "resumeMe"})
}

export function displaycontactInfo(req,res,next){
    res.render('contactme', {title:"Contact Form info", page : "contactCollection"})
}