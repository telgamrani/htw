import { Component, OnInit } from '@angular/core';
import { Look } from '../models/look'
import { LookService } from '../services/look.service'

@Component({
  selector: 'app-look',
  templateUrl: './looks.component.html',
  styleUrls: ['./looks.component.css']
})
export class LooksComponent implements OnInit {

  looks: Look[];

  constructor(private lookService: LookService) { }

  ngOnInit() {
    this.getLooks();
  }

  getLooks(): void{
    this.lookService.getLooks().subscribe(looks => this.looks = looks);
  }

}
