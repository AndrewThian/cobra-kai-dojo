module.exports = function (plop) {
  plop.setGenerator('new', {
    description: 'create new kata exercise',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'name of kata please'
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'exercises/{{name}}/sandbox/{{name}}.test.ts',
        templateFile: 'templates/test.txt'
      },
      {
        type: 'add',
        path: 'exercises/{{name}}/sandbox/{{name}}.ts',
        templateFile: 'templates/code.txt'
      },
      {
        type: 'add',
        path: 'exercises/{{name}}/README.md',
        templateFile: 'templates/readme.txt'
      }
    ]
  })
}