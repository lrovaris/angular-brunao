import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "./url.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private urlService : UrlService) { }

  get() {
    return  this.http.get(`${this.urlService.getUrl()}/);
  }

}
