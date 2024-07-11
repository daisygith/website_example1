const express = require('express');
const http= require('http');
const path=require('path');
const nodemailer = require('nodemailer');

const app= express();
const server = http.Server(app);
const port = 500;

app.set("port",port);
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/assets', express.static('assets'))

//Routing
app.get("/", function(req,response){
    response.sendFile(path.join(__dirname, "index.html"));
})
app.get("/portfolio", function(req,response){
    response.sendFile(path.join(__dirname, "portfolio.html"));
})
app.get("/offer", function(req,response){
    response.sendFile(path.join(__dirname, "offer.html"));
})
app.get("/about", function(req,response){
    response.sendFile(path.join(__dirname, "about.html"));
})
app.get("/contact", function(req,response){
    response.sendFile(path.join(__dirname, "contact.html"));
})
app.get("/privacy_policy", function(req,response){
    response.sendFile(path.join(__dirname, "privacy_policy.html"));
})

app.post("/send_email",function (req,response){
    const fullName=req.body.fullName;
    const email=req.body.email;
    const numberPhone=req.body.numberPhone;
    const subject=req.body.subject;
    const message=req.body.message;
    const to = 'daisy.gith@gmail.com';


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'daisy.gith@gmail.com',
            pass: 'some_code'
        }
    });

    const mailOptions = {
        from: `formularz kontaktowy: <${email}>`,
        to: to,
        subject : subject,
        text : `Wiadomość od:${fullName} \n\n tel:${numberPhone}\n\n email:${email}\n\n Treść:${message}`,
    }

    transporter.sendMail(mailOptions,function (error,info){
        if(error){
            console.log(error);
        } else {
            console.log("Email Send:" + info.response)
        }
        response.redirect("/");
    });
});

//initialize Web Server
server.listen(port,function (){
    console.log("Starting Server on port: " + port);
})
