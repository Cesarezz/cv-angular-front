import { Injectable } from '@angular/core';
import { knowledgeType } from './knowledgeType'
import { Observable, of} from 'rxjs'

const knowLedgeTypes: knowledgeType[] = [
  { 
    id: 1, 
    name: "Experiencia Profesional", 
    description: "Proyectos en empresas",
    url: "professional-experience", 
    color: "lightblue",
    icons: ['business_center']
  },
  { 
    id: 2, 
    name: "Conocimientos Extralaborales", 
    description: "Estudios universitarios, MOOCs y proyectos personales",
    url: "outside-word-environment", 
    color: 'lightgreen',
    icons: ['school', 'free_breakfast']
  },
  { 
    id: 3, 
    name: "Idiomas", 
    description: "Cursos y nivel",
    url: "languages", 
    color: 'lightpink',
    icons: ["language"]
  },
  { 
    id: 4, 
    name: "Otros", 
    description: "Cursos Extraprofesionales",
    url: "others", 
    color: '#DDBDF1',
    icons: ["all_inclusive"]
  }
];

@Injectable({
  providedIn: 'root'
})
export class KnowledgeTypeService {

  constructor() { }

  getKnowLedgeTypes() : Observable<knowledgeType[]>{

      return of(knowLedgeTypes);

  }
}
