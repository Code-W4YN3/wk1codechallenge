//Prompts user to input Basic Salary and Benefits using prompt-sync extension
const prompt = require('prompt-sync')();
const basicSalary = prompt('Enter Basic Salary: ')
const benefits = prompt('Enter Benefits: ')
// setting tax rates, nhif brackets and nssf rate
const taxBrackets = [
  { min: 0, max: 24000, rate: 0.1 },
  { min: 24001, max: 32333, rate: 0.25 },
  { min: 32334, max: Infinity, rate: 0.3 }
];
const nhifBrackets = [
  { min: 0, max: 5999, deduction: 150 },
  { min: 6000, max: 7999, deduction: 300 },
  { min: 8000, max: 11999, deduction: 400 },
  { min: 12000, max: 14999, deduction: 500 },
  { min: 15000, max: 19999, deduction: 600 },
  { min: 20000, max: 24999, deduction: 750 },
  { min: 25000, max: 29999, deduction: 850 },
  { min: 30000, max: 34999, deduction: 900 },
  { min: 35000, max: 39999, deduction: 950 },
  { min: 40000, max: 44999, deduction: 1000 },
  { min: 45000, max: 49999, deduction: 1100 },
  { min: 50000, max: 59999, deduction: 1200 },
  { min: 60000, max: 69999, deduction: 1300 },
  { min: 70000, max: 79999, deduction: 1400 },
  { min: 80000, max: 89999, deduction: 1500 },
  { min: 90000, max: 99999, deduction: 1600 },
  { min: 100000, max: Infinity, deduction: 1700 }
];
const nssfRate = 0.06;
const grossSalary = Number(basicSalary) + Number(benefits)
// Calculate PAYE 
let tax = 0;
let taxable = grossSalary
for (let bracket of taxBrackets) {
  if (bracket.min <= taxable && taxable <= bracket.max) {
    tax += (taxable - bracket.min) * bracket.rate;
  }
}
// Calculate NHIF 
const nhifBracket = nhifBrackets.find(bracket => bracket.min <= grossSalary && grossSalary <= bracket.max);
const nhif = nhifBracket ? nhifBracket.deduction : 0;
//Calculate NSSF
const nssf= grossSalary * nssfRate
//Calculate NetPay
const netSalary = grossSalary - tax - nhif - nssf

// Output
console.log(`Gross Salary: ${grossSalary}`);
console.log(`PAYE: ${tax}`);
console.log(`NHIF Deductions: ${nhif}`);
console.log(`NSSF Deductions: ${nssf}`);
console.log(`Net Salary: ${netSalary}`);
