import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSelectStyledComponent } from './profile-select-styled.component';

describe('ProfileSelectStyledComponent', () => {
  let component: ProfileSelectStyledComponent;
  let fixture: ComponentFixture<ProfileSelectStyledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSelectStyledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSelectStyledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
