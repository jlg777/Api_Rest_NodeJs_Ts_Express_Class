import { Request, Response } from 'express'
import { connect } from '../db/database'

export async function posteosGet (_req: Request, res: Response): Promise<void> {
  try {
    // Conectar a la base de datos
    const conn = await connect()

    // Ejecutar la consulta para obtener los posteos
    const [rows] = await conn?.query('SELECT * FROM posts') as any[] // 'rows' contendrá el resultado de la consulta

    // Enviar los resultados como respuesta JSON
    res.json(rows) // Devuelve los resultados de la consulta como un objeto JSON
  } catch (error) {
    // Manejo de errores
    console.error('Error al obtener los posteos:', error)
    res.status(500).json({ message: 'Error al obtener los posteos' })
  }
}
