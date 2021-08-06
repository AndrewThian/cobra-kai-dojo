const _ =  require('lodash');

export const getDependencies = (module, tree) =>  {
    let all_dependencies = [...tree[module]]
    for (let i=0; i < all_dependencies.length; i++) {
        const dependenciesToPush = _.difference(tree[all_dependencies[i]], [...all_dependencies, module]) // returns all new dependencies not in all dependencies
        all_dependencies.push(...dependenciesToPush)
    }
    return all_dependencies
}