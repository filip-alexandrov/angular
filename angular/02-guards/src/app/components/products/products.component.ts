import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  message = '';

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.data.subscribe((res) => {
      this.message = res['data'];
    });
  }
}
