import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindStackComponent } from './mind-stack.component';

describe('MindStackComponent', () => {
  let component: MindStackComponent;
  let fixture: ComponentFixture<MindStackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MindStackComponent]
    });
    fixture = TestBed.createComponent(MindStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
