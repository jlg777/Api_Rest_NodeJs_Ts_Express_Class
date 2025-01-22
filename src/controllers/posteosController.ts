import { Request, Response } from 'express'
import { connect } from '../db/database'
import { Posteo } from '../../types'

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

export async function createPosteo (req: Request, res: Response): Promise<void> {
  const newPosteo: Posteo = req.body
  try {
    // Conectar a la base de datos
    const conn = await connect()

    // Ejecutar la consulta para insertar el nuevo posteo
    await conn?.query('INSERT INTO posts SET ?', [newPosteo])

    // Si la inserción es exitosa, enviamos el nuevo posteo con el código de estado 201 (Creado)
    res.status(201).send('Posteo Creado')
  } catch (error) {
    // Manejo de errores en caso de que la inserción falle
    console.error('Error al crear el posteo:', error)
    res.status(500).json({ message: 'Error al crear el posteo' })
  }
}

export async function getPosteoId (req: Request, res: Response): Promise<void> {
  const { id } = req.params
  try {
    const conn = await connect()
    const post = await conn?.query('SELECT * FROM posts WHERE id = ?', [id])
    res.status(200).json(post)
  } catch (error) {
    console.error('Error al crear el posteo:', error)
    res.status(500).json({ message: 'Error al crear el posteo' })
  }
}

export async function deletePosteoId (req: Request, res: Response): Promise<void> {
  const { id } = req.params
  try {
    const conn = await connect()
    await conn?.query('DELETE FROM posts WHERE id = ?', [id])
    res.status(200).send('Posteo borrado')
  } catch (error) {
    console.error('Error al borrar el posteo:', error)
    res.status(500).json({ message: 'Error al crear el posteo' })
  }
}
