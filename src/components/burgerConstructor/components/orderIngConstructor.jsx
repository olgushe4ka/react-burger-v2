import burgerConstructorStyles from "../burgerConstructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { CONSTRUCTOR_SORT_INGREDIENTS } from "../../../services/actions/ingredients";
import { useDispatch } from "react-redux";
import { useCallback } from 'react'


function OrderIngConstructor(props) {

    const { id, name, price, image, type, index, handleClose } = props;

    // DND Sorting
    const ref = useRef(null);

    const dispatch = useDispatch();

    const moveCard = useCallback(
        (dragIndex, hoverIndex) => {
            dispatch({
                type: CONSTRUCTOR_SORT_INGREDIENTS,
                payload: dragIndex, hoverIndex
            });
        },
        [],
    );



    const [{ isDragging }, drag] = useDrag({
        type: "sortingIng",
        item: { id, index },

        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });


    const [{ handlerId }, drop] = useDrop({
        accept: "sortingIng",
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item, monitor) {
            if (!ref.current) { return }
            const dragIndex = item.index
            const hoverIndex = index

            if (dragIndex === hoverIndex) { return }

            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) { return }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) { return }

            moveCard({ dragIndex, hoverIndex });

            item.index = hoverIndex
        },
    })

    const opacity = isDragging ? 0 : 1

    drag(drop(ref))

    return (
        <div ref={ref}
            style={{ opacity }}
            data-handler-id={handlerId}
            className={`${burgerConstructorStyles.listElement} ml-0 mr-0 mb-0 mt-2`
            }
        >
            <ConstructorElement
                isLocked={false}
                price={price}
                type={type}
                thumbnail={image}
                text={name}
                id={id}
                handleClose={handleClose}
            />
        </div>
    );
}

export default OrderIngConstructor;
