// Author : Darosh Irani
// Student ID : 822955068
// Filename : index.route.server.js
// Dated : October 22nd, 2022

// Importing Router Object from express module
import {Router} from "express";


//****************************************************** Assignment 3 - added controller here to add to contact list */
import { DisplayContactAddPage, ProcessContactAddPage } from "../controllers/contacts.controller.server.js";
import { AuthGuard } from "../utils/index.js";
//******************************************************************************************* */

// Importing the functions from controller to run here
import { displayaboutPage, displayhomePage, displayservicesPage, displayprojectsPage, displayresumeMe, displaycontactPage } from "../controllers/index.controller.server.js";

// Instantiating the router onject as a variable to use
const indexRouter = Router();


// setting the functions to run from the controllers as the router is directed to specific URL's
indexRouter.get('/', displayhomePage);
indexRouter.get('/home', displayhomePage);
indexRouter.get('/services',  displayservicesPage);
indexRouter.get('/about',  displayaboutPage);

//**************************************************** Assignemtn 3 - changed code here  */
indexRouter.get('/contact', DisplayContactAddPage); // Redirects to contact add page using DisplayContactAddPage contrtoller
indexRouter.post('/contact-add', ProcessContactAddPage) // Process addition of contacts from Add contatc page
//************************************************************************************** */

indexRouter.get('/projects', displayprojectsPage);
indexRouter.get('/resumeMe', displayresumeMe);




// exporting the router to be used in index.js
export default indexRouter;
