// import ingredientsStyles from "../burgerIngredients.module.css";
// import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
// import { useState, useRef, useEffect } from "react";
// import { useInView } from 'react-intersection-observer';

// function Tabs({refBuns}) {

//     const [currentTab, setCurrentTab] = useState("buns");

//     const onTabClick = (tab) => {
//         setCurrentTab(tab);
//         const element = document.getElementById(tab);
//         if (element) element.scrollIntoView({ behavior: "smooth" });
//     };



//     //Прокрутка Tab

//     //const ref = useRef()

//     const { ref, inView } = useInView({ threshold: 0, });

//     const { ref: refBuns, inView: inViewBuns } = useInView({ threshold: 0, });
//     const { refSauces, inViewSauces } = useInView({ threshold: 0, });
//     const { refMains, inViewMains } = useInView({ threshold: 0, });




//     useEffect(() => {
//         if (inViewBuns) {
//             setCurrentTab('buns')
//         };
//         if (inViewSauces) {
//             setCurrentTab('sauces')
//         };
//         if (inViewMains) {
//             setCurrentTab('mains')
//         };
//     }, [inViewBuns, inViewSauces, inViewMains])

//     console.log(inView)
//     console.log(inViewBuns)
//     console.log(inViewSauces)
//     console.log(inViewMains)



//     return (
//         <div className={`${ingredientsStyles.tabs}`} >
//             <Tab 
//                 value="buns"
//                 active={currentTab === "buns"}
//                 onClick={onTabClick}
//             >
//                 Булки
//             </Tab>
//             <Tab
//                 value="sauces"
//                 active={currentTab === "sauces"}
//                 onClick={onTabClick}
//             >
//                 Соусы
//             </Tab>
//             <Tab
//                 value="mains"
//                 active={currentTab === "mains"}
//                 onClick={onTabClick}
//             >
//                 Начинки
//             </Tab>
//         </div>
//     );
// }

// export default Tabs;
