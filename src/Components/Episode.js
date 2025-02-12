// 所有加入 注释 或者 // 的那一行 或者那一个 {} 都是要改的
import React from "react";

const Episode = (props) => {
  let { eachEpisode } = props;

  return (
    <div>
      {/* Episode {myEpisode.number} - {myEpisode.name} */}
      Episode {eachEpisode.number} - {eachEpisode.name}
    </div>
  );
};

export default Episode;
