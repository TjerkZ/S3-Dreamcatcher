# Requirements and design
> You translate (non-functional) requirements to extend existing (architectural) designs and can validate them using **multiple types of test techniques**.

# User story
At the start of I created a project board in Github. I used this board like a Kanban board with user storys on the cards. The stories look like this:
![user story]()

In the card i state all the tasks that need to be done and the cirteria of when its done. 

# architectural designs

## Eevenitfy

For the group project we used a microserices architecture. this means a larger project is seperated into smaller independt parts, each part should be indipendent. To make a responce multiple service can be called upon. Containers are a good way to achive this. This is how google defines a microservice architecture:
>A microservices architecture is a type of application architecture where the application is developed as a collection of services. It provides the framework to develop, deploy, and maintain microservices architecture diagrams and services independently.



![Eeventify-backend-diagram]()

At the start of the project we pland out how we wanted the backen to work. And after some time we setteld on the picture above. This way we could all work on a service or deployment of these in my case and have more progress.

Here every service is run in a docker container and functions on their onw. To acces the serices we setup a gateway that routes to the correct service.

# Source
- micoservices [What is microservices architecture?](https://cloud.google.com/learn/what-is-microservices-architecture)