import pool from "../config/db.js";
export class UserQuery {
    constructor() {
    }
    async createUser(data) {
        const info = await pool.query("INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *", [data.name, data.email, data.password, data.role]);
        return info.rows[0];
    }
    async findUserByEmail(email) {
        const info = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        return info.rows[0];
    }
    async findUserById(id) {
        const info = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        return info.rows[0];
    }
    async updateUser(id, data) {
        const info = await pool.query("UPDATE users SET name = $1, photo_url = $2, password = $3, email = $4, updated_at = NOW() WHERE id = $5 RETURNING *", [data.name, data.photo_url, data.password, data.email, id]);
        return info.rows[0];
    }
    async getAllUsers() {
        const info = await pool.query("SELECT * FROM users");
        const users = [];
        for (const user of info.rows) {
            console.log(user);
            users.push(user);
        }
        return info.rows;
    }
    async deleteUser(id) {
        await pool.query("DELETE FROM users WHERE id = $1", [id]);
    }
    async updateLoginTime(id) {
        await pool.query("UPDATE users SET login_at = NOW() WHERE id = $1", [id]);
    }
    async updateLogoutTime(id) {
        await pool.query("UPDATE users SET logout_at = NOW() WHERE id = $1", [id]);
    }
}
