/*## Exercise 2: Count Appointment Outcomes

**Scenario:** Analyze a day's appointment outcomes and generate statistics.

**Requirements:**
1. Create an array called `appointmentStatuses` with these values:
   - "COMPLETED", "COMPLETED", "CANCELLED", "COMPLETED", "RESCHEDULED", "COMPLETED", "CANCELLED", "COMPLETED"

2. Use a for loop to count:
   - Total appointments
   - COMPLETED appointments
   - CANCELLED appointments
   - RESCHEDULED appointments

3. Calculate and print:
   - Completion rate (percentage)
   - Cancellation rate (percentage)

**Example Output:**
```
Appointment Outcomes
━━━━━━━━━━━━━━━━━━━━━━━━━

Counting outcomes...

Statistics:
  Total appointments: 8
  Completed: 5
  Cancelled: 2
  Rescheduled: 1

  Completion rate: 62.5%
  Cancellation rate: 25.0%
```
*/

let appointmentStatuses = [
     "COMPLETED", "COMPLETED", "CANCELLED", 
     "COMPLETED", "RESCHEDULED", "COMPLETED", "CANCELLED", "COMPLETED"];


     let COMPLETED = 0;
     let CANCELLED = 0;
     let RESCHEDULED = 0;   
     for (let i = 0; i < appointmentStatuses.length; i++) {
        
        if (appointmentStatuses[i] === "COMPLETED") {
            COMPLETED++;
        } else if (appointmentStatuses[i] === "CANCELLED") {
            CANCELLED++;
        } else if (appointmentStatuses[i] === "RESCHEDULED") {
            RESCHEDULED++;
        }
     }

let total= appointmentStatuses.length;
let completionRate = (COMPLETED / total) * 100;
let cancellationRate = (CANCELLED / total) * 100;
    
console.log("Appointment Outcomes");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("Counting outcomes");
console.log("Statistics:");
console.log("Total appointments: " + total);
console.log("Completed: " + COMPLETED);
console.log("Cancelled: " + CANCELLED);
console.log("Rescheduled: " + RESCHEDULED);
console.log("Completion rate: " + completionRate + "%");
console.log("Cancellation rate: " + cancellationRate + "%");