import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoradoresDetalheComponent } from './moradores-detalhe.component';

describe('MoradoresDetalheComponent', () => {
  let component: MoradoresDetalheComponent;
  let fixture: ComponentFixture<MoradoresDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoradoresDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoradoresDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
