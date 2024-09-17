// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1x_cg_demo_api_key=CG-xghPupLqcE9W8Y6xqUpcqbiv

import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/cryptoApi";

function HomePage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
    };
    getData();
  }, []);

  return (
    <div>
      <TableCoin coins={coins} />
    </div>
  );
}

export default HomePage;
