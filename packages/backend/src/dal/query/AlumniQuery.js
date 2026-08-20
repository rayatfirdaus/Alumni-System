import pool from "../config/db.js";
export class AlumniQuery {
    constructor() { }
    async createAlumni(alumni) {
        const info = await pool.query("INSERT INTO alumni (user_id, department, graduation_year, current_company, job_title, experience_years, bio, linkedin_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", [
            alumni.user_id,
            alumni.department,
            alumni.graduation_year,
            alumni.current_company,
            alumni.job_title,
            alumni.experience_years,
            alumni.bio,
            alumni.linkedin_url
        ]);
        return info.rows[0];
    }
    async findAlumniByEmail(email) {
        const info = await pool.query("SELECT ap.* FROM alumni_profile ap JOIN users u ON ap.user_id = u.id WHERE u.email = $1", [email]);
        return info.rows[0];
    }
    async findAlumniById(id) {
        const info = await pool.query("SELECT * FROM alumni_profile WHERE user_id = $1", [id]);
        return info.rows[0];
    }
    async updateAlumni(id, alumni) {
        const info = await pool.query("UPDATE alumni_profile SET department = $1, graduation_year = $2, current_company = $3, job_title = $4, experienece_years = $5, bio = $6, linkedin_url = $7, updated_at = NOW() WHERE id = $8 RETURNING *", [
            alumni.department,
            alumni.graduation_year,
            alumni.current_company,
            alumni.job_title,
            alumni.experience_years,
            alumni.bio,
            alumni.linkedin_url,
            id
        ]);
        return info.rows[0];
    }
    async getAllAlumni() {
        const info = await pool.query("SELECT * FROM alumni_profile");
        const alumnis = [];
        for (const alumni of info.rows) {
            console.log(alumni);
            alumnis.push(alumni);
        }
        return alumnis;
    }
}
