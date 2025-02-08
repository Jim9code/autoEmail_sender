const express = require("express")
const dotenv = require("dotenv").dotenv
const port = process.env.PORT|| 5000
const nodemailer = require("nodemailer")


const app = express()

  // emails in user
 const senderEmail = 'rinfwang4@gmail.com';
 const clientEmail = 'jethwork4@gmail.com';


//  email text
const html = `
<div style="background:white;">
<center> <h1>Hello ${clientEmail}</h1> </center>
 <center><P>Happy using  nodemailer ibukun? </p></center>
 <br><br>
 <a href="https://codeblog-five-rosy.vercel.app/">Click</a>
 </div>
`;



async function main() {

// email server for gmail pass: your email  app passwors in setting
    const transporter =  nodemailer.createTransport({
         host:"smtp.gmail.com",
         port: '465',
         secure: true,
         auth:{
             user:senderEmail,
             pass: 'your google ap password',

         }

      });



     const info =   await transporter.sendMail({
           from:senderEmail,
           to: clientEmail,
           subject:'testing testing ',
           html:html,
      })

       console.log("Message sent", info.messageId)
}

main()
.catch(e => console.log(e));






app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})
