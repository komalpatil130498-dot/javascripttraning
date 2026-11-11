/***Requirements:**
1. Create two parallel arrays:
   - `appointmentTypes`: ["Checkup", "Dental", "Eye Exam", "Vaccination", "Blood Test", "Follow-up"]
   - `appointmentOutcomes`: ["COMPLETED", "CANCELLED", "COMPLETED", "CANCELLED", "COMPLETED", "CANCELLED"]

2. Use a for loop to:
   - Print all appointment outcomes
   - Find and print ONLY the cancelled appointments with their types
   - Count total cancellations
   
   **Example Output:**
```
Daily Appointment Report
━━━━━━━━━━━━━━━━━━━━━━━━━

All Appointments:
  1. Checkup: COMPLETED
  2. Dental: CANCELLED
  3. Eye Exam: COMPLETED
  4. Vaccination: CANCELLED
  5. Blood Test: COMPLETED
  6. Follow-up: CANCELLED

Cancelled Appointments (need rebooking):
  - Dental
  - Vaccination
  - Follow-up

Total cancellations: 3
*/

   let appointmentTypes = ["Checkup", "Dental", "Eye Exam", "Vaccination", "Blood Test", "Follow-up"]
   let appointmentOutcomes = ["COMPLETED", "CANCELLED", "COMPLETED", "CANCELLED", "COMPLETED", "CANCELLED"]

   let Cancelled = 0;
   console.log("Daily Appointment Report");
   console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
   console.log("");
   console.log("All Appointment Outcomes:");
   for (let i = 0; i < appointmentOutcomes.length; i++) {
       console.log(appointmentTypes[i] + ": " + appointmentOutcomes[i]);
       if (appointmentOutcomes[i] === "CANCELLED") {
           console.log("Cancelled Appointment: " + appointmentTypes[i]);
           Cancelled++;
       }
   }

   console.log("");
   console.log("Total cancellations: " + Cancelled);
   console.log("");
   console.log("Cancelled Appointments (need rebooking):");
   console.log("");