export default class GetService {

  constructor(){
    this._base = '/db.json';
  }
  getAllData = async () => {
    const res = await fetch(`${this._base}`);
    return await res.json();
  }
  getBestItems = async () => {
    const res = await this.getAllData();
    return res.bestsellers;
  }

  getShop = async () => {
    const res = await this.getAllData();
    return res.coffee;
  }

  getGoods = async () => {
    const res = await this.getAllData();
    return res.goods;
  }

}

