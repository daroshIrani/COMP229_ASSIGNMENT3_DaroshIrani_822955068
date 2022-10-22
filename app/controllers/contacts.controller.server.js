import contactModel from "../models/contacts.js";

import { UserDisplayName } from '../utils/index.js';

export function DisplayContactList(req,res,next){                                                 // We check if we have a list of things or an error - the function .find asks if 
    contactModel.find(function(err, contactCollection){                                            // the function has an error what to do and if it is successfull what to do
        if (err){                                                                               // we define what to do if there is an error - we do  error checking  
                                                                                                // because we are now making a db connection with a controller
            console.error(err);
            res.end(err)
        }
        res.render('index', {title:'Contacts', page:'contacts/contactCollection', contact:contactCollection, displayName: UserDisplayName(req)  } );  
        })
    }

export function DisplayContactAddPage (req,res, next){
    res.render('index', {title: 'Add Contact', page : '/contact', contact:{} , displayName: UserDisplayName(req) }); 
}

export function ProcessContactAddPage(req, res, next){
    
    let newContact = contactModel({
        contactFirstName: req.body.fName,
        contactLastName: req.body.lName,
        contactNumber: req.body.contactNumber,
        contactEmailAddress: req.body.contactEmail,
    });

    contactModel.create(newContact, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact-list')
    } )
}

export function DisplayContactsUpdatePage(req, res, next){
    let id = req.params.id;

    contactModel.findById(id, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Update Contact', page: '/contact', contact: contact, displayName: UserDisplayName(req)});  
    });    
}

export function ProcessContactUpdatePage(req, res, next){

    let id = req.params.id;   
    let newContact = contactModel({
        _id: req.body.id,
        contactFirstName: req.body.fName,
        contactLastName: req.body.lName,
        contactNumber: req.body.contactNumber,
        contactEmailAddress: req.body.contactEmail,
    });

    contactModel.updateOne({_id: id }, newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact-list')
    } )
}

export function ProcessContactDelete(req, res, next){
    let id = req.params.id;

    contactModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact-list');
    })
}