// Author : Darosh Irani
// Student ID : 822955068
// Filename : contacts.controller.server.js
// Dated : October 22nd, 2022

// Importing contactModel to add to and remobve from later
import contactModel from "../models/contacts.js";

// Importing UserDisplayName to help authenticate
import { UserDisplayName } from '../utils/index.js';

// Display Contact List function
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

// DIsplay contact add page function
export function DisplayContactAddPage (req,res, next){
    res.render('index', {title: 'Add Contact', page : '/contact', contact:{} , displayName: UserDisplayName(req) }); 
}

// Process contact add Page fucntion
export function ProcessContactAddPage(req, res, next){
    
    // Population of schema before creation of the collection for db
    let newContact = contactModel({
        contactFirstName: req.body.fName,
        contactLastName: req.body.lName,
        contactNumber: req.body.contactNumber,
        contactEmailAddress: req.body.contactEmail,
    });

    // creation of new collection from defined schema above
    contactModel.create(newContact, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact-list')
    } )
}

// Display contact page function
export function DisplayContactsUpdatePage(req, res, next){
    // request parameters provide the id of contact being updated
    let id = req.params.id;

    // contact model seach by id and then displayed to edit with render below - render uses contact object created after find by id function is run on the model in DB
    contactModel.findById(id, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Update Contact', page: '/contact', contact: contact, displayName: UserDisplayName(req)});  
    });    
}

export function ProcessContactUpdatePage(req, res, next){
    // Idis first defined as request's id
    let id = req.params.id;   
    // new contact object based on contact model imported is created and id is updated to new one while original one above is removed and replaced
    let newContact = contactModel({
        _id: req.body.id,
        contactFirstName: req.body.fName,
        contactLastName: req.body.lName,
        contactNumber: req.body.contactNumber,
        contactEmailAddress: req.body.contactEmail,
    });

    // id is updated to new one while original one above is removed and replaced and also the contact model for specific original id as changed is updated with it 
    contactModel.updateOne({_id: id }, newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact-list')
    } )
}

// process delete function
export function ProcessContactDelete(req, res, next){
    // instantiating id to help identify record with id and remove it below
    let id = req.params.id;

    // contact model created above is accesed via an id that identifies the record to be removed
    contactModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact-list');
    })
}