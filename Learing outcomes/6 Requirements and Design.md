# Requirements and design
> You translate (non-functional) requirements to extend existing (architectural) designs and can validate them using **multiple types of test techniques**.

# User story
At the start of the project, I created a project board on Github. I used this board like a Kanban board with user stories on the cards. The stories look like this:
![user story](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/assets/UserStory.png)

In the card, I state all the tasks that need to be done and the criteria of when it's done. 

# design

## Eevenitfy

For the group project, we used a microservices architecture. This means a larger project is separated into smaller independent parts. To make a response multiple services can be called upon. Containers are a good way to achieve this. This is how Google defines a microservice architecture:
>A microservices architecture is a type of application architecture where the application is developed as a collection of services. It provides the framework to develop, deploy, and maintain microservices architecture diagrams and services independently.

The benefits of microservices are:
- Better maintainable especially when working in a team.
- When run in containers it is easy to scale with programs such as Kubernetes
- using containers allows for multiple technologies to work together. 
- Easier to test


![Eeventify-backend-diagram](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/assets/eevenity-backend-diagram.png)

At the start of the project, we planned out how we wanted the backend to work. And after some time we settled on the picture above. This way we could all work on a service or deployment of these in my case and have more progress. The architecture that we made turned out to be quite good. This is without a doubt the best thought-out project I have worked on.

In our design, every service is run in a docker container and functions on its own. To access the services we set up a gateway that routes to the correct service. each service has its purpose and uses its own database. 

For the fontend of the project we desinged a UI using the user stories:
![frotend](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/assets/UIdesing.jpg)

### Source
- [What is microservices architecture?](https://cloud.google.com/learn/what-is-microservices-architecture)

## Individual project
![C3 model](https://github.com/TjerkZ/S3-Dreamcatcher/blob/9206bc2a88d0cbde1c16a488093df0c97034036a/assets/C3.png)

For my individual project, I made a not very complex architecture since my application was not that complex so using microservices was overkill. Instead, I chose to make a react site and an API. What I did do is run everything in containers. This way it's easier to deploy/run the application.

For my project, I used an external login from Auth0. The main reason to use an external login is that it is probably more secure than something I could make. It also has nice features like login with Google, Facebook, Github, etc... 
