# Reed Creative Werx Portfolio - frontend
GitHub: https://github.com/MDReed2/rcw-portfolio-react
Deployed: https://mdreed2.github.io/rcw-portfolio-react/

# Reed Creative Werx Portfolio - backend
GitHub: https://github.com/MDReed2/rcw-portfolio-backend
Herohu: https://serene-crag-92448.herokuapp.com/

---
## The BackStory
- This project has allowed us to incorporate everything we have learned in this cohort up until now.
- JavaScript and React was implemented on the front-end while using Express Mongo/Mongoose  curl scripts for the back-end.
- The knowledge gained over the last six months has provided me with a vision to create portfolio I would happily provide an URL to companies.
- This portfolio has a backend that allows users to create, read, update, and delete suggestions.

## npm packages used
- npm i react-router-dom

---
## Instructions
MVP User Stories
1. As an unregistered user, I would like to have the option to sign up with First Name, Last Name, email and password to see more information.
2. As a registered user, I would like to sign in with email and password.
3. As a signed in user, I would like to change password.
4. As a signed in user, I would like to sign out.
5. As a signed in user, I would like to add a suggestion.
6. As a signed in user, I would like to update a suggestion.
7. As a signed in user, I would like to delete a suggestion.
8. As a signed in user, I would like to see all my suggestions.
8. As a signed in user, I would like to see all suggestions.
9. As a signed in user, I would like to view a list of other users and view their jobs.

## Improvements
  1. Make navbar more dynamic
  2. Add change password when signed in
  3. Hide all components when suggestion CRUD operation is occurring
  4. Style list of suggestions
  5. Work on logic ti resolve scroll behavior issue in Chrome browser that does not work with react navlinks
  6. Refactor code

## WireFrame located in frontend project
Reed Creative Werx Wireframe 
![**Reed Creative Werx ERD**](./src/assets/capstone-ERD.png)
![**Reed Creative Werx Schema**](./src/assets/capstone-schema.PNG)
![**Reed Creative Werx Wireframe**](./src/assets/capstone-wireframe.png)


 1. User must be able to sign-up successfully
 - upon. Clicking sign-up  submit button if successful user will be prompt with sign up message
 - if sign-up failed then user will be prompt with error message

 2. User must be able to sign in successfully
 - once sign-in submit button is clicked user will be prompt with a success or error message
 - user will be directed to the Reed Creative Werx Homepage

 3. User post page
 - user will use nav links to sign-out and change-password
 - user must see fetch, add and delete buttons to interact with the database

4. User will interact with the database
 - user can add a suggestion to the list of suggestions: upon adding a suggestion the user will fill out the suggestion form and submit
 - user submission will be saved into the database
- user will be able to update
 5. User will be able to fetch/get all suggestions
- all suggestions will show at the top of the portfolio
- user can get one suggestion post by the ID

 6. User will be able to delete a post
 - once deleted user should not be able to see it them when fetching the job post.


# express-api-template

A template for starting projects with `express` as an API. Includes
authentication and common middlewares.

## Installation

1. [Download](../../archive/main.zip) this template.
1. Move the .zip file to your `sei/projects/` directory and Unzip it (creating a
   folder) -- **NOTE:** if the folder was already unzipped, use the `mv` command
   line to move it to the `sei/projects/` directory.
