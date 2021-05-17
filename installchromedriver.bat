set pathToChrome=%cd%
@echo %pathToChrome%
SET pathToChrome=%pathToChrome%\drivers\chromedriver_win32.zip
npm install chromedriver --chromedriver_filepath=%pathToChrome%
