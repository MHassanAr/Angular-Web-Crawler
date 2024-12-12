import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BbcTitlesComponent } from './bbc-titles.component';

describe('BbcTitlesComponent', () => {
  let component: BbcTitlesComponent;
  let fixture: ComponentFixture<BbcTitlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BbcTitlesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BbcTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
