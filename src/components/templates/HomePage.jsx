// https://pro-api.coingecko.com/api/v3/coins/markets?per_page=20&page=1&locale=en&x_cg_demo_api_key=CG-xghPupLqcE9W8Y6xqUpcqbiv

import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1x_cg_demo_api_key=CG-xghPupLqcE9W8Y6xqUpcqbiv"
    )
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  return <div>HomePage</div>;
}

export default HomePage;
