import CurrentlyCooking from "./CurrentlyCooking";
const WantToCook = () => {
    return (
        <div className="border-2 rounded-2xl p-4">
           <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-center">Want to cook: 01</h2>
            <div className="border border-gray-400" ></div>
                <table className="w-full">
                    <thead>
                    <tr>
                        <th className="py-2 px-4  text-left"></th>
                        <th className="py-2 px-4  text-left">Name</th>
                        <th className="py-2 px-4  text-left">Time</th>
                        <th className="py-2 px-4  text-left">Calories</th>
                        <th className="py-2 px-4 "></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-gray-200">
                        <td className="py-2 px-4  border-b">1</td>
                        <td className="py-2 px-4  border-b">Chicken Caesar Salad</td>
                        <td className="py-2 px-4  border-b">20 minutes</td>
                        <td className="py-2 px-4  border-b">400 calories</td>
                        <td className="py-2 px-4  border-b" > 
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md">
                            Preparing
                        </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <CurrentlyCooking></CurrentlyCooking>
            </div>
        </div>
    );
};

export default WantToCook;