1. Rename the directory from express-api-template -> your-app-name.
1. Empty [`README.md`](README.md) and fill with your own content.
1. Move into the new project and `git init`.
1. Replace all instances of `'express-api-template'` with your app name.
1. Install dependencies with `npm install`.
1. Ensure that you have `nodemon` installed by running `npm install -g nodemon`.
1. Ensure the API is functioning properly by running `npm run server`.
1. Once everything is working, make an initial commit.
6. Create a new repository on [github.com](https://github.com),
    _not GitHub Enterprise_.
7. Name the new repository with the same name used on Step 3.
8. Follow the instructions on your new repository's setup page. For details on
   how to push to Github, refer to the section on Github entitled **"…or push an existing
   repository from the command line."** Further documentation can be found [here](https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/).
   > **Note:** This last step will rename your default branch to **main**. This branch name will be used when deploying.
1. Before presentations follow the steps in [express-api-deployment-guide](https://git.generalassemb.ly/seir-flex-831/express-api-deployment-guide)

## Structure

Dependencies are stored in [`package.json`](package.json).

The most important file for understanding the structure of the template is
`server.js`. This is where the actual Express `app` object is created, where
the middlewares and routes are registered, and more. To register a routefile,
follow the pattern established here with `exampleRoutes` and `userRoutes`. If
you want to add any middlewares to your app, do that here.

The `app` directory contains models and route files. Models are simply Mongoose
models. To create your own, follow the patterns established in
`app/models/example.js`. Route files are somewhat similar to controllers in
Rails, but they cover more functionality, including serialization and deciding
which HTTP verbs to accept and what to do with them.

The `config` directory holds just `db.js`, which is where you specify the name
and URL of your database.

The `lib` directory is for code that will be used in other places in the
application. The token authentication code is stored in `lib/auth.js`. The
other files in `lib` deal with error handling. `custom_errors.js` is where all
the different custom classes of errors are created. If you need some other kind
of error message, you can add it here. There are also some functions defined
here that are used elsewhere to check for errors. `lib/error_handler.js` is a
function that will be used in all your `.catch`es. It catches errors, and sets
the response status code based on what type of error got thrown.

You probably will only need to interact with files in `app/models`,
`app/routes`, and `server.js`. You'll need to edit `db/config.js` just once,
to change the name of your app.

## Tasks

Instead of `grunt`, this template uses `npm` as a task runner. This is more
conventional for modern Express apps, and it's handy because we'll definitely
use `npm` anyway. These are the commands available:

| Command                | Effect                                                                                                      |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- |
| `npm run server`       | Starts a development server with `nodemon` that automatically refreshes when you change something.          |
| `npm test`             | Runs automated tests.                                                                                       |
| `npm run debug-server` | Starts the server in debug mode, which will print lots of extra info about what's happening inside the app. |

## API

Use this as the basis for your own API documentation. Add a new third-level
heading for your custom entities, and follow the pattern provided for the
built-in user authentication documentation.

Scripts are included in [`curl-scripts`](curl-scripts) to test built-in actions.
Add your own scripts to test your custom API.

### Authentication

| Verb   | URI Pattern         | Controller#Action |
| ------ | ------------------- | ----------------- |
| POST   | `/sign-up`          | `users#signup`    |
| POST   | `/sign-in`          | `users#signin`    |
| PATCH  | `/change-password/` | `users#changepw`  |
| DELETE | `/sign-out/`        | `users#signout`   |

#### POST /sign-up

Request:

```sh
curl --include --request POST http://localhost:4741/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "firstname": "Example",
      "lastname": "Example",
      "email": "an@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
  }'
```

```sh
curl-scripts/sign-up.sh
```

Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email"
  }
}
```

#### POST /sign-in

Request:

```sh
curl --include --request POST http://localhost:4741/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password"
    }
  }'
```

```sh
curl-scripts/sign-in.sh
```

Response:

```md
HTTP/1.1 201 CREATED
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email",
    "token": "33ad6372f795694b333ec5f329ebeaaa"
  }
}
```

#### PATCH /change-password/

Request:

```sh
curl --include --request PATCH http://localhost:4741/change-password/ \
  --header "Authorization: Bearer $TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "an example password",
      "new": "super sekrit"
    }
  }'
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/change-password.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

#### DELETE /sign-out/

Request:

```sh
curl --include --request DELETE http://localhost:4741/sign-out/ \
  --header "Authorization: Bearer $TOKEN"
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa curl-scripts/sign-out.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
