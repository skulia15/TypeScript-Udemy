"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
var router = express_1.Router();
exports.router = router;
router.get('/login', function (req, res) {
    res.send("\n\t<form method=\"POST\">\n\t\t<div>\n\t\t\t<label for=\"email\">Email</label>\n\t\t\t<input type=\"text\" name=\"email\">\n\t\t</div>\n\t\t<div>\n\t\t\t<label for=\"password\">Password</label>\n\t\t\t<input type=\"password\" name=\"password\">\n\t\t</div>\n\t\t<button>Submit</button>\n\t</form>\n\t");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email == 'a@b.is' && password == 'pass') {
        // mark as logged in
        req.session = { loggedIn: true };
        // redirect to root route
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n\t\t\t<div>\n\t\t\t\t<div>You are logged in</div>\n\t\t\t\t<a href=\"/logout\">Logout</a>\n\t\t\t</div>\n\t\t");
    }
    else {
        res.send("\n\t\t\t<div>\n\t\t\t\t<div>You are not logged in</div>\n\t\t\t\t<a href=\"/login\">Login</a>\n\t\t\t</div>\n\t\t");
    }
});
router.get('/logout', function (req, res) {
    req.session = null;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route, logged in user');
});
