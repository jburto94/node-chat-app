const expect = require('expect');

const {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message Object', () => {
    const from = 'Jake';
    const text = 'Message';
    const message = generateMessage(from, text);
    
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });
});