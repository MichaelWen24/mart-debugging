// 所有加入 注释 或者 // 的那一行 或者那一个 {} 都是要改的

import React from "react";
import { Input } from "semantic-ui-react";

const Search = (props) => {
  return (
    <div>
      {/* <Input type="text" placeholder="Search" onChange={props.handleSearch} value={props.search} /> */}
      {/* props.search 就是从 Nav -> props.searchTerm 传过来的 */}
      <Input
        type="text"
        placeholder="Search"
        onChange={props.handleSearch}
        value={props.search}
      />
    </div>
  );
};

export default Search;
