import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualBoxComponent } from './individual-box.component';

describe('IndividualBoxComponent', () => {
  let component: IndividualBoxComponent;
  let fixture: ComponentFixture<IndividualBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
