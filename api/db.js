import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "TIET32886#lms",
  database:"blog"
})