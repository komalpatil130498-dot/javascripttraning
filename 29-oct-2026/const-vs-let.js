/*Clinic phone: 022-4000-1234
Max patients per day: 40
Patients waiting: 4
Current token: 12*/

const Phone="022-4000-1234";
const Patients =40;
let waiting=4;
let token=12;
console.log("Clinic phone : "+Phone);
console.log("Max patients per day:"+Patients);
console.log("Patients waiting :"+waiting);
console.log("Current token :"+token);
console.log();

//2. Print all four. Then one more patient arrives and the next token is called: update the two values that change to `5` and `13`, and print them again.
 waiting=5;
 token=13;
 console.log("Clinic phone : "+Phone);
console.log("Max patients per day:"+Patients);
console.log("Patients waiting :"+waiting);
console.log("Current token :"+token);

//3. Try giving the maximum patients per day a new value. Run the file, copy the error message into a comment, then comment the line out.
/*Patients =50; //TypeError: Assignment to constant variable.
waiting=6;
 token=14;
 console.log("Clinic phone : "+Phone);
console.log("Max patients per day:"+Patients);
console.log("Patients waiting :"+waiting);
console.log("Current token :"+token); */

//4. Try writing `const clinicCode;` with no value. Run it, copy the error into a comment, then comment it out.
/*const Phone=;  //  Identifier 'Phone' has already been declared
waiting=5;
 token=13;
 console.log("Clinic phone : "+Phone);
console.log("Max patients per day:"+Patients);
console.log("Patients waiting :"+waiting);
console.log("Current token :"+token);*/

//5. Try declaring `let` for patients waiting a second time. Run it, copy the error into a comment, then comment it out.
 /*let waiting=5; //Identifier 'waiting' has already been declared
 token=13;
 console.log("Clinic phone : "+Phone);
console.log("Max patients per day:"+Patients);
console.log("Patients waiting :"+waiting);
console.log("Current token :"+token); */

