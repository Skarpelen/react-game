import "./Bank.scss";
import { cities } from "../../cities";

function Bank(props) {
  return (
    <div>
      <h2 className="title">Банк</h2>

      <div className="panel">
        {props.deposits.map((deposit) => {
          return (
            <div className="good-item-wrapper">
              <div className="good-item-description">
                <div className={"good-item item-deposit"}></div>
              </div>
              <div className="good-item-deposit-info">
                <div>
                  <div className="header">Сумма: {deposit.amount}</div>
                  <div className="days">
                    Дни до получения процента: {deposit.days}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Bank;
