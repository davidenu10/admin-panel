// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api: {
    rooturl: 'http://test.mycryptobunny.com:3000'
  },
  dev: {
    authCallback: 'DEV_AUTH_CALLBACK_URL',
    redirectUrl: 'DEV_REDIRECT_URL',
    pgSuccess: 'DEV_PG_SUCCESS_URL',
    pgFailure: 'DEV_PG_FAIL_URL'
  },
  prod: {
    authCallback: 'PROD_AUTH_CALLBACK_URL',
    redirectUrl: 'PROD_REDIRECT_URL',
    pgSuccess: 'PROD_PG_SUCCESS_URL',
    pgFailure: 'PROD_PG_FAIL_URL'
  },
  isInternal: false,
  successRedirectUrl: "www.google.com"
};
