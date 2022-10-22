// Author : Darosh Irani
// Student ID : 822955068
// Filename : index.js
// Dated : October 22nd, 2022

// Util functio for collection of user display name after entering it on login page
export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }
    return '';
}


// Util function to chek if user is AUthenticated as logged in user or website
export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}