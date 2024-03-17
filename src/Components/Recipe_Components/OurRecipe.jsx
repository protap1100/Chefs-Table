import { useEffect, useState } from 'react';
import FoodSection from './FoodSection';
import WantToCook from './WantToCook';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OurRecipe = () => {
    const [foods, setFoods] = useState([]);
    const [cooks, setCooks] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    const handleCook = (food) => {
        const existingCook = cooks.find(cook => cook.recipeId === food.recipeId);
        if (existingCook) {
            toast.error('You have already cooked this recipe!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        const newCooks = [...cooks, food];
        setCooks(newCooks);
    }

    return (
        <div>
            <div className="mt-10 text-center px-4 lg:px-40 grid gap-5">
                <h1 className="text-4xl font-bold">Our Recipes </h1>
                <h1>
                    Discover culinary delights with Our Recipes ! From classic comfort foods to exotic cuisines, we offer a diverse collection to tantalize your taste buds. Explore, create, and savor unforgettable dishes with our easy-to-follow instructions. Let your culinary journey begin
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
                    <WantToCook cooks={cooks} setCooks={setCooks}></WantToCook>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default OurRecipe;
