/* eslint-disable max-len */

import * as admin from "firebase-admin";
import serviceAccount = require("../src/config/teppadevchallenge-firebase-adminsdk-2mexb-ae83cda663.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as ServiceAccount),
});
import * as functions from "firebase-functions";
import * as express from "express";
import { clientController } from "./controller/clients/clientController";
import { ServiceAccount } from "firebase-admin";

/* APIS */
const appApi = express();
const patients = express();

/* ROTA API */
appApi.get("/", function (req, res) {
    res.send("hello world");
});

patients.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    next();
});
/* ROTA PATIENTS */

patients.get("/:idPatient", async (req, res) => {
    res.json(await clientController.getPatientById(req.params.idPatient));
});
patients.get("/filter/:name/:rg/:email/:bdate", async (req, res) => {
    res.json(
        await clientController.getFilteredPatients({
            name: req.params.name !== "null" ? req.params.name : null,
            rg: req.params.rg !== "null" ? req.params.rg : null,
            email: req.params.email !== "null" ? req.params.email : null,
            bdate: req.params.bdate !== "null" ? req.params.bdate : null,
        })
    );
});
patients
    .route("/")
    .get(async (req, res) => {
        res.json(await clientController.getPatients());
    })
    .post(async (req, res) => {
        res.json(await clientController.createPatient(req.body));
    })
    .put(async (req, res) => {
        res.json(await clientController.updatePatients(req.body.id, req.body));
    })
    .delete(async (req, res) => {
        res.json(await clientController.deletePatients(req.body.id));
    });

/* EXPORT APPS */
exports.api = functions.https.onRequest(appApi);
exports.patients = functions.https.onRequest(patients);
