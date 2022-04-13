import {HttpClient} from "@angular/common/http";
import {Product} from "../models/products";
import {Observable, take} from "rxjs";
import {map} from "rxjs/operators"
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.getFromJson();
  }

  getProduct(id: number): Observable<Product> {
    return this.getFromJson().pipe(
      take(1),
      map(ops => {
        const p = ops.find(p => p.id === id)
        if (p === undefined) {
          throw new Error(`Product with id: ${id} was not found`)
        }
        return p;
      })
    );
  }

  private getFromJson(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("../assets/data.json");
  }
}
