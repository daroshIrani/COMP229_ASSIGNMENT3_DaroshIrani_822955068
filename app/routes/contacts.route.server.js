// Author : Darosh Irani
// Student ID : 822955068
// Filename : contacts.route.server.js
// Dated : October 22nd, 2022

import { Router } from "express";

// importing the functins to be used from controllers in routing
import { DisplayContactList, 
    DisplayContactAddPage, 
    ProcessContactAddPage, 
    ProcessContactUpdatePage, 
    DisplayContactsUpdatePage, 
    ProcessContactDelete } from "../controllers/contacts.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const contactRouter = Router();

// Display the contact list page - example usage cancel button
contactRouter.get('/contact-list', DisplayContactList);
// POST method added here so a logged out user could add info to the list from the contact me page andbe routed tot the display contact list page 
contactRouter.post('/contact-list', DisplayContactList);
// Display contact Add page  
contactRouter.get('/contact-add',  DisplayContactAddPage);
// Process Contact Add Page      
contactRouter.post('/contact-add',AuthGuard, ProcessContactAddPage);
// Process ocntact Update page
contactRouter.post('/contact-update/:id',AuthGuard,  ProcessContactUpdatePage);
// Dsiplay contact update page
contactRouter.get('/contact-update/:id', AuthGuard, DisplayContactsUpdatePage);
// Process contact delete page
contactRouter.get('/contact-delete/:id', AuthGuard,  ProcessContactDelete)

export default contactRouter;