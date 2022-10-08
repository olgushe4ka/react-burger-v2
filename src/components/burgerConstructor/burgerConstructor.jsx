import burgerConstructorStyles from "./burgerConstructor.module.css";
import {
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { cart } from "../../utils/data";
import PropTypes from "prop-types";
import OrderConstructor from "./components/orderConstructor";
import Sum from "./components/sum";

function BurgerConstructor() {
  return (
    <section className={`${burgerConstructorStyles.main} pl-4 pr-4 pb-0 pt-0`}>
      <ul className={`${burgerConstructorStyles.menuBox} `}>
        {cart.map((cartPosition) => {
          return (
            <OrderConstructor
              key={cartPosition._id}
              price={cartPosition.price}
              type={cartPosition.type}
              image={cartPosition.image}
              name={cartPosition.name}
            />
          );
        })}
      </ul>
      <div
        className={`${burgerConstructorStyles.totalSumBox} pl-4 pr-4 pb-0 pt-10`}
      >
        <Sum></Sum>
        <Button type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default BurgerConstructor;










