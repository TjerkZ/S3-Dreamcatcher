# Outcome 1
 You design and build **user-friendly**, **full-stack** web applications
# Dream catcher
For my project, I created an app called dreamcatcher. The purpose of the app is that you can save the dreams you had. Of all the dreams you save you can see statistics for example how many bad dreams you had this year. 

# Frontend
[s3-dreamcatcher-site repository](https://github.com/TjerkZ/s3-dreamcatcher-site)

For the frontend of the application, I used React. This is a javascript framework created by Facebook. I've chosen react because I had never used it and it is the most popular framework according to these 2 sites:

- [Most used web framework StackOverflow survey](https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-web-frameworks)

- [State of JS](https://2021.stateofjs.com/en-US/libraries/front-end-frameworks)
### Design
The site is made using [react bootstrap](https://react-bootstrap.github.io/) this way it looks nice and is user-friendly. And because it uses bootstrap it also works on a phone.
![Screenshot-dreamcatcher-dreampage.png](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/assets/Screenshot-dreamcatcher-dreampage.png)
For the login, I use auth0 so users can log in with an account that they can make or with their google account.
![login.png](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/assets/login.png)

# backend
For the backend, I made an API with C# ASP.NET core. This API provides the data for the frontend in JSON format. The reason that I made it in C# is that I wanted to become better in ASP.NET and had only made sites using it never an API. 

For the documentation of the API, I used Swagger. Swagger auto documents the API and gives an easy-to-use user interface. You can see all the endpoints and test them this way it is easier to implement them in the frontend.
![swagger.png](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/assets/Swagger.png)

# C4
The models below show how the project dreamcatcher is set up and how the different components interact with each other.

## C2
In the c2 diagram below you see that a user has access to the dreamcatcher react site. The site uses the external service Auth0 to authenticate the user. The site can send HTTP requests to the API to retrieve data in JSON format.

![C2 model](https://github.com/TjerkZ/S3-Dreamcatcher/blob/7d72e6135eed8d9864bb8c081bea2c1d2d5b754e/assets/C2.png)

## C3
This C3 model shows how the API is set up and how all the components depend on each other. As you can see the controller uses the authenticator to see if the provided authentication token is valid. after that, it requests data from the logic layer. The logic gets all the required data from the DAL and sends it back. lastly, the controller makes a JSON from the data and sends it to the react site.
![C3 model](https://github.com/TjerkZ/S3-Dreamcatcher/blob/9206bc2a88d0cbde1c16a488093df0c97034036a/assets/C3.png)

## Automapper
In the API, I used a 3-layer architecture. Between the layers, there are models to transfer data but instead of mapping the models manualy, I use Automapper. For Automapper to map classes you need to provide it with a profile. In this profile, you can configure what properties get mapped.

In my case, all the names are the same so I didn't have to map every property separately. For the Dream model the [profile](https://github.com/TjerkZ/s3-dreamcatcher-api/blob/124849a110c679003190728fd0071af236a29e98/s3-dreamcatcher-api/AutoMapperProfiles/DreamAutoMapperProfile.cs#L5-L14) looks like this:

```c#
namespace s3_dreamcatcher_api.AutoMapperProfiles
{
    public class DreamAutoMapperProfile : Profile
    {
        public DreamAutoMapperProfile()
        {
            CreateMap<DreamDTO, Dream>().ReverseMap();
        }
    }
}
```


## Entity framework
For this project, I used Entity framework with a code-first approach to create my database. For Entity framework to work I had to create a [Dbcontext](https://github.com/TjerkZ/s3-dreamcatcher-api/blob/master/s3-dreamcatcher-api.dal/DreamContext.cs). In this context I specified all the objects that I wanted to save in the database.

I have chosen to use Entity framework because it saves a lot of time making and designing a database. And if you change the code the database changes with it. That way I could focus on coding instead of creating a database. Another reason I've chosen to use it because it's a popular framework and I wanted to learn how to use it.

# Eventify
For most of the time, I have been occupied learning docker and trying to get the deployment working. But at the end of the project when all the deployment was set up I made a chat service. 

This chat service was using SingalR which is Microsoft's implementation of web sockets. That was very interesting to work with because before this project I had no idea what web sockets were. To use the web sockets you 'subscribe' to a room and every time something changes the server pushed it to all the subscribed devices.

We have chosen singalr because that way we could create a real-time chat so that the frontend doesn't have to send a request every few seconds. 