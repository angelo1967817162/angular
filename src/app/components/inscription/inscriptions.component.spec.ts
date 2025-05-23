import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionsComponent } from './inscriptions.component';

describe('MesInscriptionsComponent', () => {
  let component: InscriptionsComponent;
  let fixture: ComponentFixture<InscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscriptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
