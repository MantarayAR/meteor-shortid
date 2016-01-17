Package.describe({
  name: 'mantarayar:shortid',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Amazingly short non-sequential url-friendly unique id generator.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/MantarayAR/meteor-shortid',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('random');
  api.addFiles('mantarayar_shortid.js');
  api.addFiles('lib/_/bootstrap.js');
  api.addFiles('lib/random/random-byte.js');
  api.addFiles('lib/random/random-from-seed.js');
  api.addFiles('lib/is-valid.js');
  api.addFiles('lib/alphabet.js');
  api.addFiles('lib/decode.js');
  api.addFiles('lib/encode.js');
  api.addFiles('lib/index.js');
  api.export(['ShortId']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('random');
  api.addFiles('mantarayar_shortid.js');
  api.addFiles('lib/_/bootstrap.js');
  api.addFiles('lib/random/random-byte.js');
  api.addFiles('lib/random/random-from-seed.js');
  api.addFiles('lib/is-valid.js');
  api.addFiles('lib/alphabet.js');
  api.addFiles('lib/decode.js');
  api.addFiles('lib/encode.js');
  api.addFiles('lib/index.js');
  api.addFiles('mantarayar_shortid-tests.js');
});
