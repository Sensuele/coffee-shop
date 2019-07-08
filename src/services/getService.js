export default class GetService {

  
  constructor() {
    this._apiBase = 'http://localhost:3000';
  }
  
  getAllData = async url => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recived ${res.status}`);
    }
    return await res.json();
  }
  getBestItems = async () => {
    const res = await this.getAllData(`/bestsellers/`);
    return res;
  }

  getShop = async () => {
    const res = await this.getAllData(`/coffee/`);
    return res;
  }

  getGoods = async () => {
    const res = await this.getAllData(`/goods/`);
    return res;
  }

}

