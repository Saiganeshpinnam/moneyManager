// Write your code here
// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {transactionsList, transactionTypeOptions} = props

  // const income = () => {
  //   let incomeAmount = 0
  //   transactionsList.forEach(eachTransaction => {
  //     if (eachTransaction.type === transactionTypeOptions[0].displayText) {
  //       incomeAmount += eachTransaction.amount
  //     }
  //   })
  //   return incomeAmount
  // }

  // const expenses = () => {
  //   let expensesAmount = 0
  //   transactionsList.forEach(eachTransaction => {
  //     if (eachTransaction.type === transactionTypeOptions[1].displayText) {
  //       expensesAmount += eachTransaction.amount
  //     }
  //   })
  //   return expensesAmount
  // }

  const income = transactionsList
    .filter(transaction => transaction.type === 'Income')
    .reduce((acc, curr) => acc + parseInt(curr.amount), 0)
  const expenses = transactionsList
    .filter(transaction => transaction.type === 'Expenses')
    .reduce((acc, curr) => acc + parseInt(curr.amount), 0)

  const balance = income - expenses

  return (
    <div className="money-details-bg-container">
      <div className="money-details-container balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="financial-icon"
          alt="balance"
        />
        <div className="current-status-container">
          <p className="your-status">Your Balance</p>
          <p className="amount-status" data-testid="balanceAmount">
            Rs. {balance}
          </p>
        </div>
      </div>

      <div className="money-details-container income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="financial-icon"
          alt="income"
        />
        <div className="current-status-container">
          <p className="your-status">
            Your {transactionTypeOptions[0].displayText}
          </p>
          <p className="amount-status" data-testid="incomeAmount">
            Rs. {income}
          </p>
        </div>
      </div>

      <div className="money-details-container expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="financial-icon"
          alt="expenses"
        />
        <div className="current-status-container">
          <p className="your-status">
            Your {transactionTypeOptions[1].displayText}
          </p>
          <p className="amount-status" data-testid="expensesAmount">
            Rs. {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails