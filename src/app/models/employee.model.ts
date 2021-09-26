export interface Employee {
  id: Number;
  name: String;
  position: String;
  salary: Number;
  address?: Address;
}

export interface Address {
  street: String;
  number: String;
  postalCode: Number;
}
