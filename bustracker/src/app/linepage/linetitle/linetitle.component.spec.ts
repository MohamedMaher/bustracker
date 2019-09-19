import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinetitleComponent } from './linetitle.component';

describe('LinetitleComponent', () => {
  let component: LinetitleComponent;
  let fixture: ComponentFixture<LinetitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinetitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinetitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
