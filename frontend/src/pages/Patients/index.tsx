import React, { useState, useEffect } from "react";
import {
    Grid,
    Box,
    IconButton,
    Collapse,
    CircularProgress,
    TablePagination,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useForm } from "react-hook-form";
import useStyles from "./styles";
import * as Types from "./../../Types";
import PatientsCards from "../../components/PatientsCards";
import PatientsDialog from "../../components/PatientsDialog";
import PatientsFilterForm from "../../components/PatientsFilterForm";

function Patients() {
    const classes = useStyles();
    const [FilterForm, setFilterForm] = useState(0);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(12);
    const [open, setOpen] = useState(false);
    const [Delete, setDelete] = useState(false);
    const [ControlIndex, setControlIndex] = useState(0);
    const [ControlId, setControlId] = useState("");
    const [ReadOnly, setReadOnly] = useState(false);
    const { handleSubmit, register, control, errors } = useForm({});
    const [Doctor, setDoctor] = useState("");
    const [Exam, setExam] = useState("");
    const [infoArrived, setInfoArrived] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDoctor(event.target.value);
    };
    const handleChangeExam = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExam(event.target.value);
    };

    const handleChangeReadOnly = (value: boolean) => {
        setReadOnly(value);
    };

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
        page: number
    ) => {
        setPage(page);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const [data, setData] = useState<[Types.SubmitForm] | []>([]);
    useEffect(() => {
        fetch(
            "https://us-central1-teppadevchallenge.cloudfunctions.net/patients"
        )
            .then(async (response) => {
                const responseData = await response.json();
                setData(responseData.response);
                setInfoArrived(true);
            })
            .catch((error) => {
                console.log("there was an error", error);
            });
    }, []);

    function handleFilterForm(value: number) {
        setFilterForm(value);
    }

    function confirmFilterPatients(e: React.SyntheticEvent) {
        e.preventDefault();
        setInfoArrived(false);
        const target = e.target as typeof e.target & {
            name: { value: string };
            rg: { value: string };
            email: { value: string };
            bdate: { value: string };
        };
        const result = {
            name: target.name.value ? target.name.value : null,
            rg: target.rg.value ? target.rg.value : null,
            email: target.email.value ? target.email.value : null,
            bdate: target.bdate.value ? target.bdate.value : null,
        };
        fetch(
            `https://us-central1-teppadevchallenge.cloudfunctions.net/patients/filter/${result.name}/${result.rg}/${result.email}/${result.bdate}`
        )
            .then(async (response) => {
                const responseData = await response.json();
                if (responseData.response && responseData.response.length > 0) {
                    setData(responseData.response);
                    setInfoArrived(true);
                } else {
                    window.alert("No data found!");
                    window.location.reload();
                }
            })
            .catch((error) => {
                console.log("there was an error", error);
            });
    }

    const handleClickOpen = (id: string, index: number) => {
        setControlId(id);
        setControlIndex(index);
        setOpen(true);
    };

    function confirmDelete() {
        const requestOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: ControlId,
            }),
        };
        fetch(
            "https://us-central1-teppadevchallenge.cloudfunctions.net/patients",
            requestOptions
        )
            .then(function (response) {
                window.alert("Successfully deleted patient!");
                window.location.reload();
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
    const handleClose = () => {
        setReadOnly(false);
        setOpen(false);
        setDelete(false);
    };

    const handleOpenDelete = () => {
        setDelete(true);
    };
    const handleCloseDelete = () => {
        setDelete(false);
    };

    function onSubmit(formData: Types.SubmitForm) {
        formData.id = ControlId;
        const requestOptions = {
            method: "PUT",
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
                window.alert("Successfully updated patient!");
                window.location.reload();
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
    const textFields = [
        {
            id: "cellphone",
            label: "Cellphone",
            value: "cellphone",
            type: "number",
            shrink: false,
        },
        {
            id: "cpf",
            label: "CPF",
            value: "cpf",
            type: "text",
            shrink: false,
        },
        {
            id: "email",
            label: "CPF",
            value: "cpf",
            type: "text",
            shrink: false,
        },
        {
            id: "bdate",
            label: "Birth Date",
            value: "bdate",
            type: "text",
            shrink: true,
        },
        {
            id: "street",
            label: "Street",
            value: "street",
            type: "text",
            shrink: false,
        },
        {
            id: "residentialNumber",
            label: "Residential Number",
            value: "residentialNumber",
            type: "text",
            shrink: false,
        },
        {
            id: "addressDetails",
            label: "Additional address details",
            value: "addressDetails",
            type: "text",
            shrink: false,
        },
        {
            id: "residentialArea",
            label: "Area",
            value: "residentialArea",
            type: "text",
            shrink: false,
        },
        {
            id: "city",
            label: "City",
            value: "city",
            type: "text",
            shrink: false,
        },
        {
            id: "state",
            label: "State",
            value: "state",
            type: "text",
            shrink: false,
        },
        {
            id: "requestedBy",
            label: "Requested By",
            value: "requestedBy",
            type: "text",
            shrink: false,
        },
        {
            id: "agreement",
            label: "Agreement",
            value: "agreement",
            type: "text",
            shrink: false,
        },
        {
            id: "nextAppointment",
            label: "Next appointment",
            value: "nextAppointment",
            type: "text",
            shrink: true,
        },
        {
            id: "exam",
            label: "Exam",
            value: "exam",
            type: "text",
            shrink: true,
        },
    ];

    return (
        <>
            <Box className={classes.box} />
            <Grid
                container
                spacing={10}
                direction="row"
                className={classes.grid}
            >
                <Grid item xs={12} className={classes.gridItem}>
                    <Box className={classes.filterBar}>
                        <IconButton
                            className={classes.iconFilter}
                            color="primary"
                            aria-label="more"
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            disableRipple
                            disableFocusRipple
                            onClick={() =>
                                FilterForm === 0
                                    ? handleFilterForm(1)
                                    : handleFilterForm(0)
                            }
                        >
                            <span className={classes.text}>Filters</span>
                            <KeyboardArrowDownIcon
                                style={{ fontSize: 22 }}
                                className={[
                                    classes.dropdown,
                                    FilterForm === 0
                                        ? classes.dropdownOpen
                                        : classes.dropdownClosed,
                                ].join(" ")}
                            />
                        </IconButton>
                    </Box>
                    <Collapse in={FilterForm === 1}>
                        <form
                            className={classes.form}
                            onSubmit={(e) => confirmFilterPatients(e)}
                        >
                            <PatientsFilterForm />
                        </form>
                    </Collapse>
                </Grid>
                <Box
                    display="flex"
                    alignItems="flex-start"
                    flexDirection="column"
                >
                    {infoArrived === true ? (
                        <>
                            <Grid
                                container
                                spacing={3}
                                className={classes.padding}
                                justifyContent="flex-start"
                            >
                                {data
                                    .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    .map((row, index) => (
                                        <Grid
                                            key={row.id}
                                            item
                                            xs={"auto"}
                                            sm={"auto"}
                                        >
                                            <PatientsCards
                                                name={row.name}
                                                nextAppointment={
                                                    row.nextAppointment
                                                }
                                                exam={row.exam}
                                                handleClickOpen={
                                                    handleClickOpen
                                                }
                                                ControlId={
                                                    row.id as unknown as string
                                                }
                                                ControlIndex={index}
                                            />
                                        </Grid>
                                    ))}
                                <PatientsDialog
                                    open={open}
                                    handleClose={handleClose}
                                    ReadOnly={ReadOnly}
                                    textFields={textFields}
                                    handleChangeReadOnly={handleChangeReadOnly}
                                    handleOpenDelete={handleOpenDelete}
                                    Delete={Delete}
                                    handleCloseDelete={handleCloseDelete}
                                    confirmDelete={confirmDelete}
                                    handleSubmit={handleSubmit}
                                    onSubmit={onSubmit}
                                    register={register}
                                    errors={errors}
                                    ControlIndex={ControlIndex}
                                    control={control}
                                    Doctor={Doctor}
                                    handleChange={handleChange}
                                    Exam={Exam}
                                    handleChangeExam={handleChangeExam}
                                    data={data as [Types.SubmitForm]}
                                />
                            </Grid>
                            <TablePagination
                                rowsPerPageOptions={[12, 18, 24]}
                                component="div"
                                count={data.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                className={classes.pagination}
                            />
                        </>
                    ) : (
                        <>
                            {" "}
                            <CircularProgress />{" "}
                        </>
                    )}
                </Box>
            </Grid>{" "}
        </>
    );
}

export default Patients;
