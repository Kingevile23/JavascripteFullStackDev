const bcrypt = require("bcrypt")
const password = "monMotDePasse123"
const hashed = bcrypt.hashSync(password,12)
console.log("Mot de pass crypte: ", hashed)