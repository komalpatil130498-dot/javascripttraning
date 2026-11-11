


   let patientId="P-1001";
   let insuranceId= "INS-778";
   let referralCode="111";

   if(patientId &&insuranceId&& referralCode)
   {
      console.log("Sufficient intake information")
   }
   else
   {
      console.log("Insufficient intake information - provide patient ID+insurance ID OR a referral code")
   }

