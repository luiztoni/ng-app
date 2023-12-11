import { Component, OnInit } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';
import { Estado, User } from '../models';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UserInfoComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit  {

  constructor(public httpService: HttpService) {
  }

  estado: Estado | undefined;

  ngOnInit(): void {
    this.show();
  }

  user = new User('Luiz', 14);

  change(name: string) {
    this.user.name = name;
  }

  show() {
    this.httpService.get()
      .subscribe(data => this.estado = {id:data.id, sigla:data.sigla, nome:data.nome, regiao: data.regiao});
  }
}
