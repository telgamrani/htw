import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Look } from '../models/look';
import { LookService } from "../services/look.service"

@Component({
  selector: 'app-look',
  templateUrl: './look.component.html',
  styleUrls: ['./look.component.css']
})
export class LookComponent implements OnInit {

  look: Look;

  constructor(
    private lookService: LookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getLook();
  }

  getLook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.lookService.getLook(id).subscribe(look => this.look = look);
  }

}
