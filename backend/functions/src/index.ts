/* eslint-disable max-len */

import * as admin from "firebase-admin";
import serviceAccount = require("../src/config/teppadevchallenge-firebase-adminsdk-2mexb-e18e460dbc.json");
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

/* ROTA PATIENTS */

patients.get("/:idPatient", async (req, res) => {
    res.json(await clientController.getPatientById(req.params.idPatient));
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
