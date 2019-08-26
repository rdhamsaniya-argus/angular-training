import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerNameComponent } from './customer-name.component';

describe('CustomerNameComponent', () => {
  let component: CustomerNameComponent;
  let fixture: ComponentFixture<CustomerNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
