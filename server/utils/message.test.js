var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    let from = 'charlie';
    let text = 'this is text';
    let message = generateMessage(from, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    let from = 'Jen';
    let lat = 37;
    let long = -122;
    let url = 'https://www.google.com/maps?q=37,-122';
    let message = generateLocationMessage(from, lat, long);

    expect(message.from).toBe(from);
    expect(message.url).toBe(url);
    expect(typeof message.createdAt).toBe('number');
  });
});
