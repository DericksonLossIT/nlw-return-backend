import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "f2c0842ca59964",
        pass: "9f85f9c72c324e",
    },
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Equipe feedget <oi@feedget.com>",
            to: "Derickson Loss <dericksonlossit@gmail.com>",
            subject,
            html: body
        });
    }
}
