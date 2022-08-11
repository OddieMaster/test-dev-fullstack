import { clientDatasource } from "../../datasource/exportDatasource";
import * as Types from "../../Types";

class ClientBusiness {
    getPatientById = (idPatient: string) => {
        return clientDatasource.getPatientById(idPatient);
    };
    getPatients = () => {
        return clientDatasource.getPatients();
    };
    createPatient = (patient: Types.Patient) => {
        return clientDatasource.createPatient(patient);
    };
    updatePatients = (idPatient: string, patient: Types.Patient) => {
        return clientDatasource.updatePatients(idPatient, patient);
    };
    deletePatients = (idPatient: string) => {
        return clientDatasource.deletePatients(idPatient);
    };
    getFilteredPatients = (filterParams: Types.Filter) => {
        return clientDatasource.getFilteredPatients(filterParams);
    };
}

export const clientBusiness = new ClientBusiness();
