You need to do the following updates in your project:
* Add the Test script(s) to your central package.json file -> 
    I got the following notes regarding this point:
    Your project-level package.json must include scripts for building and testing the frontend and backend applications. The test script does not have to run correctly but has to refer to the frontend/backend test scripts in their respective folders. The idea here is that when the developer of any of those apps updates the app with proper tests, there is little to no update needed for the CI/CD pipeline."
    My Action:
    1) Backend test script added
    2) Frontend test script added

* Limit the deployment to the master branch
    1) Done and thanks for the hint

* Send the secrets from CircleCi to EB
    1) They were already in the CircleCi but it's my mistake I forgot to add screenshots

* Add a screenshot of the CricleCi secrets into your document
    1) pr15 added
    2) pr16 added

* Update your documentation
    1) Done
* Create and add the Infrastructure and Pipeline diagram
    1) Done Please check the other files in the docs folder and thank you