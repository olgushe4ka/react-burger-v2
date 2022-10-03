import burgerConstructorStyles from './burgerConstructor.module.css';
import { CurrencyIcon, DeleteIcon, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { cart } from '../../utils/data';


function CurrencyIconLarge() {

}

function OrderConstructor(props) {
    return (
        <div className={`${burgerConstructorStyles.constructorBox} pl-5 pr-5 pb-0 pt-6`}>
            <div className={`${burgerConstructorStyles.dragIcon} pl-0 pr-3 pb-0 pt-0` }><DragIcon type="primary" />
            </div>
            <div className={`${burgerConstructorStyles.darkBackround} pl-0 pr-0 pb-0 pt-0`} style={{ display: 'flex' }}>
                <div style={{ display: 'flex' }}>

                    <img className={burgerConstructorStyles.image} src={props.image} alt="фото ингридиента" />
                    <p className={`${burgerConstructorStyles.title} text text_type_main-small`}>
                        {props.name}
                    </p>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className={`${burgerConstructorStyles.priceBox}  pl-0 pr-6 pb-0 pt-0`}>  <p className="text text_type_main-medium mr-2">
                        {props.price}
                    </p>
                        <CurrencyIcon  type="primary" />
                       <div className="pl-6 pr-0 pb-0 pt-0"><DeleteIcon type="primary" /></div></div></div>
        
            </div>
        </div>)
}

function Sum() {
    return (
        <div className={`${burgerConstructorStyles.priceBoxLarge} pl-0 pr-10 pb-0 pt-0`}>
            <p className="text text_type_main-large mr-2">
                500
            </p>
            <div className={burgerConstructorStyles.priceIconLarge}>  <CurrencyIcon type="primary" />
        </div> </div>)
}

function OrderList() {
    return (
        <section className={`${burgerConstructorStyles.main} pl-4 pr-4 pb-0 pt-0`}>
            <ul className={`${burgerConstructorStyles.menuBox} `}>
                {cart.map(cartPosition => {
                    return (
                       
                            <OrderConstructor key={cartPosition._id} price={cartPosition.price} type={cartPosition.type} image={cartPosition.image} name={cartPosition.name} />
                        )
                })}
            </ul>
            <div className={`${burgerConstructorStyles.totalSumBox} pl-4 pr-4 pb-0 pt-10`}>
                <Sum />
                <Button type="primary" size="medium">
                    Оформить заказ
                </Button></div>
        </section>
    )
}


export default OrderList;
