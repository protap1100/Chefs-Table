// import  { useState, useEffect } from 'react';

// const Toast = ({ message }) => {
//     const [visible, setVisible] = useState(true);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setVisible(false);
//         }, 5000); // Display toast for 5 seconds

//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <div className={`fixed top-5 right-5 bg-gray-800 text-white px-4 py-2 rounded-md shadow-md ${visible ? 'opacity-100' : 'opacity-0'}`}>
//             {message}
//         </div>
//     );
// };

// export default Toast;
