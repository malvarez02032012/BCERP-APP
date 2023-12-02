import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  nombreCorto?:string;
  constructor(private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nombreCorto = params['nombreCorto'];
      console.log('Url Dash:', this.nombreCorto);
    });

    sessionStorage.setItem('nombreCorto', this.nombreCorto??'');

        // Capturar valor después de la ruta (fragmento)
        this.route.fragment.subscribe(fragment => {
          console.log('Valor después de la ruta:', fragment);
        });
  }


}
