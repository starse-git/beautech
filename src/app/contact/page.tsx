'use client';
import React from 'react'
import MailContentComponent from '@/components/Contact/MailContentComponent'
import { sendEmail } from '@/utils/actions/send-mail'    
import TitleEngJPComponent from '@/components/common/TitleEngJPComponent'

const ContactPage = () => {
  return (
    <div className="container">
      <TitleEngJPComponent
        titleEn1=""
        titleJp="お問い合わせ"
        className="mb-6 md:mb-10"
      >
        <span className="text-pinkBrand">C</span>ONTACT
      </TitleEngJPComponent>
      <MailContentComponent sendEmail={sendEmail} />
    </div>
  );
}

export default ContactPage;
