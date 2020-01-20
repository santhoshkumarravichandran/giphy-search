import { TestBed } from '@angular/core/testing';
import { BadWordFilter } from './bad-word.filter';

describe('BadWordFilter', () => {
  let filter: BadWordFilter;
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    filter = TestBed.get(BadWordFilter);
    expect(filter).toBeTruthy();
  });

  it('should remove swear words', () => {
    filter = TestBed.get(BadWordFilter);
    const cleanSwearWord = filter.clean('ass');
    expect(cleanSwearWord).toEqual('');
  });

  it('should do nothing when no swear words found', () => {
    filter = TestBed.get(BadWordFilter);
    const cleanSwearWord = filter.clean('apple');
    expect(cleanSwearWord).toEqual('apple');
  });
});
