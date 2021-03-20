import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToddoComponent } from './add-toddo.component';

describe('AddToddoComponent', () => {
  let component: AddToddoComponent;
  let fixture: ComponentFixture<AddToddoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToddoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToddoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
