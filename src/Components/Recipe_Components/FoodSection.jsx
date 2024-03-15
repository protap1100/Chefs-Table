const FoodSection = ({food,handleCook}) => {

    const {recipeImage,recipeName,shortDescription,preparingTime,calories,ingredients} = food;
    
    return (
        <div>
            {/* Product 1  */}
            <div className="text-xl border border-gray-300 rounded-2xl grid items-center justify-center">
                <div className="p-4 shadow-xl">
                        <img src={recipeImage} alt="" />
                    <div className="mt-5">
                        <h1 className="font-bold text-2xl">{recipeName}</h1>
                        <h1 className="mt-5 " >{shortDescription}</h1>
                    </div>
                        <h1 className="mt-10 font-bold text-2xl ">Ingredients:{ingredients.length}</h1>
                        <ul className="list-disc mt-5 pl-10">
                            {
                                ingredients.map((ingredient,index)=> (<li key={index}>{ingredient}</li>))
                            }
                        </ul>
                    <div className="flex mt-10 gap-5">
                        <div className="flex items-center gap-2">
                            <div>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    height="1em"
                                    width="1em">
                                    <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                                    <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z" />
                                </svg>
                            </div>
                            <div className="font-bold">
                                {preparingTime}
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                                <div>
                                <svg
                                    viewBox="0 0 1024 1024"
                                    fill="currentColor"
                                    height="1em"
                                    width="1em"
                                    >
                                    <path d="M834.1 469.2A347.49 347.49 0 00751.2 354l-29.1-26.7a8.09 8.09 0 00-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 01-47.5 46.1 352.6 352.6 0 00-100.3 121.5A347.75 347.75 0 00160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0075.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 00760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0027.7-136c0-48.8-10-96.2-29.9-140.9zM713 808.5c-53.7 53.2-125 82.4-201 82.4s-147.3-29.2-201-82.4c-53.5-53.1-83-123.5-83-198.4 0-43.5 9.8-85.2 29.1-124 18.8-37.9 46.8-71.8 80.8-97.9a349.6 349.6 0 0058.6-56.8c25-30.5 44.6-64.5 58.2-101a240 240 0 0012.1-46.5c24.1 22.2 44.3 49 61.2 80.4 33.4 62.6 48.8 118.3 45.8 165.7a74.01 74.01 0 0024.4 59.8 73.36 73.36 0 0053.4 18.8c19.7-1 37.8-9.7 51-24.4 13.3-14.9 24.8-30.1 34.4-45.6 14 17.9 25.7 37.4 35 58.4 15.9 35.8 24 73.9 24 113.1 0 74.9-29.5 145.4-83 198.4z" />
                                </svg>
                                </div>
                                <div className="font-bold">
                                     {calories}
                                </div>
                        </div>
                    </div>
                    <button className="mt-5 btn rounded-3xl bg-[#0BE58A]" onClick={()=>{handleCook(food)}} >Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

export default FoodSection;