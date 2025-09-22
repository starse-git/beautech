export type FormData = {
  companyName: string;
  yourName: string;
  email: string;
  phone: string;
  postCode?: string;
  address?: string;
  subject: string;
  message: string;
}

export type FormData2 = {
  yourName: string;
  email: string;
  phone: string;
  postCode?: string;
  address?: string;
  subject: string;
  message: string;
}

export type InfraFormData = {
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  email: string;
  birthDate: string;
  phone: string;
  address: string;
  salaryRange: {
    min: string;
    max: string;
  };
  employmentType: "正社員" | "契約社員" | "派遣社員" | "業務委託";
  os: string[];
  infra: string[];
  // skillSheet: string;
  remarks?: string;
};

export type SEFormData = {
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  email: string;
  birthDate: string;
  phone: string;
  address: string;
  salaryRange: {
    min: string;
    max: string;
  };
  employmentType: "正社員" | "契約社員" | "派遣社員" | "業務委託";
  os: string[];
  programmingLanguages: string[];
  databases: string[];
  remarks?: string;
};

export type OfficeFormData = {
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  email: string;
  birthDate: string;
  phone: string;
  address: string;
  salaryRange: {
    min: string;
    max: string;
  };
  employmentType: "正社員" | "契約社員" | "派遣社員" | "業務委託";
  occupation: string[];
  remarks?: string;
};
