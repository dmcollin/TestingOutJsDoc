/**
* Create a person
* @constructor
* @param {string} name
* @param {number} age
*/

function Person(name, age){
	this.name = name;
	this.age = age;

	/**
	* State a greeting
	* @return {string} person's greeting
	*/
	this.greeting = function(){
		return "My name is " + this.name;
	}

	/**
	* This person's dog
	* @type dog
	*/
	this.dog = null;
}


