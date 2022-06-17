# CICD
You **implement** a (semi)automated software release process that matches the needs of the project context.
# API
For the CICD of the API i made 2 branches on github on for development and a main. If shomething is pushed to the main brench i set up github actions to build, test and publish it. 

## Github Actions
I made 2 files that githubaction can use, the [main.yml](https://github.com/TjerkZ/s3-dreamcatcher-api/blob/master/.github/workflows/main.yml) First builds the app. This is the code you see under the build job. afther that it creates a docker image an pushes that to docker hub. that part is under the publish job.

```
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

The [build.yml](https://github.com/TjerkZ/s3-dreamcatcher-api/blob/master/.github/workflows/build.yml) file is for testing the application with static code analyses from sonarcloud. after the job is done executing the resualts are on sonarclouds website where you than can monitor issues.

```
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

The CICD of the react site the procces is identical to CICD of the API. When I commit to the main brench of the react site repository it gets tested, build and pushed to docker hub using github actions. Github uses the build.yml file below to do this. 

```
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

While not in the github actions the react site is also being monitored by sonarcloud. this is done automaticly by sonarcloud when i push somthing to main.

# Docker
When the docker images are on docker hub I can pull it to my homeserver where i run the API and the site. To run all the service in docker i made a docker compse. The docker compse file contains:
- react site
- API
- SQL container
- Watchtower

And look like this:
```
Compose file
```

## Watchtower
With [Watchtower](https://containrrr.dev/watchtower/) The lates image gets pulled from dockerhub. I configured watchtower to check dockerhub every 10 minits so when i commit to main it takes around 10 minutes for the new version to go live. This way the deployment of new versions is automatic.

# Eventify
