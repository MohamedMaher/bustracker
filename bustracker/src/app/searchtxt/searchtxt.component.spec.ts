import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtxtComponent } from './searchtxt.component';

describe('SearchtxtComponent', () => {
  let component: SearchtxtComponent;
  let fixture: ComponentFixture<SearchtxtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchtxtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchtxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
