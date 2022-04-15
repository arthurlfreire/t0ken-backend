import logUserToAuthService from "../services/logUserToAuth.js";

export default class logUserToAuthController{
    async handle(request, response, next){
        const service = new logUserToAuthService();
        service.execute(request, response, next);
    };
};