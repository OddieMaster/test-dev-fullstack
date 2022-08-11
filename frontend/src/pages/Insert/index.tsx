import React, { useState, useEffect } from "react";
import {
    Grid,
    Box,
    IconButton,
    Button,
    Collapse,
    CircularProgress,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { useForm } from "react-hook-form";
import PatientForms from "../../components/PatientForm";
import AddressForms from "../../components/AddressForm";
import ExamForms from "../../components/ExamForm";
import useStyles from "./styles";
import * as Types from "../../Types";
import { useHistory } from "react-router-dom";

function Insert() {
    const classes = useStyles();
    const [PatientForm, setPatientForm] = useState(false);
    const [AddressForm, setAddressForm] = useState(false);
    const [ExamForm, setExamForm] = useState(false);
    const [PatientIcon, setPatientIcon] = useState(false);
    const [AddressIcon, setAddressIcon] = useState(false);
    const [ExamIcon, setExamIcon] = useState(false);
    const [UpdateButton, setUpdateButton] = useState(true);
    const [Doctor, setDoctor] = useState("");
    const [Exam, setExam] = useState("");

    const { handleSubmit, register, errors, control } = useForm({});

    const history = useHistory();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDoctor(event.target.value);
    };
    const handleChangeExam = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExam(event.target.value);
    };
    const handlePatientForm = (value: boolean) => {
        setPatientForm(value);
    };
    const handleAddressForm = (value: boolean) => {
        setAddressForm(value);
    };
    const handleExamForm = (value: boolean) => {
        setExamForm(value);
    };

    const callNext = (value: any) => {
        switch (value) {
            case 1:
                setPatientForm(false);
                setAddressForm(true);
                setPatientIcon(true);
                break;
            case 2:
                setAddressForm(false);
                setExamForm(true);
                setAddressIcon(true);
                break;
            case 3:
                setExamForm(false);
                setExamIcon(true);

                break;
            default:
            // do nothing
        }
    };

    async function onSubmit(formData: Types.SubmitForm) {
        setUpdateButton(false);
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        };
        fetch(
            "https://us-central1-teppadevchallenge.cloudfunctions.net/patients",
            requestOptions
        )
            .then(function (response) {
                setUpdateButton(true);
                window.alert(
                    "Successfully inserted patient! Returning to the homepage"
                );
                history.push("/");
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }

    useEffect(() => {
        if (useRef.current) {
            useRef.current = false;
        } else {
            if (
                errors.name ||
                errors.cellphone ||
                errors.cpf ||
                errors.rg ||
                errors.email ||
                errors.bdate
            ) {
                setPatientForm(true);
                setPatientIcon(false);
            }
            if (
                errors.street ||
                errors.residentialNumber ||
                errors.residentialArea ||
                errors.city ||
                errors.state
            ) {
                setAddressForm(true);
                setAddressIcon(false);
            }
            if (
                errors.resquetedBy ||
                errors.agreement ||
                errors.nextAppointment ||
                errors.doctor ||
                errors.exam
            ) {
                setExamForm(true);
                setExamIcon(false);
            }
        }
    }, [errors]);
    const useRef = React.useRef(true);
    return (
        <>
            <Box className={classes.initialBox} />
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <Grid
                    container
                    spacing={10}
                    direction="row"
                    className={classes.grid}
                >
                    <Grid item xs={12} className={classes.gridItem}>
                        <Box
                            component="div"
                            flexDirection="column"
                            className={classes.container}
                        >
                            <IconButton
                                className={classes.labelIcon}
                                color="primary"
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                disableRipple
                                disableFocusRipple
                                onClick={() =>
                                    PatientForm === false
                                        ? handlePatientForm(true)
                                        : handlePatientForm(false)
                                }
                            >
                                <span className={classes.text}>Patient</span>
                                {PatientIcon === false && (
                                    <>
                                        <IndeterminateCheckBoxIcon
                                            className={classes.icon}
                                            color="secondary"
                                        />
                                    </>
                                )}
                                {PatientIcon === true && (
                                    <>
                                        <CheckCircleIcon
                                            className={classes.icon}
                                            style={{ color: "#13ce8b" }}
                                        />
                                    </>
                                )}
                            </IconButton>
                            <IconButton
                                className={classes.iconDown}
                                color="primary"
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                disableRipple
                                disableFocusRipple
                                onClick={() =>
                                    PatientForm === false
                                        ? handlePatientForm(true)
                                        : handlePatientForm(false)
                                }
                            >
                                <KeyboardArrowDownIcon
                                    style={{ fontSize: 30 }}
                                    className={[
                                        classes.dropdown,
                                        PatientForm === false
                                            ? classes.dropdownOpen
                                            : classes.dropdownClosed,
                                    ].join(" ")}
                                />
                            </IconButton>
                        </Box>
                        <Collapse in={PatientForm === true}>
                            <Box
                                display="flex"
                                alignItems="center"
                                flexDirection="column"
                            >
                                <PatientForms
                                    errors={errors}
                                    register={register}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    style={{ marginTop: "15px" }}
                                    onClick={() => callNext(1)}
                                >
                                    Next
                                </Button>
                            </Box>
                        </Collapse>
                    </Grid>

                    <Grid item xs={12} className={classes.gridItem}>
                        <Box
                            component="div"
                            flexDirection="column"
                            className={classes.container}
                        >
                            <IconButton
                                className={classes.labelIcon}
                                color="primary"
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                disableRipple
                                disableFocusRipple
                                onClick={() =>
                                    AddressForm === false
                                        ? handleAddressForm(true)
                                        : handleAddressForm(false)
                                }
                            >
                                <span className={classes.text}>Address</span>

                                {AddressIcon === false && (
                                    <>
                                        <IndeterminateCheckBoxIcon
                                            className={classes.icon}
                                            color="secondary"
                                        />
                                    </>
                                )}
                                {AddressIcon === true && (
                                    <>
                                        <CheckCircleIcon
                                            className={classes.icon}
                                            style={{ color: "#13ce8b" }}
                                        />
                                    </>
                                )}
                            </IconButton>
                            <IconButton
                                className={classes.iconDown}
                                color="primary"
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                disableRipple
                                disableFocusRipple
                                onClick={() =>
                                    AddressForm === false
                                        ? handleAddressForm(true)
                                        : handleAddressForm(false)
                                }
                            >
                                <KeyboardArrowDownIcon
                                    style={{ fontSize: 30 }}
                                    className={[
                                        classes.dropdown,
                                        AddressForm === false
                                            ? classes.dropdownOpen
                                            : classes.dropdownClosed,
                                    ].join(" ")}
                                />
                            </IconButton>
                        </Box>
                        <Collapse in={AddressForm === true}>
                            <Box
                                display="flex"
                                alignItems="center"
                                flexDirection="column"
                            >
                                <AddressForms
                                    errors={errors}
                                    register={register}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    style={{ marginTop: "15px" }}
                                    onClick={() => callNext(2)}
                                >
                                    Next
                                </Button>
                            </Box>
                        </Collapse>
                    </Grid>
                    <Grid item xs={12} className={classes.gridItem}>
                        <Box
                            component="div"
                            flexDirection="column"
                            className={classes.container}
                        >
                            <IconButton
                                className={classes.labelIcon}
                                color="primary"
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                disableRipple
                                disableFocusRipple
                                onClick={() =>
                                    ExamForm === false
                                        ? handleExamForm(true)
                                        : handleExamForm(false)
                                }
                            >
                                <span className={classes.text}>
                                    Exam Information
                                </span>

                                {ExamIcon === false && (
                                    <>
                                        <IndeterminateCheckBoxIcon
                                            className={classes.icon}
                                            color="secondary"
                                        />
                                    </>
                                )}
                                {ExamIcon === true && (
                                    <>
                                        <CheckCircleIcon
                                            className={classes.icon}
                                            style={{ color: "#13ce8b" }}
                                        />
                                    </>
                                )}
                            </IconButton>
                            <IconButton
                                className={classes.iconDown}
                                color="primary"
                                aria-label="more"
                                aria-controls="long-menu"
                                aria-haspopup="true"
                                disableRipple
                                disableFocusRipple
                                onClick={() =>
                                    ExamForm === false
                                        ? handleExamForm(true)
                                        : handleExamForm(false)
                                }
                            >
                                <KeyboardArrowDownIcon
                                    style={{ fontSize: 30 }}
                                    className={[
                                        classes.dropdown,
                                        ExamForm === false
                                            ? classes.dropdownOpen
                                            : classes.dropdownClosed,
                                    ].join(" ")}
                                />
                            </IconButton>
                        </Box>
                        <Collapse in={ExamForm === true}>
                            <Box
                                display="flex"
                                alignItems="center"
                                flexDirection="column"
                            >
                                <ExamForms
                                    errors={errors}
                                    register={register}
                                    doctor={Doctor}
                                    control={control}
                                    handleChange={
                                        handleChange as unknown as React.ChangeEvent<HTMLInputElement>
                                    }
                                    exam={Exam}
                                    handleChangeExam={
                                        handleChangeExam as unknown as React.ChangeEvent<HTMLInputElement>
                                    }
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    style={{ marginTop: "15px" }}
                                    onClick={() => callNext(3)}
                                >
                                    Next
                                </Button>
                            </Box>
                        </Collapse>
                    </Grid>
                    <Grid item xs={12} container justifyContent="space-around">
                        {UpdateButton === true ? (
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                type="submit"
                            >
                                Update Resume
                            </Button>
                        ) : (
                            <>
                                {" "}
                                <CircularProgress />{" "}
                            </>
                        )}
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

export default Insert;
