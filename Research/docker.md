# How to use Docker
## Intro
For this semester we had to deploy a full-stack web application with a CICD pipeline. I needed a way to deploy the services I created I quickly came across a way to deploy services called docker. Docker fitted perfectly in with the CICD pipeline 

## What is docker
Docker is made to streamline the process of deployment and hosting. If you want to deploy an application on docker you make a small virtual machine called a container. This has as advantage that you no longer need to worry about the problem that it runs on your machine but not on a server. This is because each container contains its own OS that is specifically designed for the application that is running. 
As you can see in the picture below docker is installed on the OS and can run containers.
![container-what-is-container.png](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/assets/container-what-is-container.png)
## Why should you use docker
Docker was created to solve the problem: "It works on my machine". referring to the problem that an application doesn't work if it's deployed. Docker uses virtualization but instead of simulating an entire OS, it uses resource isolation in the OS kernel. This is more efficient than running Virtual machines. A virtual machine takes up more resources this is because a container is specifically made for the application it's running. So a server can run more containers than virtual machines.

But the main reason that docker is so popular is the ease of deployment. Every server that runs docker can run every docker container despite OS or hardware. 

## How to use docker
To use docker you have to install the docker application. this can either be for a small single server or an entire server room with multiple servers. Docker also has support for plugins so the functionality and deployment can be tailored to your need. I won't be going over the plugins because that is an research on its own.
### Docker hub
Docker hub is the cloud service of Docker. you can push images to your hub this way it is easy to pull them from a different machine. The other big advantage is that you can easily share the images with others that want to run a container with your app

### Docker file
For Docker to build an image you need to configure a Dockerifle. This file contains everything docker needs to run the application. usually, it contains 3 sections:
- Install tools that your application uses
- Install and/or update the Dependencies of the application
- Generate the application
The file I use for my dotnet 6 application looks like this: [dockerfile dreamcatcher](https://github.com/TjerkZ/s3-dreamcatcher-api/blob/124849a110c679003190728fd0071af236a29e98/s3-dreamcatcher-api/Dockerfile)

### Docker compose 
Docker-compose is a tool that helps with a larger project that uses multiple containers. The compose file is simply a yml file where you define all images you want to use in the application.
My experience is that it works well whit Docker hub. If all images are on Docker hub it is very easy to pull them with the compose file and run them from any machine.

## Disadvantages of docker
While docker has many upsides and I understand why companies see the value of using docker it has some downsides.

One of the bigger ones is that saving data can be tricky and often when you delete a container all the information is also gone.  Docker has made a solution called volumes where some files are saved on the host machine. but it takes some setting up and it is not always clear, especially for beginners.

Another problem is applications that are not built in small parts can't take full advantage of docker. Sins docker is made whit the intention of running lots of small containers a large application could better be run on a VM or a machine directly.

Applications whit a graphical interface are not optimal. Docker is more designed for applications that use the command line or a client-side UI. There are some ways to make this but they aren't optimal.

# Conclusion
Docker is really helpful for the deployment of applications and solves the 'it works on my machine' problem. There is no longer the need for a specific OS for the app to work and it is way more efficient than running a bunch of virtual machines. With docker hub, it is really easy to set up a good CICD pipeline. To pull these images you can use a docker-compose file where you configure the apps and run the application with one command.

### sources
[https://hub.docker.com](https://hub.docker.com)
[https://www.docker.com/](https://www.docker.com/)
[https://docs.docker.com](https://docs.docker.com)
[https://opensource.com/resources/what-docker](https://opensource.com/resources/what-docker)


