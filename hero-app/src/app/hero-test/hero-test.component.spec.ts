import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTestComponent } from './hero-test.component';

describe('HeroTestComponent', () => {
  let component: HeroTestComponent;
  let fixture: ComponentFixture<HeroTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
