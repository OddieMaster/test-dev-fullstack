import { Grid, TextField } from "@material-ui/core";
import useStyles from "../../pages/Insert/styles";
import * as Types from "../../Types";

function AddressForm(props: Types.handleErrorsHookForm) {
  const errors = props.errors;
  const register = props.register;
  const classes = useStyles();
  return (
    <Grid className={classes.gridInside}>
      <Grid item className={classes.gridItens}>
        <TextField
          name="street"
          label="Street"
          margin="normal"
          className={classes.textfield}
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
          <p className={classes.error}>This field required min lenght of 5</p>
        )}
        {errors.street && errors.street.type === "maxLength" && (
          <p className={classes.error}>Max length exceeded</p>
        )}
      </Grid>
      <Grid item className={classes.gridItens}>
        <TextField
          name="residentialNumber"
          label="Residential Number"
          margin="normal"
          type="number"
          className={classes.textfield}
          variant="outlined"
          inputRef={register({
            required: true,
          })}
        />
        {errors.residentialNumber &&
          errors.residentialNumber.type === "required" && (
            <p className={classes.error}>Invalid Residential Number</p>
          )}
      </Grid>
      <Grid item className={classes.gridItens}>
        <TextField
          name="addressDetails"
          label="Additional address details (optional) "
          margin="normal"
          type="text"
          className={classes.textfield}
          variant="outlined"
        />
      </Grid>
      <Grid item className={classes.gridItens}>
        <TextField
          name="residentialArea"
          label="Area"
          margin="normal"
          type="text"
          className={classes.textfield}
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
            <p className={classes.error}>This field required min lenght of 2</p>
          )}
        {errors.residentialArea &&
          errors.residentialArea.type === "maxLength" && (
            <p className={classes.error}>Max length exceeded</p>
          )}
      </Grid>
      <Grid item className={classes.gridItens}>
        <TextField
          name="city"
          label="City"
          margin="normal"
          type="text"
          className={classes.textfield}
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
          <p className={classes.error}>This field required min lenght of 3</p>
        )}
        {errors.city && errors.city.type === "maxLength" && (
          <p className={classes.error}>Max length exceeded</p>
        )}
      </Grid>
      <Grid item className={classes.gridItens}>
        <TextField
          name="state"
          label="State"
          margin="normal"
          type="text"
          className={classes.textfield}
          variant="outlined"
          inputRef={register({
            required: true,
            minLength: 1,
            maxLength: 30,
          })}
        />
        {errors.state && errors.state.type === "required" && (
          <p className={classes.error}>Invalid state</p>
        )}
        {errors.state && errors.state.type === "minLength" && (
          <p className={classes.error}>This field required min lenght of 1</p>
        )}
        {errors.state && errors.state.type === "maxLength" && (
          <p className={classes.error}>Max length exceeded</p>
        )}
      </Grid>
    </Grid>
  );
}

export default AddressForm;
