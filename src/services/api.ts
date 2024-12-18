import sql from "mssql";

// Configuración para conexión con autenticación de Windows
const config = {
    server: 'DIR-MSILLAS\\MSSQLSERVER01',
    database: 'Dist-ecomm',
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  };
  
  export async function connectToDB() {
    try {
      const pool = await sql.connect(config); // Conexión sin especificar el tipo de autenticación
      console.log("Conexión exitosa a la base de datos.");
      return pool;
    } catch (error) {
      console.error("Error al conectar a la base de datos:", error);
      throw error;
    }
  }
  

