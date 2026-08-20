import pool from "../config/db.js";
export class CommentQuery {
    constructor() {
    }
    async createComment(comment) {
        const info = await pool.query("INSERT INTO comments (user_id, post_id, parent_comment_id, content) VALUES ($1, $2, $3, $4) RETURNING *", [comment.user_id,
            comment.post_id,
            comment.parent_comment_id,
            comment.content]);
        return info.rows[0];
    }
    async getAllComments() {
        const info = await pool.query("SELECT * FROM comments ORDER BY created_at DESC");
        const comments = [];
        for (const comment of info.rows) {
            console.log(comment);
            comments.push(comment);
        }
        return comments;
    }
    async updateComments(comment) {
        const info = await pool.query(`UPDATE comments SET content=$1, updated_at=NOW()
                WHERE id=$2 RETURNING *`, [
            comment.content,
            comment.id
        ]);
        return info.rows[0];
    }
    async deleteComments(comment) {
        await pool.query('DELETE FROM comments WHERE id = $1', [
            comment.id
        ]);
    }
}
