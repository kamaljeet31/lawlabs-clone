import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhycloserComponent } from './whycloser.component';

describe('WhycloserComponent', () => {
  let component: WhycloserComponent;
  let fixture: ComponentFixture<WhycloserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhycloserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhycloserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
