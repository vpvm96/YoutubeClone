import axios from "axios"

class FakeYoutube {
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular()
  }

  async #searchByKeyword(keyword) {
    return axios
      .get("/videos/search.json")
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })))
  }

  async #mostPopular(keyword) {
    return axios.get("/videos/popular.json").then((res) => res.data.items)
  }
}

export default FakeYoutube
