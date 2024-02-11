import { CivilityGenderPipe } from './civility-gender.pipe';

describe('CivilityGenderPipe', () => {
  let pipe: CivilityGenderPipe;

  beforeEach(() => {
    pipe = new CivilityGenderPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms "mr" to "monsieur"', () => {
    const result = pipe.transform('mr');
    expect(result).toBe(' monsieur');
  });

  it('transforms "mrs" to "madame"', () => {
    const result = pipe.transform('ms');
    expect(result).toBe(' madame');
  });
});
