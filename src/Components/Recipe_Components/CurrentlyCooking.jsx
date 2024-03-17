const CurrentlyCooking = ({ handleCooking }) => {
    // console.log(handleCooking)
    let totalPreparingTime = 0;
    let totalCalories = 0;

    for (let i = 0; i < handleCooking.length; i++) {
        totalPreparingTime += parseInt(handleCooking[i].preparingTime);
        totalCalories += parseInt(handleCooking[i].calories);
    }

    return (
        <div>
            <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-center">Currently cooking: {handleCooking.length}</h2>
                <div className="border border-gray-400"></div>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="py-2 px-4  text-left">Id</th>
                            <th className="py-2 px-4  text-left">Name</th>
                            <th className="py-2 px-4  text-left">Time</th>
                            <th className="py-2 px-4  text-left">Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {handleCooking.map((recipe, index) => (
                            <tr key={index} className="bg-gray-200">
                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                <td className="py-2 px-4 border-b">{recipe.recipeName}</td>
                                <td className="py-2 px-4 border-b">{recipe.preparingTime}</td>
                                <td className="py-2 px-4 border-b">{recipe.calories}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={2} className="py-2 px-4 font-bold">Total Time = {totalPreparingTime} Time</td>
                            <td colSpan={2} className="py-2 px-4 font-bold">Total Calories = {totalCalories} Calories</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default CurrentlyCooking;
