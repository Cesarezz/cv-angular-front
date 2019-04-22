import { Component, OnInit } from '@angular/core';
import { KnowledgeTypeService } from './knowledge-type.service';
import { knowledgeType } from './knowledgeType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'cv-angular-front';

  knowLedgeTypes :knowledgeType[]; 

  constructor(private service: KnowledgeTypeService, private router:Router) { }

  ngOnInit() {

    this.service.getKnowLedgeTypes().subscribe(knowledgeTypes => this.knowLedgeTypes = knowledgeTypes);

  }

  goToUrl(url: string ): void {

    this.router.navigate([`/${url}`]);

  }

}
