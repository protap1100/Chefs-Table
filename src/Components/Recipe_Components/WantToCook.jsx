import { useState } from 'react';
import CurrentlyCooking from "./CurrentlyCooking";

const WantToCook = ({ cooks }) => {
    const [curCooking, setCurCooking] = useState([]);

    const handleCooking = (recipe) => {
        const newCurCooking = [...curCooking, recipe];
        setCurCooking(newCurCooking);
        console.log(newCurCooking);
    };

    return (
        <div className="border-2 rounded-2xl p-4">
            <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold mb-4 text-center">Want to cook: {cooks.length}</h2>
                <div className="border border-gray-400"></div>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 text-left">#</th>
                            <th className="py-2 px-4 text-left">Name</th>
                            <th className="py-2 px-4 text-left">Time</th>
                            <th className="py-2 px-4 text-left">Calories</th>
                            <th className="py-2 px-4"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cooks.map(({ recipeName, preparingTime, calories }, index) => (
                            <tr key={index} className="bg-gray-200 mt-5">
                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                <td className="py-2 px-4 border-b">{recipeName}</td>
                                <td className="py-2 px-4 border-b">{preparingTime}</td>
                                <td className="py-2 px-4 border-b">{calories}</td>
                                <td className="py-2 px-4 border-b">
                                    <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={() => handleCooking(cooks[index])}>
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
