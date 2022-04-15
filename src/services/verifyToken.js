import logUserToAuthService from "./logUserToAuth.js";
import  speakeasy  from "speakeasy";

export default class verifyTokenService{
    async execute(request, response, next){
        const { token } = request.body;
        const secret = new logUserToAuthService().getSecret().base32;

        const verified = speakeasy.totp.verify({ 
            secret: secret,
            encoding: 'base32',
            token: token 
        });

        if(isAttendanceTime){
            response.send({
                verified: verified
            });
        }else if(!attendanceTime){
            response.status(400).send({
                error: "It is not attendance time yet."
            });
        }
    };
};