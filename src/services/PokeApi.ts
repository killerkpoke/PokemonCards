import http from "@/http-common";
class PokeApi {
  get(name: any): Promise<any> {
    return http.get(`/pokemon/${name}`);
  }
}
export default new PokeApi();
