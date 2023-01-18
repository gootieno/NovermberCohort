- Access the home page
  - `GET /`
  - `GET /home`
- Submit a contact form
  - `POST /contacts`
- Access the posts page
  - `GET /posts`
- Access the edit page for a post
  - `GET /posts/:postId/edit`
- Access the create page for a post
  - `GET /posts/create`
- Create a new user
  - `POST /users`
- Log In
  - `POST /login`
  - `POST /users/login`

- Log Out
  - `POST /logout`
  - `POST /users/logout`

- Access the comments for a post page
  - `GET /posts/:postId/comments`
- Access the create page for a photo's comment
  - `GET /photos/:photoId/comments/create`
- Access the create page for a post's comment
  - `GET /posts/:postId/comments/create`
- Access the edit page for a comment
  - `GET /comments/:commentId/edit`

- Submit a like for a post
  - `POST /posts/:postId/likes`
- Delete a like for a post
  - `POST /posts/:postId/likes/:likeId/delete`
  - `POST /likes/:likeId/delete`
- Access all the posts of a user
  - `GET /users/:userId/posts`
- Submit a search on posts
  - `POST /posts/search`

```js
 if(req.method === 'POST' && req.url.endWith('search')){
    // look for stuff
 }


```
