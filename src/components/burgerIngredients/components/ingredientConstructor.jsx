import ingredientsStyles from "../burgerIngredients.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDrag } from 'react-dnd';


function IngredientConstructor(props) {

  const { id, name, price, image } = props;


  //Drag and drop
  const [{ opacity }, drag] = useDrag({
    type: 'ingredient',
    item: { id },

    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.5 : 1
    })
  });




  return (
      <div className={`${ingredientsStyles.ingredietBox} pl-5 pr-5 pb-0 pt-6`}
        id={id}
      //  onDragOver={(e) => e.preventDefault()}
      //  draggable={true}
        ref={drag}
      //  onDragStart={e => { e.stopPropagation(); }}
      //  onDragEnd={e => { e.stopPropagation(); }}
      //  onDrag={e => { e.stopPropagation(); }}
      >
        <div className={`${ingredientsStyles.counter}`}>
          <Counter count={1} size="small" />
        </div>
        <img src={image} alt="фото ингридиента" />
        <div className={ingredientsStyles.priceBox}>
          <p className="text text_type_main-medium mr-2">{price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-small mt-2">{name}</p>
      </div>
  );
}

IngredientConstructor.propTypes = {
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default IngredientConstructor;
