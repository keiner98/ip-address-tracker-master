import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpViewComponent } from './ip-view.component';

describe('IpViewComponent', () => {
  let component: IpViewComponent;
  let fixture: ComponentFixture<IpViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpViewComponent]
    });
    fixture = TestBed.createComponent(IpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
