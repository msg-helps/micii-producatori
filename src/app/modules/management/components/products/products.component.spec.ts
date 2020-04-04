import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ManagementProductsComponent } from './products.component'

describe('ProductsComponent', () => {
  let component: ManagementProductsComponent
  let fixture: ComponentFixture<ManagementProductsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManagementProductsComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementProductsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
