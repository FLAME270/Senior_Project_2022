/*Tyler Wiggins
This is my own work
Senior Project 2022
File Description: This class handles all the backend functionality for the users posts and profile
*/


const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

//Adds a like to users post and tell the database that a like was added
exports.addLike = functions.firestore.document('/posts/{creatorId}/userPosts/{postId}/likes/{userId}')
    .onCreate((snap, context) => {
        return db
            .collection("posts")
            .doc(context.params.creatorId)
            .collection("userPosts")
            .doc(context.params.postId)
            .update({
                likesCount: admin.firestore.FieldValue.increment(1)
            })
    });

  //Remove a like from the users post and tell the database that a like was removed
exports.removeLike = functions.firestore.document('/posts/{creatorId}/userPosts/{postId}/likes/{userId}')
    .onDelete((snap, context) => {
        return db
            .collection('posts')
            .doc(context.params.creatorId)
            .collection('userPosts')
            .doc(context.params.postId)
            .update({
                likesCount: admin.firestore.FieldValue.increment(-1)
            })
    })

    //Adds a follower to users profile and tell the database that a follower was added
exports.addFollower = functions.firestore.document('/following/{userId}/userFollowing/{FollowingId}')
    .onCreate((snap, context) => {
        return db
            .collection('users')
            .doc(context.params.FollowingId)
            .update({
                followersCount: admin.firestore.FieldValue.increment(1)
            }).then(() => {
                return db
                    .collection('users')
                    .doc(context.params.userId)
                    .update({
                        followingCount: admin.firestore.FieldValue.increment(1)
                    })
            })
    })

    //Removes a follower from a users profile and tell the database that a follower was removed
exports.removeFollower = functions.firestore.document('/following/{userId}/userFollowing/{FollowingId}')
    .onDelete((snap, context) => {
        return db
            .collection('users')
            .doc(context.params.FollowingId)
            .update({
                followersCount: admin.firestore.FieldValue.increment(-1)
            }).then(() => {
                return db
                    .collection('users')
                    .doc(context.params.userId)
                    .update({
                        followingCount: admin.firestore.FieldValue.increment(-1)
                    })
            })
    })

    //Adds a comment to a post and tells the database a comment was added
exports.addComment = functions.firestore.document('/posts/{creatorId}/userPosts/{postId}/comments/{userId}')
    .onCreate((snap, context) => {
        return db
            .collection("posts")
            .doc(context.params.creatorId)
            .collection("userPosts")
            .doc(context.params.postId)
            .update({
                commentsCount: admin.firestore.FieldValue.increment(1)
            })
    })
