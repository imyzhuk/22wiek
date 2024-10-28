import { mailer } from '@/services/mailer';

export const sendEmail = async (
  to: string,
  subject: string,
  template: string,
) => {
  try {
    await mailer.sendMail({
      from: `22wiek.by shop <${process.env.NODEMAILER_USERNAME}>`,
      to: to,
      subject: subject,
      html: template,
    });
  } catch (error) {
    throw new Error('Произошла проблема с отправкой письма!');
  }
};
