import { Router } from "express";

import { DisplayContactList } from "../controllers/contacts.controller.server.js";

const contactRouter = Router();


contactRouter.get('/contact-list', DisplayContactList); 


contactRouter.get('/contact-add', AuthGuard, DisplayMoviesAddPage);      
contactRouter.post('/movie-add', AuthGuard, ProcessMoviesAddPage);
contactRouter.post('/movie-edit/:id', AuthGuard, ProcessMoviesEditPage);
contactRouter.get('/movie-edit/:id', AuthGuard, DisplayMoviesEditPage);
contactRouter.get('/movie-delete/:id', AuthGuard, ProcessMoviesDelete)

export default contactRouter;