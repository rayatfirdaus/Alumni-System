import type { BaseDTO} from "./BaseDTO";

export class AlumniDTO implements BaseDTO {
    id!: number;
    user_id: number;
    department: string;
    graduation_year?: number;
    current_company?: string;
    job_title?: string;
    experience_years?: number;
    bio?: string;
    linkedin_url?: string;
    created_at: Date;
    updated_at: Date;

    constructor(
        user_id: number,
        department: string,
        graduation_year?: number,
        current_company?: string,
        job_title?: string,
        experience_years?: number,
        bio?: string,
        linkedin_url?: string
    ) {
        this.user_id = user_id;
        this.department = department;
        this.graduation_year = graduation_year;
        this.current_company = current_company;
        this.job_title = job_title;
        this.experience_years = experience_years;
        this.bio = bio;
        this.linkedin_url = linkedin_url;
        const now = new Date();
        this.created_at = now;
        this.updated_at = now;
    }
}
