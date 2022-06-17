# Software quality
You use software **tooling and methodology** that continuously monitors and improve the software quality during software development.

# Unit tests
For the API i wrote some unit tests. this way when i made changes to the logic i could see if they still gave the exepected results. 


# Static code analysis
For the frontend and the backend i used sonarcloud to run static code analysis. the code analys for the API is in the cicd pipline. This way if i push to main i can see if i mised bugs or if there are vulnerabilities. as you can see below it test the code on not only on the safety but also on the qualtiy. 
![Sonarcloud 1](https://github.com/TjerkZ/S3-Dreamcatcher/blob/aa5efc06ecf2dcdce698a802109d36c3ace3e98f/assets/sonarcloud1.png)
with sonarcloud you can see even more infromation like the history of the application. Tish way you can trag the progress of software qualtiy
![sonarcloud2.png](https://github.com/TjerkZ/S3-Dreamcatcher/blob/aa5efc06ecf2dcdce698a802109d36c3ace3e98f/assets/sonarcloud2.png)

# integration test
## Eventify
In the group project we made integration test with postman to test the API services. These tests became an esential part of the project. They showed us if all the endpoints of the services where running
![eeventify_postman_test.png](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/assets/eeventify_postman_test.png)

Because the test ran every day the preformance and uptime of the server could be monitored. This was especialy usefull for me sinse i was running the services on my home server and could restore it when it went down.
![eeventify_postman_monitor.png](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/assets/eeventify_postman_monitor.png)

## Dreamcatcher
For dreamcatcher i also made a intergration test with postman. 
