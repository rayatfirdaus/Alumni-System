export class AlumniDTO {
    id;
    user_id;
    department;
    graduation_year;
    current_company;
    job_title;
    experience_years;
    bio;
    linkedin_url;
    created_at;
    updated_at;
    constructor(user_id, department, graduation_year, current_company, job_title, experience_years, bio, linkedin_url) {
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
