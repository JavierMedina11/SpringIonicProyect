import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TravelInfoPage } from './travel-info.page';

describe('TravelInfoPage', () => {
  let component: TravelInfoPage;
  let fixture: ComponentFixture<TravelInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TravelInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
