import React, { useEffect, useState } from "react";
import MarqeeUnit from "./MarqeeUnit";

const Marqee = () => {
  const url = `https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/quotes/nyse?exchange=NASDAQ`;
  const [marqueeData, setMarqueeData] = useState();
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const filteredData = data.splice(0, 20);
        console.log(filteredData[0].symbol);
        setMarqueeData(filteredData);

        return data;
      } catch (eror) {
        console.log(eror);
      }
    }
    getData();
  }, []);

  //   async function setMarqueeData() {
  //     let container = document.createElement("div");
  //     container.className = "marquee";
  //     container.id = "marquee__container";
  //     for (let j = 0; j < 4; j++) {
  //       for (let i = 0; i < 10; i++) {
  //         let marqueePrice = document.createElement("div");
  //         marqueePrice.className = "marquee-price";
  //         let marqueeSymbol = document.createElement("div");
  //         marqueeSymbol.className = "marquee-name";
  //         const symbol = this.data[i].symbol;
  //         const price = `${this.data[i].price}$`;
  //         marqueeSymbol.innerHTML = symbol;
  //         marqueePrice.innerHTML = price;
  //         marqueePrice.classList.add("green");
  //         container.appendChild(marqueeSymbol);
  //         container.appendChild(marqueePrice);
  //       }
  //     }
  //   }
  //   async function displayMarqueeData() {
  //     let marqueeContainer = this.element;
  //     marqueeContainer.appendChild(this.container);
  //   }
  //   async function load() {
  //     this.data = await this.getData();
  //     this.setMarqueeData();
  //     this.displayMarqueeData();
  //   }

  return (
    <div class="relative flex overflow-x-hidden">
      <div class="flex animate-marquee whitespace-nowrap ">
        {marqueeData?.map((item) => (
          <MarqeeUnit
            key={item.symbol}
            symbol={item.symbol}
            changesPercentage={item.changesPercentage}
          />
        ))}
      </div>
    </div>
  );
};

export default Marqee;
