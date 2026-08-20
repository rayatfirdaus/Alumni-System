export class UserDTO {
    id;
    name;
    email;
    password;
    role;
    photo_url;
    login_at;
    logout_at;
    created_at;
    updated_at;
    constructor(name, email, password, role, photo_url) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.photo_url = photo_url;
        const now = new Date();
        this.login_at = now;
        this.logout_at = now;
        this.created_at = now;
        this.updated_at = now;
    }
}
