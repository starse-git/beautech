'use client';
import React from 'react'
import MailContentComponent from '@/components/Contact/MailContentComponent'
import { sendEmail } from '@/utils/actions/send-mail'    
import TitleEngJPComponent from '@/components/common/TitleEngJPComponent'

const ContactPage = () => {
  return (
    <div className="w-full mt-0 md:mt-[100px]">
      <div className="container my-20 md:my-40">
      <TitleEngJPComponent
          titleEn1=""
          titleJp="お問い合わせ"
          className="mb-6 md:mb-10"
        >
          <span className="text-pinkBrand">C</span>ONTACT
        </TitleEngJPComponent>
        <MailContentComponent sendEmail={sendEmail}/>
      </div>
    </div>
  )
}

export default ContactPage;
