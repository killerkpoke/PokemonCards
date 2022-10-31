import http from "@/http-common";
class PokeApi {
  get(name: string): Promise<string> {
    return http.get(`/pokemon/${name}`);
  }
  getTm(id: number): Promise<number> {
    return http.get(`/move/${id}`);
  }
}
export default new PokeApi();
