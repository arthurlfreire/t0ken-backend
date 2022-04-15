import verifyTokenService from "../services/verifyToken.js";

export default class verifyTokenController{
    async handle(request, response, next){
        const service = new verifyTokenService();
        service.execute(request, response, next);
    };
};