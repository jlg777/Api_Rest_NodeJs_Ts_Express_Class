import App from './app'

async function main (): Promise<void> {
  try {
    const app = new App()
    await app.listen()
  } catch (error) {
    console.error('Error al iniciar la aplicación:', error)
    process.exit(1) // Finaliza el proceso con un código de error
  }
}

void main()
