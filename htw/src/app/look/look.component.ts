import { Component, OnInit } from '@angular/core';
import { Look } from '../models/look';
import { LookService } from "../services/look.service"

@Component({
  selector: 'app-look',
  templateUrl: './look.component.html',
  styleUrls: ['./look.component.css']
})
export class LookComponent implements OnInit {

  look: Look;

  constructor(private lookService: LookService) { }

  ngOnInit() {
    this.getLook();
  }

  getLook(): void {
    const id = 2;  // TODO : a dynamiser
    this.lookService.getLook(id).subscribe(look => this.look = look);
  }

}
