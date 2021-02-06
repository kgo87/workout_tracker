# Workout Tracker [![MIT license](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://lbesson.mit-license.org/)


## Table of Contents
1. [ Description ](#desc)
2. [ Task ](#task)
3. [ Link to Heroku deployment ](#link)
4. [ Structure ](#structure)
5. [ Finished product ](#final)


## 1. Description<a name="desc"></a>
This is a full-stack application to view, create and track daily workouts. Developed using MongoDB for backend and JS for frontend.

## 2. Task<a name="task"></a>
Task is to build a workout tracker that allows user to view, create and track daily workouts.


The app contains three main routes: GET - ________ , POST -____, PUT - ... 



## 3. Link to Heroku deployment <a name="link"></a>
The project is deployed on Heroku and available for view using this link:
https://workout-tracker-kat.herokuapp.com/

## 4. Structure<a name="structure"></a>
The structure of the repo is presented in the image below:
![Screenshot](./public/assets/media/dir_structure.png).
Config folder contains *connection.js* and *orm.js*. 
*Connection.js* has the code needed to establish connection to a database.
![Screenshot](./public/assets/media/connection.png).
*orm.js* defines CRUD methods.
![Screenshot](./public/assets/media/orm.png).
Controllers folder contains *burger-controller.js* which establishes server routes:
![Screenshot](./public/assets/media/controllers.png).
Models folder contains *burger.js* which connects the developed CRUD methods with the server routes:
![Screenshot](./public/assets/media/models_burger.png).
Views and public folder contains the frontend part of the application such as handlebars, stylesheet and front-end javascript.
![Screenshot](./public/assets/media/frontend.png).
*Server.js* that is located in the root folder stores all the dependensies and connects to the port.
![Screenshot](./public/assets/media/server.png).


## 5. Finished product<a name="final"></a>
The final HTML page looks like this:
![Screenshot](./public/assets/media/final.png)

