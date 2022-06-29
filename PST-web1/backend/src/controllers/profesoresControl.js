const prfControl1 = {};


const db= require('./database.js');

//estControl.getEstudiantes = (req,res)=>res.send('<h1>Lista de estudiantes</h1>');
prfControl1.getProfesoresTeoria = function(req,res){res.json(db.teoria)};
prfControl1.getProfesoresPractica = function(req,res){res.json(db.practica)};


prfControl1.postProfesoresTeoria=(req,res)=>{
    const {nombre,edad}=req.body;
    if(!nombre || !edad){
        res.status(400).sed("Datos incompletos {nombre, edad}");
        return;
    }
    const profesor={
        nombre,
        edad
    }
    const profesor2=db.teoria.find(
        (prof)=>prof.nombre==profesor.nombre
    );
    
    if(!(profesor2==null)){
        res.status(400).send("Profesor ya está agregado");
        return;
    }

    db.teoria.push(profesor);
    db.updateDB();
    res.send('Profesor ingresado con éxito');
}


prfControl1.putProfesoresTeoria = (req,res)=>{
    const {nombre,edad} = req.body;

    if(!nombre || !edad){
        res.status(400).send("Datos incompletos {nombre, apellido}");
        return;
    }
    const profesor = db.teoria.find(
        (prof)=>prof.nombre==req.params.nombre);

    if(profesor == null){                                     
        res.status(400).send("PROFESOR NO ENCONTRADO");       
        return;                                                 
    }      

    profesor.nombre = nombre;
    profesor.edad = edad;
    db.updateDB();
    res.send('Profesor actualizado');
}

prfControl1.deleteProfesoresTeoria=(req,res)=>{
    const index=db.teoria.findIndex(
        (prof)=>prof.nombre==req.params.nombre
    );
    if(index<0){
        res.status(400).send("Nombre de profesor no encontrado");
        return;
    }
    db.teoria.splice(index,1);
    db.updateDB();
    res.send('Profesor eliminado');
}




prfControl1.postProfesoresPractica=(req,res)=>{
    const {nombre,edad}=req.body;
    if(!nombre || !edad){
        res.status(400).sed("Datos incompletos {nombre, edad}");
        return;
    }
    const profesor={
        nombre,
        edad
    }
    const profesor2=db.practica.find(
        (prof)=>prof.nombre==profesor.nombre
    );
    
    if(!(profesor2==null)){
        res.status(400).send("Profesor ya está agregado");
        return;
    }

    db.practica.push(profesor);
    db.updateDB();
    res.send('Profesor ingresado con éxito');
}

prfControl1.putProfesoresPractica = (req,res)=>{
    const {nombre,edad} = req.body;

    if(!nombre || !edad){
        res.status(400).send("Datos incompletos {nombre, apellido}");
        return;
    }
    const profesor = db.practica.find(
        (prof)=>prof.nombre==req.params.nombre);

    if(profesor == null){                                     
        res.status(400).send("PROFESOR NO ENCONTRADO");       
        return;                                                 
    }      

    profesor.nombre = nombre;
    profesor.edad = edad;
    db.updateDB();
    res.send('Profesor actualizado');
}

prfControl1.deleteProfesoresPractica=(req,res)=>{
    const index=db.practica.findIndex(
        (prof)=>prof.nombre==req.params.nombre
    );
    if(index<0){
        res.status(400).send("Nombre de profesor no encontrado");
        return;
    }
    db.practica.splice(index,1);
    db.updateDB();
    res.send('Profesor eliminado');
}

module.exports = prfControl1;
