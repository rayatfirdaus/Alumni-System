import { PostDTO, CommentDTO,AlumniDTO, UserDTO } from "@alumni/dal";
import { PostManager } from "./PostManager.js";
import { CommentManager } from "./CommentManager.js";
import { AlumniManager } from "./AlumniManager.js";
import { UserManager } from "./UserManager.js";

//const postManager = new PostManager();
//const post = new PostDTO(8, 0, "Test caption", "https://example.com/media.jpg");

//const created = await postManager.createNewPost(post);
//console.log("Created post:", created);

//GET ALL POSTS
//console.log(await postManager.getAllPosts());

//GET POSTS BY USER ID
//const p = new PostDTO(8, 0);
//console.log(await postManager.getPostsByUserId(p));

//UPDATE POST
//const q = new PostDTO(8, 0, "Updated caption", "https://example.com/media.jpg");
//p.id = 1; // real post id
//console.log(await postManager.updatePost(q));

//DELETE POST
//const r = new PostDTO(8, 0);
//p.id = 1; // real post id
//await postManager.deletePost(r);
//console.log("deleted");

/*const post = new PostDTO(8, 0, "Test caption", "https://example.com/media.jpg");
const commentManager = new CommentManager();
const createdComment = await commentManager.createComment(
    new CommentDTO(8, post.id, 0, "First comment")
  );
  console.log("Comment created:", createdComment);
  
  console.log("All comments:", await commentManager.getAllComments());

  createdComment.content = "Updated comment";
  console.log("Updated:", await commentManager.updateComment(createdComment));
  */
/*const alumniManager = new AlumniManager();
const USER_ID = 8;                      // real user id in your users table
const USER_EMAIL = "rayatsarkar@gamil.com"; // must match users.email exactly (including the typo)

// 1. CREATE
const created = await alumniManager.createAlumni(
  new AlumniDTO(USER_ID, "Computer Science", 2023, "Google", "Engineer", 2, "Test bio", "linkedin.com/in/test")
);
console.log("Created:", created);

// 2. FIND BY ID (alumni's own id, not user id)
console.log("By id:", await alumniManager.findAlumniById(created.id));

// 3. FIND BY EMAIL (joins alumni with users)
console.log("By email:", await alumniManager.findAlumniByEmail(USER_EMAIL));

// 4. UPDATE: only bio and job_title are passed
console.log(
  "Updated:",
  await alumniManager.updateAlumni(created.id, {
    bio: "Updated bio",
    job_title: "Senior Engineer",
  })
);

// 5. GET ALL
console.log("All:", await alumniManager.getAllAlumni());*/

const userManager = new UserManager();
const email = `user_test_${Date.now()}@example.com`; // unique on every run

// 1. CREATE
const created = await userManager.createUser(
  new UserDTO("Test User", email, "pass123", "Alumni", "upload/test.png")
);
console.log("Created:", created);

// 2. FIND BY ID
console.log("By id:", await userManager.findUserById(created.id));

// 3. FIND BY EMAIL
console.log("By email:", await userManager.findUserByEmail(email));

// 4. UPDATE: reuse the created user, which has the real id
created.name = "Updated Name";
console.log("Updated:", await userManager.updateUser(created));

// 5. GET ALL
console.log("All:", await userManager.getAllUsers());

// 6. DELETE: commented out so the row stays visible in the database
// await userManager.deleteUser(created);
// console.log("deleted");
