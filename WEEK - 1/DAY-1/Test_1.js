const accountId = 12343
let accountEmail = "pranjal@google.com"
var accountPassword = "12345"
accountCity = "Indore"
let accountState;
// accountId = 2233 -> NOT ALLOWED

accountEmail = "pranjal@galaxy.com"
accountPassword = "6567889"
accountCity = "Bhopal"


/* prefer NOT  to usre var, beacuse of issue in Block scope and functional scope */

console.table([accountId, accountEmail, accountCity])