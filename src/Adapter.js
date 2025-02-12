// 所有加入 注释 或者 // 的那一行 或者那一个 {} 都是要改的
// 改完之后 codesanbox里面API call fail但是在vscode里没问题

class Adapter {
  static getShows() {
    // return fetch("http://api.tvmaze.com/shows") //return
    //   .then((res) => res.json());
    return fetch("http://api.tvmaze.com/shows") // 确保返回 Promise
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      });
  }

  // uncomment
  static getShowEpisodes(showID) {
    return fetch(`http://api.tvmaze.com/shows/${showID}/episodes`).then(
      (res) => {
        //
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        res.json(); //
      }
    );
  }
}

export default Adapter;
