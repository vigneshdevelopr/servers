import nodemailer from 'nodemailer'
export const mailerFunc = async (requiredOption) => {
  const { toAddress, mailSubject, mailContent } = requiredOption;
  try {
    const transporter = await nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.senderMail,
        pass: process.env.senderPass,
      },
    });

    const mailOption = {
      from: process.env.senderMail,
      to: toAddress,
      subject: mailSubject,
      text: mailContent,
    };
    const mailResult = await transporter.sendMail(mailOption);
    return mailResult;
  } catch (e) {
    console.log(e.message, " err-in nodemailer");
  }
};
