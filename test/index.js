import eslintTestGenerator, {mocha} from '../src/';

console.log(eslintTestGenerator({
  template: 'qunit',
  paths: [
    'test/**/*.js',
    'src/**/*.js',
  ],
}));


var somethin = function() {

};