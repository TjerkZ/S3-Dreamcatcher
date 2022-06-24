# Requirements and design
> You translate (non-functional) requirements to extend existing (architectural) designs and can validate them using **multiple types of test techniques**.

# User story
At the start of the project, I created a project board on Github. I used this board like a Kanban board with user stories on the cards. The stories look like this:
![user story](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/assets/UserStory.png)

In the card, I state all the tasks that need to be done and the criteria of when it's done. 

# Architectural designs

## Eevenitfy

For the group project, we used a microservices architecture. This means a larger project is separated into smaller independent parts. To make a response multiple services can be called upon. Containers are a good way to achieve this. This is how Google defines a microservice architecture:
>A microservices architecture is a type of application architecture where the application is developed as a collection of services. It provides the framework to develop, deploy, and maintain microservices architecture diagrams and services independently.

The benefits of microservices are:
- Better maintainable especially when working in a team.
- When run in containers it is easy to scale with programs such as Kubernetes
- using containers allows for multiple technologies to work together. 
- Easier to test


![Eeventify-backend-diagram](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/assets/eevenity-backend-diagram.png)

At the start of the project, we planned out how we wanted the backend to work. And after some time we settled on the picture above. This way we could all work on a service or deployment of these in my case and have more progress. The architecture that we made turntout to be quite good. This is without a doubt the best thouth out project i have work on.

In our desing every service is run in a docker container and functions on its own. To access the services we set up a gateway that routes to the correct service. each service has is onw porpose and uses its own database. 

### Source
- [What is microservices architecture?](https://cloud.google.com/learn/what-is-microservices-architecture)

## Individual project
![C3 model](https://github.com/TjerkZ/S3-Dreamcatcher/blob/9206bc2a88d0cbde1c16a488093df0c97034036a/assets/C3.png)

For my indiviual project i made a not very complex architecture sinse my application was not that complex so using microservices was overkill.

What i did do is run everythin in containers. This way its easyer to deploy/run the application.