import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerMapComponent } from './inner-map.component';

describe('InnerMapComponent', () => {
  let component: InnerMapComponent;
  let fixture: ComponentFixture<InnerMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
