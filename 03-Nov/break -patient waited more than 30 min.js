/*## Exercise 4.5: Stop Early with break, Skip with continue

**Scenario:** The front desk runs two quick checks on today's queue.

- `break` stops the **whole loop**.
- `continue` skips the **rest of this round** and moves on to the next one.

### Part A: break

Find the first patient who has waited more than 30 minutes, then stop checking.

**Requirements:**
1. Create an array called `waitTimes` with these values: 12, 18, 35, 8, 42
2. Create a counter `checkedCount` starting at 0
3. Use a for loop. In each round:
   - Add 1 to `checkedCount`
   - Print the patient number and wait time
   - If the wait time is over 30, print an alert and use `break`
4. After the loop, print how many patients were checked

**Example Output:**
```
Checking wait times (stop at the first one over 30 min):
  Patient 1: 12 min
  Patient 2: 18 min
  Patient 3: 35 min
  Over 30 minutes! Alerting the doctor.

Checked 3 of 5 patients
```*/

let waitTimes = [12, 18, 35, 8, 42];
let checkedCount = 0;

console.log("Checking wait times (stop at the first one over 30 min):");
console.log("");
    for (let i = 0; i < waitTimes.length; i++) {
        checkedCount++;
        console.log("Patient " + (i + 1) + ": " + waitTimes[i] + " min");
        if (waitTimes[i] > 30) {
            console.log("Over 30 minutes! Alerting the doctor.");
            break;
        }
    }
    console.log("");
    console.log("Checked " + checkedCount + " of " + waitTimes.length + " patients");

