import { Component, Input } from '@angular/core';
import { knowledgeType } from './../knowledgeType'

@Component({
  selector: 'app-knowledge-type',
  templateUrl: './knowledge-type.component.html',
  styleUrls: ['./knowledge-type.component.scss']
})
export class KnowledgeTypeComponent {

  @Input() knowledgeType: knowledgeType[];

  constructor() { }



}
