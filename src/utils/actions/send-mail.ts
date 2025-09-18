'use server';
import nodemailer from 'nodemailer';
import mailformSchema from '@/utils/validation/mail-form';
import { getErrorMessage } from '@/utils/error';
import { FormData } from '@/types/mail-form';

export const sendEmail = async (formData: FormData) => {
  try {
    mailformSchema.parse(formData);

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
            
            <p>STAR TECH株式会社</p>
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
            <p>STAR TECH株式会社にお問い合わせいただき、ありがとうございます。</p>
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
            <p>STAR TECH株式会社</p>
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


// export const sendSystemEngineerMail = async (formData: SEFormData) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.SMTP_USERNAME,
//         pass: process.env.SMTP_PASSWORD,
//       },
//     });

//     // Admin notification email
//     const adminMailOptions = {
//       from: process.env.SMTP_USERNAME,
//       to: process.env.MAIL_ADMIN_ADDRESS,
//       subject: "新規応募",
//       html: `
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <meta charset="UTF-8" />
//             <style>
//               body { font-family: Arial, sans-serif; color: #333; }
//               h1 { color: #1a73e8; }
//               .content { margin-top: 20px; }
//               .footer { margin-top: 40px; font-size: 0.8em; color: #888; }
//               table { width: 100%; border-collapse: collapse; }
//               th, td { border: 1px solid #ddd; padding: 8px; }
//               th { background-color: #f2f2f2; }
//             </style>
//           </head>
//           <body>
//             <h1>インフラ応募フォーム</h1>
//             <div class="content">
//               <table>
//                 <tr><th>項目</th><th>入力内容</th></tr>
//                 <tr><td>姓</td><td>${formData.lastName}</td></tr>
//                 <tr><td>名</td><td>${formData.firstName}</td></tr>
//                 <tr><td>セイ</td><td>${formData.lastNameKana}</td></tr>
//                 <tr><td>メイ</td><td>${formData.firstNameKana}</td></tr>
//                 <tr><td>メールアドレス</td><td>${formData.email}</td></tr>
//                 <tr><td>生年月日</td><td>${formData.birthDate}</td></tr>
//                 <tr><td>電話番号</td><td>${formData.phone}</td></tr>
//                 <tr><td>住所</td><td>${formData.address}</td></tr>
//                 <tr><td>最小給与</td><td>${formData.salaryRange.min}</td></tr>
//                 <tr><td>最大給与</td><td>${formData.salaryRange.max}</td></tr>
//                 <tr><td>雇用形態</td><td>${formData.employmentType}</td></tr>
//                 <tr><td>OS</td><td>${formData.os.join(', ')}</td></tr>
//                 <tr><td>プログラミング言語</td><td>${formData.programmingLanguages.join(', ')}</td></tr>
//                 <tr><td>データベース</td><td>${formData.databases.join(', ')}</td></tr>
//                 <tr><td>備考</td><td>${formData.remarks}</td></tr>
//               </table>
//             </div>
//           </body>
//         </html>
//       `,
//     };

//     // User confirmation email (Japanese "Thank you" email)
//     const userMailOptions = {
//       from: process.env.SMTP_USERNAME,
//       to: formData.email,
//       subject: "応募完了のお知らせ",
//       html: `
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <meta charset="UTF-8" />
//             <style>
//               body { font-family: Arial, sans-serif; color: #333; }
//               h1 { color: #1a73e8; }
//               .content { margin-top: 20px; }
//               .footer { margin-top: 40px; font-size: 0.8em; color: #888; }
//             </style>
//           </head>
//           <body>
//             <h1>ご応募いただきありがとうございます！</h1>
//             <div class="content">
//               <p>${formData.lastName} ${formData.firstName} 様</p>
//               <p>このたびは、当社のインフラ求人にご応募いただき、誠にありがとうございます。</p>
//               <p>ご入力いただいた情報を確認のうえ、担当者よりご連絡いたしますので、今しばらくお待ちください。</p>
//               <p>何かご不明な点がございましたら、お気軽にお問い合わせください。</p>
//               <p>よろしくお願いいたします。</p>
//             </div>
//             <div class="footer">
//               <p>STAR TECH株式会社</p>
//               <p>Email: ${process.env.SMTP_USERNAME}</p>
//             </div>
//           </body>
//         </html>
//       `,
//     };

//     // Send both emails
//     await Promise.all([
//       transporter.sendMail(adminMailOptions),
//       transporter.sendMail(userMailOptions),
//     ]);

//     return { success: true, error: null };
//   } catch (error) {
//     return { success: false, error: getErrorMessage(error) };
//   }
// };

// export const sendOfficeMail = async (formData: OfficeFormData) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.SMTP_USERNAME,
//         pass: process.env.SMTP_PASSWORD,
//       },
//     });

//     // Admin notification email
//     const adminMailOptions = {
//       from: process.env.SMTP_USERNAME,
//       to: process.env.MAIL_ADMIN_ADDRESS,
//       subject: "新規応募",
//       html: `
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <meta charset="UTF-8" />
//             <style>
//               body { font-family: Arial, sans-serif; color: #333; }
//               h1 { color: #1a73e8; }
//               .content { margin-top: 20px; }
//               .footer { margin-top: 40px; font-size: 0.8em; color: #888; }
//               table { width: 100%; border-collapse: collapse; }
//               th, td { border: 1px solid #ddd; padding: 8px; }
//               th { background-color: #f2f2f2; }
//             </style>
//           </head>
//           <body>
//             <h1>インフラ応募フォーム</h1>
//             <div class="content">
//               <table>
//                 <tr><th>項目</th><th>入力内容</th></tr>
//                 <tr><td>姓</td><td>${formData.lastName}</td></tr>
//                 <tr><td>名</td><td>${formData.firstName}</td></tr>
//                 <tr><td>セイ</td><td>${formData.lastNameKana}</td></tr>
//                 <tr><td>メイ</td><td>${formData.firstNameKana}</td></tr>
//                 <tr><td>メールアドレス</td><td>${formData.email}</td></tr>
//                 <tr><td>生年月日</td><td>${formData.birthDate}</td></tr>
//                 <tr><td>電話番号</td><td>${formData.phone}</td></tr>
//                 <tr><td>住所</td><td>${formData.address}</td></tr>
//                 <tr><td>最小給与</td><td>${formData.salaryRange.min}</td></tr>
//                 <tr><td>最大給与</td><td>${formData.salaryRange.max}</td></tr>
//                 <tr><td>雇用形態</td><td>${formData.employmentType}</td></tr>
//                 <tr><td>職種</td><td>${formData.occupation.join(', ')}</td></tr>
//                 <tr><td>備考</td><td>${formData.remarks}</td></tr>
//               </table>
//             </div>
//           </body>
//         </html>
//       `,
//     };

//     // User confirmation email (Japanese "Thank you" email)
//     const userMailOptions = {
//       from: process.env.SMTP_USERNAME,
//       to: formData.email,
//       subject: "応募完了のお知らせ",
//       html: `
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <meta charset="UTF-8" />
//             <style>
//               body { font-family: Arial, sans-serif; color: #333; }
//               h1 { color: #1a73e8; }
//               .content { margin-top: 20px; }
//               .footer { margin-top: 40px; font-size: 0.8em; color: #888; }
//             </style>
//           </head>
//           <body>
//             <h1>ご応募いただきありがとうございます！</h1>
//             <div class="content">
//               <p>${formData.lastName} ${formData.firstName} 様</p>
//               <p>このたびは、当社のインフラ求人にご応募いただき、誠にありがとうございます。</p>
//               <p>ご入力いただいた情報を確認のうえ、担当者よりご連絡いたしますので、今しばらくお待ちください。</p>
//               <p>何かご不明な点がございましたら、お気軽にお問い合わせください。</p>
//               <p>よろしくお願いいたします。</p>
//             </div>
//             <div class="footer">
//               <p>STAR TECH株式会社</p>
//               <p>Email: ${process.env.SMTP_USERNAME}</p>
//             </div>
//           </body>
//         </html>
//       `,
//     };

//     // Send both emails
//     await Promise.all([
//       transporter.sendMail(adminMailOptions),
//       transporter.sendMail(userMailOptions),
//     ]);

//     return { success: true, error: null };
//   } catch (error) {
//     return { success: false, error: getErrorMessage(error) };
//   }
// };

// export const sendInfraMail = async (formData: InfraFormData) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.SMTP_USERNAME,
//         pass: process.env.SMTP_PASSWORD,
//       },
//     });

//     // Admin notification email
//     const adminMailOptions = {
//       from: process.env.SMTP_USERNAME,
//       to: process.env.MAIL_ADMIN_ADDRESS,
//       subject: "新規応募",
//       html: `
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <meta charset="UTF-8" />
//             <style>
//               body { font-family: Arial, sans-serif; color: #333; }
//               h1 { color: #1a73e8; }
//               .content { margin-top: 20px; }
//               .footer { margin-top: 40px; font-size: 0.8em; color: #888; }
//               table { width: 100%; border-collapse: collapse; }
//               th, td { border: 1px solid #ddd; padding: 8px; }
//               th { background-color: #f2f2f2; }
//             </style>
//           </head>
//           <body>
//             <h1>インフラ応募フォーム</h1>
//             <div class="content">
//               <table>
//                 <tr><th>項目</th><th>入力内容</th></tr>
//                 <tr><td>姓</td><td>${formData.lastName}</td></tr>
//                 <tr><td>名</td><td>${formData.firstName}</td></tr>
//                 <tr><td>セイ</td><td>${formData.lastNameKana}</td></tr>
//                 <tr><td>メイ</td><td>${formData.firstNameKana}</td></tr>
//                 <tr><td>メールアドレス</td><td>${formData.email}</td></tr>
//                 <tr><td>生年月日</td><td>${formData.birthDate}</td></tr>
//                 <tr><td>電話番号</td><td>${formData.phone}</td></tr>
//                 <tr><td>住所</td><td>${formData.address}</td></tr>
//                 <tr><td>最小給与</td><td>${formData.salaryRange.min}</td></tr>
//                 <tr><td>最大給与</td><td>${formData.salaryRange.max}</td></tr>
//                 <tr><td>雇用形態</td><td>${formData.employmentType}</td></tr>
//                 <tr><td>OS</td><td>${formData.os.join(', ')}</td></tr>
//                 <tr><td>インフラ</td><td>${formData.infra.join(', ')}</td></tr>
//                 <tr><td>備考</td><td>${formData.remarks}</td></tr>
//               </table>
//             </div>
//           </body>
//         </html>
//       `,
//     };

//     // User confirmation email (Japanese "Thank you" email)
//     const userMailOptions = {
//       from: process.env.SMTP_USERNAME,
//       to: formData.email,
//       subject: "応募完了のお知らせ",
//       html: `
//         <!DOCTYPE html>
//         <html>
//           <head>
//             <meta charset="UTF-8" />
//             <style>
//               body { font-family: Arial, sans-serif; color: #333; }
//               h1 { color: #1a73e8; }
//               .content { margin-top: 20px; }
//               .footer { margin-top: 40px; font-size: 0.8em; color: #888; }
//             </style>
//           </head>
//           <body>
//             <h1>ご応募いただきありがとうございます！</h1>
//             <div class="content">
//               <p>${formData.lastName} ${formData.firstName} 様</p>
//               <p>このたびは、当社のインフラ求人にご応募いただき、誠にありがとうございます。</p>
//               <p>ご入力いただいた情報を確認のうえ、担当者よりご連絡いたしますので、今しばらくお待ちください。</p>
//               <p>何かご不明な点がございましたら、お気軽にお問い合わせください。</p>
//               <p>よろしくお願いいたします。</p>
//             </div>
//             <div class="footer">
//               <p>STAR TECH株式会社</p>
//               <p>Email: ${process.env.SMTP_USERNAME}</p>
//             </div>
//           </body>
//         </html>
//       `,
//     };

//     // Send both emails
//     await Promise.all([
//       transporter.sendMail(adminMailOptions),
//       transporter.sendMail(userMailOptions),
//     ]);

//     return { success: true, error: null };
//   } catch (error) {
//     return { success: false, error: getErrorMessage(error) };
//   }
// };