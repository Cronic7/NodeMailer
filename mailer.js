const nodemailer= require('nodemailer')

// Creating transporter object using gmail smtp

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // `true` for port 465, `false` for all other ports
    auth:{
        user: 'your-email@gmail.com',  // Replace with your Gmail email address
        pass: 'your-password'          // Replace with your Gmail password or an app-specific password
    }
});

// email options

const mailOptions={
    from: 'your-email@gmail.com',   // Replace with your Gmail email address
    to: 'recipient@example.com',    // Replace with the recipient's email address
    subject:'Test form node.js',//subject of email
    text:"Hello from nodemailer",//Message of the email
//attachments
    attachments: [
        {
          filename: 'document.pdf',  // Replace with your PDF file name
          path: 'path/to/your/document.pdf',  // Replace with the path to your PDF file
          contentType: 'application/pdf'
        },
        {
          filename: 'image.jpg', 
          path: 'path/to/your/image.jpg',  // Replace with your image file path
          contentType: 'image/jpg'
          
        }
      ]
       
    
}

//sent the email


transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        console.error("Error:",error.msg)
    }else{
        console.log("Email sent:",info.response)
    }
});