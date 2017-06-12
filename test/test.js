
// var chai = require('chai');
// var chaiHttp = require('chai-http');
// var should = chai.should();




var should = require('should');
var assert = require('assert');
var request = require('supertest');
var http = require('http');
var app = require('./../server.js');
var port = 8080;
var supertest=require('supertest');
var api=supertest('http://localhost:8080');


describe('HTTP Server Test', function() {
	
	describe('/', function() {
		it('should be Hello, Mocha!', function(done) {
			http.get('http://127.0.0.1:8080', function(response) {
				// Assert the status code.
				assert.equal(response.statusCode, 200);
                done();
               
			});
		});
	});

    	describe('/setup', function() {
		it('should setup a User', function(done) {
			http.get('http://127.0.0.1:8080/setup', function(response) {
				
				assert.equal(response.statusCode, 200);
				//assert.equal(response.body.success,true);
                done();
               
			});
		});
	});

		describe('/createUser', function() {
		it('should create a User', function(done) {
			api.post('/createUser')
			.set('Accept','application/x-www-form-urlencoded')
			.send({
				name:"admin",
				password:"admin"
			})
			.expect(200)
			done();
		});
	});


		describe('/api', function() {
		it('should not successfully call /api', function(done) {
		http.get('http://127.0.0.1:8080/api', function(response) {
				// Assert the status code.
				
				assert.equal(response.statusCode, 403);
                done();
               
			});
		});
	});


	describe('/api', function() {
		it('should successfully call /api', function(done) {
			api.post('/api')
			.set('Accept','application/x-www-form-urlencoded')
			.set('x-access-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiX192IjoiaW5pdCIsImFkbWluIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIm5hbWUiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX192Ijp0cnVlLCJhZG1pbiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsIm5hbWUiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfX3YiOjAsImFkbWluIjp0cnVlLCJwYXNzd29yZCI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiX2lkIjoiNTkzZWIwNWFmNjI3NjMxM2ZjOTZhMDk2In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTcyODA2MDgsImV4cCI6MTQ5NzM2NzAwOH0.wJwMt020PMxPiLt_bl_BJ6uONnVenNsz3WgR8AcQFdw')
	        .send({
	        	url:"https://static.pexels.com/photos/36764/marguerite-daisy-beautiful-beauty.jpg"
	        })
			
			.expect(200)
			done();
		});
	});	


		describe('/api/thumbnail', function() {
		it('should successfully call /api/thumbnail', function(done) {
			api.get('/api/thumbnail')
			.set('Accept','application/x-www-form-urlencoded')
			.set('x-access-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiX192IjoiaW5pdCIsImFkbWluIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIm5hbWUiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX192Ijp0cnVlLCJhZG1pbiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsIm5hbWUiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfX3YiOjAsImFkbWluIjp0cnVlLCJwYXNzd29yZCI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiX2lkIjoiNTkzZWIwNWFmNjI3NjMxM2ZjOTZhMDk2In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTcyODA2MDgsImV4cCI6MTQ5NzM2NzAwOH0.wJwMt020PMxPiLt_bl_BJ6uONnVenNsz3WgR8AcQFdw')
	
			
			.expect(200)
			done();
		});
	});	


 
		describe('/api/thumbnail', function() {
		it('should not successfully call /api/thumbnail', function(done) {
			http.get('http://127.0.0.1:8080/api/thumbnail', function(response) {
				// Assert the status code.
				
				assert.equal(response.statusCode, 404);
                done();
               
			});
		});
	});	

	describe('/api/apply', function() {
		it('should successfully call /api/apply', function(done) {
			api.post('/api/apply')
			.set('Accept','application/x-www-form-urlencoded')
			.set('x-access-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiX192IjoiaW5pdCIsImFkbWluIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIm5hbWUiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX192Ijp0cnVlLCJhZG1pbiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsIm5hbWUiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfX3YiOjAsImFkbWluIjp0cnVlLCJwYXNzd29yZCI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiX2lkIjoiNTkzZWIwNWFmNjI3NjMxM2ZjOTZhMDk2In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTcyODA2MDgsImV4cCI6MTQ5NzM2NzAwOH0.wJwMt020PMxPiLt_bl_BJ6uONnVenNsz3WgR8AcQFdw')
            .send({
            	modJson:{"foo":"abc"},
            	jsonPatch:[{ "op": "replace", "path": "/foo", "value": "boo" }]
            })	
			
			.expect(200)
			done();
		});
	});	


	describe('/api/apply', function() {
		it('should not successfully call /api/apply', function(done) {
			http.get('http://127.0.0.1:8080/api/apply', function(response) {
				// Assert the status code.
				var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiX192IjoiaW5pdCIsImFkbWluIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIm5hbWUiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX192Ijp0cnVlLCJhZG1pbiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsIm5hbWUiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfX3YiOjAsImFkbWluIjp0cnVlLCJwYXNzd29yZCI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiX2lkIjoiNTkzZWIwNWFmNjI3NjMxM2ZjOTZhMDk2In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTcyODA2MDgsImV4cCI6MTQ5NzM2NzAwOH0.wJwMt020PMxPiLt_bl_BJ6uONnVenNsz3WgR8AcQFdw';
				var modJson={"foo":"abc"};
       	        var jsonPatch={ "op": "replace", "path": "/foo", "value": "boo" };
				assert.equal(response.statusCode, 404);
                done();
               
			});
		});
	});

 //  	describe('/api/apply', function() {
	// 	it('should not successfully call /api/apply', function(done) {
	// 		api.get('/api/apply')
	// 		.set('Accept','application/x-www-form-urlencoded')
	// 		.set('x-access-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiX192IjoiaW5pdCIsImFkbWluIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIm5hbWUiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX192Ijp0cnVlLCJhZG1pbiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsIm5hbWUiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfX3YiOjAsImFkbWluIjp0cnVlLCJwYXNzd29yZCI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiX2lkIjoiNTkzZWIwNWFmNjI3NjMxM2ZjOTZhMDk2In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTcyODA2MDgsImV4cCI6MTQ5NzM2NzAwOH0.wJwMt020PMxPiLt_bl_BJ6uONnVenNsz3WgR8AcQFdw')
 //            .send({
 //            	modJson:{"foo":"abc"},
 //            	jsonPatch:{ "op": "replace", "path": "/foo", "value": "boo" }
 //            })	
			
	// 		.expect(200)
	// 		done();
	// 	});
	// });	


  describe('/api/users', function() {
		it('should successfully call /api/users', function(done) {
			api.get('/api/users')
			.set('Accept','application/x-www-form-urlencoded')
			.set('x-access-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiX192IjoiaW5pdCIsImFkbWluIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIm5hbWUiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX192Ijp0cnVlLCJhZG1pbiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsIm5hbWUiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfX3YiOjAsImFkbWluIjp0cnVlLCJwYXNzd29yZCI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiX2lkIjoiNTkzZWIwNWFmNjI3NjMxM2ZjOTZhMDk2In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTcyODA2MDgsImV4cCI6MTQ5NzM2NzAwOH0.wJwMt020PMxPiLt_bl_BJ6uONnVenNsz3WgR8AcQFdw')
	
			
			.expect(200)
			done();
		});
	});	


  describe('/api/users', function() {
		it('should not successfully call /api/users', function(done) {
			http.get('http://127.0.0.1:8080/api/users', function(response) {
			
				assert.equal(response.statusCode, 403);
                done();
               
			});
		});
	});
   

   describe('/api/login', function() {
		it('should successfully call /api/login', function(done) {
			api.post('/api')
			.set('Accept','application/x-www-form-urlencoded')
			//.set('x-access-token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiX192IjoiaW5pdCIsImFkbWluIjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsIm5hbWUiOiJpbml0IiwiX2lkIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX192Ijp0cnVlLCJhZG1pbiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsIm5hbWUiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfX3YiOjAsImFkbWluIjp0cnVlLCJwYXNzd29yZCI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwiX2lkIjoiNTkzZWIwNWFmNjI3NjMxM2ZjOTZhMDk2In0sIiRpbml0Ijp0cnVlLCJpYXQiOjE0OTcyODA2MDgsImV4cCI6MTQ5NzM2NzAwOH0.wJwMt020PMxPiLt_bl_BJ6uONnVenNsz3WgR8AcQFdw')
	        .send({
	        	name:"admin",
	        	password:"admin"
	        })
			
			.expect(200)
			done();
		});
	});	


});


