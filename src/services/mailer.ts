import nodemailer from 'nodemailer';

export const mailer = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.NODEMAILER_USERNAME,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});
