// 所有加入 注释 或者 // 的那一行 或者那一个 {} 都是要改的

import React from "react";
import Search from "./Search";
import Filter from "./Filter";
import { Menu } from "semantic-ui-react";

const Nav = (props) => {
  // props
  return (
    <div>
      <Menu attached="top" inverted>
        <Menu.Item>
          <i className="material-icons md-48">tv</i>
        </Menu.Item>
        <Menu.Item>
          <h1>Tube Finder</h1>
        </Menu.Item>
        <Menu.Item position="right">
          {/* <filter handleFilter={props.handleFilter}/> */}
          <Filter handleFilter={props.handleFilter} />
        </Menu.Item>
        <Menu.Item position="right">
          {/* <search handleSearch={props.handleSearch} search={props.search} /> */}
          <Search handleSearch={props.handleSearch} search={props.searchTerm} />
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Nav;
