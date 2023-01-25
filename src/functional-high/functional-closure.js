function getSalary(baseSalary, awardSalary) {
  return baseSalary + awardSalary;
}
console.log(getSalary(8000, 50));
console.log(getSalary(8000, 100));
console.log(getSalary(8000, 120));

function _getSalary(baseSalary) {
  return (awardSalary) => {
    return baseSalary + awardSalary;
  };
}

let getMySalary = _getSalary(8000);
console.log(getMySalary(50));
console.log(getMySalary(100));
console.log(getMySalary(120));
