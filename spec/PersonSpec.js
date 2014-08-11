describe("Person", function() {

  it("Should be equal to David Boyne", function() {

  	var person = new Person();
  	person.firstname = "David";
  	person.lastname = "Boyne";

  	expect(person.GetFullName()).toBe("David Boyne");

  });

});
