const fs = require('fs');
const db = {};

let PST = {};
function init() {
    try {
        //Intenta cargar el archivo JSON
        const json_text_PST = fs.readFileSync('./src/pstDatabase.json', 'utf-8')
        PST = JSON.parse(json_text_PST) //Transforma un String a objeto JSON
    } catch (e) {
        //Si no existe, crea el objeto JSON y lo guarda en un archivo .json
        PST = {
            estudiantes: [
                { nombre: "ESTUDIANTE 1", id: 0001 },
                { nombre: "ESTUDIANTE 2", id: 0002 },
                { nombre: "ESTUDIANTE 3", id: 0003 },
                { nombre: "ESTUDIANTE 4", id: 0004 }
             ],
            profesores: {
                teoria: { nombre: "Msig. Adriana Collaguazo", edad: 20 },
                practica: [
                  { nombre: "Ing. Christopher Vaccaro", edad: 27 },
                  { nombre: "Ing. Steven Santillan", edad: 25 }
                ]
            }
        }
        //Transforma un objeto JSON a String y lo guarda en un archivo
        fs.writeFileSync('./src/pstDatabase.json', JSON.stringify(PST), 'utf-8');
    }
    //se crean variables para acceder a ciertos atributos
    db.teoria = PST.profesores.teoria;
    db.practica = PST.profesores.practica;
    db.profesores = PST.profesores;
    db.estudiantes = PST.estudiantes;
}
function updateDB(){
    //actualiza el archivo JSON
    fs.writeFileSync('./src/pstDatabase.json', JSON.stringify(PST), 'utf-8');
}

db.init = init;
db.updateDB = updateDB;

module.exports = db;
