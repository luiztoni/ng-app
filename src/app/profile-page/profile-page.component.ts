import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Product {
  name: string;
  category: string
}

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  public id: any;

  products: Product[] = [{name:'Motorola', category:'Smart phone'}, {name:'iPhone', category:'Smart phone'}]
 
  constructor(private activatedRoute : ActivatedRoute, private route: Router) { }
 
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
  }

  navToPage(pageNum: number) {
    this.route.navigate(['/profile', pageNum]);
  }

}
