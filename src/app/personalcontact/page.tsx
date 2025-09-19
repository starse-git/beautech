import MailContentComponent from '@/components/personalcontact/MailContentComponent';
import React from 'react'
import TitleEngJPComponent from '@/components/common/TitleEngJPComponent';
import { sendEmail2 } from '@/utils/actions/send-mail';

const PersonalContactPage = () => {
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
        <MailContentComponent sendEmail={sendEmail2}/>
      </div>
    </div>
  )
}

export default PersonalContactPage;
