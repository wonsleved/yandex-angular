import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLineComponent } from './footer-line.component';

describe('FooterLineComponent', () => {
  let component: FooterLineComponent;
  let fixture: ComponentFixture<FooterLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
