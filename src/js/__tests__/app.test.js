import GameSavingLoader from '../app';

// проверочные тесты
test('should return the object', async () => {
  const data = await GameSavingLoader.load();

  expect(data).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  });
});

test('should throw an error', async () => {
  try {
    await GameSavingLoader.load('non-existent-file.json');
  } catch (error) {
    await expect(GameSavingLoader.load()).rejects.toThrow(new Error());
  }
});
