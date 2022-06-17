# How to use Docker
## Intro
For this semester we had to deploy a full stack web application with a cicd pipeline. I needed a way to deploy the services I created i quiqly came acros a way to deploy services called docker. Docker fitted in perfectly in with the CICD pipeline 

## What is docker
Docker is made with the intention to streamline the process of deployment and hosting. If you want to deploy an application on docker you make a smal virtual machine called a container. This has as an advantage that you no longer need to worry about the problem of that it runs on your machine but not on a server. This is because each container contains it own OS that is specifically designed for the application that is running. 
As you can see in the picture below docker is installed on the OS and can run containers.
![[container-what-is-container.png]]
## Why sould you use docker
Docker was created whit the intetion to solve the problem: "It works on my machine". refering to the problem that a aplication doesn't work if its deployed. Docker uses virtualsation but instead of simulating a entire OS it uses resource isolation in the OS kernel. This is more effecient than running Virtual machines. A virtual machine takes up more resorces this is beqause a container is specficly made for the application its running. So a server can run more containers that in can run virtual machine.

But the main reason that docker is so popular is the ease of deployment. Every server that runs docker can run every docker container despite OS or hardware. 

## How to use docker
In order to use docker you have to install the docker application. this can either be for a small single server or an entire server room with multiple servers. 
### Docker hub
docker hub is the cloud service of docker. you can push images to your hub this way it is easy to pull them from a diverent machine. The other big advantage is that you can easly share the images with others that want to run a conatainer whith your app

### Docker file
For docker to build an image you need to configre a dockerifle. This file contains every thing docker needs inorder to run the application. usualy it contains 3 sections:
- Install tools that your application uses
- Installl and/or update Dependencys of the application
- Genarate the applciation
The file i use for my dotnet 6 application looks like this: [dockerfile dreamcatcher](https://github.com/TjerkZ/s3-dreamcatcher-api/blob/124849a110c679003190728fd0071af236a29e98/s3-dreamcatcher-api/Dockerfile)

### Docker compose 
Docker compse is a tool that helps with larger project that use multiple containers. the compose file is simply a yml file where you define all images you want to use in the application.
My experice is that it works real wel whit dockerhub. if all images are on dockerhub it is very easy to pul them with the compse file and run from any machine.

## Disadvantages of docker
While docker has many upsites and i understand why companies see the value of using docker it has some downsites.

One of the bigger ones is that saving data can be tricky and often when you delete a container all the information is also gone.  docker has made a solution called volumes where some files are saved on the host machine. but it takes some setting up and it is not always clear especialy for beginners.

An other problem is applications that are not build in small parts can't take full advantage of docker. sins docker is made whit the intention of runing lots of small containers a large appliction could better be run on a VM or a machine directly.

Applications whit a craphical interface are not optimal. docker is more desinged for applciations that use commandline or a cleint side UI. There are some ways to make this they aren't optimal.

# Conclusion
So is docker 