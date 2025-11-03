import { Component, OnInit } from '@angular/core';
import { FactsService } from '../services/facts.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public factsArray: any[];
  public myFactsService: FactsService;
  public showInput: boolean = false;
  public isLoaded: boolean = false;
  public nameFormControl: FormControl;

  constructor(myFactsService: FactsService) {
    Object.assign(this, { myFactsService });
   }

  ngOnInit(): void {
    this.nameFormControl = new FormControl({ value: '', disabled: false }, Validators.required);
    this.myFactsService.getService({table: 'FACTS'}).subscribe(data => {
      this.factsArray = data;
      this.isLoaded = true;
    });
    console.log(this.factsArray);
  }

  getImageLink(): string {
    console.log(this.factsArray);
    const link = this.factsArray[2].IMAGE_LINKS;
    console.log(link);
    return link;
  }

}
