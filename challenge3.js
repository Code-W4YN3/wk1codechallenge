const prompt = require('prompt-sync')();
const salary = prompt('Enter basic salary: ')
console.log(PAYE(salary))
console.log(grossSalary(salary))

//Calculates PAYE
function PAYE(salary){
  if(salary <= 24000){
    Tax = salary * 10/100
  }else if(salary > 24000 && salary <= 32333){
    Tax = salary * 25/100
  }else if(salary > 32333){
    Tax = salary * 30/100
  }
  return `PAYE: ${Tax}`
}

function grossSalary(salary){
  const gross = salary - Tax
  return `Gross Salary: ${gross}`
}
function NHIF(gross){
  gross;
  let deduct;
  switch(gross){
    case gross <= 5999:
      deduct = 150
      break;
    case gross >= 6000 && gross <= 7999:
      deduct = 300
      break;
    case gross >= 8000 && gross <= 11999:
      deduct = 400
      break;
    case gross >= 12000 && gross <= 14999:
      deduct = 500
      break;
    case gross >= 15000 && gross <= 19999:
      deduct = 600
      break;
    case gross >= 20000 && gross <= 24999:
      deduct = 750
      break;
    case gross >= 25000 && gross <= 29999:
      deduct = 850
      break;
    case gross >= 30000 && gross <= 34999:
      deduct = 900
      break;
    case gross >= 35000 && gross <= 39999:
      deduct = 950
      break;
    case gross >= 40000 && gross <= 44999:
      deduct = 1000
      break;
    case gross >= 45000 && gross <= 49999:
      deduct = 1100
      break;
    case gross >= 50000 && gross <= 59999:
      deduct = 1200
      break;
    case gross >= 60000 && gross <= 69999:
      deduct = 1300
      break;
    case gross >= 70000 && gross <= 79999:
      deduct =1400
      break;
    case gross >= 80000 && gross <= 89999:
      deduct = 1500
      break;
    case gross >= 90000 && gross <= 99999:
      deduct = 1600
      break;
    case gross >= 100000:
      deduct = 1700
      break;
  }
  return `NHIF deduction: ${deduct}`
}
function netSalary(gross, deduct){
  let netPay = gross - deduct
  return `Ner Salary: ${netPay}`
}
console.log(NHIF(Number(salary)))
console.log(netSalary(Number(salary)))

