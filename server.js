const express = require('express')
const router = express.Router()
const cors = require('cors')
const nodemailer = require('nodemailer')

//server used to send emails
const app = express()

app.use(cors())
app.use(express.json())
app.use("/", router)
app.listen(5000, () => console.log('server is running '))
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "*********@gmail.com",
        pass: ""
    }
})

contactEmail.verify((error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Ready to send ');
    }
})

router.post('/contact', (req, res) => {
    const [firstName, lastName, email, phone, message] = req.body
    const mail = {
        from: firstName,
        to: '**********@gmail.com',
        subject: "Concat From Submission - Portifilo",
        html: `<p>Name:${firstName + lastName}</p>
               <p>Email:${email} </p>
               <p>Phone:${phone}</p>
               <p>Message:${message}</p>`

    }
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error)
        } else {
            res.json({ code: 200, status: "Message Sent" })
        }
    })
})