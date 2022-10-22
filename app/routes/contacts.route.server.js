import { Router } from "express";

import { DisplayContactList, 
    DisplayContactAddPage, 
    ProcessContactAddPage, 
    ProcessContactUpdatePage, 
    DisplayContactsUpdatePage, 
    ProcessContactDelete } from "../controllers/contacts.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const contactRouter = Router();


contactRouter.get('/contact-list', DisplayContactList);
contactRouter.post('/contact-list', DisplayContactList);  
contactRouter.get('/contact-add',  DisplayContactAddPage);      
contactRouter.post('/contact-add',AuthGuard, ProcessContactAddPage);
contactRouter.post('/contact-update/:id',AuthGuard,  ProcessContactUpdatePage);
contactRouter.get('/contact-update/:id', AuthGuard, DisplayContactsUpdatePage);
contactRouter.get('/contact-delete/:id', AuthGuard,  ProcessContactDelete)

export default contactRouter;