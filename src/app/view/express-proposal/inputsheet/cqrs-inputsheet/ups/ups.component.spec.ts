import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsComponent } from './ups.component';

describe('UpsComponent', () => {
  let component: UpsComponent;
  let fixture: ComponentFixture<UpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpsComponent]
    });
    fixture = TestBed.createComponent(UpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
