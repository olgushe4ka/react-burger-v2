import burgerConstructorStyles from "../burgerConstructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { CONSTRUCTOR_SORT_INGREDIENTS } from "../../../services/actions/ingredients";
import { useDispatch, useSelector } from "react-redux";



function OrderIngConstructor(props) {

    const { id, name, price, image, type, index } = props;

    // DND Sorting
    const ref = useRef(null);

    const dispatch = useDispatch();


    const moveCard = (dragIndex, hoverIndex) => {
        dispatch({
            type: CONSTRUCTOR_SORT_INGREDIENTS,
            payload: dragIndex, hoverIndex
        });
    };



    const [{ isDragging }, drag] = useDrag({
        type: "sorting",
        item: { id, index },

        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [hover, drop] = useDrop({
        accept: 'sorting',

        collect(monitor) {
            return {
              hover: monitor.isOver(),
            }
          },

        hover: (item, monitor) => {
            const dragIndex = item.index
            const hoverIndex = index
            if (dragIndex === hoverIndex) return;

            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const hoverActualY = monitor.getClientOffset().y - hoverBoundingRect.top

            // if dragging down, continue only when hover is smaller than middle Y
            if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
            // if dragging up, continue only when hover is bigger than middle Y
            if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return



            moveCard({ dragIndex, hoverIndex });

            item.index = hoverIndex
        },
    })


    // const [{ handlerId }, drop] = useDrop({
    //     accept: "sorting",
    //     collect(monitor) {
    //         return {
    //             handlerId: monitor.getHandlerId(),
    //         }
    //     },
    //     hover(item, monitor) {
    //         if (!ref.current) { return }

    //         const dragIndex = item.index
    //         const hoverIndex = index

    //         if (dragIndex === hoverIndex) { return }

    //         const hoverBoundingRect = ref.current?.getBoundingClientRect()

    //         const hoverMiddleY =
    //             (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

    //         const clientOffset = monitor.getClientOffset()

    //         const hoverClientY = clientOffset.y - hoverBoundingRect.top

    //         if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) { return }

    //         if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) { return }


    //         const moveCard = (dragIndex, hoverIndex) => {
    //             dispatch({
    //                 type: CONSTRUCTOR_SORT_INGREDIENTS,
    //                 payload: dragIndex, hoverIndex
    //             });
    //         };

    //         moveCard({ dragIndex, hoverIndex });

    //         item.index = hoverIndex
    //     },
    // })


    const opacity = isDragging ? 0 : 1

    drag(drop(ref))

    return (
        <div ref={ref}
            style={{ opacity }} 
            className={`${burgerConstructorStyles.listElement}`}>
            <ConstructorElement
                isLocked={false}
                price={price}
                type={type}
                thumbnail={image}
                text={name}
                id={id}
            />
        </div>
    );
}

export default OrderIngConstructor;
