const accountID = 144553
let accountEmail = "Krishna@google.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;

// accountID = 2 // not allowed

accountEmail = "Krishna@facebook.com"
accountPassword = "121212"
accountCity = "Mumbai"

console.log(accountID);

/*
Prefer No to Use 'var' keyword, 
Because of issue in block scope(code inside curley braces) =>({}) and functional scope.
*/

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])