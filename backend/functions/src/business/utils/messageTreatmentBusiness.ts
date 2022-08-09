import * as Types from "../../../src/Types";

class MessageTreatmentBusiness {
    sucessMsg = (message: string, response?: any) => {
        const mensage: Types.MessageTreatment = {
            message: `Sucess: ${message}`,
            status: 200,
            response: response,
            /* sucess: true, */
        };
        return mensage;
    };
    infoMsg = (message: string, info?: any) => {
        const mensage: Types.MessageTreatment = {
            message: `Info: ${message}`,
            status: 250,
            response: info,
            /* sucess: true, */
        };
        return mensage;
    };
    erroMsg = (message: string, error?: any) => {
        const mensage: Types.MessageTreatment = {
            message: `Error: ${message}`,
            status: 400,
            response: error,
            /* sucess: true, */
        };
        return mensage;
    };
}

export const messageTreatmentBusiness = new MessageTreatmentBusiness();
