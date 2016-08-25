import eslintTestGenerator, {mocha} from '../src/';

console.log(eslintTestGenerator({
  suite: 'mocha',
  paths: [
    'test/**/*.js',
    'src/**/*.js',
  ],
}));


var somethin = function() {

};