import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdviceGeneratorComponent } from './advice-generator.component';

describe('AdviceGeneratorComponent', () => {
  let component: AdviceGeneratorComponent;
  let fixture: ComponentFixture<AdviceGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdviceGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
