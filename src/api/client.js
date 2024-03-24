import VintedMoniteur from "vinted-moniteur";

export class VintedClient {
  async getProducts({ brandId, searchText, setProducts }) {
    let url = `https://www.vinted.fr/catalog?brand_id[]=${brandId}&order=newest_first`;

    if (searchText) {
      url += `&search_text=${searchText}`;
    }

    console.log(url, "url?");
    const monitor = new VintedMoniteur({
      url,
      interval: 5000,
      debug: true,
      // AVEC PROXY
      // proxy: ["ip", "ip:port", "username:password"]
      // ou
      // proxy: "./proxy.txt"
    });

    monitor.on("item", (data) => {
      setProducts((curr) => [...curr, data]);
    });

    monitor.on("error", (err) => console.log(err));
  }
}
