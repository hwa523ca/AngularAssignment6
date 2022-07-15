import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedoutpageComponent } from './loggedoutpage.component';

describe('LoggedoutpageComponent', () => {
  let component: LoggedoutpageComponent;
  let fixture: ComponentFixture<LoggedoutpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedoutpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedoutpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
