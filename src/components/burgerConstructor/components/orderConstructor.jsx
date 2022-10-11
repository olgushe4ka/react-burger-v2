import burgerConstructorStyles from "../burgerConstructor.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { cart } from "../../../utils/data";

function OrderConstructor(props) {
  return (
    <div className={`pl-9 pr-5 pb-0 pt-6`}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={props.image}
        />

        <ul className={`${burgerConstructorStyles.list}`}>
          {cart.map((cartPosition) => {
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
                  key={cartPosition._id}
                  price={cartPosition.price}
                  type={cartPosition.type}
                  thumbnail={cartPosition.image}
                  text={cartPosition.name}
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
          thumbnail={props.image}
        />
      </div>

      {/* <div
        className={`${burgerConstructorStyles.darkBackround} pl-0 pr-0 pb-0 pt-0`}
        style={{ display: "flex" }}
      >
        <div style={{ display: "flex" }}>
          <img
            className={burgerConstructorStyles.image}
            src={props.image}
            alt="фото ингридиента"
          />
          <p
            className={`${burgerConstructorStyles.title} text text_type_main-small`}
          >
            {props.name}
          </p>
        </div>
        <div style={{ display: "flex" }}>
          <div
            className={`${burgerConstructorStyles.priceBox}  pl-0 pr-6 pb-0 pt-0`}
          >
            {" "}
            <p className="text text_type_main-medium mr-2">{props.price}</p>
            <CurrencyIcon type="primary" />
            <div className="pl-6 pr-0 pb-0 pt-0">
              <DeleteIcon type="primary" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

OrderConstructor.propTypes = {
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default OrderConstructor;
