const nodemailer =require('nodemailer')




const transporter = nodemailer.createTransport({
    host:'smtp.mailgun.org',
    port: 587,
    secure: false,

    auth: {
       user:'postmaster@arzitpanda.me',
       pass:"412a7a246dcc933e3a9504194b71132d-c9746cf8-5c1b0de7"

    }
})



const sendMail=(to)=>{


    transporter.sendMail({
        to,
        from:"postmaster@arzitpanda.me",
        subject: 'suessfulsignup',
        text: 'welcome to momedical'+to,
        html: '<div>it is a testmail</div>',
    })



}

module.exports ={transporter,sendMail}