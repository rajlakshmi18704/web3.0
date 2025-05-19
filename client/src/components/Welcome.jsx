import React, { useContext,useEffect,useRef,useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
import Loader from "./Loader";
// import NET from "vanta/dist/vanta.net.min";
import img from "../assets/bitcoin.avif";
// import * as THREE from "three";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
   
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

 

const Welcome = () => {
  // const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } 
  // = useContext(TransactionContext);


// const vantaRef = useRef(null);
//   const [vantaEffect, setVantaEffect] = useState(null);
//   useEffect(() => {
//     if (!vantaEffect) {
//       setVantaEffect(
//         NET({
//           el: vantaRef.current,
//           THREE: THREE,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 600,
//           minWidth: 800,
//           scale: 1.0,
//           scaleMobile: 1.0,
//           color: 0xba3fff,
//           backgroundColor: 0x23153c,
//           points: 13,
//           maxDistance: 20,
//           spacing: 15,
//           showDots: true,
//         })
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);
  const {isLoading,connectWallet,currentAccount,formData,setformData,handleChange,sendTransaction}=useContext(TransactionContext)
const {value}=useContext(TransactionContext)
console.log(value)
  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
 






<div className="flex flex-col w-full px-4 sm:px-6 md:px-10 mt-20">

<div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 py-12 container mx-auto">
  {/* Left Section */}
  <div className="flex flex-col text-center lg:text-left items-center lg:items-start space-y-6 max-w-3xl">
  
  
    <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-amber-50 leading-tight">
      Send your first Ethereum with <span className="text-blue-400">Solidipay</span>
    </h3>
    {!currentAccount && (
      <button
        type="button"
        onClick={connectWallet}
        className="flex items-center gap-2 bg-[#2952e3] hover:bg-[#2546bd] transition duration-300 text-white px-6 py-3 rounded-full text-base font-semibold shadow-md"
      >
        <AiFillPlayCircle className="text-xl" />
        Connect Wallet
      </button>
    )}
  </div>

  {/* Right Section - Image */}
  <div className="w-full max-w-sm">
    <img
      src={img}
      alt="Ethereum illustration"
      className="w-full h-auto rounded-xl shadow-lg object-cover transition-transform duration-300 hover:scale-105"
    />
  </div>
</div>

    <div>



  </div>
  
  {/* Header Section */}
  <div className="flex flex-col-reverse items-center justify-between py-10 gap-10">
   

    {/* Why Choose Section */}
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-6 text-center">
        Why Choose SolidiPay?
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-white">
        <div className={`rounded-tl-2xl ${companyCommonStyles}`}>Reliability</div>
        <div className={companyCommonStyles}>Security</div>
        <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>Ethereum</div>
        <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>Web 3.0</div>
        <div className={companyCommonStyles}>Low Fees</div>
        <div className={`rounded-br-2xl ${companyCommonStyles}`}>Blockchain</div>
      </div>
    </div>
     
  </div>

  {/* Account Card */}
  {/* <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-10 mt-10 px-4"> */}
 
 
 <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10 md:gap-20 px-4 py-10">
  {/* Ethereum Card */}
  <div className="p-4 flex justify-end items-start flex-col rounded-xl h-44 sm:w-80 w-full shadow-xl text-white bg-gradient-to-tr from-[#9C85FF] to-[#7F5AF0] transition-transform transform hover:scale-105 duration-300">
    <div className="flex flex-col justify-between w-full h-full">
      <div className="flex justify-between items-start w-[110px]">
        <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
          <SiEthereum fontSize={21} color="#fff" />
        </div>
        <BsInfoCircle fontSize={17} color="#fff" />
      </div>
      <div className="mt-3">
        <p className="font-light text-sm truncate">{shortenAddress(currentAccount)}</p>
        <p className="font-semibold text-lg mt-1">Ethereum</p>
      </div>
    </div>
  </div>

  {/* Transaction Info */}
  <div className="max-w-md text-white text-base sm:text-lg leading-relaxed">
    <p>
      The Transaction Card displays the status, amount, and transaction ID of a completed crypto payment.
      It confirms whether the transaction was successful and provides a direct link to view it on the blockchain.
      This helps users verify and track their transactions instantly.
    </p>
  </div>
</div>



<div className="flex flex-col md:flex-row justify-center items-center min-h-screen 
 px-4 py-10 gap-10">

  {/* Left Text Section */}
  <div className="max-w-md text-white text-base sm:text-lg leading-relaxed">
    <h2 className="text-3xl font-bold mb-4">Welcome to Crypto World</h2>
    <p className="text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores distinctio quasi placeat temporibus.
    </p>
  </div>

  {/* Form Card */}
  <div className="w-full max-w-lg bg-[#1E293B]/80 p-8 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-md">
    <h3 className="text-white text-3xl font-semibold mb-6 text-center">Send Crypto</h3>

    <div className="space-y-5">
      <Input
        placeholder="Recipient Address"
        name="addressTo"
        type="text"
        handleChange={handleChange}
        className="border-2 border-yellow-400 rounded-md px-4 py-2 text-white bg-transparent placeholder:text-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
      />

      <Input
        placeholder="Amount (ETH)"
        name="amount"
        type="number"
        handleChange={handleChange}
        className="border border-gray-600 rounded-md px-4 py-2 bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
      />

      <Input
        placeholder="Keyword (GIF)"
        name="keyword"
        type="text"
        handleChange={handleChange}
        className="border border-gray-600 rounded-md px-4 py-2 bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
      />

      <Input
        placeholder="Enter a message"
        name="message"
        type="text"
        handleChange={handleChange}
        className="border border-gray-600 rounded-md px-4 py-2 bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
      />

      <div className="h-[1px] w-full bg-white/20" />

      {isLoading ? (
        <Loader />
      ) : (
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full py-3 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold rounded-full hover:scale-[1.03] transition-all duration-300"
        >
          Send Now
        </button>
      )}
    </div>
  </div>
</div>

 
  {/* How it works Section */}
  <div className="mt-14 mb-8 px-4 sm:px-6 text-center">
    <h2 className="text-3xl font-bold text-white mb-4">How SolidiPay Works</h2>
    <p className="text-neutral-400 max-w-xl mx-auto">
      A secure and transparent way to transfer Ethereum assets with visual verification
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {/* Repeatable Info Boxes */}
   
                <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <h3 className="text-xl text-white font-medium mb-3 flex items-center">
                <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  1
                </span>
                Connect Wallet
              </h3>
              <p className="text-neutral-400">
                Securely connect your Ethereum wallet to access the full
                functionality of the SolidiPay protocol.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <h3 className="text-xl text-white font-medium mb-3 flex items-center">
                <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  2
                </span>
                Enter Details
              </h3>
              <p className="text-neutral-400">
                Specify recipient, amount, and optional message. Add keywords
                to generate unique visual receipts.
              </p>
            </motion.div>

        <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <h3 className=" text-white text-xl font-medium mb-3 flex items-center">
                <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  3
                </span>
                Confirm Transfer
              </h3>
              <p className="text-neutral-400">
                Approve the transaction in your wallet. SolidiPay  handles the
                blockchain verification and recording.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <h3 className="text-xl text-white font-medium mb-3 flex items-center">
                <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  4
                </span>
                Receive Receipt
              </h3>
              <p className="text-neutral-400">
                Each transaction generates a unique visual receipt and is
                permanently recorded on the blockchain.
              </p>
            </motion.div>
    </div>
  </div>
</div>

  );
};

