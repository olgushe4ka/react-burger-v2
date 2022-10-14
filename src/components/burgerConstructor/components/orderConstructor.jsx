import burgerConstructorStyles from "../burgerConstructor.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { cart } from "../../../utils/data";

function OrderConstructor(props) {
  return (
    <div className={`${burgerConstructorStyles.orderConstructor} pl-9 pr-5 pb-0 pt-6`} >
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
      />

      <ul className={`${burgerConstructorStyles.list}`}>
        {cart.map((cartItem) => {
          return (
            <li
              className={`${burgerConstructorStyles.listElement} pl-0 pr-0 pb-2 pt-2`}
            >
              <div
                className={`${burgerConstructorStyles.dragIcon} pl-0 pr-3 pb-0 pt-0`}
              >
                <DragIcon type="primary" />
              </div>

              <ConstructorElement
                isLocked={false}
                key={cartItem._id}
                price={cartItem.price}
                type={cartItem.type}
                thumbnail={cartItem.image}
                text={cartItem.name}
              />
            </li>
          );
        })}
      </ul>

      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
      />
    </div>
  );
}

OrderConstructor.propTypes = {
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default OrderConstructor;
