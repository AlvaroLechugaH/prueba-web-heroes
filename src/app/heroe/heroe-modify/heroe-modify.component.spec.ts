import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeModifyComponent } from './heroe-modify.component';

describe('HeroeModifyComponent', () => {
  let component: HeroeModifyComponent;
  let fixture: ComponentFixture<HeroeModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroeModifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroeModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
