const nodemailer = require("nodemailer");
 
async function sendMailOTP(userEmail, userPassword, recipienEmail) {
    const transporter = nodemailer.createTransport({
        host: "mail.redesignconsultoria.com.br",
        port: 465,
        secure: true,
        auth: {
            user: userEmail,
            pass: userPassword
        },
    });
 
    try {
        const info = await transporter.sendMail({
            from: '"Michel Ziade" <michel.ziade@redesignconsultoria.com.br>',
            to: recipienEmail,
            subject: 'Teste',
            text: "Teste",
            html: `
                <p>Teste</p>
                `
        });
 
        console.log(info.response);
        return info.response
 
    } catch (err) {
        console.error('Error:', err);
        return err;
    }
}
 
async function main() {
    const userEmail = process.env.USER_MAIL
    const userPassword = process.env.USER_PASSWORD
    const recipienEmail = "michel.ziade@redesignconsultoria.com.br"
   
    let respose = await sendMailOTP(userEmail, userPassword, recipienEmail);
   
    return { body: respose };
}