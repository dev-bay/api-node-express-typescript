export type Employee = {
  name: string,
  salary: number
}

export const calcSumOfNetSaleries = (data: Employee[]): number => {
  const taxLevelLower = 0.2;
  const taxLevelHigher = 0.25;
  const taxThreshold = 2500;

  return data.map((employee) => employee.salary)
    .reduce((salariesSum, currSalary) => {
      const salaryMultiplier = currSalary > taxThreshold ? (1 - taxLevelHigher) : (1 - taxLevelLower);
      const salaryAfterTax = currSalary * salaryMultiplier;

      return Math.round(salariesSum + salaryAfterTax);
    });
}