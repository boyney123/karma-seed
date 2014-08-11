function Person() {
	this.firstname;
	this.lastname;
}

Person.prototype.GetFullName = function(){
	return this.firstname + " " + this.lastname;
}