export default Welcome;








// import React, { useContext, useEffect, useRef, useState } from "react";
// import { AiFillPlayCircle } from "react-icons/ai";
// import { SiEthereum } from "react-icons/si";
// import { BsInfoCircle } from "react-icons/bs";
// import { TransactionContext } from "../context/TransactionContext";
// import { shortenAddress } from "../../utils/shortenAddress";
// // import { Loader } from "./";
// import Loader from "./Loader";
// import NET from "vanta/dist/vanta.net.min";
// import * as THREE from "three";

// // import gifVideo from "../../images/gif.mp4";  // Ye ab use nahi hoga

// const companyCommonStyles =
//   "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white transition-transform duration-300 transform hover:scale-105 hover:shadow-md";

// const Input = ({ placeholder, name, type, value, handleChange }) => (
//   <input
//     placeholder={placeholder}
//     type={type}
//     step="0.0001"
//     value={value}
//     onChange={(e) => handleChange(e, name)}
//     className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:scale-105"
//   />
// );

// const Welcome = () => {
//   const {
//     currentAccount,
//     connectWallet,
//     handleChange,
//     sendTransaction,
//     formData,
//     isLoading,
//   } = useContext(TransactionContext);

//   const vantaRef = useRef(null);
//   const [vantaEffect, setVantaEffect] = useState(null);

//   useEffect(() => {
//     if (!vantaEffect && vantaRef.current) {
//       setVantaEffect(
//         NET({
//           el: vantaRef.current,
//           THREE: THREE,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 600,
//           minWidth: 800,
//           scale: 1.0,
//           scaleMobile: 1.0,
//           color: 0xba3fff,
//           backgroundColor: 0x23153c,
//           points: 13,
//           maxDistance: 20,
//           spacing: 15,
//           showDots: true,
//         })
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);

//   const handleSubmit = (e) => {
//     const { addressTo, amount, keyword, message } = formData;
//     e.preventDefault();
//     if (!addressTo || !amount || !keyword || !message) return;
//     sendTransaction();
//   };

