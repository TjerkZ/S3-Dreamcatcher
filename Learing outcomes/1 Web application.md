# Outcome 1
 You design and build **user-friendly**, **full-stack** web applications
# Dream catcher
For my personal project i created an app called dreamcatcher. the purpose of het app is that you can save dreams you had. Of all the dreams you save you can see statiscis for example how manny bad dreams you had this year. 

# Frontend
[s3-dreamcatcher-site repository](https://github.com/TjerkZ/s3-dreamcatcher-site)
For the frontend of the application i used React. This is a javacript framwork created by facebook. i'v chosen react beqause i had never used it and it is the most popular framework acording to these 2 sites:

[Most used web framework stackoverflow surve](https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-web-frameworks)

[State of JS](https://2021.stateofjs.com/en-US/libraries/front-end-frameworks)
### Design
The site is made using [react bootstrap](https://react-bootstrap.github.io/) this way it looks nice and is userfriendly. And because it uses bootstrap it's also also works on phone.
![Screenshot-dreamcatcher-dreampage.png](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/assets/Screenshot-dreamcatcher-dreampage.png)
For the login I use auth0 so users can login with a account that they can make or with their google acount.
![login.png](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/assets/login.png)

# backend
For the backend i made a API with C# ASP.NET core. This api provides the data for the frontend in Json format. The reason that i made it in C# is beqause i wanted to becaome beter and had never made a API with C#.

For the documentatin of the API i used Swagger. Swagger auto documents the API and gives a easy to use user interface. you can see all the endpoint and test them this way it is easyer to implement them in the frontend.
![swagger.png](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/assets/Swagger.png)

## Automapper
In the api i use a 3 layer achetechtre. between the layers i use models to transfer data but instead of mapping the moddels manualy i use Automapper. For Automapper to map classes you need to provide it with a profile. in this profile you can configre what properties map to other properties.


## Entity framework
For this project i used entity framework with a code first approach to create my database. For entity framwork to work i had to create a [Dbcontext](https://github.com/TjerkZ/s3-dreamcatcher-api/blob/master/s3-dreamcatcher-api.dal/DreamContext.cs). In this context i specified all the objects that i wanted to save in the database.

By using Entity framework it saves a lot of time making and designing a database. And if you change the code the database changes with it. that way i could focus on coding and instead of creating a database.