import { Dependencies } from './dependencies'

let deps;

beforeEach(() => {
  deps = new Dependencies()
})

it('dependencies F - H', () => {
  deps.addDirect('F', ['H']);
  const result = deps.dependenciesFor('F');
  expect(result).toEqual(new Set(['H']));
})

it('dependencies F - H I', () => {
  deps.addDirect('F', ['H', 'I']);
  const result = deps.dependenciesFor('F');
  expect(result).toEqual(new Set(['H', 'I']));
})

it('dependencies F - H I, E - F', () => {
  deps.addDirect('F', ['H', 'I']);
  deps.addDirect('E', ['F'])

  const result = deps.dependenciesFor('F')
  expect(result).toEqual(new Set(['H', 'I']))
})

it('dependencies F - H I, E - F', () => {
  deps.addDirect('F', ['H', 'I']);
  deps.addDirect('E', ['F'])

  const result = deps.dependenciesFor('E')
  expect(result).toEqual(new Set(['F', 'H', 'I']))
})

it("multi level deps", () => {
  deps.addDirect('E', ['F']);
  deps.addDirect('F', ['H', 'I']);
  deps.addDirect('H', ['X']);

  const result = deps.dependenciesFor('E')
  expect(result).toEqual(new Set(['F', 'H', 'I', 'X']))
})

it.todo("duplicate keys being sent in")