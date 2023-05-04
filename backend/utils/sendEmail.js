const nodeMailer=require("nodemailer");


const sendMail=async(options)=>{

    const transporter=nodeMailer.createTransport({
        host:"",
        port:"",
        service:"",
        auth:{
            user:"",
            pass:""
        }
    })
    const mailOptions={
        from:"",
        to:"",
        subject:"",
        text:""
        
        }
        await transporter.sendMail(mailOptions)

}


module.exports=sendMail
