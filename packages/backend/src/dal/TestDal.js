import { UserDTO } from "./dto/UserDTO.js";
import { AlumniDTO } from "./dto/AlumniDTO.js";
import { PostDTO } from "./dto/PostDTO.js";
import { CommentDTO } from "./dto/CommentDTO.js";
import { UserQuery } from "./query/UserQuery.js";
import { AlumniQuery } from "./query/AlumniQuery.js";
import { PostQuery } from "./query/PostQuery.js";
import { CommentQuery } from "./query/CommentQuery.js";
const userQuery = new UserQuery();
const alumniQuery = new AlumniQuery();
const postQuery = new PostQuery();
const commentQuery = new CommentQuery();
// ========== USER ==========
console.log("=== CREATE USER ===");
const newUser = new UserDTO("Test User", "testuser@example.com", "testpassword123", "Alumni", "upload/testphoto.png");
const createdUser = await userQuery.createUser(newUser);
console.log("Created user:", createdUser);
const userId = createdUser.id;
// ========== ALUMNI ==========
console.log("\n=== CREATE ALUMNI ===");
const newAlumni = new AlumniDTO(userId, "Computer Science", 2023, "Google", "Software Engineer", 2, "Backend enthusiast", "linkedin.com/in/example");
const createdAlumni = await alumniQuery.createAlumni(newAlumni);
console.log("Created alumni:", createdAlumni);
const alumniId = createdAlumni.id;
console.log("\n=== FIND ALUMNI BY ID ===");
console.log(await alumniQuery.findAlumniById(alumniId));
console.log("\n=== FIND ALUMNI BY EMAIL ===");
console.log(await alumniQuery.findAlumniByEmail("testuser@example.com"));
console.log("\n=== UPDATE ALUMNI ===");
console.log(await alumniQuery.updateAlumni(alumniId, { bio: "Updated bio" }));
console.log("\n=== GET ALL ALUMNI ===");
console.log(JSON.stringify(await alumniQuery.getAllAlumni(), null, 2));
// ========== POST ==========
console.log("\n=== CREATE POST ===");
const newPost = new PostDTO(userId, 0, // comment_count starts at 0
"My first test post", "upload/image1.jpg");
const createdPost = await postQuery.createPost(newPost);
console.log("Created post:", createdPost);
const postId = createdPost.id;
console.log("\n=== GET ALL POSTS ===");
console.log(JSON.stringify(await postQuery.getAllPosts(), null, 2));
console.log("\n=== GET POSTS BY USER ID ===");
console.log(await postQuery.getPostsByUserId(userId));
console.log("\n=== UPDATE POST ===");
createdPost.caption = "Updated caption";
console.log(await postQuery.updatePost(createdPost));
// ========== COMMENT ==========
console.log("\n=== CREATE COMMENT ===");
// Note: parent_comment_id is typed as `number`, not optional — using 0 as a placeholder
// for "no parent comment" since `null` doesn't match the declared type.
const newComment = new CommentDTO(userId, postId, 0, "Nice post!");
const createdComment = await commentQuery.createComment(newComment);
console.log("Created comment:", createdComment);
const commentId = createdComment.id;
console.log("\n=== GET ALL COMMENTS ===");
console.log(JSON.stringify(await commentQuery.getAllComments(), null, 2));
console.log("\n=== UPDATE COMMENT ===");
createdComment.content = "Updated comment text";
console.log(await commentQuery.updateComments(createdComment));
console.log("\n=== UPDATE POST COMMENT COUNT ===");
await postQuery.updateCommentCount(postId, 1);
console.log("Comment count updated for post:", postId);
// ========== CLEANUP (delete in reverse order to respect foreign keys) ==========
console.log("\n=== DELETE COMMENT ===");
await commentQuery.deleteComments(createdComment);
console.log("Deleted comment:", commentId);
console.log("\n=== DELETE POST ===");
await postQuery.deletePost(postId);
console.log("Deleted post:", postId);
console.log("\n=== DELETE USER (should cascade or fail if alumni still linked) ===");
await userQuery.deleteUser(userId);
console.log("Deleted user:", userId);
console.log("\n✅ All DAL tests completed.");
