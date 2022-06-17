# CICD
You **implement** a (semi)automated software release process that matches the needs of the project context.
# API
For the CICD of the API i made 2 branches on github on for development and a main. If shomething is pushed to the main brench i set up github actions to build, test and publish it. 

## main.yml
I made 2 files the [main.yml](https://github.com/TjerkZ/s3-dreamcatcher-api/blob/master/.github/workflows/main.yml) First builds the app. afther that it gets pushed to docker hub
![mainyml.png]()

## build.yml
In the [build.yml](https://github.com/TjerkZ/s3-dreamcatcher-api/blob/master/.github/workflows/build.yml) is the static code analyses from sonar cloud.
# React Site
