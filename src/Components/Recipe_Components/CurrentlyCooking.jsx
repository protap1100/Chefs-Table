const CurrentlyCooking = () => {
    return (
        <div>
            <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-bold mb-4 text-center">Currently cooking: 02</h2>
            <div className="border border-gray-400" ></div>
                <table className="w-full">
                    <thead>
                    <tr>
                        <th className="py-2 px-4  text-left"></th>
                        <th className="py-2 px-4  text-left">Name</th>
                        <th className="py-2 px-4  text-left">Time</th>
                        <th className="py-2 px-4  text-left">Calories</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr  className="bg-gray-200">
                        <td className="py-2 px-4 border-b">1</td>
                        <td className="py-2 px-4 border-b">Spaghetti Bolognese</td>
                        <td className="py-2 px-4 border-b">30 minutes</td>
                        <td className="py-2 px-4 border-b">600 calories</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan={2} className="py-2 px-4 font-bold">Total Time = 300 Time</td>
                        <td colSpan={2} className="py-2 px-4 font-bold">Total Calories = 200 Calories</td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default CurrentlyCooking;