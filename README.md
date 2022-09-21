# >>> Thanks to... [W3Schools](https://www.w3schools.com/js/default.asp) :
-------------------------
![image](https://user-images.githubusercontent.com/50515418/153042046-88edc5e6-dc07-42ff-950b-d8aa8eb7a768.png)

-----------------------------------

        function callNumbers() {

          // Call the Numbers API for random math fact
          let url = "https://api.metalpriceapi.com/v1/latest?base=USD&currencies=XAU,XAG&api_key=Dxt3fx5NcET88EGsAtvrdJ";
          let fact = UrlFetchApp.fetch(url);

          let apiResponse = JSON.parse(fact.getContentText());
          Logger.log(apiResponse.timestamp, apiResponse.rates.XAU);

          let sheet = SpreadsheetApp.getActiveSheet();
        //   sheet.getRange(1,1).setValue("timestamp");
        //   sheet.getRange(1,2).setValue("rates");

          sheet.getRange(sheet.getLastRow() + 1,1).setValue(apiResponse.timestamp);
          sheet.getRange(sheet.getLastRow() + 0,2).setValue(apiResponse.rates.XAU);

        }
    
# Function Call trigger

![image](https://user-images.githubusercontent.com/50515418/184604377-f3b3ab63-682c-47b7-882b-a8813fc6a1c6.png)
    
