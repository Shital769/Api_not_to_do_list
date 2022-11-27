# Not To Do full stack app

This app is build with MERN stack.

...write about the app what it doess..

## How to use

1. Run `git clone <put git path>`
2. Run `cd <repository name>`
3. Run `npm install`
4. Run `npm run dev`. Note, you must have `nodemon`, if not run `npm i nodemon -g` frist to install nodemon globally.

Now your server will run at `http://localhost:8000`

## APIs

This api server handles all the atsk request and allow client to run `CRUD` operations

## Task Router

Task router follow the following URL path `{rootUrl}/api/v1/task`. More details as follow

| #   | PATH     | METHOD | IS PRIVATE | DESCRIPTION                                                                                                                                       |
| --- | -------- | ------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | "/"      | POST   | false      | This api allows client to send taskobject and store in db. The object should be in the following structure `{task: "", type: ""}                  |
| 2.  | "/"      | GET    | false      | This api allows client to fetch all the task from database.                                                                                       |
| 3.  | "/"      | PATCH  | false      | This api allows client to switch the task type in database. Client must send data in the following structure {`_id: "sddfsd, type:"bad or entry`} |
| 3.  | "/:\_id" | DELETE | false      | This api allows client to delete a task based on the given `_id` from database.                                                                   |
| 3.  | "/"      | DELETE | false      | This api allows client to send multiple `\_ids` of tasks to delete multiple items from database.                                                  |
