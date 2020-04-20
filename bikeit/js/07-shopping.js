// quick quote.js - version 2
// This script calculates an order total.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
	'use strict';
	var total;
    var quantity = document.getElementById('quantity').value;
	var price = 10;
	var accessories = document.getElementById('accessories').value;
	var aprice = 1;
    var tax = .10;
    
	
	price = price * quantity;
	aprice = aprice * accessories;
	total = price + aprice;
	tax++;
	total *= tax;
	
	
	// Format the total:
	total = total.toFixed(2);
	
	document.getElementById('total').value = total;
	return false;
	    
}// End of calculate() function.
 
function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;

}// End of init() function.
window.onload = init;