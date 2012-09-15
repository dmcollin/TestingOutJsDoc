/**
* Create a jermaine model of a person
* @constructor
* @param name
* @param age
*/

var jPerson = new Model();
jPerson.hasA("name");
jPerson.hasAn("age");

jPerson.hasA("dog").which.validateWith(function (dog) {
    return dog instanceof jPerson;
});