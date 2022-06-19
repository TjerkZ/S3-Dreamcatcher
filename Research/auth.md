# Should you use Auth0?

## Table of contents
- Introduction
- What is Auth0
- Why should you use Auth0
    - Social connections
    - documentation
    - disadvantages
- How to use Auth0
- Conclusion


## Introduction
For this semester I'm making an app that requires users to log in before they can use it. This raised the question of what am I going to use for authorization? A popular solution for authentication is Auth0. But is it any good?

## What is auth0
Auth0 is an implementation of the OAuth 2.0 authentication protocol set up by the Internet Engineering Task Force. Oauth 2.0 which stands for open authorization, is made to give third-party apps limited access to an HTTP service. This is done by supplying an access token after successful authentication. This token is then sent along with the HTTP request and the server then authorizes the token and sends the protected data back.
![abstract_flow.png](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/assets/abstract_flow.png)

## Why should you use auth0
One of the best things about auth0 is the ease of use. Writhing a good login system that is up to date with all the latest security protocols is a large and complicated task. And if you make your own login you need to make sure it stays secure. With auth0 you save all that work so, especially for smaller teams or individuals it's an easy way to get a secure and good login.

### Social Connections
With auth0 it is possible to add a vast pool of social logins to your site or app like Google, Facebook, Github, etc. this is great for user experience since it allows users to use your service without creating a dedicated account and you still getting their user information. 

### documentation
The setup of Auth0 is often an easy process because they have example projects with instructions for all of the larger frameworks and languages.  

## Disadvantages
A real disadvantage is that you are dependent on Auth0. So if you have really specific needs they may not exist or will never get supported. Or if the servers are down you can't do anything and you and your customers have to wait on auth0.

Another concern is that the user information is not on your server. This has 2 problems if auth0 ever gets a data breach you and your users are affected.

Auth0 is not noob-friendly, it uses a lot of terms that starting developers may not understand. But this is because you can configure a lot about the authorization. This is an advantage and disadvantage because it can get advanced and you must know what you're doing.

## How to use auth0
Since auth0 is based on Oauth2 they use the Authorization code flow of OAuth. The diagram below shows what happens if a user logs in. At point 8 you see that the fronted receives an access token and an ID token. With this, you get the user information from Auth0. 

The token is sent with the request to the API. The API itself can use this token to get the user information and at the same time see if the token is still valid.

![auth0-flow.png](https://github.com/TjerkZ/S3-Dreamcatcher/blob/main/assets/auth0-flow.png)

For many frameworks, you don't even need to write the code for the API calls. Auth0 made plugins + start projects that you can use so the rate of development is even higher.

## Conclusion
If you want a secure login without spending a lot of time and resources auth0 is a good option. It is easy to set up a project and you don't need to worry about the authorization.

### sources
- [What is oauth](https://auth0.com/intro-to-iam/what-is-oauth-2/)
- [An Introduction to OAuth 2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)
- [Authorization Code Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow)
- [Auth0 Documentation](https://auth0.com/docs/)
- [datatracker.ietf](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1)

