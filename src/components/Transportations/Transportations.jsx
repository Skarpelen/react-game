import "./Transportations.scss";
import { cities } from "../../cities";

function Transportations(props) {
  function findGoodById(itemId) {
    return props.goods.find((item) => {
      return item.id === itemId;
    }).title;
  }

  function getCityById(cityId) {
    return cities.find((city) => {
      return city.id === cityId;
    }).title;
  }

  return (
    <div className="transportations">
      <h2 className="title">Активные перевозки</h2>

      <div className="panel">
        {props.orders.map((order) => {
          return (
            <div className="good-item-wrapper">
              <div className="good-item-description">
                <div className={"good-item item-" + order.goodId}></div>
              </div>
              <div className="good-item-transport-info">
                <div>
                  <div className="header">
                    {findGoodById(order.goodId)}, {order.qty} шт.
                  </div>
                  <div className="path">
                    Из: {getCityById(order.fromCityId)}
                    <br />
                    В: {getCityById(order.targetCityId)}
                  </div>
                </div>
                <div>
                  <div className="days">Дни: {order.days}</div>
                  <button
                    className="button"
                    disabled={order.days ? true : false}
                    onClick={() => {
                      props.onAcceptOrder(order);
                    }}
                  >
                    Получить
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Transportations;
