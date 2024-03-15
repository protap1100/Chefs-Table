import FoodSection from "./FoodSection";
import WantToCook from "./WantToCook";

const OurRecipe = () => {
    return (
       <div>
         <div className="mt-10 text-center px-4 lg:px-40 grid gap-5">
            <h1 className="text-4xl font-bold">Our Recipes </h1>
            <h1>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi quidem perferendis sequi maxime
                 molestias aliquam rerum ut quod unde nulla tempore officia expedita, eligendi, animi molestiae illo aperiam nobis facilis.
            </h1>
        </div>

        <div className=" mt-10 grid grid-cols-12">
            <div className="col-span-8">
               <FoodSection></FoodSection>
            </div>
            <div className="col-span-4" >
                <WantToCook></WantToCook>
            </div>
        </div>
       </div>
        
    );
};

export default OurRecipe;