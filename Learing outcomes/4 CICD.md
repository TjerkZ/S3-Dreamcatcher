# CICD
You **implement** a (semi)automated software release process that matches the needs of the project context.
# API
For the CICD of the API, I made 2 branches on GitHub one for development and one main branch. If something is pushed to the main branch, I've set up a GitHub action to build, test, and publish the app.

## Github Actions
I made 2 files that GitHub action can use, the [main.yml](https://github.com/TjerkZ/s3-dreamcatcher-api/blob/master/.github/workflows/main.yml) First builds the app. This is the code you see under the build job. after that, it creates a docker image and pushes that to Docker hub. That part is under the publish job.

```yml
name: .NET

on:
  push:
    branches: [ "master" ]
  pull_request:
    branches: [ "master" ]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3
    - name: Setup .NET
      uses: actions/setup-dotnet@v2
      with:
        dotnet-version: 6.0.x
    - name: Restore dependencies
      run: dotnet restore
    - name: Build
      run: dotnet build --no-restore
    - name: Test
      run: dotnet test --no-build --verbosity normal
  
  publish:

    runs-on: ubuntu-latest
    needs: build
    permissions:
      contents: read
      packages: write
      # This is used to complete the identity challenge
      # with sigstore/fulcio when running outside of PRs.
      id-token: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      # Workaround: https://github.com/docker/build-push-action/issues/461
      - name: Setup Docker buildx
        uses: docker/setup-buildx-action@79abd3f86f79a9d68a23c75a09a9a85889262adf

      # Login against a Docker registry except on PR
      # https://github.com/docker/login-action
      - name: Log into registry ${{ env.REGISTRY }}
        if: github.event_name != 'pull_request'
        uses: docker/login-action@28218f9b04b4f3f62068d7b6ce6ca5b26e35336c
        with:
          registry: ${{ env.REGISTRY }}
          ## Credentials GitHub
          #username: ${{ github.actor }}
          #password: ${{ secrets.GITHUB_TOKEN }}
          ## Credentials DockerHub
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_PASSWORD }}

      # Extract metadata (tags, labels) for Docker
      # https://github.com/docker/metadata-action
      - name: Extract Docker metadata
        id: meta
        uses: docker/metadata-action@98669ae865ea3cffbcbaa878cf57c20bbf1c6c38
        with:
          images: tjerkzeilstra/s3-dreamcatcher-api

      # Build and push Docker image with Buildx (don't push on PR) 
      # https://github.com/docker/build-push-action
      - name: Build and push Docker image
        id: build-and-push
        uses: docker/build-push-action@ad44023a93711e3deb337508980b4b5e9bcdc5dc
        with:
          file: ./s3-dreamcatcher-api/Dockerfile
          push: ${{ github.event_name != 'pull_request' }}
          tags: tjerkzeilstra/s3-dreamcatcher-api:latest
          labels: ${{ steps.meta.outputs.labels }}
```

The [build.yml](https://github.com/TjerkZ/s3-dreamcatcher-api/blob/master/.github/workflows/build.yml) file is for testing the application with static code analyses from Sonarcloud. After the job is done executing, the results are on the Sonarcloud website where you then can monitor issues.

```yml
name: Build
on:
  push:
    branches:
      - master
  pull_request:
    types: [opened, synchronize, reopened]
jobs:
  build:
    name: Build
    runs-on: windows-latest
    steps:
      - name: Set up JDK 11
        uses: actions/setup-java@v1
        with:
          java-version: 1.11
      - uses: actions/checkout@v2
        with:
          fetch-depth: 0  # Shallow clones should be disabled for a better relevancy of analysis
      - name: Cache SonarCloud packages
        uses: actions/cache@v1
        with:
          path: ~\sonar\cache
          key: ${{ runner.os }}-sonar
          restore-keys: ${{ runner.os }}-sonar
      - name: Cache SonarCloud scanner
        id: cache-sonar-scanner
        uses: actions/cache@v1
        with:
          path: .\.sonar\scanner
          key: ${{ runner.os }}-sonar-scanner
          restore-keys: ${{ runner.os }}-sonar-scanner
      - name: Install SonarCloud scanner
        if: steps.cache-sonar-scanner.outputs.cache-hit != 'true'
        shell: powershell
        run: |
          New-Item -Path .\.sonar\scanner -ItemType Directory
          dotnet tool update dotnet-sonarscanner --tool-path .\.sonar\scanner
      - name: Build and analyze
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}  # Needed to get PR information, if any
          SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
        shell: powershell
        run: |
          .\.sonar\scanner\dotnet-sonarscanner begin /k:"TjerkZ_s3-dreamcatcher-api" /o:"tjerkz" /d:sonar.login="${{ secrets.SONAR_TOKEN }}" /d:sonar.host.url="https://sonarcloud.io"
          dotnet build
          .\.sonar\scanner\dotnet-sonarscanner end /d:sonar.login="${{ secrets.SONAR_TOKEN }}"
```

# React Site

The CICD of the React site is nearly identical to CICD of the API. When I commit to the main branch of the React site repository, it gets tested, build, and pushed to Docker hub using GitHub actions. GitHub uses the build.yml file below to do this.

```yml
# This is a basic workflow to help you get started with Actions

name: CI

# Controls when the workflow will run
on:
  # Triggers the workflow on push or pull request events but only for the "master" branch
  push:
    branches: [ "master" ]
  pull_request:
    branches: [ "master" ]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [17.x]
    steps:
    - name: Checkout repository
      uses: actions/checkout@v2
    - name: Set up Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - name: Install dependencies
      run: npm install
    # - name: Run the tests
    #   run: npm test
    - name: Build
      run: CI='' npm run build -- --prod
      
  deployment:
    name: deployment
    runs-on: ubuntu-latest
    needs: build
    steps:
    - name: Checkout repository
      uses: actions/checkout@v2
    - name: Set up Docker Buildx
      uses: docker/setup-buildx-action@v1
    - name: Login to DockerHub
      uses: docker/login-action@v1
      with:
        username: ${{ secrets.DOCKERHUB_USERNAME }}
        password: ${{ secrets.DOCKERHUB_PASSWORD }}
    - name: Build and push
      uses: docker/build-push-action@v2
      with:
        context: ./
        file: ./Dockerfile
        push: ${{ github.event_name != 'pull_request' }}
        tags: ${{ secrets.DOCKERHUB_USERNAME }}/frontend:latest
```

While not in the GitHub actions, the React site is also being monitored by Sonarcloud. This is done automatically by Sonarcloud when I push something to main.

# Docker
When the docker images are on Docker hub, I can pull them to my home server where I run the API and the site. To run all the services in docker, I made a Docker-compose. The Docker-compose file contains:
- react site
- API
- SQL container
- Watchtower

And look like this:
```yml
version: "2.0"
services:
  dream-service:
    image:  tjerkzeilstra/s3-dreamcatcher-api:latest
    ports:
      - 5001:5001
    environment:
      ConnectionStrings__dreamContext: "Server=db;Database=dream;User=sa;Password=passord"
    depends_on:
      - db
  react-site:
    image: tjerkzeilstra/frontend:latest
    ports:
      - 3000:3000
  db:
      image: "mcr.microsoft.com/mssql/server:2019-latest"
      environment:
          SA_PASSWORD: "R9QgoT#Pm8"
          ACCEPT_EULA: "Y"
      volumes:
        - ./mssql-db:/var/opt/mssql/data
      ports:
        - 1433:1433
```

## Watchtower
With [Watchtower](https://containrrr.dev/watchtower/) The latest image gets pulled from Dockerhub. I configured watchtower to check Dockerhub every 10 minutes, so when I commit to the main branch it takes around 10 minutes for the new version to go live. This way, the deployment of new versions is automatic.

# Eventify
For Eventify my task was to deploy the API on my home server. We set up a GitHub action for all the services so that they get pushed to Dockerhub. From there, I made a Docker-compose file that pulled all the services from Dockerhub. In the Docker-compose, I also injected the connection string for the database. This was done so we could have a different connection string on our local machines. With Watchtower, the images get pulled automatically every 10 minutes. 

docker-compose file of Eventify:
```yml
version: "3.8"
services:
  gw:
    image: eeventify/api-gateway:main
    ports:
      - 8080:80
  
  user-service:
    image:  eeventify/user-service:main
    ports:
      - 5001:5001
    environment:
      ConnectionStrings__UserContext: "Server=db;Database=User Service;User=sa;Password=passord"
      APIS__Event: "http://event-service:5002/"
    depends_on:
      - db
  
  event-service:
    image: eeventify/event-service:main
    ports:
      - 5002:5002
    environment:
      ConnectionStrings__EventContext: "Server=db;Database=Event Service;User=sa;Password=passord"
    depends_on:
      - db

  interest-service:
    image: eeventify/interest-service:main
    ports:
      - 5003:5003
    environment:
      ConnectionStrings__InterestContext: "Server=db;Database=interest;User=sa;Password=passord"
    depends_on:
      - db

  chat-service:
    image: eeventify/chat-service:main
    ports:
      - 5100:5100
    environment:
      ConnectionStrings__ChatContext: "Server=db;Database=Chat;User=sa;Password=passord"

  db:
    image: "mcr.microsoft.com/mssql/server:2019-latest"
    environment:
        SA_PASSWORD: "R9QgoT#Pm8"
        ACCEPT_EULA: "Y"
    volumes:
      - ./mssql-db:/var/opt/mssql/data
    ports:
      - 1433:1433
  
  watchtower:
    image: containrrr/watchtower
    restart: always
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /etc/timezone:/etc/timezone:ro
    command: --interval 600
```