import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Assignment';

  list = [
    {id:1 , empName: "Prabath" , empAddress: "Akuressa", empCity: "Matara"},
    {id:1 , empName: "Prabath" , empAddress: "Akuressa", empCity: "Matara"},
    {id:1 , empName: "Prabath" , empAddress: "Akuressa", empCity: "Matara"}
  ]

}
