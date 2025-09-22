"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-hot-toast";
import { useState } from "react";
import PersonalInfoComponent from "@/components/recruit/entryForm/PersonalInfoComponent";
import { sendInfraMail } from "@/utils/actions/send-mail";

const InfraFormComponent = () => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    lastName: z.string().min(1, "姓を入力してください。 (漢字)."),
    firstName: z.string().min(1, "名を入力してください。 (漢字)."),
    lastNameKana: z.string().min(1, "姓を入力してください。 (カタカナ)."),
    firstNameKana: z.string().min(1, "名を入力してください。 (カタカナ)."),
    email: z.string().email("メールアドレスを入力してください!"),
    birthDate: z.string().min(1, "生年月日を入力してください!"),
    phone: z.string().min(10, "電話番号を入力してください!"),
    address: z.string().min(1, "住所を入力してください!"),
    salaryRange: z.object({
      min: z.string().min(1, "最小給与を入力してください!"),
      max: z.string().min(1, "最大給与を入力してください!"),
    }),
    employmentType: z.enum(
      ["正社員", "契約社員", "派遣社員", "業務委託"],
      {
        message: "希望の契約形態を選択してください!"
      }
    ),
    os: z.array(z.string()).min(1, "OSを選択してください!"),
    infra: z.array(z.string()).min(1, "インフラ分類を選択してください!"),
    // skillSheet: z.string().min(1, "スキルシートをアップロードしてください"),
    remarks: z.string().max(400, "備考を入力してください!"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastName: "",
      firstName: "",
      lastNameKana: "",
      firstNameKana: "",
      email: "",
      birthDate: "",
      phone: "",
      address: "",
      salaryRange: {
        min: "",
        max: "",
      },
      employmentType: "正社員",
      os: [],
      infra: [],
      //   skillSheet: "",
      remarks: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const { success, error } = await sendInfraMail(values);
      if (success) {
        form.reset();
        toast.success("フォームが送信されました");
      } else {
        if (error) {
          toast.error("送信に失敗しました");
        }
      }
    } catch (error) {
      if (error) {
        toast.error("送信に失敗しました");
      }
    } finally {
      setLoading(false);
    }
  };

  const osOptions = [
    { id: "windows", label: "Windows" },
    { id: "linux", label: "Linux" },
    { id: "mac", label: "Mac" },
    { id: "aix", label: "AIX" },
  ];

  const infraOptions = [
    { id: "サーバエンジニア", label: "サーバーエンジニア" },
    { id: "ストレージエンジニア", label: "ストレージエンジニア" },
    { id: "ネットワークエンジニア", label: "ネットワークエンジニア" },
    { id: "データベースエンジニア", label: "データベースエンジニア" },
  ];
  return (
    <div className="bg-white-box">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      {"例（姓）：鈴木"}
                      <span className="text-red-500 ml-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border-gray-300"
                        placeholder={"例（姓）：鈴木"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      {"例（名）：太郎"}
                      <span className="text-red-500 ml-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border-gray-300"
                        placeholder={"例（名）：太郎"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="lastNameKana"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      {"例（姓）：スズキ"}
                      <span className="text-red-500 ml-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border-gray-300"
                        placeholder={"例（姓）：スズキ"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstNameKana"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-normal">
                      {"例（名）：タロウ"}
                      <span className="text-red-500 ml-1">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="border-gray-300"
                        placeholder={"例（名）：タロウ"}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-normal">
                    {"生年月日"}
                    <span className="text-red-500 ml-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input type="date" className="border-gray-300" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-normal">
                    {"メール"}
                    <span className="text-red-500 ml-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-gray-300"
                      placeholder={"例：sample@sample.com"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-normal">
                    {"電話番号"}
                    <span className="text-red-500 ml-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-gray-300"
                      placeholder={"例：03-1234-5678"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-normal">
                    {"住所"}
                    <span className="text-red-500 ml-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="border-gray-300"
                      placeholder={"例：〒103-0004　東京都中央区東日本橋1丁目3-3　TYDビル 3F"}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="salaryRange.min"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-normal">
                    {"最小給与（円）"}
                    <span className="text-red-500 ml-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder={"例：100000"}
                      className="border-gray-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="salaryRange.max"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-normal">
                    {"最大給与（円）"}
                    <span className="text-red-500 ml-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder={"例：200000"}
                      className="border-gray-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="employmentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-normal">
                  {"希望の契約形態"}
                  <span className="text-red-500 ml-1">*</span>
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="正社員" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {"正社員"}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="契約社員" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {"契約社員"}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="派遣社員" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {"派遣社員"}
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="業務委託" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        {"業務委託"}
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage className="text-red-500 text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="os"
            render={() => (
              <FormItem>
                <FormLabel className="text-sm font-normal">
                  {"OS"}
                  <span className="text-red-500 ml-1">*</span>
                </FormLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {osOptions.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="os"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex items-center space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage className="text-red-500 text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="infra"
            render={() => (
              <FormItem>
                <FormLabel className="text-sm font-normal">
                  {"インフラ分類"}
                  <span className="text-red-500 ml-1">*</span>
                </FormLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {infraOptions.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="infra"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className="flex items-center space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage className="text-red-500 text-xs" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="remarks"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-normal">
                  {"備考"}
                  <span className="text-red-500 ml-1">*</span>
                </FormLabel>
                <FormDescription className="text-xs text-gray-500">
                  ※{"*備考は400文字以内で入力してください。"}
                </FormDescription>
                <FormControl>
                  <Textarea
                    placeholder="備考を入力してください"
                    className="resize-none border-gray-300 h-32"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-red-500 text-xs" />
              </FormItem>
            )}
          />

          <div className="col-span-2 h-[300px] overflow-y-auto border border-gray-300 rounded-md p-5">
            <PersonalInfoComponent />
          </div>

          <div className="flex space-x-2 items-center">
            <Checkbox
              checked={checked}
              onCheckedChange={(checked) => {
                setChecked(checked as boolean);
              }}
            />
            <span className="text-sm font-normal text-red-500">
              {"個人情報の取り扱いに同意する必要です。"}
            </span>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="inline-block w-full max-w-[300px] md:max-w-[400px] mx-auto h-[50px] max-md:mx-auto bg-blue-500 text-white font-bold text-sm md:text-base transition-all duration-300 cursor-pointer bg-gradient-to-r from-orangeBrand to-purpleBrand"
              disabled={!checked || loading}
            >
              <span className="relative flex items-center justify-center h-full px-10">
                {loading ? "送信中 . . ." : "送信"}
                <span
                  className={`absolute right-5 top-1/2 w-[45px] h-[1px] bg-white -translate-y-1/2`}
                />

                <span
                  className={`absolute right-5 top-1/2 w-[1px] h-[10px] bg-white rotate-[-45deg] -translate-x-[2px] -translate-y-[8px]`}
                />
              </span>
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default InfraFormComponent;
