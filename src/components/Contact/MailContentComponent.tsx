"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { FormData } from '@/types/mail-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import HandlingPersonalInfoComponent from '@/components/Contact/HandlingPersonalInfoComponent';
import { z } from 'zod';

const MailContentComponent = ({sendEmail}: {sendEmail: (formData: FormData) => Promise<{success: boolean, error: string | null}>}) => { 
  const mailFormSchema = z.object({
    companyName: z.string().min(1, "会社名が必須です。"),
    yourName: z.string().min(1, "お名前が必須です。"),
    email: z.string().min(1, "メールアドレスが必須です。").email("メールアドレスが正しくありません。"),
    phone: z.string().min(1, "電話番号が必須です。"),
    subject: z.string().min(1, "件名が必須です。"),
    message: z.string().min(1, "メッセージが必須です。"),
  });

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(mailFormSchema),
  });

  const onSubmit = async (formData: FormData) => {
    const result = await sendEmail(formData);

    if (result.success) {
      toast.success("メールを送信しました。", {
        duration: 3000,
        position: 'top-right',
        icon: '✅',
      });
      reset();
    } else {
      toast.error(result.error ?? "送信に失敗しました。", {
        duration: 3000,
        position: 'top-right',
        icon: '🚫',
      });
    }
  }

  return (
    <div className="bg-white-box">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4 space-y-2"
      >
        {/* 会社名 */}
        <div className="relative col-span-2 md:col-span-1">
          <input
            type="text"
            id="companyName"
            placeholder=""
            className="peer block w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            {...register("companyName")}
          />
          <label
            htmlFor="companyName"
            className="absolute left-3 top-2 text-black text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            会社名<span className="text-red-500">*</span>
          </label>
          {errors.companyName && (
            <p className="text-red-500">{errors.companyName.message}</p>
          )}
        </div>

        {/* お名前 */}
        <div className="relative col-span-2 md:col-span-1">
          <input
            type="text"
            placeholder=""
            id="yourName"
            className="peer block w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            {...register("yourName")}
          />
          <label
            htmlFor="yourName"
            className="absolute left-3 top-2 text-black text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            お名前<span className="text-red-500">*</span>
          </label>
          {errors.yourName && (
            <p className="text-red-500">{errors.yourName.message}</p>
          )}
        </div>

        {/* メールアドレス */}
        <div className="relative col-span-2 md:col-span-1">
          <input
            type="text"
            placeholder=""
            id="email"
            className="peer block w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            {...register("email")}
          />
          <label
            htmlFor="email"
            className="absolute left-3 top-2 text-black text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            メールアドレス<span className="text-red-500">*</span>
          </label>
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* 電話番号 */}
        <div className="relative col-span-2 md:col-span-1">
          <input
            type="text"
            placeholder=""
            id="phone"
            className="peer block w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            {...register("phone")}
          />
          <label
            htmlFor="phone"
            className="absolute left-3 top-2 text-black text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            電話番号<span className="text-red-500">*</span>
          </label>
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* 郵便番号 */}
        <div className="relative col-span-2 md:col-span-1">
          <input
            type="text"
            placeholder=""
            id="postCode"
            className="peer block w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            {...register("postCode")}
          />
          <label
            htmlFor="postCode"
            className="absolute left-3 top-2 text-black text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            郵便番号
          </label>
        </div>

        {/* 住所 */}
        <div className="relative col-span-2 md:col-span-1">
          <input
            type="text"
            placeholder=""
            id="address"
            className="peer block w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            {...register("address")}
          />
          <label
            htmlFor="address"
            className="absolute left-3 top-2 text-black text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            住所
          </label>
        </div>

        {/* 件名 */}
        <div className="relative col-span-2">
          <input
            type="text"
            placeholder=""
            id="subject"
            className="peer block w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            {...register("subject")}
          />
          <label
            htmlFor="subject"
            className="absolute left-3 top-2 text-black text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            件名<span className="text-red-500">*</span>
          </label>
          {errors.subject && (
            <p className="text-red-500">{errors.subject.message}</p>
          )}
        </div>

        {/* メッセージ */}
        <div className="relative col-span-2">
          <textarea
            id="message"
            placeholder=""
            rows={5}
            className="peer block w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            {...register("message")}
          />
          <label
            htmlFor="message"
            className="absolute left-3 top-2 text-black text-xs transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500"
          >
            メッセージ<span className="text-red-500">*</span>
          </label>
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </div>

        {/* 個人情報の取り扱い */}
        <div className="col-span-2 h-[300px] overflow-y-auto border border-gray-300 rounded-md p-5">
          <HandlingPersonalInfoComponent />
        </div>

        {/* 同意チェック */}
        <label className="col-span-2 mb-5 block">
          <input className="accent-primary" type="checkbox" />
          &nbsp;個人情報の取扱いについて同意する
        </label>

        {/* 送信ボタン */}
        <div className="col-span-2 flex justify-center mb-5 md:mb-8">
          <button
            type="submit"
            className="inline-block w-full max-w-[300px] md:max-w-[400px] mx-auto h-[50px] max-md:mx-auto bg-blue-500 text-white font-bold text-sm md:text-base transition-all duration-300 cursor-pointer bg-gradient-to-r from-orangeBrand to-purpleBrand"
            disabled={isSubmitting}
          >
            <span className="relative flex items-center justify-center h-full px-10">
              {isSubmitting ? "送信中 . . ." : "送信"}

              <span
                className={`absolute right-5 top-1/2 w-[45px] h-[1px] bg-white -translate-y-1/2`}
              />

              <span
                className={`absolute right-5 top-1/2 w-[1px] h-[10px] bg-white rotate-[-45deg] -translate-x-[2px] -translate-y-[8px]`}
              />
            </span>
          </button>
          {/* <div className="max-w-[300px] md:max-w-[400px] mx-auto mt-6 md:mt-14">
              <ButtonComponent
                href="/"
                textColor="text-white"
                bgGradient="bg-gradient-to-r from-orangeBrand to-purpleBrand"
                arrowColor="bg-white"
              >
                エントリ
              </ButtonComponent>
            </div> */}
        </div>
      </form>
    </div>
  );
}

export default MailContentComponent;
