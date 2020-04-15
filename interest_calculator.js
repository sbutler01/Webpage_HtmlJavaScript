function calcInterest(){
	var initialMoney = document.querySelector('#initial_value').value;
	var interestRate = 0.01*document.querySelector('#operator_value').value;
	var loanTime = parseInt(document.querySelector('#operator_length').value);

	var operatorType = document.querySelector('#operator_type').value;
	var interestLength = parseInt(document.querySelector('#interest_length').value);

	var timeCompounds;

	if (operatorType === 'Simple') {
		timeCompounds = loanTime;
	} else {
		timeCompounds = parseInt(operatorType)
	}

	var numberTimes = loanTime/interestLength

	var numberCompounds = (interestLength - (interestLength%timeCompounds))/timeCompounds;

	var moneyEarned = initialMoney*(1+(interestRate/numberCompounds))**(numberCompounds*numberTimes);

	document.querySelector("#result").innerHTML = Math.round(moneyEarned*100)/100;

}