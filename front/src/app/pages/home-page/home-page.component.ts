import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private api : ApiService) { }

  ngOnInit(): void {

    this.api.get().subscribe((res) => {
      alert(res)
    })

  }

}
