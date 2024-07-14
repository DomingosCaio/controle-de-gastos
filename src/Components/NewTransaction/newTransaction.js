import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalState";

export const NewTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Adicionar nova informação</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Item</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Valor <br />
            (negativo - gasto, positivo - entrada)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Adicionar transação</button>
      </form>
    </>
  );
};
