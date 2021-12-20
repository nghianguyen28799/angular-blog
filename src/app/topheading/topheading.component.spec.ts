/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopheadingComponent } from './topheading.component';

describe('TopheadingComponent', () => {
  let component: TopheadingComponent;
  let fixture: ComponentFixture<TopheadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopheadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
