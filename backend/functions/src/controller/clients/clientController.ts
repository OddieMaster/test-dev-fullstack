import { clientBusiness } from "../../business/exportBusiness";
import * as Types from "../../Types";

class ClientController {
    getPatientById = (idPatient: string) => {
        return clientBusiness.getPatientById(idPatient);
    };
    getPatients = () => {
        return clientBusiness.getPatients();
    };
    createPatient = (patient: Types.Patient) => {
        return clientBusiness.createPatient(patient);
    };
    updatePatients = (idPatient: string, patient: Types.Patient) => {
        return clientBusiness.updatePatients(idPatient, patient);
    };
    deletePatients = (idPatient: string) => {
        return clientBusiness.deletePatients(idPatient);
    };
}

export const clientController = new ClientController();
