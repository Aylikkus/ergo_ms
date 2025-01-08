@echo off

cd %~dp0ergo_ms_client

echo Deleting node_modules and package-lock.json...
if exist node_modules (
    rd /s /q node_modules
)
if exist package-lock.json (
    del package-lock.json
)

echo Installing npm packages...
npm install

pause
