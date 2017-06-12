steps to run the application.

Prerrequisites :
Node.js, Mongodb, git, Postman, python

download the project from https://github.com/Kangan06/NodeThumbnail

- run npm install


to start the application
- start mongodb
- run npm start

to run the test cases
- run npm test

to generate code coverage
-run istanbul cover node_modules/mocha/bin/_mocha -- -R spec



APIs
-Use Postman to call the apis

GET
- http://localhost:8080/
- http://localhost:8080/setup      ---> setup a new user
POST
- http://localhost:8080/createUser  --->//body-> set x-www-formurlencoded  as name:admin, password:admin     --->create a new user admin
- http://localhost:8080/api/login   ---> give name:admin , password :admin in body and copy the token you get in response
GET
- http://localhost:8080/api/   ---> give x-access-token as the token received in above api in headers

POST
- http://localhost:8080/api/thumbnail  ---> give public image url with https(no http) in body and set x-access-token in headers, the compresses  image will be save in root directory
- http://localhost:8080/api/apply ---> give the json and jsonPatch objects in body selecting raw with type application/json (eg. {
	"json":{"foo":"abc"},
	"jsonPatch":[{ "op": "replace", "path": "/foo", "value": "rabbit" }]
})
 in response you will have both original and patched objects.
GET
- http://localhost:8080/api/users  --->set x-access-token in headers and it will give you the list of all users