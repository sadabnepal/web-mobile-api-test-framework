module.exports = {
    spec: ['test/**/*.ts'],
    package: './package.json',
    require: ['ts-node/register', 'tsconfig-paths/register'],
    extension: ['ts'],
    timeout: 20 * 1000,
    grep: '',
    ignore: [''],
    reporter: 'mochawesome',
    'reporter-option': [
        'reportDir=reports',
        'reportFilename=index',
        'reportTitle=API Test Report',
        'charts=true',
        'code=false',
        'inline=true',
        'autoOpen=false',
        'showPassed=true',
        'showFailed=true',
        'showPending=true',
        'showSkipped=true',
        'showHooks=failed'
    ]
};