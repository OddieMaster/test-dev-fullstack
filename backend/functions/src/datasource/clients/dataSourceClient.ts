// eslint-disable-next-line max-len
import { messageTreatmentBusiness } from "../../business/utils/messageTreatmentBusiness";
import * as admin from "firebase-admin";
import * as Types from "../../Types";

const firestore = admin.firestore();
class ClientDatasource {
    getPatientById = async (
        idPatient: string
    ): Promise<Types.MessageTreatment> => {
        const patientRef = firestore.collection("patients").doc(idPatient);
        return await patientRef
            .get()
            .then((result) => {
                if (result.data()) {
                    return messageTreatmentBusiness.sucessMsg(
                        `Id: ${idPatient}`,
                        result.data()
                    );
                }
                return messageTreatmentBusiness.infoMsg(
                    `There is no patient with id: ${idPatient} `
                );
            })
            .catch((error) => {
                return messageTreatmentBusiness.erroMsg(
                    "An erro has ocurried",
                    error
                );
            });
    };
    getPatients = async (): Promise<Types.MessageTreatment> => {
        const patientRef = firestore.collection("patients");
        return await patientRef
            .get()
            .then((result) => {
                const items: admin.firestore.DocumentData[] = [];
                if (result) {
                    result.forEach((doc) => {
                        return items.push({
                            id: doc.id,
                            ...doc.data(),
                        }) as unknown as unknown;
                    });
                    if (items.length > 0) {
                        return messageTreatmentBusiness.sucessMsg(
                            `Found ${items.length} patients`,
                            items
                        );
                    }
                }
                return messageTreatmentBusiness.infoMsg(
                    "No patient was found "
                );
            })
            .catch((error) => {
                return messageTreatmentBusiness.erroMsg(
                    "An erro has ocurried",
                    error
                );
            });
    };
    createPatient = async (
        patient: Types.Patient
    ): Promise<Types.MessageTreatment> => {
        if (!patient) {
            return messageTreatmentBusiness.infoMsg("No body was found");
        }
        const res = await firestore.collection("patients").doc().set(patient);
        return messageTreatmentBusiness.sucessMsg("Cliente adicionado", res);
    };
    updatePatients = async (idPatient: string, patient: Types.Patient) => {
        if (!idPatient) {
            return messageTreatmentBusiness.infoMsg("No id was found");
        }
        return await firestore
            .collection("patients")
            .doc(idPatient)
            .set(patient)
            .then((result) => {
                return messageTreatmentBusiness.sucessMsg(
                    "Updated sucefully",
                    result
                );
            })
            .catch((error) => {
                return messageTreatmentBusiness.erroMsg(
                    "An erro has ocurried",
                    error
                );
            });
    };
    deletePatients = async (idPatient: string) => {
        if (!idPatient) {
            return messageTreatmentBusiness.infoMsg("No id was found");
        }
        return await firestore
            .collection("patients")
            .doc(idPatient)
            .delete()
            .then((result) => {
                return messageTreatmentBusiness.sucessMsg(
                    "Deleted sucefully",
                    result
                );
            })
            .catch((error) => {
                return messageTreatmentBusiness.erroMsg(
                    "An erro has ocurried",
                    error
                );
            });
    };
}

export const clientDatasource = new ClientDatasource();
