import { createPool, Pool } from 'mysql2/promise'

export async function connect (): Promise<Pool | null> {
  try {
    const connection = await createPool({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'posteos',
      connectionLimit: 10
    })

    console.log('Conexión exitosa a la base de datos')
    return connection
  } catch (error) {
    console.error('Error al conectar a la base de datos:')
    return null
  }
}
