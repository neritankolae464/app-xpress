/*
Filename: ComplexCode.js

This code is a complex implementation of a social media application where users can create posts, like posts, and follow other users. The code includes multiple classes to represent users, posts, and the social media platform. It also includes methods for creating, liking, and following, as well as displaying user information and posts.

*/

class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.followers = {};
    this.posts = [];
  }

  createPost(content) {
    const post = new Post(content, this);
    this.posts.push(post);
    SocialMediaPlatform.addPost(post);
  }

  likePost(post) {
    post.addLike(this);
  }

  followUser(user) {
    user.addFollower(this);
    this.followers[user.email] = user;
  }

  addFollower(user) {
    this.followers[user.email] = user;
  }

  displayUserInformation() {
    console.log("Name: ", this.name);
    console.log("Age: ", this.age);
    console.log("Email: ", this.email);
    console.log("Followers: ", Object.keys(this.followers).length);
    console.log("Posts: ", this.posts.length);
  }
}

class Post {
  constructor(content, user) {
    this.content = content;
    this.user = user;
    this.likes = {};
  }

  addLike(user) {
    this.likes[user.email] = user;
  }

  displayPostInformation() {
    console.log("Author: ", this.user.name);
    console.log("Content: ", this.content);
    console.log("Likes: ", Object.keys(this.likes).length);
  }
}

class SocialMediaPlatform {
  static users = {};
  static posts = [];

  static addUser(user) {
    this.users[user.email] = user;
  }

  static addPost(post) {
    this.posts.push(post);
  }

  static displayUserInformation(email) {
    const user = this.users[email];
    if (!user) {
      console.log("User not found");
      return;
    }
    user.displayUserInformation();
  }

  static displayPosts() {
    for (let post of this.posts) {
      post.displayPostInformation();
      console.log("-".repeat(20));
    }
  }
}

// Example usage

const john = new User("John", 25, "john@example.com");
const sarah = new User("Sarah", 30, "sarah@example.com");
const mike = new User("Mike", 35, "mike@example.com");

SocialMediaPlatform.addUser(john);
SocialMediaPlatform.addUser(sarah);
SocialMediaPlatform.addUser(mike);

john.createPost("Hello, this is my first post!");
sarah.createPost("Excited to join this social media platform!");
mike.createPost("It's a beautiful day!");

john.followUser(sarah);
john.followUser(mike);
sarah.followUser(john);
mike.followUser(john);

john.likePost(sarah.posts[0]);
sarah.likePost(mike.posts[0]);

SocialMediaPlatform.displayUserInformation("john@example.com");
console.log("-".repeat(20));
SocialMediaPlatform.displayPosts();