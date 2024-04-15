import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getSimpleValue debería devolver el texto en mayúsculas', () => {
    expect(service.getSimpleValue('hola mundo')).toBe('HOLA MUNDO');
  })

  // it('getTests debería retornar el valor de la API en forma de Observable', (done: DoneFn) => {
  //   service.getTests().subscribe((response) => {
  //     expect(response.total).toBe(10);
  //   })
  // });

  // it('getTestsProm debería retornar el valor de la API en fora de Promise', async (done: DoneFn) => {
  //   const response = await service.getUsersProm();
  //   expect(response.total).toBe(10);
  //   done();
  // })
});
