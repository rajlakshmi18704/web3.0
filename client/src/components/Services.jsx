// import React from "react";
// import { BsShieldFillCheck } from "react-icons/bs";
// import { BiSearchAlt } from "react-icons/bi";
// import { RiHeart2Fill } from "react-icons/ri";
// import ServiceCard from "./ServiceCard";
// const ServiceCard = ({ color, title, icon, subtitle }) => (

//   <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
//     <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
//       {icon}
//     </div>
//     <div className="ml-5 flex flex-col flex-1">
//       <h3 className="mt-2 text-white text-lg">{title}</h3>
//       <p className="mt-1 text-white text-sm md:w-9/12">
//         {subtitle}
//       </p>
//     </div>
//   </div>
// );

// const Services = () => (
//   <div className="flex w-full justify-center items-center gradient-bg-services">
//     <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
//       <div className="flex-1 flex flex-col justify-start items-start">
//         <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
//           Services that we
//           <br />
//           continue to improve
//         </h1>
//         <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
//           The best choice for buying and selling your crypto assets, with the
//           various super friendly services we offer
//         </p>
//       </div>

//       <div className="flex-1 flex flex-col justify-start items-center">
//         <ServiceCard
//           color="bg-[#2952E3]"
//           title="Security gurantee"
//           icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
//           subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
//         />
//         <ServiceCard
//           color="bg-[#8945F8]"
//           title="Best exchange rates"
//           icon={<BiSearchAlt fontSize={21} className="text-white" />}
//           subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
//         />
//         <ServiceCard
//           color="bg-[#F84550]"
//           title="Fastest transactions"
//           icon={<RiHeart2Fill fontSize={21} className="text-white" />}
//           subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
//         />
//       </div>
//     </div>
//   </div>
// );

// export default Services;





import { motion } from "framer-motion";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="py-20 px-4 md:px-8 lg:px-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-neutral-500">MetaSecure</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Our blockchain-based platform offers secure, transparent, and
            efficient solutions for all your digital asset transfers.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <ServiceCard
              icon={<BsShieldFillCheck fontSize={20} className="text-white" />}
              title="Secure Transfers"
              subtitle="Your transactions are protected with advanced cryptographic security, ensuring that your assets remain safe throughout the transfer process."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <ServiceCard
              icon={<BiSearchAlt fontSize={20} className="text-white" />}
              title="Blockchain Verification"
              subtitle="Every transaction is immutably recorded on the blockchain, providing transparent and verifiable proof of all your transfers."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ServiceCard
              icon={<RiHeart2Fill fontSize={20} className="text-white" />}
              title="Unique GIF Receipts"
              subtitle="Receive a one-of-a-kind GIF receipt for each transaction, adding a personalized touch to your blockchain experience."
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;