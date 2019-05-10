import { TenWordsPipe } from './ten-words.pipe';

describe('TenWordsPipe', () => {
  it('create an instance', () => {
    const pipe = new TenWordsPipe();
    expect(pipe).toBeTruthy();
  });
});
