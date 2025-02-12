// 所有加入 注释 或者 // 的那一行 或者那一个 {} 都是要改的

import React, { Component } from "react";
import Episode from "./Episode"; //

class SelectedShowContainer extends Component {
  state = {
    selectedSeason: 1,
  };

  mapSeasons = () => {
    if (!!this.props.episodes) {
      // let seasons = this.props.episodes.map((e)=> e.season).unique()
      // 用 set 去重后再生成 option
      const seasons = [...new Set(this.props.episodes.map((e) => e.season))];

      return seasons.map((s) => {
        return (
          <option value={s} key={s}>
            Season {s}
          </option>
        );
      });
    }
  };

  mapEpisodes = () => {
    return this.props.episodes.map((e) => {
      // if (e.season == this.state.selectedSeason){
      //   return (<Episode eachEpisode={e} key={e.id}/>)
      // }
      // 注意 == 也能判断数字和字符串；最好 parseInt() 后再比较
      if (e.season === this.state.selectedSeason) {
        return <Episode eachEpisode={e} key={e.id} />;
      } else {
        return null;
      }
    });
  };

  handleSelectionChange = (e) => {
    // this.setState({ selectedSeason: e.target.value })
    this.setState({ selectedSeason: parseInt(e.target.value) });
  };

  render() {
    const { selectedShow } = this.props;

    return (
      <div style={{ position: "static" }}>
        <h2>{selectedShow.name}</h2>
        <img src={selectedShow.image.medium} alt="" />
        <p dangerouslySetInnerHTML={{ __html: selectedShow.summary }}></p>
        <p>Premiered: {selectedShow.premiered}</p>
        <p>Status: {selectedShow.status}</p>
        <p>Average Rating: {selectedShow.rating.average}</p>
        <select
          style={{ display: "block" }}
          onChange={this.handleSelectionChange}
        >
          {this.mapSeasons()}
        </select>
        {this.mapEpisodes()}
      </div>
    );
  }
}

export default SelectedShowContainer; //

Array.prototype.unique = function () {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (!arr.includes(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};

//可选把上面改成下面
// Array.prototype.unique = function() {
//   return [...new Set(this)];
// };
