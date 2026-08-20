export class PostDTO {
    id;
    user_id;
    caption;
    //post_type: string;
    media_url;
    comment_count;
    created_at;
    updated_at;
    constructor(user_id, comment_count, caption, media_url) {
        this.user_id = user_id;
        this.caption = caption;
        this.media_url = media_url;
        this.comment_count = 0;
        const now = new Date();
        this.created_at = now;
        this.updated_at = now;
    }
}
