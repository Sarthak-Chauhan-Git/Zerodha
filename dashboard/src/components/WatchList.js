import React, { useState } from "react";

import { Tooltip, Grow } from "@mui/material";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  BarChartOutlined,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index}></WatchListItem>
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [ShowWatchListIcons, setShowWatchListIcons] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListIcons(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchListIcons(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div>
          <span className="percent">{stock.percent}</span>
        </div>
        {stock.isDown ? (
          <KeyboardArrowDown className="down"></KeyboardArrowDown>
        ) : (
          <KeyboardArrowUp className="up"></KeyboardArrowUp>
        )}
        <span className={stock.isDown ? "down" : "up"}>{stock.price}</span>
      </div>
      {ShowWatchListIcons && <WatchListIcons uid={stock.name} />}
    </li>
  );
};

const WatchListIcons = ({ uid }) => {
  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon"></BarChartOutlined>
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon"></MoreHoriz>
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
