import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() placeholder: string = "";
  formSearch!: FormGroup;

  constructor() {
    this.formSearch = new FormGroup({
      searchKey: new FormControl("")
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formSearch)
  }
}
