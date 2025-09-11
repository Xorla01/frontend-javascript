// Step 1: Interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Step 2: Create students
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "Accra",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 23,
  location: "Kumasi",
};

// Step 3: Array of students
const studentsList: Student[] = [student1, student2];

// Create table
const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.width = "50%";

// Add header row
const headerRow = table.insertRow();
const headerName = headerRow.insertCell();
headerName.textContent = "First Name";
headerName.style.border = "1px solid black";
headerName.style.padding = "8px";

const headerLocation = headerRow.insertCell();
headerLocation.textContent = "Location";
headerLocation.style.border = "1px solid black";
headerLocation.style.padding = "8px";

// Add rows for each student
studentsList.forEach((student) => {
  const row = table.insertRow();

  const nameCell = row.insertCell();
  nameCell.textContent = student.firstName;
  nameCell.style.border = "1px solid black";
  nameCell.style.padding = "8px";

  const locationCell = row.insertCell();
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "8px";
});

// Append table to body
document.body.appendChild(table);
