import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllPlayersComponent } from './show-all-players.component';

describe('ShowAllPlayersComponent', () => {
  let component: ShowAllPlayersComponent;
  let fixture: ComponentFixture<ShowAllPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
