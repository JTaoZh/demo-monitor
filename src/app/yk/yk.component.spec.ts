import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YkComponent } from './yk.component';

describe('YkComponent', () => {
  let component: YkComponent;
  let fixture: ComponentFixture<YkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
