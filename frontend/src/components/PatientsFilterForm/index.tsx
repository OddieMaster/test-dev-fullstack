import { Box, Button, Grid, TextField } from "@material-ui/core";
import useStyles from "./../../pages/Patients/styles";

export default function PatientsFilterForm() {
    const classes = useStyles();

    return (
        <Box display="flex" alignItems="flex-end" flexDirection="column">
            <Grid className={classes.gridInside}>
                <Grid item className={classes.gridItens}>
                    <TextField
                        name="cellphone"
                        label="Cellphone"
                        margin="normal"
                        type="number"
                        variant="outlined"
                    />
                </Grid>

                <Grid item className={classes.gridItens}>
                    <TextField
                        name="rg"
                        label="RG"
                        margin="normal"
                        type="text"
                        variant="outlined"
                    />
                </Grid>
                <Grid item className={classes.gridItens}>
                    <TextField
                        name="email"
                        label="Email"
                        margin="normal"
                        type="email"
                        variant="outlined"
                    />
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
                        variant="outlined"
                    />
                </Grid>
            </Grid>

            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                style={{ marginTop: "15px" }}
                type="submit"
            >
                Apply Filters
            </Button>
        </Box>
    );
}
