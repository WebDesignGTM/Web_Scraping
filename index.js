const express=require("express");
const app=express();
var mysql=require("mysql");
const bodyPareser=require("body-parser");
const { json } = require("express");
app.use(bodyPareser.urlencoded({extended:false}));
app.use(bodyPareser.json());
const config ={
    host: 'b9bgqyullwkheivnwahf-mysql.services.clever-cloud.com',
    user:'uadufcthwtqmsupj',
    password:'f4lDaDIL9tXlI666QPLC',
    database:'b9bgqyullwkheivnwahf',
    port:'3306'

};


const pool=mysql.createPool(config);
app.get('/',(request,response)=>{
    response.sendFile('ejem.html',{root:__dirname});

    console.log("se antendio una solicitud");
});

app.get('/ver/', (request,response)=>{
		
    pool.query("SELECT * FROM laptops; ",(errror,result)=>{
        
        if(errror) throw errror;
        response.json(result);
        console.log(result);
    });
})

app.listen(5555,()=>{
    console.log("servicio activo");
});