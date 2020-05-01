var fakeDnsBlocking = true;

Config = {
    showLogs: true,
    environment: (Ti.Platform.model == 'google_sdk' || Ti.Platform.model == 'Simulator') ? 'DEVELOPMENT' : 'PRODUCTION',
    apiUrl: 'https://hilo.im/api/1',
    basicAuthCredentials: '3dmB3ZJGvZwVbhAXE8w01IBvTNcAMh',
    userAgent: 'hilo-app',
    pingTimeout: 10 * 1000,
    hintOverlayDelay: 5 * 1000
};

// set the development user
Config.developmentUserName = (Config.environment == App.Enum.ENVIRONMENT.DEVELOPMENT) ? 'alice@uni-potsdam.de' : 'bob@uni-potsdam.de';
Config.developmentUserPassword = (Config.environment == App.Enum.ENVIRONMENT.DEVELOPMENT) ? 'password' : 'password';