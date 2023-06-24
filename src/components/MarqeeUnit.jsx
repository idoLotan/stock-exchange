import React from "react";

const MarqeeUnit = ({ symbol, changesPercentage }) => {
  const colorTheme = changesPercentage > 0 ? "text-green-500" : "text-red-500";
  return (
    <div className="marquee-unit  min-w-[200px] max-w-xs">
      <div className="flex flex-row p-3">
        <div className="pr-1 font-bold">{symbol}</div>
        <div className={colorTheme}>{changesPercentage}</div>
      </div>
    </div>
  );
};

export default MarqeeUnit;
