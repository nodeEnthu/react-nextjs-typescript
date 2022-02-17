interface Admin {
  name: string;
  privileges: string[];
};

interface Employee {
  name: string;
  startDate: string;
}

type ElevatedEmployee = Admin & Employee;

const person: ElevatedEmployee = {
  name: "stake",
  privileges: ["root"],
  startDate: "12/21/2021"
}

type Combinable = string | number;

type Numeric = number | boolean;

function sum(a: Combinable, b: Combinable) {
  if (typeof a === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

function sum1(a: number, b: string) {
  return a + b;
}

export default ElevatedEmployee;