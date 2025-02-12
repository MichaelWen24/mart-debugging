// 所有加入 注释 或者 // 的那一行 或者那一个 {} 都是要改的

import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import TVShow from "./TVShow"; //

class TVShowList extends Component {
  mapAllShows = () => {
    // if (!!props.searchTerm) {
    //   props.shows.map((s) => {
    //     if (s.name.toLowerCase().includes(props.searchTerm)) {
    //       <TVShow show={s} key={s.id} selectShow={props.selectShow} />;
    //     }
    //   });
    // }
    // return props.shows.map((s) => (
    //   <TVShow show={s} key={s.id} selectShow={props.selectShow} />
    // ));
    // 之前的 if (!!this.props.searchTerm) { this.props.shows.map(...) } 中间没return
    // 最小改动：用一个 filter + map，或者保留 if/else
    if (this.props.searchTerm) {
      // 当有搜索词时只 map 符合的
      return this.props.shows
        .filter((s) => s.name.toLowerCase().includes(this.props.searchTerm))
        .map((s) => {
          return (
            <TVShow key={s.id} show={s} selectShow={this.props.selectShow} />
          );
        });
    } else {
      // 没有搜索词就全部展示
      return this.props.shows.map((s) => {
        return (
          <TVShow key={s.id} show={s} selectShow={this.props.selectShow} />
        );
      });
    }
  };

  render() {
    return (
      <div className="TVShowList">
        <Grid>{this.mapAllShows()}</Grid>
      </div>
    );
  }
}

export default TVShowList;
