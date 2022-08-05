import { DeepMap, FieldError, FieldValues } from "react-hook-form/dist/types";

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
  name: string;
  id: number;
  bdate: Date;
  cellphone: string;
  city: string;
  cpf: string;
  email: string;
  residentialArea: string;
  residentialNumber: string;
  rg: string;
  stateq: string;
  street: string;
}
export type { CardsProps, ExamFormProps, SubmitForm, handleErrorsHookForm };
