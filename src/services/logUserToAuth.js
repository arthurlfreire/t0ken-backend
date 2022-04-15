import speakeasy from "speakeasy";
import QRCode from "qrcode";

export default class logUserToAuthService{
    constructor(){
        this._secret = speakeasy.generateSecret({
            name: "t0ken"
        });
    };

    getSecret(){
        return this._secret;
    };

    async execute(request, response, next){

        const secret = this.getSecret()

        try{
           const dataUrl = await QRCode.toDataURL(secret.otpauth_url);
           response.status(200).send({
               qrcode: dataUrl
           });
        }
        catch(error){
            throw new Error(error);
        };
    };

};