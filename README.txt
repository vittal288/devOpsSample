set NODE_ENV=test
set NODE_ENV=dev

--------------------
sample DevOps Implementation with AngularJS POC
Step #1 set NODE_ENV = test || set NODE_ENV=dev 
Step #2 gulp dev , it builds build directory and depends on development mode the HTML file will serve to browser
Step #3 gulp test, this is for to run unit test cases and code coverage using Jasmine Istanbul and corbertura 
Step #4 gulp e2e , this is for end to end test using seleneium web driver and Protractor