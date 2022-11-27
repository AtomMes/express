"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const HTTP_STATUSES = {
    OK_200: 200,
    CREATED_201: 201,
    NO_CONTENT_204: 204,
    BAD_REQUEST_400: 400,
    NOT_FOUND_404: 404,
};
const jsonBodyMiddleware = express_1.default.json(); //es nra hamara vos json karena karda toli esiminch
app.use(jsonBodyMiddleware); //asum enq mer prilajenyan kardaluc araj mihat steov anci qu uxxumnery ara nor karda
let db = {
    courses: [
        { id: 1, title: "front-end" },
        { id: 2, title: "back-end" },
        { id: 3, title: "automation qa" },
        { id: 4, title: "devops" },
    ],
};
app.get("/courses", (req, res) => {
    //! kursery nayum enq prosty, kamel poisk tvac kursy
    let foundCourses = db.courses;
    if (req.query.title) {
        //asumeqn ete requesti query parametry title uni
        foundCourses = foundCourses.filter(
        //filter ani kursery
        (c) => c.title.indexOf(req.query.title) > -1 //prosty tenum enq query title i bary mer kursi titlum ka te che
        );
    }
    res.json(foundCourses); //response enq uxarkum ete query exnuma ifi meji filtr aracy ete chi exnm sovorakan db-n
});
app.get("/courses/:id", (req, res) => {
    //! konkret kurs enq nayum
    const foundCourse = db.courses.find((c) => c.id === +req.params.id); //es arden query parameter chi sovorakan parametera
    if (!foundCourse) {
        res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400); //asumenq ete chka bad request status kod uxarki
        return; //u dus ga
    }
    res.json(foundCourse);
});
app.post("/courses", (req, res) => {
    //! nor kurs enq avelacnum
    if (!req.body.title) {
        //stugum enq title uxarkela te che
        res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
        return;
    }
    const createdCourse = {
        //popoxakan
        id: +new Date(),
        title: req.body.title, //et requesti title-n talis enq sran
    };
    db.courses.push(createdCourse); //u push anum mer kurserin
    res
        .status(HTTP_STATUSES.CREATED_201) //asum enq vor statusy 201a
        .json(createdCourse); //u uxarkum
});
app.delete("/courses/:id", (req, res) => {
    //! kurs enq jnjum
    db.courses = db.courses.filter((c) => c.id !== +req.params.id); //sovorakan filter
    res.json(db.courses); //cuyc enq tali uje filtr arvac
});
app.put("/courses/:id", (req, res) => {
    //!poxum enq arden goyutyun unecox kursi title-n
    //body: JSON.stringify( {title:'deee'}), //! Body-um titlen stringify arac enq uxarkum vor ashxati
    if (!req.body.title) {
        ///stugum enq navsyaki title-n
        res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400);
        return;
    }
    const foundCourse = db.courses.find((c) => c.id === +req.params.id); //stugum enq tenc kurs ka vabshe
    if (!foundCourse) {
        res.sendStatus(HTTP_STATUSES.NOT_FOUND_404); //ete chka 404
        return;
    }
    foundCourse.title = req.body.title; //poxum enq dra titlen requesti bodiic vercrac titleov
    res.json(foundCourse);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
