
function Contact(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.addresses = [];
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

function Address(addressType, street, city, state) {
    this.addressType = addressType;
    this.street = street;
    this.city = city;
    this.state = state;
}

Address.prototype.fullAddress = function() {
        return this.addressType + ", " + this.street + ", " + this.city + ", " + this.state;
}

function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-address-type").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
    $("div.new-address").not(':first').remove();
}

function newAddresses() {
        $("#new-addresses").append('<div class="new-address">' +
                                    '<div class="form-group">' +
                                      '<label for="new-address-type">Type of Address</label>' +
                                      '<input type="text" class="form-control new-address-type">' +
                                    '</div>' +
                                     '<div class="form-group">' +
                                       '<label for="new-street">Street</label>' +
                                       '<input type="text" class="form-control new-street">' +
                                     '</div>' +
                                     '<div class="form-group">' +
                                       '<label for="new-city">City</label>' +
                                       '<input type="text" class="form-control new-city">' +
                                     '</div>' +
                                     '<div class="form-group">' +
                                       '<label for="new-state">State</label>' +
                                       '<input type="text" class="form-control new-state">' +
                                     '</div>' +
                                   '</div>');
}

$(document).ready(function() {
    $("#add-address").click(function() {
        newAddresses();
    });

    $("form#new-contact").submit(function(event) {
        event.preventDefault();

        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();

        var newContact = new Contact(inputtedFirstName, inputtedLastName);

        $(".new-address").each(function(){
            var inputtedAddressType = $(this).find("input.new-address-type").val();
            var inputtedStreet = $(this).find("input.new-street").val();
            var inputtedCity = $(this).find("input.new-city").val();
            var inputtedState = $(this).find("input.new-state").val();

            var newAddress = new Address(inputtedAddressType, inputtedStreet, inputtedCity, inputtedState);
            newContact.addresses.push(newAddress);
            });

        $("ul#contacts").append( "<li><span class = 'contact'>" + newContact.fullName() + "</span></li>" );

        $(".contact").last().click(function() {
          $("#show-contact").hide().fadeIn("slow");

          $("#show-contact h2").text(newContact.firstName);
          $(".first-name").text(newContact.firstName);
          $(".last-name").text(newContact.lastName);

          $("ul#addresses").text("");

          newContact.addresses.forEach(function(address) {
              $("ul#addresses").append(
                  "<p>" + address.addressType + "</p>" +
                  "<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
              });
        });

        resetFields();
  });

});

$(document).keypress(function(event) {
    if(event.which === 13) {
        var tim = new Audio('http://www.nebo.edu/learning_resources/ppt/sounds/Tim%20Allen%20aargh2.wav');
        tim.play();
        alert("There's always money in the Banana Stand");
        $("#show-banana").show();
        event.preventDefault();
    }

});
