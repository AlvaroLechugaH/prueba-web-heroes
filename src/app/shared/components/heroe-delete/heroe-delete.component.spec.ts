import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeDeleteComponent } from './heroe-delete.component';

describe('HeroeDeleteComponent', () => {
  let component: HeroeDeleteComponent;
  let fixture: ComponentFixture<HeroeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroeDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
