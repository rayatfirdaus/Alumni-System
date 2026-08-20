import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const { Pool } = pkg;
const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});
async function verifyCOnnection() {
    try {
        const client = await pool.connect();
        console.log('Connected to PostgreSQL database');
        client.release();
    }
    catch (error) {
        console.error('Error connecting to PostgreSQL database', error);
    }
}
verifyCOnnection();
export default pool;
