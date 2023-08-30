import { pool } from './../db.js'

export const getEmployees = (req, res)=> res.send('Obteniendo Empleados')
export const createEmployees = (req, res)=> res.send('POST Success')
export const updateEmployees = (req, res)=> res.send('Actualizando emplados')
export const deleteEmployees = (req, res)=> res.send('Eliminando emplados')
