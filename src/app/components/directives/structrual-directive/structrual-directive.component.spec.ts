import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructrualDirectiveComponent } from './structrual-directive.component';

describe('StructrualDirectiveComponent', () => {
  let component: StructrualDirectiveComponent;
  let fixture: ComponentFixture<StructrualDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructrualDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructrualDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
