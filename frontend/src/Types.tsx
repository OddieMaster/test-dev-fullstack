import {
  Control,
  DeepMap,
  FieldError,
  FieldValues,
} from "react-hook-form/dist/types";

interface CardsProps {
  title: string;
  description: string;
  img: string;
  link: string;
  className: string;
}

interface ExamFormProps {
  doctor: string;
  handleChange: React.ChangeEvent<HTMLInputElement>;
  exam: string;
  handleChangeExam: React.ChangeEvent<HTMLInputElement>;
  errors: DeepMap<FieldValues, FieldError>;
  register: any;
}

interface handleErrorsHookForm {
  errors: DeepMap<FieldValues, FieldError>;
  register: any;
}

interface SubmitForm {
  value: number | null;
  name: string;
  id: string | number;
  bdate: string;
  cellphone: string;
  city: string;
  cpf: string;
  email: string;
  requestedBy: string;
  doctor: string;
  agreement: string;
  residentialArea: string;
  residentialNumber: string;
  addressDetails: string;
  exam: string;
  rg: string;
  stateq: string;
  street: string;
  nextAppointment: string;
}

interface PatientsCardsProps {
  name: string;
  nextAppointment: string;
  exam: string;
  id: string;
  handleClickOpen: (value: string) => void;
}

interface PatientsDialogProps {
  open: boolean;
  handleClose: () => void;
  ReadOnly: boolean;
  textFields: {
    id: string;
    label: string;
    value: string;
    type: string;
    shrink: boolean;
  }[];
  handleChangeReadOnly: (value: boolean) => void;
  handleOpenDelete: () => void;
  Delete: boolean;
  handleCloseDelete: () => void;
  confirmDelete: () => void;
  handleSubmit: any;
  onSubmit: (formData: SubmitForm) => void;
  register: any;
  errors: DeepMap<FieldValues, FieldError>;
  Control: number;
  control: Control<FieldValues>;
  Doctor: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  Exam: string;
  handleChangeExam: (event: React.ChangeEvent<HTMLInputElement>) => void;
  data: [SubmitForm];
}
interface PatientsFilterFormProps {
  setInfoArrived: (value: React.SetStateAction<boolean>) => void;
  handleFilterForm: (value: number) => void;
}

export type {
  CardsProps,
  ExamFormProps,
  SubmitForm,
  handleErrorsHookForm,
  PatientsCardsProps,
  PatientsDialogProps,
  PatientsFilterFormProps,
};
