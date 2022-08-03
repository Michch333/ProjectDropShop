import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredResultsComponent } from './filtered-results.component';

describe('FilteredResultsComponent', () => {
  let component: FilteredResultsComponent;
  let fixture: ComponentFixture<FilteredResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
