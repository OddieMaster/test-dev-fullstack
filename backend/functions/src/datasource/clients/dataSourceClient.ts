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

    getFilteredPatients = async (
        filter: Types.Filter
    ): Promise<Types.MessageTreatment> => {
        let patientRef: admin.firestore.Query =
            firestore.collection("patients");
        if (filter && filter.bdate) {
            patientRef = patientRef.where("bdate", "==", filter.bdate);
        }
        if (filter && filter.name) {
            patientRef = patientRef
                .where("name", ">=", filter.name)
                .where("name", "<=", filter.name + "\uf8ff");
        }
        if (filter && filter.email) {
            patientRef = patientRef.where("email", "==", filter.email);
        }
        if (filter && filter.rg) {
            patientRef = patientRef.where("rg", "==", filter.rg);
        }

        const result = await patientRef
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
        return result;
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
            return messageTreatmentBusiness.infoMsg(
                `No id was found: ${idPatient}`
            );
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
