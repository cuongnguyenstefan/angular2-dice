import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {

  show = false;
  disableButton = false;

  response;

  result;

  constructor(private _appService: AppService) {}

  diceIt() {
    this.response = null;
    this.result = null;
    this.disableButton = true;
    this._appService.getNumber().subscribe(res => this.response = res.id);
    this.show = true;
    setTimeout(() => {this.show = false; this.disableButton = false; this.result = this.response;}, 3000);
  }

}
