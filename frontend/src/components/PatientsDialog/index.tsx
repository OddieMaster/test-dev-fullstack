import React from "react";

import {
  DialogContent,
  IconButton,
  DialogTitle,
  Dialog,
  Button,
  TextField,
  DialogContentText,
  FormControl,
  InputLabel,
  DialogActions,
  Select,
  MenuItem,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import useStyles from "./../../pages/Patients/styles";
import * as Types from "../../Types";
import { Controller } from "react-hook-form";

export default function PatientsDialog(props: Types.PatientsDialogProps) {
  const classes = useStyles();
  const {
    open,
    handleClose,
    ReadOnly,
    textFields,
    handleChangeReadOnly,
    handleOpenDelete,
    Delete,
    handleCloseDelete,
    confirmDelete,
    handleSubmit,
    onSubmit,
    register,
    errors,
    Control,
    control,
    Doctor,
    handleChange,
    Exam,
    handleChangeExam,
    data,
  } = props;

  return (
    <Dialog
      open={open}
      fullWidth
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle
        disableTypography
        className={classes.title}
        id="form-dialog-title"
      >
        <span>Patient Information</span>
        <IconButton
          className={classes.iconClose}
          aria-label="close"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {ReadOnly === false && (
        <>
          <DialogContent>
            <TextField
              id="patient"
              label="Patient"
              fullWidth
              variant="filled"
              value={data[Control].name}
              InputProps={{
                readOnly: true,
              }}
            />
            {textFields.map((row) => (
              <TextField
                key={row.id}
                id={row.id}
                label={row.label}
                margin="normal"
                variant="filled"
                value={1}
                InputProps={{
                  readOnly: true,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            ))}
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => handleChangeReadOnly(true)}
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteOutlinedIcon />}
              onClick={handleOpenDelete}
            >
              Delete
            </Button>
            <Dialog
              open={Delete}
              onClose={handleCloseDelete}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                {"Are you shure?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  This action will delete all information from this patient!
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleCloseDelete} color="primary">
                  Cancel
                </Button>
                <Button color="primary" autoFocus onClick={confirmDelete}>
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
          </DialogActions>
        </>
      )}
      {ReadOnly === true && (
        <>
          <DialogContent>
            <form
              id="formData"
              className={classes.form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField
                label="Name"
                name="patient"
                margin="normal"
                defaultValue={data[Control].name}
                type="text"
                variant="outlined"
                inputRef={register({
                  required: true,
                  minLength: 5,
                  maxLength: 40,
                })}
              />
              {errors.patient && errors.patient.type === "required" && (
                <>
                  <p className={classes.error}>Invalid Name</p>
                </>
              )}
              {errors.patient && errors.patient.type === "minLength" && (
                <>
                  <p className={classes.error}>
                    This field required min lenght of 5
                  </p>
                </>
              )}
              {errors.patient && errors.patient.type === "maxLength" && (
                <>
                  <p className={classes.error}>Max length exceeded</p>
                </>
              )}

              <TextField
                name="cellphone"
                label="Cellphone"
                margin="normal"
                type="number"
                defaultValue={data[Control].cellphone}
                variant="outlined"
                inputRef={register({
                  required: true,
                  minLength: 8,
                  maxLength: 10,
                })}
              />
              {errors.cellphone && errors.cellphone.type === "required" && (
                <>
                  <p className={classes.error}>Invalid Cellphone</p>
                </>
              )}
              {errors.cellphone && errors.cellphone.type === "minLength" && (
                <>
                  <p className={classes.error}>
                    This field required min lenght of 8
                  </p>
                </>
              )}
              {errors.cellphone && errors.cellphone.type === "maxLength" && (
                <>
                  <p className={classes.error}>Max length exceeded</p>
                </>
              )}

              <TextField
                name="cpf"
                label="CPF, numbers only"
                margin="normal"
                defaultValue={data[Control].cpf}
                type="text"
                variant="outlined"
                inputRef={register({
                  required: true,
                  minLength: 10,
                })}
              />
              {errors.cpf && errors.cpf.type === "required" && (
                <>
                  <p className={classes.error}>Invalid CPF</p>
                </>
              )}
              {errors.cpf && errors.cpf.type === "minLength" && (
                <>
                  <p className={classes.error}>Invalid CPF type</p>
                </>
              )}

              <TextField
                name="rg"
                label="RG"
                margin="normal"
                type="text"
                defaultValue={data[Control].rg}
                variant="outlined"
                inputRef={register({
                  required: true,
                  minLength: 8,
                })}
              />
              {errors.rg && errors.rg.type === "required" && (
                <>
                  <p className={classes.error}>Invalid RG</p>
                </>
              )}
              {errors.rg && errors.rg.type === "minLength" && (
                <>
                  <p className={classes.error}>
                    This field required min lenght of 8
                  </p>
                </>
              )}

              <TextField
                name="email"
                label="Email"
                margin="normal"
                type="email"
                defaultValue={data[Control].email}
                variant="outlined"
                inputRef={register({
                  required: true,
                  minLength: 5,
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <>
                  <p className={classes.error}>Invalid E-mail</p>
                </>
              )}
              {errors.email && errors.email.type === "minLength" && (
                <>
                  <p className={classes.error}>
                    This field required min lenght of 5
                  </p>
                </>
              )}

              <TextField
                name="bdate"
                label="Birth Date"
                margin="normal"
                type="date"
                defaultValue={data[Control].bdate}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                inputRef={register({
                  required: true,
                  minLength: 5,
                })}
              />
              {errors.bdate && errors.bdate.type === "required" && (
                <>
                  <p className={classes.error}>Invalid Date</p>
                </>
              )}

              <TextField
                name="street"
                label="Street"
                margin="normal"
                defaultValue={data[Control].street}
                variant="outlined"
                inputRef={register({
                  required: true,
                  minLength: 5,
                  maxLength: 30,
                })}
              />
              {errors.street && errors.street.type === "required" && (
                <p className={classes.error}>Invalid Street</p>
              )}
              {errors.street && errors.street.type === "minLength" && (
                <p className={classes.error}>
                  This field required min lenght of 5
                </p>
              )}
              {errors.street && errors.street.type === "maxLength" && (
                <p className={classes.error}>Max length exceeded</p>
              )}

              <TextField
                name="residentialNumber"
                label="Residential Number"
                margin="normal"
                type="text"
                defaultValue={data[Control].residentialNumber}
                variant="outlined"
                inputRef={register({
                  required: true,
                })}
              />
              {errors.residentialNumber &&
                errors.residentialNumber.type === "required" && (
                  <p className={classes.error}>Invalid Residential Number</p>
                )}

              <TextField
                name="addressDetails"
                label="Additional address details (optional) "
                margin="normal"
                type="text"
                defaultValue={data[Control].addressDetails}
                variant="outlined"
              />

              <TextField
                name="residentialArea"
                label="Area"
                margin="normal"
                type="text"
                defaultValue={data[Control].residentialArea}
                variant="outlined"
                inputRef={register({
                  required: true,
                  minLength: 2,
                  maxLength: 30,
                })}
              />
              {errors.residentialArea &&
                errors.residentialArea.type === "required" && (
                  <p className={classes.error}>Invalid Residential Area</p>
                )}
              {errors.residentialArea &&
                errors.residentialArea.type === "minLength" && (
                  <p className={classes.error}>
                    This field required min lenght of 2
                  </p>
                )}
              {errors.residentialArea &&
                errors.residentialArea.type === "maxLength" && (
                  <p className={classes.error}>Max length exceeded</p>
                )}

              <TextField
                name="city"
                label="City"
                margin="normal"
                type="text"
                defaultValue={data[Control].city}
                variant="outlined"
                inputRef={register({
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
              />
              {errors.city && errors.city.type === "required" && (
                <p className={classes.error}>Invalid City</p>
              )}
              {errors.city && errors.city.type === "minLength" && (
                <p className={classes.error}>
                  This field required min lenght of 3
                </p>
              )}
              {errors.city && errors.city.type === "maxLength" && (
                <p className={classes.error}>Max length exceeded</p>
              )}

              <TextField
                name="stateq"
                label="State"
                margin="normal"
                type="text"
                defaultValue={data[Control].stateq}
                variant="outlined"
                inputRef={register({
                  required: true,
                  minLength: 1,
                  maxLength: 30,
                })}
              />
              {errors.stateq && errors.stateq.type === "required" && (
                <p className={classes.error}>Invalid state</p>
              )}
              {errors.stateq && errors.stateq.type === "minLength" && (
                <p className={classes.error}>
                  This field required min lenght of 1
                </p>
              )}
              {errors.stateq && errors.stateq.type === "maxLength" && (
                <p className={classes.error}>Max length exceeded</p>
              )}

              <TextField
                name="requestedBy"
                label="Requested By"
                margin="normal"
                type="text"
                defaultValue={data[Control].requestedBy}
                variant="outlined"
                inputRef={register({
                  required: true,
                  minLength: 3,
                  maxLength: 40,
                })}
              />
              {errors.requestedBy && errors.requestedBy.type === "required" && (
                <p className={classes.error}>Invalid Requester</p>
              )}
              {errors.requestedBy &&
                errors.requestedBy.type === "minLength" && (
                  <p className={classes.error}>
                    This field required min lenght of 3
                  </p>
                )}
              {errors.requestedBy &&
                errors.requestedBy.type === "maxLength" && (
                  <p className={classes.error}>Max length exceeded</p>
                )}

              <TextField
                name="agreement"
                label="Agreement"
                margin="normal"
                type="text"
                defaultValue={data[Control].agreement}
                variant="outlined"
                inputRef={register({
                  required: true,
                  minLength: 3,
                  maxLength: 20,
                })}
              />
              {errors.agreement && errors.agreement.type === "required" && (
                <p className={classes.error}>Invalid Requester</p>
              )}
              {errors.agreement && errors.agreement.type === "minLength" && (
                <p className={classes.error}>
                  This field required min lenght of 3
                </p>
              )}
              {errors.agreement && errors.agreement.type === "maxLength" && (
                <p className={classes.error}>Max length exceeded</p>
              )}

              <TextField
                name="nextAppointment"
                label="Next appointment"
                margin="normal"
                type="datetime-local"
                defaultValue={data[Control].nextAppointment}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                inputRef={register({
                  required: true,
                })}
              />
              {errors.nextAppointment &&
                errors.nextAppointment.type === "required" && (
                  <p className={classes.error}>Need to insert an Appointment</p>
                )}

              <FormControl
                variant="outlined"
                className={classes.formControl}
                margin="normal"
                defaultValue={data[Control].doctor}
              >
                <InputLabel>Doctor</InputLabel>
                <Controller
                  as={
                    <Select name="doctor" label="Doctor">
                      <MenuItem value={"Guilherme"}>Guilherme</MenuItem>
                      <MenuItem value={"Jéssica"}>Jéssica</MenuItem>
                      <MenuItem value={"Vitor"}>Vitor</MenuItem>
                    </Select>
                  }
                  name="doctor"
                  control={control}
                  defaultValue={data[Control].doctor}
                  value={Doctor}
                  onChange={handleChange}
                  rules={{
                    required: true,
                  }}
                />
              </FormControl>
              {errors.doctor && errors.doctor.type === "required" && (
                <p className={classes.error}>Need to insert a Doctor</p>
              )}

              <FormControl
                margin="normal"
                variant="outlined"
                className={classes.formControl}
              >
                <InputLabel>Exam</InputLabel>
                <Controller
                  as={
                    <Select name="exam" label="Exam">
                      <MenuItem value={"Auscultation"}>Auscultation</MenuItem>
                      <MenuItem value={"Autopsy"}>Autopsy</MenuItem>
                      <MenuItem value={"Bronchoscopy"}>Bronchoscopy</MenuItem>
                      <MenuItem value={" Cardiac catheterization"}>
                        Cardiac catheterization
                      </MenuItem>
                      <MenuItem value={"Colposcopy"}>Colposcopy</MenuItem>
                      <MenuItem value={"Endoscopy"}>Endoscopy</MenuItem>
                    </Select>
                  }
                  name="exam"
                  control={control}
                  defaultValue={data[Control].exam}
                  value={Exam}
                  onChange={handleChangeExam}
                  rules={{
                    required: true,
                  }}
                />
              </FormControl>
              {errors.exam && errors.exam.type === "required" && (
                <p className={classes.error}>Need to insert a Exam</p>
              )}
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              form="formData"
            >
              Submit
            </Button>

            <Button
              onClick={() => handleChangeReadOnly(false)}
              variant="outlined"
              color="secondary"
            >
              Cancel
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}
