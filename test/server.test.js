// Requiring module
const assert = require('chai').assert;
const sayhello = require('../server');

// We can group similar tests inside a describe block
describe("Simple helloworld", () => {
before(() => {
	console.log( "start testing ###### This part executes once before all tests" );
});

after(() => {
	console.log( " End Testing #####This part executes once after all tests" );
});
	
// We can add nested blocks for different tests
describe( "sayhello", () => {
	beforeEach(() => {
	console.log( "checking hello world application" );
	});
	
	it("Is returning the message when accessed", () => {
    const result = sayhello();
	assert.equal(result, 'Hello World!!');
	});

});


});

