/* eslint-disable import/no-anonymous-default-export */
export default function (req, res) {
    require('dotenv').config()
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "mail.turbo.farm",
      auth: {
        user: 'turbofa1',
        pass: process.env.password,
      },
      secure: true,
    })
    const mailData = {
      from: 'arashhosseini@turbo.farm',
      to: 'info.arashhosseini@gmail.com',
      subject: `Message From Arashhosseini.ir`,
      text: req.body.message,
      html: `<h1>نام ارسال کننده: ${req.body.name}</h1><h2>موضوع پیام:${req.body.message}</h2><h3>ایمیل:
      ${req.body.email}</h3><h3>شماره تماس:${req.body.number}</h3>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200)
  }