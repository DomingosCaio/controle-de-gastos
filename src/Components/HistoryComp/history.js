import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export const HistoryComp = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>Lista de gastos e entradas</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.amount < 0 ? "minus" : "plus"}
          >
            {transaction.text} <span>{`R$ ${transaction.amount}`}</span>
            <button
              className="delete-btn"
              onClick={() => deleteTransaction(transaction.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
