import { Component, OnInit, Input } from '@angular/core';

// Interfaces
import { FormFields } from '../../interfaces/form-fields';

@Component({
  selector: 'app-shared-form',
  templateUrl: './shared-form.component.html',
  styles: []
})
export class SharedFormComponent implements OnInit {

  @Input() formItems: FormFields[];

  constructor() {
  }
  
  ngOnInit() {
  }

}
