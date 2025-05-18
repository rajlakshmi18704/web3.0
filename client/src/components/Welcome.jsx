import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
import Loader from "./Loader";
import img from "../assets/bitcoin.avif";
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
 






<div className="flex flex-col w-full px-4 sm:px-6 md:px-10">

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
        Why Choose Krypto?
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
 
 <div className="flex flex-col md:flex-row flex-1 items-center justify-start w-full gap-8 mt-10 md:mt-0">
  {/* Ethereum Card */}
  <div
    className="p-4 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full shadow-lg text-white bg-gradient-to-tr from-[#9C85FF] to-[#7F5AF0] transition-transform transform hover:scale-105 duration-300"
  >
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
  <div className="max-w-md text-white text-base sm:text-lg leading-relaxed px-2">
    <p>
      The Transaction Card displays the status, amount, and transaction ID of a completed crypto payment.
      It confirms whether the transaction was successful and provides a direct link to view it on the blockchain.
      This helps users verify and track their transactions instantly.
    </p>
  </div>
</div>

 
  <div className="w-full max-w-lg mx-auto mt-10 bg-[#1E293B] p-6 rounded-2xl shadow-xl border border-white/10">
    <h3 className="text-white text-2xl font-semibold mb-4 text-center">Send Crypto</h3>
    <div className="space-y-4">
      <Input placeholder="Recipient Address" name="addressTo" type="text" handleChange={handleChange} className="..." />
      <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
      <Input placeholder="Keyword (GIF)" name="keyword" type="text" handleChange={handleChange} />
      <Input placeholder="Enter a message" name="message" type="text" handleChange={handleChange} />
      <div className="h-[1px] w-full bg-white/20" />
      {isLoading ? (
        <Loader />
      ) : (
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full hover:scale-[1.02] transition-all duration-300"
        >
          Send Now
        </button>
      )}
    </div>
  </div>
  {/* How it works Section */}
  <div className="mt-14 mb-8 px-4 sm:px-6 text-center">
    <h2 className="text-3xl font-bold text-white mb-4">How MetaSecure Works</h2>
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
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  1
                </span>
                Connect Wallet
              </h3>
              <p className="text-neutral-400">
                Securely connect your Ethereum wallet to access the full
                functionality of the MetaSecure protocol.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <h3 className="text-xl font-medium mb-3 flex items-center">
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
              <h3 className="text-xl font-medium mb-3 flex items-center">
                <span className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  3
                </span>
                Confirm Transfer
              </h3>
              <p className="text-neutral-400">
                Approve the transaction in your wallet. MetaSecure handles the
                blockchain verification and recording.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <h3 className="text-xl font-medium mb-3 flex items-center">
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