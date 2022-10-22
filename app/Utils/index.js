// Author : Darosh Irani
// Student ID : 822955068
// Filename : index.js
// Dated : October 22nd, 2022

export function UserDisplayName(req){
    if(req.user){
        return req.user.displayName;
    }
    return '';
}

export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}