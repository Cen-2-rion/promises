import json from './parser';
import read from './reader';

/* класс GameSavingLoader с методом load, который загружает данные с помощью функции read,
парсит их с помощью функции json() и создаёт объект типа GameSaving */
export default class GameSavingLoader {
  static load() {
    return new Promise((resolve, reject) => {
      read()
        .then(json)
        .then((data) => {
          resolve(JSON.parse(data));
        }, (error) => {
          reject(new Error(`message: ${error.message}`));
        });
    });
  }
}
