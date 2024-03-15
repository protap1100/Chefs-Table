import { useEffect, useState } from 'react';
import FoodSection from './FoodSection';
import WantToCook from './WantToCook';
// import Toast from './Toast'; 

const OurRecipe = () => {
    const [foods, setFoods] = useState([]);
    const [cooks, setCooks] = useState([]);
    // const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const handleCook = (food) => {
        const existingCook = cooks.find(cook => cook.recipeId === food.recipeId);
        if (existingCook) {
            // setToastMessage("This item is already selected.");
             alert('Hiii')
            return; 
        }

        const newCooks = [...cooks, food];
        setCooks(newCooks);
        // setToastMessage("Item added to cooks.");
    }

    return (
        <div>
            <div className="mt-10 text-center px-4 lg:px-40 grid gap-5">
                <h1 className="text-4xl font-bold">Our Recipes </h1>
                <h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quidem perferendis sequi maxime
                    molestias aliquam rerum ut quod unde nulla tempore officia expedita, eligendi, animi molestiae illo aperiam nobis facilis.
                </h1>
            </div>

            <div className=" mt-10 flex flex-col lg:grid grid-cols-12 gap-5">
                <div className="col-span-8">
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {foods.map(food => (
                            <FoodSection key={food.recipeId} food={food} handleCook={handleCook}></FoodSection>
                        ))}
                    </div>
                </div>
                <div className="col-span-4" >
                    <WantToCook cooks={cooks}></WantToCook>
                </div>
            </div>
            {/* <Toast message={toastMessage} />  */}
        </div>
    );
};

export default OurRecipe;
