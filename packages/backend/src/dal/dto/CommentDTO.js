export class CommentDTO {
    id;
    user_id;
    post_id;
    parent_comment_id;
    content;
    created_at;
    updated_at;
    constructor(user_id, post_id, parent_comment_id, content) {
        this.user_id = user_id;
        this.post_id = post_id;
        this.parent_comment_id = parent_comment_id;
        this.content = content;
        const now = new Date();
        this.created_at = now;
        this.updated_at = now;
    }
}
