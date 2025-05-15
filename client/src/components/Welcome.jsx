import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../../utils/shortenAddress";
import Loader from "./Loader";

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
 
    <div className="flex w-full justify-center 
    ">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-4 px-4">
       
 <div className="flex flex-1 items-start flex-col mf:mr-18 justify-center">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br />       <span className="text-neutral-300 mt-2 block">
                  Web3 Transfer Protocol
                </span>
          </h1>
          <p className="text-neutral-400 text-lg max-w-xl leading-relaxed">
   Experience the future of finance. Trade, invest, and explore digital currencies effortlessly with Krypto.
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}


 </div>
       
        
 <div className=" flex flex-col-reverse lg:flex-col items-center justify-center w-full min-h-screen gap-8 px-4 lg:px-16 py-4">
              <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-4 text-center">
  Why Choose Krypto?
</h2>
          <div className="grid sm:grid-cols-3 grid-cols-2 mx-auto mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
              <div className=" grid  max-w-sm  grid-cols-1 gap-12 lg:gap-16 items-center w-[600px]  sm:max-w-md md:max-w">
              <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative bg-gradient-to-br from-gray-900 to-black 
              rounded-2xl shadow-2xl overflow-hidden border border-white/10"
            >
              {/* Card pattern */}
              <div className="absolute inset-0 opacity-10 w-full">
                <div className="absolute top-0 -left-4 w-72 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"></div>
              </div>

              <div className="relative h-48 flex flex-col justify-between p-6">
                <div className="flex justify-between items-center">
                  <SiEthereum className="text-3xl text-white" />
                  <div className="flex items-center">
                    <div className="h-5 w-8 rounded-md bg-gradient-to-r from-white/20 to-white/10"></div>
                    <div className="h-5 w-8 rounded-md bg-gradient-to-r from-white/10 to-white/5 ml-2"></div>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="font-mono text-neutral-400 text-sm">
                    {currentAccount
                      ? `${currentAccount.slice(0, 6)}...${currentAccount.slice(-4)}`
                      : "0x0000...0000"}
                  </p>
                  {/* {currentAccount && (
                    <p className="text-white font-mono mt-1">
                      <span className="text-neutral-500">Balance:</span>{" "}
                      {balance} ETH
                    </p>
                  )} */}
                  <p className="text-xl font-medium tracking-tight mt-2">
                    MetaSecure
                  </p>
                </div>
              </div>
            </motion.div>
            </div>
        </div>
    
       

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
      
   
       
       <div className="p-6 sm:w-96 w-[1100px] flex flex-col items-center space-y-4 bg-[#1E293B] backdrop-blur-md rounded-2xl shadow-xl border border-white/10">
  <h3 className="text-white text-2xl font-semibold mb-2">Send Crypto</h3>

  <Input
    placeholder="Recipient Address"
    name="addressTo"
    type="text"
    handleChange={handleChange}  
    //  className="w-full p-3 bg-transparent border
    //   border-blue-700 text-white rounded-lg
    //    focus:outline-none focus:border-indigo-400 transition duration-200 hover:border-indigo-300"
 
   className="w-full px-4 py-3 bg-[#3e7528] rounded-lg border border-purple-600
  text-white placeholder-purple-400 outline-none focus:border-purple-400 hover:border-purple-500
  transition-all duration-200 font-mono text-sm shadow-sm"
 />
  <Input
    placeholder="Amount (ETH)"
    name="amount"
    type="number"
    handleChange={handleChange}
  />
  <Input
    placeholder="Keyword (GIF)"
    name="keyword"
    type="text"
    handleChange={handleChange}
  />
  <Input
    placeholder="Enter a message"
    name="message"
    type="text"
    handleChange={handleChange}
  />

  <div className="h-[1px] w-full bg-white/20" />

  {isLoading ? (
    <Loader />
  ) : (
    <button
      type="button"
      onClick={handleSubmit}
      className="w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
    >
      Send Now
    </button>
  )}
</div>

        </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 mt-12 gap-4">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">How MetaSecure Works</h2>
            <p className="text-neutral-400 max-w-md">
              A secure and transparent way to transfer Ethereum assets with
              visual verification
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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