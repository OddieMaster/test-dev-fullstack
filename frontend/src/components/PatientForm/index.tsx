import { Grid, TextField } from "@material-ui/core";
import useStyles from "./../../pages/Insert/styles";
import * as Types from "../../Types";

function PatientForm(props: Types.handleErrorsHookForm) {
  const classes = useStyles();
  return (
    <Grid className={classes.gridInside}>
      <Grid item className={classes.gridItens}>
        <TextField
          label="Name"
          name="name"
          margin="normal"
          type="text"
          className={classes.textfield}
          variant="outlined"
          inputRef={props.register({
            required: true,
            minLength: 5,
            maxLength: 40,
          })}
        />
        {props.errors.name && props.errors.name.type === "required" && (
          <>
            <p className={classes.error}>Invalid Name</p>
          </>
        )}
        {props.errors.name && props.errors.name.type === "minLength" && (
          <>
            <p className={classes.error}>This field required min lenght of 5</p>
          </>
        )}
        {props.errors.name && props.errors.name.type === "maxLength" && (
          <>
            <p className={classes.error}>Max length exceeded</p>
          </>
        )}
      </Grid>
      <Grid item className={classes.gridItens}>
        <TextField
          name="cellphone"
          label="Cellphone"
          margin="normal"
          type="number"
          className={classes.textfield}
          variant="outlined"
          inputRef={props.register({
            required: true,
            minLength: 8,
            maxLength: 10,
          })}
        />
        {props.errors.cellphone &&
          props.errors.cellphone.type === "required" && (
            <p className={classes.error}>Invalid Cellphone</p>
          )}
        {props.errors.cellphone &&
          props.errors.cellphone.type === "minLength" && (
            <p className={classes.error}>This field required min lenght of 8</p>
          )}
        {props.errors.cellphone &&
          props.errors.cellphone.type === "maxLength" && (
            <p className={classes.error}>Max length exceeded</p>
          )}
      </Grid>
      <Grid item className={classes.gridItens}>
        <TextField
          name="cpf"
          label="CPF, numbers only"
          margin="normal"
          type="text"
          className={classes.textfield}
          variant="outlined"
          inputRef={props.register({
            required: true,
            minLength: 10,
          })}
        />
        {props.errors.cpf && props.errors.cpf.type === "required" && (
          <p className={classes.error}>Invalid CPF</p>
        )}
        {props.errors.cpf && props.errors.cpf.type === "minLength" && (
          <p className={classes.error}>Invalid CPF type</p>
        )}
      </Grid>
      <Grid item className={classes.gridItens}>
        <TextField
          name="rg"
          label="RG"
          margin="normal"
          type="text"
          className={classes.textfield}
          variant="outlined"
          inputRef={props.register({
            required: true,
            minLength: 8,
          })}
        />
        {props.errors.rg && props.errors.rg.type === "required" && (
          <p className={classes.error}>Invalid RG</p>
        )}
        {props.errors.rg && props.errors.rg.type === "minLength" && (
          <p className={classes.error}>This field required min lenght of 8</p>
        )}
      </Grid>
      <Grid item className={classes.gridItens}>
        <TextField
          name="email"
          label="Email"
          margin="normal"
          type="email"
          className={classes.textfield}
          variant="outlined"
          inputRef={props.register({
            required: true,
            minLength: 5,
          })}
        />
        {props.errors.email && props.errors.email.type === "required" && (
          <p className={classes.error}>Invalid E-mail</p>
        )}
        {props.errors.email && props.errors.email.type === "minLength" && (
          <p className={classes.error}>This field required min lenght of 5</p>
        )}
      </Grid>
      <Grid item className={classes.gridItens}>
        <TextField
          name="bdate"
          label="Birth Date"
          margin="normal"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          className={classes.textfield}
          variant="outlined"
          inputRef={props.register({
            required: true,
            minLength: 5,
          })}
        />
        {props.errors.bdate && props.errors.bdate.type === "required" && (
          <p className={classes.error}>Invalid Date</p>
        )}
      </Grid>
    </Grid>
  );
}

export default PatientForm;
