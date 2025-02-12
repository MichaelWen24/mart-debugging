// 所有加入 注释 或者 // 的那一行 或者那一个 {} 都是要改的

import React from "react";

const tvShow = (props) => {
  //props
  const { show, selectShow } = props; //
  return (
    <div>
      <br />
      {/* <img src={props.image.medium} onClick={props.selectShow} alt="" /> */}
      <img src={show.image.medium} onClick={() => selectShow(show)} alt="" />
    </div>
  );
};

export default tvShow;
