import {
  Grid,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import useStyles from "./../../pages/Insert/styles";
import { useForm, Controller } from "react-hook-form";
import * as Types from "../../Types";

function ExamForm(props: Types.ExamFormProps) {
  const classes = useStyles();
  const { register, errors, control } = useForm({});
  var today = new Date();
  today.setDate(today.getDate());
  var date = today.toISOString().substr(0, 10);
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  return (
    <Grid className={classes.gridInside}>
      <Grid item className={classes.gridItens}>
        <TextField
          name="dateRequired"
          label="Actual Date"
          value={date}
          margin="normal"
          type="date"
          className={classes.textfield}
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item className={classes.gridItens}>
        <TextField
          name="hourRequired"
          label="Actual Hour"
          value={time}
          margin="normal"
          type="time"
          className={classes.textfield}
          variant="outlined"
          InputProps={{
            readOnly: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item className={classes.gridItens}>
        <TextField
          name="requestedBy"
          label="Requested By"
          margin="normal"
          type="text"
          className={classes.textfield}
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
        {errors.requestedBy && errors.requestedBy.type === "minLength" && (
          <p className={classes.error}>This field required min lenght of 3</p>
        )}
        {errors.requestedBy && errors.requestedBy.type === "maxLength" && (
          <p className={classes.error}>Max length exceeded</p>
        )}
      </Grid>
      <Grid item className={classes.gridItens}>
        <TextField
          name="agreement"
          label="Agreement"
          margin="normal"
          type="text"
          className={classes.textfield}
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
          <p className={classes.error}>This field required min lenght of 3</p>
        )}
        {errors.agreement && errors.agreement.type === "maxLength" && (
          <p className={classes.error}>Max length exceeded</p>
        )}
      </Grid>
      <Grid item className={classes.gridItens}>
        <TextField
          name="nextAppointment"
          label="Next appointment"
          margin="normal"
          type="datetime-local"
          className={classes.textfield}
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
      </Grid>
      <Grid item className={classes.gridItens}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Doctor</InputLabel>
          <Controller
            as={
              <Select name="doctor" label="Doctor" defaultValue="">
                <MenuItem value={"Guilherme"}>Guilherme</MenuItem>
                <MenuItem value={"Jéssica"}>Jéssica</MenuItem>
                <MenuItem value={"Vitor"}>Vitor</MenuItem>
              </Select>
            }
            name="doctor"
            control={control}
            defaultValue=""
            value={props.doctor}
            onChange={props.handleChange}
            rules={{ required: true }}
          />
        </FormControl>
        {errors.doctor && errors.doctor.type === "required" && (
          <p className={classes.error}>Need to insert a Doctor</p>
        )}
      </Grid>

      <Grid item className={classes.gridItens}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Exam</InputLabel>
          <Controller
            as={
              <Select name="doctor" label="Doctor" defaultValue="">
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
            defaultValue=""
            value={props.exam}
            onChange={props.handleChangeExam}
            rules={{ required: true }}
          />
        </FormControl>
        {errors.exam && errors.exam.type === "required" && (
          <p className={classes.error}>Need to insert a Exam</p>
        )}
      </Grid>
    </Grid>
  );
}

export default ExamForm;
