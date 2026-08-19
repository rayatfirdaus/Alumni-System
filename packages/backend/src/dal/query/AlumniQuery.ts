import pool from "../config/db.js";
import { AlumniDTO } from "../dto/AlumniDTO.js";

export class AlumniQuery {
    constructor() {}

    public async createAlumni (alumni : AlumniDTO) : Promise<AlumniDTO> {
        const info = await pool.query(
            "INSERT INTO alumni (user_id, department, graduation_year, current_company, job_title, experience_years, bio, linkedin_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [
                alumni.user_id,
                alumni.department,
                alumni.graduation_year,
                alumni.current_company,
                alumni.job_title,
                alumni.experience_years,
                alumni.bio,
                alumni.linkedin_url
            ],
        );
        return info.rows[0];
    }
    public async findAlumniByEmail(email:string) : Promise<AlumniDTO | undefined> {
        const info = await pool.query(
            "SELECT ap.* FROM alumni_profile ap JOIN users u ON ap.user_id = u.id WHERE u.email = $1",
            [email],
        );
        return info.rows[0];
    }
    public async findAlumniById(id:number) : Promise<AlumniDTO> {
        const info = await pool.query(
            "SELECT * FROM alumni_profile WHERE user_id = $1",
            [id],
        );
        return info.rows[0];
    }
    public async updateAlumni (id:number,
        alumni: Partial<AlumniDTO>) : Promise<AlumniDTO> {
            const info = await pool.query(
                "UPDATE alumni_profile SET department = $1, graduation_year = $2, current_company = $3, job_title = $4, experienece_years = $5, bio = $6, linkedin_url = $7, updated_at = NOW() WHERE id = $8 RETURNING *",
                [
                    alumni.department,
                    alumni.graduation_year,
                    alumni.current_company,
                    alumni.job_title,
                    alumni.experience_years,
                    alumni.bio,
                    alumni.linkedin_url,
                    id
                ],
            );
            return info.rows[0];
        }
        public async getAllAlumni(): Promise<AlumniDTO[]> {
            const info = await pool.query(
                "SELECT * FROM alumni_profile",
            );
            const alumnis : AlumniDTO[] = [];
            for (const alumni of info.rows) {
                console.log(alumni);
                alumnis.push(alumni);
            }
            return alumnis;
        }
}