'use server';
import nodemailer from 'nodemailer';
// import mailformSchema from '@/utils/validation/mail-form';
import { getErrorMessage } from '@/utils/error';
import { FormData, FormData2 } from '@/types/mail-form';

export const sendEmail = async (formData: FormData) => {
  try {
   // mailformSchema.parse(formData);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Admin Email Template
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <style>
            body { font-family: Arial, sans-serif; color: #ccc; }
            strong { color: #000; }
            .container { padding: 20px; border: 1px solid #ddd; background: #f9f9f9; }
            .footer { font-size: 12px; color: #777; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>${formData.yourName}様より、</h2>
            <p>下記の問い合わせがございます。</p>
            <p>------------------------------------------------------------</p>
            <p>会社名：<strong>${formData.companyName}</strong></p>
            <p>お名前：<strong>${formData.yourName}</strong></p>
            <p>メールアドレス：<strong>${formData.email}</strong></p>
            <p>電話番号：<strong>${formData.phone}</strong></p>
            <p>郵便番号：<strong>${formData.postCode}</strong></p>
            <p>住所：<strong>${formData.address}</strong></p>
            <p>件名：<strong>${formData.subject}</strong></p>
            <p>内容：<strong>${formData.message}</strong></p>
            <p>------------------------------------------------------------</p>
            
            <p>BEAU-TECH株式会社</p>
            <p>〒104-0043 東京都中央区湊2-4-1 TOMACビル５階</p>
            <p>Email: ${process.env.MAIL_ADMIN_ADDRESS}</p>
            <p>TEL: 03-6661-2879</p>
            <p class="footer">※このメールはシステムから自動送信されています。</p>
          </div>
        </body>
      </html>
    `;

    // User Confirmation Email Template
    const userEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <style>
            body { font-family: Arial, sans-serif; color: #ccc; }
            strong { color: #000; }
            .container { padding: 20px; border: 1px solid #ddd; background: #f9f9f9; }
            .footer { font-size: 12px; color: #777; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>${formData.yourName}様</h2>
            <p>BEAU-TECH株式会社にお問い合わせいただき、ありがとうございます。</p>
            <p>問い合わせ内容は下記となります。</p>
            <p>------------------------------------------------------------</p>
            <p>お名前：<strong>${formData.yourName}</strong></p>
            <p>メールアドレス：<strong>${formData.email}</strong></p>
            <p>電話番号：<strong>${formData.phone}</strong></p>
            <p>郵便番号：<strong>${formData.postCode}</strong></p>
            <p>住所：<strong>${formData.address}</strong></p>
            <p>件名：<strong>${formData.subject}</strong></p>
            <p>内容：<strong>${formData.message}</strong></p>
            <p>------------------------------------------------------------</p>
            <p>お問い合わせ内容を確認のうえ、担当者よりご連絡いたします。</p>
            <p>何かご不明な点がございましたら、お気軽にお問い合わせください。</p>
            <p>よろしくお願いいたします。</p>
            <p>------------------------------------------------------------</p>
            <p>BEAU-TECH株式会社</p>
            <p>Email: ${process.env.MAIL_ADMIN_ADDRESS}</p>
            <p>弊社の担当者からご連絡させていただくので少々お待ちくださいませ。</p>
            <p class="footer">※このメールはシステムから自動送信されています。</p>
          </div>
        </body>
      </html>
    `;

    const mailOptionsUser = {
      from: process.env.SMTP_USERNAME,
      to: formData.email,
      subject: "お問い合わせありがとうございます",
      html: userEmailHtml,
    };

    const mailOptionsAdmin = {
      from: process.env.SMTP_USERNAME,
      to: process.env.MAIL_ADMIN_ADDRESS,
      subject: `新規お問い合わせ: ${formData.subject}`,
      html: adminEmailHtml,
    };

    // Send emails concurrently
    await Promise.all([
      transporter.sendMail(mailOptionsUser),
      transporter.sendMail(mailOptionsAdmin),
    ]);

    return { success: true, error: null };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: getErrorMessage(error) };
  }
};
export const sendEmail2 = async (formData: FormData2) => {
  try {
   // mailformSchema.parse(formData);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Admin Email Template
    const adminEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <style>
            body { font-family: Arial, sans-serif; color: #ccc; }
            strong { color: #000; }
            .container { padding: 20px; border: 1px solid #ddd; background: #f9f9f9; }
            .footer { font-size: 12px; color: #777; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>${formData.yourName}様より、</h2>
            <p>下記の問い合わせがございます。</p>
            <p>------------------------------------------------------------</p>
            <p>お名前：<strong>${formData.yourName}</strong></p>
            <p>メールアドレス：<strong>${formData.email}</strong></p>
            <p>電話番号：<strong>${formData.phone}</strong></p>
            <p>郵便番号：<strong>${formData.postCode}</strong></p>
            <p>住所：<strong>${formData.address}</strong></p>
            <p>件名：<strong>${formData.subject}</strong></p>
            <p>内容：<strong>${formData.message}</strong></p>
            <p>------------------------------------------------------------</p>
            
            <p>BEAU-TECH株式会社</p>
            <p>〒104-0043 東京都中央区湊2-4-1 TOMACビル５階</p>
            <p>Email: ${process.env.MAIL_ADMIN_ADDRESS}</p>
            <p>TEL: 03-6661-2879</p>
            <p class="footer">※このメールはシステムから自動送信されています。</p>
          </div>
        </body>
      </html>
    `;

    // User Confirmation Email Template
    const userEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <style>
            body { font-family: Arial, sans-serif; color: #ccc; }
            strong { color: #000; }
            .container { padding: 20px; border: 1px solid #ddd; background: #f9f9f9; }
            .footer { font-size: 12px; color: #777; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>${formData.yourName}様</h2>
            <p>BEAU-TECH株式会社にお問い合わせいただき、ありがとうございます。</p>
            <p>問い合わせ内容は下記となります。</p>
            <p>------------------------------------------------------------</p>
            <p>お名前：<strong>${formData.yourName}</strong></p>
            <p>メールアドレス：<strong>${formData.email}</strong></p>
            <p>電話番号：<strong>${formData.phone}</strong></p>
            <p>郵便番号：<strong>${formData.postCode}</strong></p>
            <p>住所：<strong>${formData.address}</strong></p>
            <p>件名：<strong>${formData.subject}</strong></p>
            <p>内容：<strong>${formData.message}</strong></p>
            <p>------------------------------------------------------------</p>
            <p>お問い合わせ内容を確認のうえ、担当者よりご連絡いたします。</p>
            <p>何かご不明な点がございましたら、お気軽にお問い合わせください。</p>
            <p>よろしくお願いいたします。</p>
            <p>------------------------------------------------------------</p>
            <p>BEAU-TECH株式会社</p>
            <p>Email: ${process.env.MAIL_ADMIN_ADDRESS}</p>
            <p>弊社の担当者からご連絡させていただくので少々お待ちくださいませ。</p>
            <p class="footer">※このメールはシステムから自動送信されています。</p>
          </div>
        </body>
      </html>
    `;

    const mailOptionsUser = {
      from: process.env.SMTP_USERNAME,
      to: formData.email,
      subject: "お問い合わせありがとうございます",
      html: userEmailHtml,
    };

    const mailOptionsAdmin = {
      from: process.env.SMTP_USERNAME,
      to: process.env.MAIL_ADMIN_ADDRESS,
      subject: `新規お問い合わせ: ${formData.subject}`,
      html: adminEmailHtml,
    };

    // Send emails concurrently
    await Promise.all([
      transporter.sendMail(mailOptionsUser),
      transporter.sendMail(mailOptionsAdmin),
    ]);

    return { success: true, error: null };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: getErrorMessage(error) };
  }
};

