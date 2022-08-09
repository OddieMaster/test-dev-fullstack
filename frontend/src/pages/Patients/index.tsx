import React, { useState, useEffect } from "react";
import {
    Grid,
    InputBase,
    Box,
    IconButton,
    Collapse,
    CircularProgress,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useForm } from "react-hook-form";
/* import { useHistory } from "react-router-dom"; */
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
    const [InputFilter, setInputFilter] = useState("");
    const [open, setOpen] = useState(false);
    const [Delete, setDelete] = useState(false);
    const [ControlId, setControlId] = useState("");
    const [Control, setControl] = useState(0);
    const [ReadOnly, setReadOnly] = useState(false);
    const { handleSubmit, register, control, errors } = useForm({});
    const [Doctor, setDoctor] = useState("");
    const [Exam, setExam] = useState("");
    const [infoArrived, setInfoArrived] = useState(false);
    /* let history = useHistory(); */

    /*  const staticData = [
    {
      bdate: "2022-08-05",
      cellphone: "3194962286",
      city: "Conselheiro Lafaiete",
      cpf: "077.898.086-30",
      email: "romualdo.gui@gmail.com",
      id: "1",
      requestedBy: "none",
      doctor: "Jéssica",
      agreement: "none",
      name: "Guilherme Eduardo Abreu Romualdo",
      residentialArea: "rochedo",
      residentialNumber: "234234",
      addressDetails: "none",
      rg: "213123123123",
      stateq: "PC",
      exam: "none",
      street: "Rua Lais Franco",
      nextAppointment: "2022-08-05",
    },
  ]; */

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDoctor(event.target.value);
    };
    const handleChangeExam = (event: React.ChangeEvent<HTMLInputElement>) => {
        setExam(event.target.value);
    };

    const handleChangeReadOnly = (value: boolean) => {
        setReadOnly(value);
        console.log("clicou");
    };

    const handleChangePage = (/* event */ newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const [data, setData] = useState<[Types.SubmitForm]>([
        {
            value: 1,
            bdate: "2022-08-05",
            cellphone: "3194962286",
            city: "Conselheiro Lafaiete",
            cpf: "077.898.086-30",
            email: "romualdo.gui@gmail.com",
            id: 1,
            requestedBy: "none",
            doctor: "Jéssica",
            agreement: "none",
            name: "Guilherme Eduardo Abreu Romualdo",
            residentialArea: "rochedo",
            residentialNumber: "234234",
            addressDetails: "none",
            rg: "213123123123",
            stateq: "PC",
            exam: "none",
            street: "Rua Lais Franco",
            nextAppointment: "2022-08-05",
        },
    ]);
    useEffect(() => {
        fetch("https://us-central1-teppadevchallenge.cloudfunctions.net/patients")
            .then(async (response) => {
                const data = await response.json();
                console.log("aqui a data", data);
            })
            .catch((error) => {
                console.log("there was an error", error);
            });
    }, []);

    function handleFilterForm(value: number) {
        setFilterForm(value);
    }

    /* function searchItem(rows: any) {
    if (InputFilter !== "") {
      return rows.filter(
        (row: any) =>
          row.patient.toLowerCase().indexOf(InputFilter.toLowerCase()) > -1 ||
          row.cpf.indexOf(InputFilter) > -1
      );
    } else return rows;
  }
  const filteredData = searchItem(data); */

    const handleClickOpen = (value: string) => {
        setControlId(value);
        var pos = data
            .map(function (data) {
                return data.id;
            })
            .indexOf(value as unknown as number);
        console.log(value);
        console.log(pos);
        setControl(Number(pos));
        setOpen(true);
    };

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

    function confirmDelete() {
        console.log("confirmDelete");
    }

    function onSubmit(formData: Types.SubmitForm) {
        formData.id = ControlId;
        console.log(ControlId);
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
            id: "stateq",
            label: "State",
            value: "stateq",
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
                        <InputBase
                            className={classes.margin}
                            value={InputFilter}
                            onChange={(e) => setInputFilter(e.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon
                                        fontSize="large"
                                        color="action"
                                    />
                                </InputAdornment>
                            }
                        />

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
                        <PatientsFilterForm
                            setInfoArrived={setInfoArrived}
                            handleFilterForm={handleFilterForm}
                        />
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
                                justify="flex-start"
                            >
                                {data
                                    .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    .map((row) => (
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
                                                id={row.id as string}
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
                                    Control={Control}
                                    control={control}
                                    Doctor={Doctor}
                                    handleChange={handleChange}
                                    Exam={Exam}
                                    handleChangeExam={handleChangeExam}
                                    data={data}
                                />
                            </Grid>
                            {/*  <TablePagination
                rowsPerPageOptions={[12, 18, 24]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                className={classes.pagination}
              /> */}
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
