import { Component, OnInit } from '@angular/core';
import { KnowledgeTypeService } from './knowledge-type.service';
import { knowledgeType } from './knowledgeType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'cv-angular-front';

  knowLedgeTypes :knowledgeType[]; 

  constructor(private service: KnowledgeTypeService) { }

  ngOnInit() {

    this.service.getKnowLedgeTypes().subscribe(knowledgeTypes => this.knowLedgeTypes = knowledgeTypes);

  }

}
