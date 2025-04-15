// models/Contact.ts
import { DataTypes } from "sequelize";
import db from "../config/database";

const Contact = db.define("Contact", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  message: DataTypes.TEXT,
});

export default Contact;
