var express = require('express')
const nodemailer = require("nodemailer");
var app = express()
app.use(express.json())
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send([{ id: 1, hello: 'world', title: 'ovo isto radi' }, { id: 2, hello: 'world', title: 'ovo isto radi drugi' }, { id: 3, hello: 'world', title: 'treći' }])
})
app.post('/', (req, res) => {
    async function main() {
        console.log(req.body)
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "mail.tempusmedia.hr",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: 'vegan@tempusmedia.hr', // generated ethereal user
                pass: 'EdQj4RkA4fB6', // generated ethereal password
            },
        });

        // send mail with defined transport object
        if (req.body.subject == 'Private vegan sailing') {
            let info = await transporter.sendMail({
                replyTo: req.body.userMail,
                from: 'vegan@tempusmedia.hr', // sender address
                to: "vegan@tempusmedia.hr, info@vegansailing.eu", // list of receivers
                subject: req.body.subject, // Subject line
                text: 'subject: ' + req.body.subject + '\n' + 'user mail: ' + req.body.userMail + '\n' + 'name: ' + req.body.name + '\n' + 'accomodation type' + req.body.accomodation + '\n' + 'number of people: ' + req.body.numberOfPeople + '\n' + 'date: ' + req.body.date + '\n' + 'location: ' + req.body.location + '\n' + 'message: ' + req.body.text + '\n' + 'cook: ' + req.body.hireCook + '\n' + 'skipper: ' + req.body.hireSkipper

            });
        } if (req.body.subject == 'Book-a-Cabin') {
            let info = await transporter.sendMail({
                replyTo: req.body.userMail,
                from: 'vegan@tempusmedia.hr', // sender address
                to: "vegan@tempusmedia.hr, info@vegansailing.eu", // list of receivers
                subject: req.body.subject, // Subject line
                text: 'subject: ' + req.body.subject + '\n' + 'user mail: ' + req.body.userMail + '\n' + 'name: ' + req.body.name + '\n' + 'accomodation type' + req.body.accomodation + '\n' + 'number of people: ' + req.body.numberOfPeople + '\n' + 'Date and Location: ' + req.body.dateLocation + '\n' + 'message: ' + req.body.text + '\n' + 'Discount code: ' + req.body.discountCode

            });
        }

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

        console.log('radi')


    }
    main()

    //my response - vrati nazad  !!! napisati if else ukoliko je slanje uspješno. vidit s kristijanom kako to provjeriti točno
    res.end("success");
});
module.exports = {
    path: "/api/",
    handler: app
}







