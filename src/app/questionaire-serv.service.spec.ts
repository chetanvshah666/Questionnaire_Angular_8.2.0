import { TestBed } from '@angular/core/testing';

import { QuestionaireServService } from './questionaire-serv.service';

describe('QuestionaireServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionaireServService = TestBed.get(QuestionaireServService);
    expect(service).toBeTruthy();
  });
});
