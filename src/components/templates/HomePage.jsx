// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1x_cg_demo_api_key=CG-xghPupLqcE9W8Y6xqUpcqbiv

import { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await fetch(getCoinList(page));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };
    getData();
  }, [page]);

  return (
    <div>
      <Pagination page={page} setPage={setPage} />
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
