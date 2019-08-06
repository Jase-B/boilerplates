import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

const scripts = [
  {
    name: 'bundle',
    inputPath: './src/js/index.js',
    outputPath: './dist/js/bundle.min.js'
  }
];

const buildConfig = scripts =>
  scripts.map(script => {
    let config = { output: {} };

    config.input = script.inputPath;
    config.output.file = script.outputPath;
    config.output.format = 'iife';
    config.output.name = script.name;
    config.plugins = [
      babel({
        exclude: 'node_modules/**'
      }),
      resolve()
    ];
    
    return config;  
  });

export default buildConfig(scripts);