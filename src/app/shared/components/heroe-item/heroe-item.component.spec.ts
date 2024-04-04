import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeItemComponent } from './heroe-item.component';

describe('HeroeItemComponent', () => {
  let component: HeroeItemComponent;
  let fixture: ComponentFixture<HeroeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroeItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
