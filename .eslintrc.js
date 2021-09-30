module.exports = {
    extends: ['prettier'],
    'plugins': ['prettier'],
    'rules': {
        'prettier/prettier': ['error'],
        'semi': ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
        'camelcase': 'off',
        'no-underscore-dangle': 'off',
        'no-shadow': 'off',
        'no-new': 0,
        'quotes': [2, 'single', {
            'avoidEscape': true
        }],
        'class-methods-use-this': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                'js': 'never'
            }
        ]
    }
};