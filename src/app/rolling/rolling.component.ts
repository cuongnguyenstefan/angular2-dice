import { Component, Input } from '@angular/core';

@Component({
    selector: 'rolling',
    templateUrl: './rolling.component.html'
})
export class RollingComponent {
    @Input() show;
    img = "assets/images/dice1.gif";
}