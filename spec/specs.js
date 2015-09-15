describe('Contact', function() {
  it("creats a new contact with the given specifications", function() {
    var testContact = new Contact("Lucile", "Bluth");
    expect(testContact.firstName).to.equal("Lucile");
    expect(testContact.lastName).to.equal("Bluth");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
      var testContact = new Contact("Tobias", "Funke");
      expect(testContact.fullName()).to.equal("Tobias Funke");
  });

});

describe('Address', function() {
    it("creates a new address with the given specifications", function() {
        var testAddress = new Address("Business", "110 Marine Ave", "Newport Beach", "California");
        expect(testAddress.addressType).to.equal("Business");
        expect(testAddress.street).to.equal("110 Marine Ave");
        expect(testAddress.city).to.equal("Newport Beach");
        expect(testAddress.state).to.equal("California");
    });

    it("adds the fullAddress method to all addresses", function() {
        var testAddress = new Address("Business", "110 Marine Ave", "Newport Beach", "California");
        expect(testAddress.fullAddress()).to.equal("Business, 110 Marine Ave, Newport Beach, California");
    });
});
