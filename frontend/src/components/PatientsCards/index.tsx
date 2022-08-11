import React from "react";

import {
    Card,
    CardActions,
    CardContent,
    Typography,
    Button,
} from "@material-ui/core";
import useStyles from "./../../pages/Patients/styles";
import * as Types from "../../Types";

export default function PatientsCards(props: Types.PatientsCardsProps) {
    const classes = useStyles();
    const {
        name,
        nextAppointment,
        exam,
        handleClickOpen,
        ControlIndex,
        ControlId,
    } = props;

    return (
        <Card>
            <CardContent className={classes.CardContent}>
                <Typography gutterBottom variant="h6" component="h2">
                    Name
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {name}
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                    Exam Date
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {nextAppointment as string}
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                    Exam
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {exam}
                </Typography>
            </CardContent>
            <CardActions className={classes.detailButton}>
                <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    onClick={() =>
                        handleClickOpen(
                            ControlId as unknown as string,
                            ControlIndex
                        )
                    }
                >
                    Details
                </Button>
            </CardActions>
        </Card>
    );
}
