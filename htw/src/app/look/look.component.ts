import { Component, OnInit } from '@angular/core';
import { Look } from '../models/look'
import { LookService } from '../services/look.service'

@Component({
  selector: 'app-look',
  templateUrl: './look.component.html',
  styleUrls: ['./look.component.css']
})
export class LookComponent implements OnInit {

  looks: Look[];

  constructor(private lookService: LookService) { }

  ngOnInit() {
    this.getLooks();
  }

  getLooks(): void{
    this.lookService.getLooks().subscribe(looks => this.looks = looks);
  }

}
