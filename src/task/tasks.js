// Task 1. useMemo ilə ağır hesablama
// İstifadəçi bir butonu kliklədikdə say(count) artırılmalıdır.

// import React, { useState, useMemo } from "react";

// function ExpensiveCalculation() {
//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(5);


//   const computedValue = useMemo(() => {
//     console.log("Hesablama aparılır...");
//     return number * 10;
//   }, [number]);

//   return (
//     <div>
//       <h1>Nəticə: {computedValue}</h1>
//       <button onClick={() => setNumber(number + 1)}>Rəqəmi artır</button>
//       <button onClick={() => setCount(count + 1)}>Sayı artır: {count}</button>
//     </div>
//   );
// }

// export default ExpensiveCalculation;

// Task 2. useCallback ilə funksiya optimallaşdırılması
// İki button var: biri bir funksiyanı çağırır, digəri isə sadəcə say artırır.

// import React, { useState, useCallback } from "react";

// function ClickCounter() {
//   const [count, setCount] = useState(0);

//   // useCallback funksiyanı yadda saxlayır
//   const handleClick = useCallback(() => {
//     console.log("Button klik edildi!");
//   }, []);

//   return (
//     <div>
//       <button onClick={handleClick}>Klik et</button>
//       <button onClick={() => setCount(count + 1)}>Sayı artır: {count}</button>
//     </div>
//   );
// }

// export default ClickCounter;


// Task 3.Modal pəncərəsinin React Portal ilə yaradılması
// Portal istifadə edərək, modal pəncərəni əsas komponentdən xaricində bir yerdə göstərmək.
// Modal pəncərəsi "Aç" düyməsi ilə açılacaq və "Bağla" düyməsi ilə bağlanacaq.

// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// function Modal({ onClose }) {
//   return ReactDOM.createPortal(
//     <div style={modalStyle}>
//       <h2>Bu, Modal Pəncərəsidir</h2>
//       <button onClick={onClose}>Bağla</button>
//     </div>,
//     document.getElementById("modal-root") 
//   );
// }

// function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);

//   return (
//     <div>
//       <button onClick={openModal}>Modalı aç</button>
//       {isOpen && <Modal onClose={closeModal} />}
//     </div>
//   );
// }

// // Modalın yerləşəcəyi root div əlavə etməliyik
// const modalRoot = document.createElement("div");
// modalRoot.id = "modal-root";
// document.body.appendChild(modalRoot);

// const modalStyle = {
//   position: "fixed",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   backgroundColor: "white",
//   padding: "20px",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   zIndex: "1000",
// };

// export default App;


