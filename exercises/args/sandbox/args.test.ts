import { args } from './args'

describe('args', () => {
  
  it('parses boolean arguments', () => {
    const input = '-l';
    const schema = {
      l: 'boolean',
    };
    const output = {
      l: true,
    };

    expect(args(input, schema)).toEqual(output);
  })
    
  it('parses boolean arguments', () => {
    const input = '';
    const schema = {
      l: 'boolean',
    };
    const output = {
      l: false,
    };

    expect(args(input, schema)).toEqual(output);
  })

  it('parses multiple boolean arguments', () => {
    const input = '-l -x';
    const schema = {
      l: 'boolean',
      x: 'boolean',
    };
    const output = {
      l: true,
      x: true,
    };

    expect(args(input, schema)).toEqual(output);
  })

  it("parses integer arguments", () => {
    const input = '-p 8080';
    const schema = {
      p: 'int',
      l: 'boolean',
      x: 'boolean'
    }
    const output = {
      l: false,
      x: false,
      p: 8080
    }

    // to change 
    expect(args(input, schema)).toEqual(output)
  })

  it('parses multiple types of flags', () => {
    const input = '-l -x -p 8080 -d /usr/log'
    const schema = {
      p: 'int',
      l: 'boolean',
      x: 'boolean',
      d: 'string'
    }

    const output = {
      l: true,
      x: true,
      p: 8080,
      d: '/usr/log'
    }

    expect(args(input, schema)).toEqual(output)
  })

  it('parses integer array arguments', () => {
    const input = '-g -1,2,-3,5,6'
    const schema = {
      g: '[int]'
    }

    const output = {
      g: [-1, 2, -3, 5, 6]
    }

    expect(args(input, schema)).toEqual(output)
  })


  it('parses string array arguments', () => {
    const input = '-q blah,blah2'
    const schema = {
      q: '[string]'
    }

    const output = {
      q: ['blah','blah2']
    }

    expect(args(input, schema)).toEqual(output)
  })

  it('return defaults for strings and numbers', () => {
    const input = '-q -p'
    const schema = {
      q: '[string]',
      p: 'int'
    }

    const output = {
      q: [],
      p: 0
    }

    expect(args(input, schema)).toEqual(output)
  })
});