import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngageforjobComponent } from './engageforjob.component';

describe('EngageforjobComponent', () => {
  let component: EngageforjobComponent;
  let fixture: ComponentFixture<EngageforjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngageforjobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngageforjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
