interface Teacher {
  readonly firstName: string; // only set at initialization
  readonly lastName: string;  // only set at initialization
  fullTimeEmployee: boolean;  // always required
  yearsOfExperience?: number; // optional
  location: string;           // always required
  [key: string]: string | number | boolean; // allows extra properties
}

const teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Accra",
  contract: true
};


// Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "Alice",
  lastName: "Johnson",
  fullTimeEmployee: true,
  location: "Accra",
  numberOfReports: 5,
  contract: true
};

// Interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};
