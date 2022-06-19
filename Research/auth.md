# Should you use Auth0?

## Table of contents
- Indroduction
- What is Auth0
- Why should you use Auth0
- 


## Introduction
For this semester i'm making an app that requeres users to login before they can use it. This raised the question what am i going to use? A popular solution build for authentication is Auth0. But is it any good?

## What is auth0
Auth0 is a implementation of the OAuth 2.0 authentication protocol set up by the Internet Engineering Task Force. Oauth 2.0 witch stands for open authorization, is made to give third-party apps limited acces to a http service. This is done by suplying an acces token afeter sucesfull authentication. this token is than send allong with the http request and the server then auhtizes the token and send the proteced data back.
![[abstract_flow.png]]

## Why should you use auth0
One of the best things about auth0 is the ease of use. Writhing a good login system that is up to date whit all the lates secuerty proticals is a large and complicated task. And if you where to make your own login you need to make sure it stays secure. Whit auth0 you save all that work so esspecaly for smaller teams or indivuals its a easy way to get secure and good login.

### Social Connections
With auth0 it is posible to add a vast pool of socail logins to your site or app like Google, facebook, github, etc. this is a great for user experice sice it allows users to use your serice without creating a dedicated account and you stil getting their user information. 

### documentation
To setup Auth0 is often a easy procces because they have example projects with instructions for all of the larger frameworks and TAALEN.  

## Disadvantages


## How to use auth0
Since auth0 is based on Oauth2 they use the Authorization code flow of OAuth. In the diagram below it shows what happens if a user logs in.

first the site redirects the user the a login page. afther succesfull login the

![[auth0-flow.png]]


## Conclusion


### sources
- [What is oauth](https://auth0.com/intro-to-iam/what-is-oauth-2/)
- [An Introduction to OAuth 2](https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2)
- [Authorization Code Flow](https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow)
- [Auth0 Documentation](https://auth0.com/docs/)
- [s](https://datatracker.ietf.org/doc/html/rfc6749#section-4.1)

