// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   TableCell,
//   LinearProgress,
//   Typography,
//   TextField,
//   TableBody,
//   TableRow,
//   TableHead,
//   TableContainer,
//   Table,
//   Paper,
//   AppBar,
//   Select,
//   MenuItem,
// } from "@mui/material";
// import Pagination from "@mui/material/Pagination";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import axios from "axios";
// import { CoinList } from "../../config/api";
// import { useNavigate } from "react-router-dom";
// import { CryptoState } from "../../context/CryptoContext";

// // Helper function for formatting numbers
// export function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// // Define MUI Theme
// const darkTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#fff",
//     },
//     mode: "dark",
//   },
// });

// export default function CoinsTable() {
//   const [coins, setCoins] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);

//   const { currency, symbol } = CryptoState();
//   const navigate = useNavigate(); // useNavigate replaces useHistory

//   const fetchCoins = async () => {
//     setLoading(true);
//     const { data } = await axios.get(CoinList(currency));
//     setCoins(data);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchCoins();
//   }, [currency]);

//   const handleSearch = () => {
//     return coins.filter(
//       (coin) =>
//         coin.name.toLowerCase().includes(search.toLowerCase()) ||
//         coin.symbol.toLowerCase().includes(search.toLowerCase())
//     );
//   };

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Container sx={{ textAlign: "center" }}>
//         <Typography variant="h4" sx={{ margin: 3, fontFamily: "Montserrat" }}>
//           Cryptocurrency Prices by Market Cap
//         </Typography>
//         <TextField
//           label="Search For a Crypto Currency.."
//           variant="outlined"
//           sx={{ marginBottom: 3, width: "100%" }}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <TableContainer component={Paper}>
//           {loading ? (
//             <LinearProgress sx={{ backgroundColor: "gold" }} />
//           ) : (
//             <Table aria-label="simple table">
//               <TableHead sx={{ backgroundColor: "#EEBC1D" }}>
//                 <TableRow>
//                   {["Coin", "Price", "24h Change", "Market Cap"].map((head) => (
//                     <TableCell
//                       sx={{
//                         color: "black",
//                         fontWeight: "700",
//                         fontFamily: "Montserrat",
//                       }}
//                       key={head}
//                       align={head === "Coin" ? "left" : "right"}
//                     >
//                       {head}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               </TableHead>

//               <TableBody>
//                 {handleSearch()
//                   .slice((page - 1) * 10, (page - 1) * 10 + 10)
//                   .map((row) => {
//                     const profit = row.price_change_percentage_24h > 0;
//                     return (
//                       <TableRow
//                         onClick={() => navigate(`/coins/${row.id}`)}
//                         sx={{
//                           backgroundColor: "#16171a",
//                           cursor: "pointer",
//                           "&:hover": {
//                             backgroundColor: "#131111",
//                           },
//                           fontFamily: "Montserrat",
//                         }}
//                         key={row.name}
//                       >
//                         <TableCell
//                           component="th"
//                           scope="row"
//                           sx={{ display: "flex", gap: 2 }}
//                         >
//                           <img
//                             src={row?.image}
//                             alt={row.name}
//                             height="50"
//                             style={{ marginBottom: 10 }}
//                           />
//                           <div style={{ display: "flex", flexDirection: "column" }}>
//                             <span style={{ textTransform: "uppercase", fontSize: 22 }}>
//                               {row.symbol}
//                             </span>
//                             <span style={{ color: "darkgrey" }}>{row.name}</span>
//                           </div>
//                         </TableCell>
//                         <TableCell align="right">
//                           {symbol} {numberWithCommas(row.current_price.toFixed(2))}
//                         </TableCell>
//                         <TableCell
//                           align="right"
//                           sx={{
//                             color: profit ? "rgb(14, 203, 129)" : "red",
//                             fontWeight: 500,
//                           }}
//                         >
//                           {profit && "+"}
//                           {row.price_change_percentage_24h.toFixed(2)}%
//                         </TableCell>
//                         <TableCell align="right">
//                           {symbol} {numberWithCommas(row.market_cap.toString().slice(0, -6))}M
//                         </TableCell>
//                       </TableRow>
//                     );
//                   })}
//               </TableBody>
//             </Table>
//           )}
//         </TableContainer>

//         {/* Pagination */}
//         <Pagination
//           count={Math.ceil(handleSearch()?.length / 10)}
//           sx={{
//             padding: 3,
//             width: "100%",
//             display: "flex",
//             justifyContent: "center",
//             "& .MuiPaginationItem-root": {
//               color: "gold",
//             },
//           }}
//           onChange={(_, value) => {
//             setPage(value);
//             window.scrollTo({ top: 450, behavior: "smooth" });
//           }}
//         />
//       </Container>
//     </ThemeProvider>
//   );
// }




import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../../context/CryptoContext";

// API Function
import { CoinList } from "../../config/api";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { currency, symbol } = CryptoState();
  const navigate = useNavigate();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  };

  return (
    <div className="bg-black text-white min-h-screen font-montserrat px-4 md:px-10 py-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Cryptocurrency Prices by Market Cap</h1>

      <input
        type="text"
        placeholder="Search For a Crypto Currency..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-6 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none"
      />

      <div className="overflow-x-auto">
        <div className="w-full rounded shadow-lg overflow-hidden">
          {loading ? (
            <div className="w-full h-2 bg-yellow-500 animate-pulse" />
          ) : (
            <table className="min-w-full text-left bg-gray-900 text-white">
              <thead className="bg-yellow-400 text-black">
                <tr>
                  <th className="py-3 px-4 font-bold">Coin</th>
                  <th className="py-3 px-4 font-bold text-right">Price</th>
                  <th className="py-3 px-4 font-bold text-right">24h Change</th>
                  <th className="py-3 px-4 font-bold text-right">Market Cap</th>
                </tr>
              </thead>
              <tbody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((coin) => {
                    const profit = coin.price_change_percentage_24h > 0;
                    return (
                      <tr
                        key={coin.id}
                        className="cursor-pointer transition-colors hover:bg-gray-800"
                        onClick={() => navigate(`/coins/${coin.id}`)}
                      >
                        <td className="py-4 px-4 flex items-center gap-3">
                          <img src={coin.image} alt={coin.name} className="w-10 h-10" />
                          <div>
                            <p className="uppercase text-lg font-semibold">{coin.symbol}</p>
                            <p className="text-gray-400 text-sm">{coin.name}</p>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right">
                          {symbol} {numberWithCommas(coin.current_price.toFixed(2))}
                        </td>
                        <td
                          className={`py-4 px-4 text-right font-semibold ${
                            profit ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {profit && "+"}
                          {coin.price_change_percentage_24h.toFixed(2)}%
                        </td>
                        <td className="py-4 px-4 text-right">
                          {symbol} {numberWithCommas(coin.market_cap.toString().slice(0, -6))}M
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 gap-2 flex-wrap">
        {Array.from({ length: Math.ceil(handleSearch().length / 10) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => {
              setPage(index + 1);
              window.scrollTo({ top: 450, behavior: "smooth" });
            }}
            className={`px-4 py-2 rounded ${
              page === index + 1 ? "bg-yellow-400 text-black font-bold" : "bg-gray-700 text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CoinsTable;
