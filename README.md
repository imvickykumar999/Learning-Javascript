# >>> Thanks to... [W3Schools](https://www.w3schools.com/js/default.asp) :
-------------------------
![image](https://user-images.githubusercontent.com/50515418/153042046-88edc5e6-dc07-42ff-950b-d8aa8eb7a768.png)

-----------------------------------

    function callNumbers() {

      // Call the Numbers API for random math fact
      var response = UrlFetchApp.fetch("https://api.metalpriceapi.com/v1/latest?base=USD&currencies=XAU,XAG&api_key=Dxt3fx5NcET88EGsAtvrdJ");
      Logger.log(response.getContentText());

      var fact = response.getContentText();
      var sheet = SpreadsheetApp.getActiveSheet();
      sheet.getRange(sheet.getLastRow() + 1,1).setValue([fact]);

    }
    
# Function Call trigger

![image](https://user-images.githubusercontent.com/50515418/184604377-f3b3ab63-682c-47b7-882b-a8813fc6a1c6.png)
    
