# Dream Catcher Portfolio
# Introduction
This document is all the progress I made in semester 3 it contains all the research I have done, the repositories with the projects, and the learning outcomes. For each section, there is a small introduction and a link that goes to the in-depth document.

## Table of content
- [Introduction](#introduction)
- [C4](#c4)
    - [C2](#c2)
    - [C3](#c3)
- [Learing outcomes](#learing-outcomes)
    - [Persenal project](#personal-learing-outcomes)
    - [Group project](#group-project-outcomes)
- [Research](#research)
    - [auth0](#auth0)
    - [docker](#docker)
- [Repositories](#repositories)
    - [Dreamcatcher api](#repositories)
    - [React](#repositories)
    - [Eventify](#repositories)

# DreamCatcher
This semester I made an app called dreamcatcher. the function of the app is a place to store your dreams. So when you had a dream you write it down in the app. When you had multiple dreams you can see statics about your dreams.

# C4
The models below show how the project dreamcatcher is set up and how the different components interact with each other.

## c2
In the c2 diagram below you see that a user has access to the dreamcatcher react site. The site uses the external service Auth0 to authenticate the user. The site can send HTTP requests to the API to retrieve data in JSON format.

![C2 model](https://github.com/TjerkZ/S3-Dreamcatcher/blob/7d72e6135eed8d9864bb8c081bea2c1d2d5b754e/assets/C2.png)


## C3
This C3 model shows how the API is set up and how all the components depend on each other. As you can see the controller uses the authenticator to see if the provided authentication token is valid. after that, it requests data from the logic layer. The logic gets all the required data from the DAL and sends it back. lastly, the controller makes a JSON from the data and sends it to the react site.
![C3 model](https://github.com/TjerkZ/S3-Dreamcatcher/blob/9206bc2a88d0cbde1c16a488093df0c97034036a/assets/C3.png)

# Learing outcomes
These are the learning outcomes with a small description for this semester. 
|number|outcome|discription|    
|---|---|---|
|1|Web application|You design and build **user-friendly**, **full-stack** web applications|      
|2|Software quality|You use software **tooling and methodology** that continuously monitors and improves the software quality during software development.   |   
|3|Agile method|You can implement the software process for your project according to a given agile software development method.|   
|4|CI/CD|You **implement** a (semi)automated software release process that matches the needs of the project context.|   
|5|Cultural differences and ethics|You **recognize** and **take into account** cultural differences when working with multi-site teams and are aware of ethical aspects in software development.|   
|6|Requirements and design|You translate (non-functional) requirements to extend existing (architectural) designs and can validate them using **multiple types of test techniques**.|   
|7|Business processes|You can explain **simple** business processes and **relate** them to the development of your software project.|   
|8|Professional|You act in a professional manner during software development and learning.|   


## Personal learning outcomes
These are my learingoutocomes for my personal project
- [1 Web application](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/Learing%20outcomes/1%20Web%20application.md)
- [2 Software quality](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/Learing%20outcomes/2%20Software%20quality.md)
- [4 CICD](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/Learing%20outcomes/4%20CICD.md)
- [8 Professional](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/Learing%20outcomes/8%20Professional.md)

## Group project outcomes
- [1 Web application](https://github.com/TjerkZ/S3-Dreamcatcher/blob/09a8772e60d5c040f4d7884de39341a8fd3e6254/Learing%20outcomes/1%20Web%20application.md)
- [3 Agile method](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/Learing%20outcomes/3%20Agile%20method.md)
- [5 Cultural differences and ethics](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/Learing%20outcomes/5%20Cultural%20differences%20and%20ethics.md)
- [6 Requirements and design](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/Learing%20outcomes/6%20Requirements%20and%20Design.md)
- [7 Business processes](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/Learing%20outcomes/7%20Business%20processes.md)
- [8 Professional](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/Learing%20outcomes/8%20Professional.md)

# Research
## Auth0
- [Auth0 research](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/Research/auth.md)
## Docker
- [docker research](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/Research/docker.md)

# Repositories
[dreamcatcher API](https://github.com/TjerkZ/s3-dreamcatcher-api)

[s3-dreamcatcher-react](https://github.com/TjerkZ/s3-dreamcatcher-site)

[eventify](https://github.com/Eeventify)
