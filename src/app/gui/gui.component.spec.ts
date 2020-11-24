import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';

import { GuiComponent } from './gui.component';

describe('GuiComponent', () => {
  let component: GuiComponent;
  let fixture: ComponentFixture<GuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call method onGetPressed',() => {
    let result = 0;
    component.genero = "Mujer";
    component.estatura = 1.78;
    component.peso = 55;
    component.edad = 19;
    component.onGetPressed();
    result=component.imc;
    expect(result).toBe(17.36);
  })

  it('Should call method but onGetPressed',() => {
    let result = 0;
    component.genero = "Pansexual";
    component.estatura = 1.78;
    component.peso = 55;
    component.edad = 19;
    component.onGetPressed();
    result=component.imc;
    expect(result).toBe(0);
  })

  it('Should call method but onGetPressed',() => {
    let result = 0;
    component.genero = "";
    component.estatura = 1.98;
    component.peso = 80;
    component.edad = 17;
    component.onGetPressed();
    result=component.imc;
    expect(result).toBe(0);
  })

  it('Should call method but onGetPressed',() => {
    let result = 0;
    component.genero = "desconocido";
    component.estatura = 1.55;
    component.peso = 70;
    component.edad = 18;
    component.onGetPressed();
    result=component.imc;
    expect(result).toBe(0);
  })
  it('Should call method but onGetPressed',() => {
    let result = 0;
    component.genero = "XXXXXXX";
    component.estatura = 1.78;
    component.peso = 60;
    component.edad = 20;
    component.onGetPressed();
    result=component.imc;
    expect(result).toBe(0);
  })

  it('Should call method onGetPressed',() => {
    let result = 0;
    component.genero = "Hombre";
    component.estatura = 1.78;
    component.peso = 55;
    component.edad = 19;
    component.onGetPressed();
    result=component.imc;
    expect(result).toBe(17.36);
  })

  it('Should call calcMale mathod', () => {
    component.edad=30
    component.imc=30.0
    component.calcMale()
    expect(component.rango).toBe("")
  })
  it('Should call calcFemale mathod', () => {
    component.edad=30
    component.imc=30.0
    component.calcFemale()
    expect(component.rango).toBe("")
  })

  it('Should call calcMale mathod', () => {
    component.edad=19
    component.estatura=1.50
    component.peso=80
    component.imc=30.0
    component.calcMale()
    expect(component.rango).toBe("Obesidad")
  })

  it('Should call calcMale mathod', () => {
    component.edad=19
    component.estatura=1.50
    component.peso=80
    component.imc=29.0
    component.calcMale()
    expect(component.rango).toBe("Obesidad")
  })
  it('Should call calcMale mathod', () => {
    component.edad=19
    component.estatura=1.50
    component.peso=60
    component.imc=29.0
    component.calcMale()
    expect(component.rango).toBe("Sobrepeso")
  })
  it('Should call calcFemale mathod', () => {
    component.edad=19
    component.estatura=1.50
    component.peso=60
    component.imc=29.0
    component.calcFemale()
    expect(component.rango).toBe("Sobrepeso")
  })
});



























