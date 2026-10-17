import { PostDTO, PostQuery } from "@alumni/dal";

export class PostManager {
    postQuery : PostQuery;

    constructor () {
        this.postQuery = new PostQuery;
    }

   public async createNewPost(post : PostDTO) {
    const newPost  = await this.postQuery.createPost(post);
    return newPost;
   }

   public async updatePost(post : PostDTO) {
    const updatedPost = await this.postQuery.updatePost(post);
    return updatedPost;
   }

    public async deletePost(post : PostDTO) {
     const deletedPost = await this.postQuery.deletePost(post.id);
     return deletedPost;
    }

    public async getAllPosts() {
        const allPosts = await this.postQuery.getAllPosts();
        return allPosts;
    }

    public async getPostsByUserId(post : PostDTO) {
        const posts = await this.postQuery.getPostsByUserId(post.user_id);
        return posts;
    }

    public async updateCommentCount(post : PostDTO) {
        const updatedPost = await this.postQuery.updateCommentCount(post.id, post.comment_count);
        return updatedPost;
    }


}