const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message Object', () => {
    const from = 'Jake';
    const text = 'Message';
    const message = generateMessage(from, text);
    
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'test';
    const latitude = 37;
    const longitude = -95;
    const url = `https://www.google.com/maps?q=37,-95`;
    const message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, url});
  })
});