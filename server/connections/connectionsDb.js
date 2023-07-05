import { connect } from "mongoose";
import mysql from "mysql2/promise";
import mariadb from "mariadb";

//Funcion que devuelve la conexion a mysql
export const createMysqlConnection = () => {
  return mysql.createConnection({
    host: process.env,
    user: process.env,
    password: process.env,
    //puerto en el que escucha internamente mysql
    port: 3306,
  });
};

//Funcion que devuelve la conexion a mariadb
export const createMariadbConnection = () => {
  const mariadbPool = mariadb.createPool({
    host: process.env,
    user: process.env,
    password: process.env,
    //puerto en el que escucha internamente mariadb
    port: 3306,
  });

  return mariadbPool.getConnection();
};

//Funcion que devuelve la conexion a mongodb
export const createMongoConnection = () => {
  return connect(`mongodb://${process.env}:27017`);
};