//   return (
//     <div ref={vantaRef} className="min-h-screen w-full relative">
//       <div className="flex justify-center items-center min-h-screen px-4 md:px-20 py-12 mt-16 relative z-10">
//         <div className="w-full max-w-[1100px] flex flex-col">
//          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
//   {/* Left Text Section */}
//   <div className="md:w-1/2 flex flex-col items-center md:items-start">
//     <h1 className="text-4xl sm:text-5xl text-white font-bold leading-tight">
//       Send Crypto <br /> across the world
//     </h1>

//     <p className="mt-4 text-white text-lg max-w-md">
//       Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
//     </p>

//     {!currentAccount && (
//       <button
//         type="button"
//         onClick={connectWallet}
//         className="flex flex-row justify-center items-center mt-6 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] transition duration-300 transform hover:scale-105"
//       >
//         <AiFillPlayCircle className="text-white mr-2" size={24} />
//         <p className="text-white text-base font-semibold">Connect Wallet</p>
//       </button>
//     )}

//     {/* Features Grid */}
//     <div className="flex justify-center w-full mt-10">
//       <div className="grid sm:grid-cols-3 grid-cols-2 gap-4 max-w-lg">
//         <div className={`rounded-tl-2xl ${companyCommonStyles}`}>Reliability</div>
//         <div className={companyCommonStyles}>Security</div>
//         <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>Ethereum</div>
//         <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>Web 3.0</div>
//         <div className={companyCommonStyles}>Low Fees</div>
//         <div className={`rounded-br-2xl ${companyCommonStyles}`}>Blockchain</div>
//       </div>
//     </div>
//   </div>

//   {/* Right GIF Section */}
//   <div className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
//     <img
//       src="/images/gif01.gif"
//       alt="Ethereum Animation"
//       className="w-[450px] h-[450px] object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
//     />
//   </div>
// </div>


//           {/* Card + Text row */}
//           <div className="flex flex-col md:flex-row items-center justify-start mt-12 w-full max-w-xl mx-auto space-x-0 md:space-x-12">
//             {/* Ethereum Card */}
//             <div
//               className="
//                 p-6
//                 flex flex-col justify-between
//                 rounded-xl
//                 w-[300px] h-[px]
//                 bg-gradient-to-r from-blue-500 via-purple-700 to-pink-600
//                 bg-opacity-70
//                 backdrop-blur-md
//                 border border-white/20
//                 shadow-xl
//                 text-white
//                 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl glow-card
//               "
//             >
//               <div className="flex justify-between items-start mb-6 relative group">
//                 <div className="w-14 h-14 rounded-full border-2 border-white bg-white/20 flex justify-center items-center">
//                   <SiEthereum fontSize={28} color="#fff" />
//                 </div>
//                 <div className="relative">
//                   <BsInfoCircle fontSize={20} color="#fff" />
//                   <span className="absolute top-7 -left-10 w-max bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     Your Ethereum wallet info
//                   </span>
//                 </div>
//               </div>
//               <div>
//                 <p className="font-light text-md tracking-widest">
//                   {shortenAddress(currentAccount) || "0x0000...0000"}
//                 </p>
//                 <p className="font-semibold text-2xl mt-2 tracking-wide">Ethereum</p>
//               </div>
//             </div>

//             {/* Card text */}
//             <div className="mt-6 md:mt-0 text-white max-w-md">
//               <h3 className="text-2xl font-semibold mb-3">Your Crypto Wallet</h3>
//               <p className="text-base font-light">
//                 Securely manage your Ethereum and send crypto anywhere. Stay connected to the decentralized world.
//               </p>
//             </div>
//           </div>

//           {/* Form Section */}
//           <div className="mt-12 flex justify-center w-full">
//             <div className="p-6 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
//               <Input
//                 placeholder="Address To"
//                 name="addressTo"
//                 type="text"
//                 handleChange={handleChange}
//                 value={formData.addressTo}
//               />
//               <Input
//                 placeholder="Amount (ETH)"
//                 name="amount"
//                 type="number"
//                 handleChange={handleChange}
//                 value={formData.amount}
//               />
//               <Input
//                 placeholder="Keyword (Gif)"
//                 name="keyword"
//                 type="text"
//                 handleChange={handleChange}
//                 value={formData.keyword}
//               />
//               <Input
//                 placeholder="Enter Message"
//                 name="message"
//                 type="text"
//                 handleChange={handleChange}
//                 value={formData.message}
//               />

//               <div className="h-[1px] w-full bg-gray-400 my-4" />

//               {isLoading ? (
//                 <Loader />
//               ) : (
//                 <button
//                   type="button"
//                   onClick={handleSubmit}
//                   className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] hover:scale-105 rounded-full cursor-pointer transition duration-300"
//                 >
//                   Send now
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Welcome;
