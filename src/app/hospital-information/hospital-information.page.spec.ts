import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HospitalInformationPage } from './hospital-information.page';

describe('HospitalInformationPage', () => {
  let component: HospitalInformationPage;
  let fixture: ComponentFixture<HospitalInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HospitalInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
