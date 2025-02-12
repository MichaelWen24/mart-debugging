// 这个文件是用于bouns的
// 加入了 lazyloading
// debug不需要这个file

class Adapter {
  // 新增可选的 page 参数
  static getShows(page = 0) {
    return fetch(`http://api.tvmaze.com/shows?page=${page}`).then((res) =>
      res.json()
    );
  }

  static getShowEpisodes(showID) {
    return fetch(`http://api.tvmaze.com/shows/${showID}/episodes`).then((res) =>
      res.json()
    );
  }
}

export default Adapter;
