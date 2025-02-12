// 这个文件是用于bouns的
// 加入了 lazyloading
// debug不需要这个file

import React, { Component } from "react";
import Adapter from "../Adapter";
import TVShowList from "./TVShowList";
import Nav from "./Nav";
import SelectedShowContainer from "./SelectedShowContainer";
import { Grid } from "semantic-ui-react";

class App extends Component {
  state = {
    shows: [],
    searchTerm: "",
    selectedShow: "",
    episodes: [],
    filterByRating: "",
    page: 0, // 当前已经加载到第几页
    loading: false, // 是否正在请求中
  };

  componentDidMount() {
    // 初次加载第一页
    this.loadShows();

    // 监听滚动事件，用于懒加载
    window.addEventListener("scroll", this.handleScroll);
  }

  // 如果不想一直滚动后又被拉回顶端，就注释掉
  // componentDidUpdate() {
  //   window.scrollTo(0, 0)
  // }

  componentWillUnmount() {
    // 组件卸载时，记得移除滚动事件监听
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    // 如果还在加载中，就不再重复请求
    if (this.state.loading) return;

    // 计算是否到了页面底部（给一点缓冲，比如离底部 50px 就触发）
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 50
    ) {
      this.loadShows();
    }
  };

  loadShows = () => {
    this.setState({ loading: true }, () => {
      Adapter.getShows(this.state.page)
        .then((newShows) => {
          this.setState({
            shows: [...this.state.shows, ...newShows],
            page: this.state.page + 1,
            loading: false,
          });
        })
        .catch((err) => {
          console.log(err);
          this.setState({ loading: false });
        });
    });
  };

  handleSearch = (e) => {
    this.setState({ searchTerm: e.target.value.toLowerCase() });
  };

  handleFilter = (e) => {
    if (e.target.value === "No Filter") {
      this.setState({ filterByRating: "" });
    } else {
      this.setState({ filterByRating: e.target.value });
    }
  };

  selectShow = (show) => {
    Adapter.getShowEpisodes(show.id)
      .then((episodes) =>
        this.setState({
          selectedShow: show,
          episodes,
        })
      )
      .catch((err) => console.log(err));
  };

  displayShows = () => {
    if (this.state.filterByRating) {
      return this.state.shows.filter((s) => {
        return s.rating.average >= this.state.filterByRating;
      });
    } else {
      return this.state.shows;
    }
  };

  render() {
    return (
      <div>
        <Nav
          handleFilter={this.handleFilter}
          handleSearch={this.handleSearch}
          searchTerm={this.state.searchTerm}
        />
        <Grid celled>
          <Grid.Column width={5}>
            {!!this.state.selectedShow ? (
              <SelectedShowContainer
                selectedShow={this.state.selectedShow}
                episodes={this.state.episodes}
              />
            ) : (
              <div />
            )}
          </Grid.Column>
          <Grid.Column width={11}>
            <TVShowList
              shows={this.displayShows()}
              selectShow={this.selectShow}
              searchTerm={this.state.searchTerm}
            />
            {/* 如果想给用户加载提示，可以加一个简单的loading显示 */}
            {this.state.loading && <p>Loading more shows...</p>}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
