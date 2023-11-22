import { CustomUppercasePipe } from './custom-uppercase.pipe';

describe('UppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomUppercasePipe();
    expect(pipe).toBeTruthy();
  });
});
