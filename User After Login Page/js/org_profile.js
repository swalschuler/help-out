	//console.log("LOADED");
window.onload = function(){
	//hide 
	$("#showAddEventDiv").hide();
	$("#addEventdiv").hide();
    $("#joinEventdiv").hide();

	Parse.initialize("JYa2rthRq1g5OKVCgXtBUonJhWStISPaPvj72x8n", "w7hrygTyDliHdiSKd88lhEbwCwPqF1e06nR0Ockp");

	var currentUser = Parse.User.current();
	console.log(currentUser.id + ' - ' + currentUser.get('user_email') + ' ' + currentUser.get('user_type'));

	if (currentUser.get('user_type') == "student")
	{
		$("#joinEventdiv").toggle();
		console.log("#joinEventdiv");
	}
	else
	{
		$("#showAddEventDiv").toggle();
	}
};

function Address(street1, street2, city, state, zip, country)
{
	this.street1 = street1;
	this.street2 = street2;
	this.city = city;
	this.state = state;
	this.zip = zip;
	this.country = country;
} // new add("..","..","..","..");

$(function(){
	Parse.initialize("JYa2rthRq1g5OKVCgXtBUonJhWStISPaPvj72x8n", "w7hrygTyDliHdiSKd88lhEbwCwPqF1e06nR0Ockp");
	var user = Parse.User.current();

	$("#showAddEventDiv").click(function () {
	    if ($("#addEventdiv").is(":hidden"))
	    {
	        $("#addEventdiv").slideDown("slow");
	    }
    });


    $("#joinEventBtn").click(function () {
    	var Event = Parse.Object.extend("Event");
	    
	    var addr = new Address("5516 Liverpool ct", "null", "oak parking", "CA", "91377", "US");
		var name = "Test Event";		
		
		var event = new Event();
		
		event.set("address", addr);
		event.set("name", name);
		

		event.save(null, {
  		success: function(event) {
    		// The object was saved successfully.
    		var relation = Parse.User.current().relation("userEvents");
    		relation.add(event);
    		Parse.User.current().save();
  		},
  		error: function(event, error) {
    		// The save failed.
    		// error is a Parse.Error with an error code and description.
				console.log(error.message);
  		}
		});

    });
});