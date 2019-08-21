import { TestBed } from '@angular/core/testing';

import { SampleService } from './sample.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('SampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[SampleService]
  }));

  it("work like a service when injected",inject([],()=>{}))
  it('should be created', () => {
    const service: SampleService = TestBed.get(SampleService);
    expect(service).toBeTruthy();
  });
});
