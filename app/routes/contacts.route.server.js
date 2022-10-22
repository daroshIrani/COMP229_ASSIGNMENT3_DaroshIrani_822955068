import { Router } from "express";

import { DisplayContactList, 
    DisplayContactAddPage, 
    ProcessContactAddPage, 
    ProcessContactUpdatePage, 
    DisplayContactsUpdatePage, 
    ProcessContactDelete } from "../controllers/contacts.controller.server.js";

const contactRouter = Router();


contactRouter.get('/contact-list', DisplayContactList);
contactRouter.post('/contact-list', DisplayContactList);  
contactRouter.get('/contact-add', DisplayContactAddPage);      
contactRouter.post('/contact-add', ProcessContactAddPage);
contactRouter.post('/contact-update/:id',  ProcessContactUpdatePage);
contactRouter.get('/contact-update/:id', DisplayContactsUpdatePage);
contactRouter.get('/contact-delete/:id',  ProcessContactDelete)

export default contactRouter;