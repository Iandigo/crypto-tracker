import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Coin from "../components/Coin";
import { CoinList } from "../config/api";
import { CryptoState } from "../CrytoContext";

function Home() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { currency } = CryptoState();

  useEffect(() => {
    axios
      .get(CoinList(currency))
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, [currency]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>
      {filteredCoins
        .slice((page - 1) * 10, (page - 1) * 10 + 10)
        .map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              volume={coin.market_cap}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
    </div>
  );
}

export default Home;
