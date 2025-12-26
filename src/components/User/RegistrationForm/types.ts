export interface FamilyMember {
  // name: string;
  // email: string;
  // phone: string;

  nameBurmese: string;
  nameEnglish: string;
  nationailty: string;
  religion: string;
  state_division: string;
  nrc: string;
  homebred: string;
  occupation: string;

  fulladdress: string;
}
export interface StudentAffair {
  //Student Affairs 's info
  year: string;
  major: string;
  rollno: string;
  university_register_no: string;
  university_enter_year: string;
  semester: string;
}
export interface StudentInfo {
  //Student 's personal info
  photo: string;
  nameBurmese: string;
  nameEnglish: string;
  nationailty: string;
  religion: string;
  state_division: string;
  nrc: string;
  homebred: string;
  dob: string;
  matriculation_rollno: string;
  matriculation_year: string;
  matriculation_board: string;
  phone: string;
  fulladdress: string;
}

export interface FormData {
  father: FamilyMember;
  mother: FamilyMember;
  student_affair: StudentAffair;
  student: StudentInfo;
}

export interface StepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors?: Record<string, string>;
  setErrors?: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  onNavigateToStep?: (step: number) => void;
}

//external tailwind css

export const RegisterationFormStyle = {
  label: "font-medium lg:w-40 lg:text-sm",
  mainContainer:
    "md:h-10 min-h-screen flex flex-col md:flex-row p-4 md:shadow-lg md:rounded-xl md:mx-auto md:my-8 md:w-auto ",
};
