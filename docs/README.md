
# Architecture Diagram

* [File Structure](#File_Structure)
* [Circle Ci](#Circle_Ci)
* [Screenshots](#Screenshots)


## File_Structure
The project contains the following folders
    1) udagram-api: Contains all of the backend files 
    2) udagram-frontend: Contains an Angular front end app
    3) docs: Contains project documentation
    4) screenshoots: Contains different screen shots for different building stages of the project
    5) .circleci: Contains the configurations of the Circle Ci server

## Circle_Ci
CircleCI is a continuous integration and continuous delivery platform that can be used to implement DevOps practices
to properly configure it I did the following steps:

* Configure the Orbs for:
    1) Node
    2) AWS-CLI
    3) EB
* Configure a proper docker image
* Setup node, aws and eb
* Run the required actions as the following:
    1) Install Frontend
    2) Install Backend
    3) Build Frontend
    4) Build Backend
    5) Deploy Backend
    6) Deploy Frontend

## Screenshots
The folder screenshots contain several photos about the different stages of the project, each photo starts with pr<number> so I'll list them all here with my comment on each photo:

* pr1: This is the creation of the GitHub repo, I did it manually

* pr2: Linking my newly created CircleCi account with the "Project3" GitHub repo

* pr3: Since I was very new to CircleCi I wanted to test how it will handle the code without involving AWS so I let it do only the basic functions

* pr4: Starting AWS, this screenshot is for the RDS service once it was available

* pr5: The RDS configuration console

* pr6: Elastic Beanstalk once adding the code and before adding the env variables and this is why the health was not OK

* pr7: Once adding the env variables and health is OK

* pr8: Once the selected bucket is created via CircleCi and permissions modified via console

* pr9: S3 generated the front-end link that is supplied in the root readme.md file

* pr10: Once the CircleCi completed all of its jobs successfully since the list is too long, this is only the upper part

* pr11: And the lower part

* pr12: Just to give an idea about how many trials I made until I was able to make everything work together

* pr13: Using the filter to show the successful builds of both projects (test and real) on CircleCi

* pr14: The website is working ... 