export class Dependencies {
  private adjacencyList: Map<string, Set<string>>
  private mapFullDeps: Map<string, Set<string>> = new Map(); // goes stale if addDirect is called aga

  constructor() {
    this.adjacencyList = new Map()

    /**
     * {
     * "a": ["b", "c", "d"]
     * "b": ["c", "d"]
     * "c": ["e"]
     * }
     * 
     * {
     * "a": ["b", c ,d ,e]
     * }
     */
  }

  addDirect(className: string, directDependencies: Array<string>): void {
    this.adjacencyList.set(className, new Set(directDependencies));
    return;
  }

  findDeps(className: string): Set<string> {
    if (this.mapFullDeps.has(className)) {
      return this.mapFullDeps.get(className);
    }

    if (!this.adjacencyList.has(className)) return new Set()

    const directDeps = this.adjacencyList.get(className);
    
    const m = []
    directDeps.forEach(dep => {
      m.push(this.findDeps(dep))
    })
    
    const allDeps = m.reduce((acc, curr) => {
      return this.concatSets(acc, curr)
    }, new Set())

    directDeps.forEach(d => {
      allDeps.add(d);
    })
    
    this.mapFullDeps.set(className, allDeps);

    return allDeps;
  }

  dependenciesFor(className: string): Set<string> {
    return this.findDeps(className)
  }

  private concatSets(set1: Set<string>, set2: Set<string>): Set<string> {
    return new Set([...Array.from(set1), ...Array.from(set2)]);
  }
}