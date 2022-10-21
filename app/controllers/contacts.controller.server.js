import contacts from "../models/contacts.js";




export function DisplayContactList(req,res,next){                                                 // We check if we have a list of things or an error - the function .find asks if 
    contacts.find(function(err, contactCollection){                                            // the function has an error what to do and if it is successfull what to do
        if (err){                                                                               // we define what to do if there is an error - we do  error checking  
                                                                                                // because we are now making a db connection with a controller
            console.error(err);
            res.end(err)
        }
        res.render('index', {title:'Contacts', page:'contacts/contactCollection', contacts:contactCollection , displayName: UserDisplayName(req)} ); // if there is no error render the index page using the same header and footer as index,
                                                                                                // but, page we render is under content/movies/list - title is given as will be filled in
                                                                                                // the index.ejs page and the page it will be directed to is movies/list (follows 
                                                                                                // same pattern as index.controller.server.js) - only difference is that one more variable
                                                                                                // will be rendered which is the movies variable : as the movies collection list - this is 
                                                                                                // used in the /content/movies/list page to generate the rows <% - .....%>
        })
    }