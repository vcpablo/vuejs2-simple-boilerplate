import { parseMessage } from './helloWorld'

describe('parseMessage', () => {
  it('should return the input message in upper case', () => {
    expect(parseMessage('Hello World!')).toEqual('HELLO WORLD!')
  })
})
