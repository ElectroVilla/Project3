You need to do the following updates in your project:
* Add the Test script(s) to your central package.json file
    I got the following notes regarding this point:
    Your project-level package.json must include scripts for building and testing the frontend and backend applications. The test script does not have to run correctly but has to refer to the frontend/backend test scripts in their respective folders. The idea here is that when the developer of any of those apps updates the app with proper tests, there is little to no update needed for the CI/CD pipeline."
    My Action:
    -> Backend test script added
    -> Frontend test script added

* Limit the deployment to the master branch
    -> Done and thanks for the hint

* Send the secrets from CircleCi to EB
    -> They were already in the CircleCi but it's my mistake I forgot to add screenshots

* Add a screenshot of the CricleCi secrets into your document
    -> pr15 added
    -> pr16 added

* Update your documentation

* Create and add the Infrastructure and Pipeline diagram