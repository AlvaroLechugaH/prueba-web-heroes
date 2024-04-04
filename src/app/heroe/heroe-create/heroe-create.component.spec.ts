import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeCreateComponent } from './heroe-create.component';

describe('HeroeCreateComponent', () => {
  let component: HeroeCreateComponent;
  let fixture: ComponentFixture<HeroeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroeCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
