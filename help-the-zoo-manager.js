function calculateMoney(ticketSale){
  if(ticketSale<0){
    return "Number of Ticket Sale cannot be a Negative number. Please try again.";
  }
  else{
    leftMoney = (ticketSale*120) - (500 +(8*50));
    return leftMoney;
  }
}


console.log(calculateMoney(-1));