import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersTabComponent } from './players-tab.component';

describe('PlayersTabComponent', () => {
  let component: PlayersTabComponent;
  let fixture: ComponentFixture<PlayersTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayersTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
