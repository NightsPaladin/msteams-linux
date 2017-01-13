const nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
const options = {
  name: 'MS-Teams',
  targetUrl: 'https://teams.microsoft.com/',
  platform: '', // defaults to the current system
  arch: '', // defaults to the current system
  version: '1.0.0',
  out: '.',
  overwrite: false,
  asar: false, // see conceal
  icon: 'teams-logo.png',
  counter: false,
  width: 1280,
  height: 800,
  showMenuBar: false,
  fastQuit: false,
  userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36', // will infer a default for your current system
  ignoreCertificate: false,
  insecure: false,
  honest: false,
  zoom: 1.0
};

nativefier(options, function(error, appPath) {
  if (error) {
    console.error(error);
    return;
  }
  console.log('App has been nativefied to', appPath);
});
