import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IricComponent } from './iric.component';

describe('IricComponent', () => {
  let component: IricComponent;
  let fixture: ComponentFixture<IricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
