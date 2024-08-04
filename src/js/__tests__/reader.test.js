import GameSavingLoader from '../app';
import read from '../reader';

jest.mock('../reader');

const error = new Error('oops!');

read.mockRejectedValueOnce(error);

test('should throw an error', async () => {
  try {
    await GameSavingLoader.load();
  } catch (e) {
    expect(e.message).toBe('message: oops!');
  }
});
