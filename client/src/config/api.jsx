export const CoinList = (currency) =>
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

  export const SingleCoin = (id) =>
    `https://api.coingecko.com/api/v3/coins/${id}`;