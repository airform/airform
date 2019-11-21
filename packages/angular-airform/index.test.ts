import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AirformComponent } from '.'

describe('Airform', () => {
  let component: AirformComponent
  let fixture: ComponentFixture<AirformComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AirformComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AirformComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('renders without crashing', () => {
    expect(component).toBeTruthy()
  })
})
