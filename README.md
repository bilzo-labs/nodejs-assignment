# Assignment Details

1. Please fork this repository and follow Project setup instructions listed below to install it locally.
2. Copy of a user should be stored in DB, you can use any database for this, our preference is MongoDB. 
3. Please create an endpoint called `/create-account`
4. It should take email and password and registers with some basic validation like
    - Proper email
    - Email shouldn't already exist
5. Store this data in user table. Make sure to encrypt the password. 
6. Please create an endpoint called `/login`:
 - It should follow the simplest login method, if I give correct email and password, it will return me a JWT Token. Wrong credentials will result in an error. 
 - Please don't use passport JS or any assisting libraries. 
7. Please create an endpoint called /dashboard, this will be an authenticated endpoint, if I don't pass a valid JWT Token it will return a 401. Else a 200 with some message. 
8. You can add as many packages as you like. Feel free to modify our code too.
9. You should use industry standard, best code practices.
10. It is up to you how you will implement the business logic.
11. Don’t hesitate to ask if something is not clear.
12. And have fun 🎉!

## Project Deadline
You should deliver the test within 1 week time.

## Technology stack

NodeJS v16.9.1
yarn 1.22 - we use yarn as the package manager of choice. Feel free to use npm also. 
You already have nodemon installed so no need to worry about restarting server


## Project setup instructions

1. yarn
2. `DEBUG=nodejs-assignment:server yarn start`


## How to submit the assignment. 

1. Fork this repo, create a new branch called `feature/login`
2. Put all your code their and raise a pull request. Invite the interviewee as one of the code reviewers. 
3. We will checkout the branch in our local and will test the endpoint via postman. 
4. It should be able to create an account/login/dashboard. 

## What are we looking for 

1. How you create database connection and code quality
2. Your commit style, make sure your commits are atomic and small.
3. Your separation of concern and JS skills. 
4. Understanding of session management session.
5. If we find some issues we might even comment on pull request to fix those issues and looking at how collaborative the process is.  


