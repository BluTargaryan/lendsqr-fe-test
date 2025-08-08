type Category = {
  name: string;
  pages: string[];
}

export const pageList: Category[] = [
  {
    name: "Customers",
    pages: [
      "Users",
      "Guarantors",
      "Loans",
      "Decision Models",
      "Savings",
      "Loan Requests"
    ]
  },
  {
    name: "Business",
    pages: [
      "Organization",
      "Loan Products",
      "Savings Products",
      "Fees and Charges",
      "Transactions",
      "Services"
    ]
  },
  {
    name: "Settings",
    pages: [
      "Service Account",
      "Settlements",
      "Reports",
      "Preferences",
      "Fees and Pricing",
      "Audit Logs"
    ]
  }
];