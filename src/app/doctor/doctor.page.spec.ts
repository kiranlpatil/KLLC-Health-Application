import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoctorPage } from './doctor.page';

describe('PriceListPage', () => {
  let component: DoctorPage;
  let fixture: ComponentFixture<DoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
