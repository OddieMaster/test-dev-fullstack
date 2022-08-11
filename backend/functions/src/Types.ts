interface Patient {
    name: string;
    email: string;
    id: string | undefined;
    bdate: string;
    cellphone: string;
    city: string;
    cpf: string;
    requestedBy: string;
    doctor: string;
    agreement: string;
    residentialArea: string;
    residentialNumber: string;
    addressDetails: string;
    exam: string;
    rg: string;
    state: string;
    street: string;
    nextAppointment: string;
}
interface Filter {
    email: string | null;
    cellphone: string | null;
    rg: string | null;
    bdate: string | null;
}
interface MessageTreatment {
    message: string;
    status: number;
    /* sucess: false; */
    response: any;
}

export type { Patient, MessageTreatment, Filter };
