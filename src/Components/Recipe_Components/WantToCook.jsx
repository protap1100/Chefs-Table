import { useState } from 'react';
import CurrentlyCooking from "./CurrentlyCooking";

const WantToCook = ({ cooks, setCooks }) => {
    const [curCooking, setCurCooking] = useState([]);
    const handleCooking = (recipe) => {
        const newCooks = cooks.filter((cook) => cook !== recipe);

        const newCurCooking = [...curCooking, recipe];

        setCooks(newCooks);
        setCurCooking(newCurCooking);
    };

    console.log(cooks);

    return (
        <div className="border-2 rounded-2xl p-4">
            <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-center">Want to cook: {cooks.length}</h2>
                <div className="border border-gray-400"></div>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 text-left">Id</th>
                            <th className="py-2 px-4 text-left">Name</th>
                            <th className="py-2 px-4 text-left">Time</th>
                            <th className="py-2 px-4 text-left">Calories</th>
                            <th className="py-2 px-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cooks.map((cook,index) => (
                            <tr key={index} className="bg-gray-200 mt-5">
                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                <td className="py-2 px-4 border-b">{cook.recipeName}</td>
                                <td className="py-2 px-4 border-b">{cook.preparingTime}</td>
                                <td className="py-2 px-4 border-b">{cook.calories}</td>
                                <td className="py-2 px-4 border-b">
                                    <button className="bg-green-500 font-bold text-white px-4 py-2 rounded-md" onClick={() => handleCooking(cooks[index])}>
                                        Preparing
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <CurrentlyCooking handleCooking={curCooking} />
            </div>
        </div>
    );
};

export default WantToCook;
