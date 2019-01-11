const jwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const keys = require("./keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

const myJWTstrategy = passport => {
  passport.use(
    new jwtStrategy(opts, (jwt_payload, done) => {
      // console.log(jwt_payload);
      userData = {
        id: jwt_payload.id,
        email: jwt_payload.email
      };
      return done(null, userData);
    })
  );
};

module.exports = myJWTstrategy;
