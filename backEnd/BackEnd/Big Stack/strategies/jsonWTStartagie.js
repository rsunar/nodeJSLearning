const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const Person = mongoose.model('myPerson');
const myKey = require('../Setup/myURL');

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = myKey.secret;

module.exports = passport =>{
    passport.use(new JwtStrategy(opts,(jwt_payload,done)=>{
        Person.findById(jwt_payload.id)
            .then(person => {
                if(person){
                    return done(null,person);
                }else{
                    return done(null,false);
                }
            })
            .catch(error => console.log(error))
    }))
}

