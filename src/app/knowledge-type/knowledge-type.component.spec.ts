import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeTypeComponent } from './knowledge-type.component';

describe('KnowledgeTypeComponent', () => {
  let component: KnowledgeTypeComponent;
  let fixture: ComponentFixture<KnowledgeTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
