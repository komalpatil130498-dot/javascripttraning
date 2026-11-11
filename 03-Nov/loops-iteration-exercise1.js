
 /* ## Exercise 1: Print All Appointments

**Scenario:** Display all appointments on today's clinic schedule with numbering.

**Requirements:**
1. Create an array called `appointments` with these values:
   - "Annual checkup"
   - "Dental cleaning"
   - "Eye exam"
   - "Vaccination"
   - "Blood test"

2. Use a for loop to print each appointment with:
   - Appointment number (starting from 1, not 0!)
   - Appointment name

**Example Output:**
```
Today's Clinic Schedule
━━━━━━━━━━━━━━━━━━━━━━━━━

1. Annual checkup
2. Dental cleaning
3. Eye exam
4. Vaccination
5. Blood test

Total appointments: 5
```*/

//1 exercise 1: Print All Appointments
   let appointments = [
      "Annual checkup",
      "Dental cleaning",
      "Eye exam",
      "Vaccination",
      "Blood test"
];



console.log("Today's Clinic Schedule");

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

for (let i = 0; i < appointments.length; i++) 
    {
   console.log((i+1)+"." +appointments[i]);
    }   

    console.log("Total appointments: " + appointments.length);

    //2 exercise 2: Print All Appointments using forEach loop
    let appointments2 = [
        "Annual checkup",       
        "Dental cleaning",
        "Eye exam",
        "Vaccination",
        "Blood test"
    ];

    console.log("Today's Clinic Schedule");

    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

 let number = 1;
    
 for (let appointment of appointments2)
     {
        console.log(number + ". " + appointment);
        number++;
    }
console.log("Total appointments: " + appointments2.length);
    