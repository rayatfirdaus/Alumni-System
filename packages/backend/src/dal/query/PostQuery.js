import pool from "../config/db.js";
export class PostQuery {
    constructor() {
    }
    async createPost(post) {
        const info = await pool.query('INSERT INTO posts (user_id,caption,media_url,comment_count)VALUES ($1,$2,$3,$4) RETURNING * ', [
            post.user_id,
            post.caption,
            post.media_url,
            post.comment_count
        ]);
        return info.rows[0];
    }
    async getAllPosts() {
        const info = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
        const posts = [];
        for (const post of info.rows) {
            console.log(post);
            posts.push(post);
        }
        return posts;
    }
    async getPostsByUserId(user_id) {
        const info = await pool.query('SELECT * FROM posts WHERE user_id = $1 ORDER BY created_at DESC', [
            user_id
        ]);
        return info.rows;
    }
    async updatePost(post) {
        const info = await pool.query(`UPDATE posts SET caption=$1, media_url=$2, updated_at=NOW()
            WHERE id=$3 RETURNING *`, [
            post.caption,
            post.media_url,
            post.id
        ]);
        return info.rows[0];
    }
    async deletePost(id) {
        await pool.query('DELETE FROM posts WHERE id = $1', [
            id
        ]);
    }
    async updateCommentCount(id, comment_count) {
        await pool.query('UPDATE posts SET comment_count=$1 WHERE id=$2', [
            comment_count,
            id
        ]);
    }
}
