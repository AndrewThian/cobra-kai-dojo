import { getDependencies } from './dependencies'

it('dependencies', () => {
  const dependencies = {
    'A': ['B', 'C']
  }
  expect(getDependencies('A', dependencies)).toEqual(['B', 'C'])
})

it('dependencies', () => {
  const dependencies = {
    'A': ['B'],
    'B': ['C']
  }
  expect(getDependencies('A', dependencies)).toEqual(['B', 'C'])
})

it('dependencies without transitive', () => {
  const dependencies = {
    'A': ['B', 'D'],
    'B': ['C']
  }
  expect(getDependencies('A', dependencies)).toEqual(['B', 'D', 'C'])
})

it('dependencies with transitive', () => {
  const dependencies = {
    'A': ['B', 'D'],
    'B': ['C'],
    'C': ['E']
  }
  expect(getDependencies('A', dependencies)).toEqual(['B', 'D', 'C', 'E'])
})

it('dependencies with orphaned dependencies', () => {
  const dependencies = {
    'A': ['B', 'D'],
    'B': ['C'],
    'C': ['E'],
    'E': ['F'],
    'Z': ['Y']
  }
  expect(getDependencies('A', dependencies)).toEqual(['B', 'D', 'C', 'E', 'F'])
})


it('dependencies with duplicated dependencies', () => {
  const dependencies = {
    'A': ['B', 'D'],
    'B': ['C'],
    'C': ['E'],
    'D': ['C'],
    'E': ['F'],
    'Z': ['Y']
  }
  expect(getDependencies('A', dependencies)).toEqual(['B', 'D', 'C', 'E', 'F'])
})


it('dependencies with circular references', () => {
  const dependencies = {
    'A': ['B'],
    'B': ['C'],
    'C': ['A']
  }
  expect(getDependencies('A', dependencies)).toEqual(['B', 'C'])
})


