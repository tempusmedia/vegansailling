
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
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
    let info = await transporter.sendMail({
        from: 'vegan@tempusmedia.hr', // sender address
        to: "edo@tempusmedia.hr", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "ludnica :D zamisli samo mogućnosti. zaspamaš nekog s for loopom :D XD", // plain text body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}


