import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'output',
    templateUrl: './output.component.html'
})
export class OutputComponent implements OnChanges {
    @Input() number;

    numbers= new Array();

    ngOnChanges(changes: SimpleChanges) {
        if (changes['number'] != null && changes['number'].currentValue != null) {
            this.numbers.push(changes['number'].currentValue);
        }
    }

}