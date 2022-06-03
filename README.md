## Table of Contents
* [My Approch](#My_Approch)
* [UDACITY Supplied ReadMe](#Udagram)


# My_Approch
After finishing the course videos, I did the following actions: 

1) Creating a test CircleCi project without deployment or any other sort of complication, the purpose was to test my capability of linking my GitHub account with CircleCi and test its behavior since this is the first time using CircleCi.

2) Building the supplied project locally and solving its issues (PORT and DB_PORT) and many other

3) Using the RDS service to host the Postgres Database, during this step I discovered that the instructor in the course videos ignored two important things: Database name setup and security setup, I was able to find that through the slack support channel   

4) Using the Elastic Beanstalk service to host my backend files, this point was my worst point mainly because I use a windows machine so I had to find an equivalent command to be used locally as well as keep the original command for the remote servers 

5) Using S3 to host my frontend files, this step was relatively fast I didn't face many troubles 

6) Configure the CircleCi to do the complete automation and deployment of both backend and frontend project 

and finally, it works with the S3 frontend link:
http://udagramfrontend.s3-website-us-east-1.amazonaws.com/   

GitHub Repo: 
https://github.com/ElectroVilla/Project3

More details are found in the docs folder

# Udagram

This application is provided to you as an alternative starter project if you do not wish to host your own code done in the previous courses of this nanodegree. The udagram application is a fairly simple application that includes all the major components of a Full-Stack web application.

## Getting Started

1. Clone this repo locally into the location of your choice.
1. Move the content of the udagram folder at the root of the repository as this will become the main content of the project.
1. Open a terminal and navigate to the root of the repo
1. follow the instructions in the installation step

The project can run but is missing some information to connect to the database and storage service. These will be setup during the course of the project

### Dependencies

```
- Node v14.15.1 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version

- npm 6.14.8 (LTS) or more recent, Yarn can work but was not tested for this project

- AWS CLI v2, v1 can work but was not tested for this project

- A RDS database running Postgres.

- A S3 bucket for hosting uploaded pictures.

```

### Installation

Provision the necessary AWS services needed for running the application:

1. In AWS, provision a publicly available RDS database running Postgres. <Place holder for link to classroom article>
1. In AWS, provision a s3 bucket for hosting the uploaded files. <Place holder for tlink to classroom article>
1. Export the ENV variables needed or use a package like [dotnev](https://www.npmjs.com/package/dotenv)/.
1. From the root of the repo, navigate udagram-api folder `cd starter/udagram-api` to install the node_modules `npm install`. After installation is done start the api in dev mode with `npm run dev`.
1. Without closing the terminal in step 1, navigate to the udagram-frontend `cd starter/udagram-frontend` to intall the node_modules `npm install`. After installation is done start the api in dev mode with `npm run start`.

## Testing

This project contains two different test suite: unit tests and End-To-End tests(e2e). Follow these steps to run the tests.

1. `cd starter/udagram-frontend`
1. `npm run test`
1. `npm run e2e`

There are no Unit test on the back-end

### Unit Tests:

Unit tests are using the Jasmine Framework.

### End to End Tests:

The e2e tests are using Protractor and Jasmine.

## Built With

- [Angular](https://angular.io/) - Single Page Application Framework
- [Node](https://nodejs.org) - Javascript Runtime
- [Express](https://expressjs.com/) - Javascript API Framework

## License

[License](LICENSE.txt)


## My_Approch
I took the following steps to successfully deploy the project:

1) Create a local PostgreSQL Database  
2) Install and build both frontend and backend locally
3) Create scripts locally
4) Create .circleci/config.yml file
5) Publish to GitHub
6) Connected CircleCi to GitHub and make sute that CircleCI can really install dependencies and install / build both frontend and backend
7) Created the AWS RDS database
8) Created the AWS Elastic Beanstack 
9) Created the AWS IAM
10) Created AWS S3
11) Updating my local files with the new credentials (each after its related step)
12) pushing again to GitHub
... and finally seeing the magic happens in CircleCI like a charm