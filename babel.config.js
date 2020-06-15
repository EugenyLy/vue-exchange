module.exports = {
    presets: [
        ['@babel/preset-env', { targets: { node: 'current' }}],
        '@babel/preset-typescript',
        '@vue/babel-preset-jsx',
    ],
    plugins: [
        ['@babel/plugin-proposal-decorators', { 'legacy': true }],
        '@babel/plugin-syntax-jsx',
        '@babel/plugin-syntax-dynamic-import',
        'transform-class-properties',
        'macros',
    ],
    env: {
        test: {
            plugins: ['transform-es2015-modules-commonjs'],
        },
    },
};

