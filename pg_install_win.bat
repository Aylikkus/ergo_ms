@echo off

set PG_DIR=%~dp0pgsql
set PG_DATA_DIR=%PG_DIR%\data

if not exist "%PG_DIR%" (
    echo PostgreSQL directory does not exist: %PG_DIR%
    pause
    exit /b
)
if not exist "%PG_DIR%\bin\pg_ctl.exe" (
    echo pg_ctl.exe not found in %PG_DIR%\bin
    pause
    exit /b
)

IF NOT EXIST "%PG_DATA_DIR%" (
    echo Initializing data directory...
    "%PG_DIR%\bin\initdb.exe" -D "%PG_DATA_DIR%" --auth=md5 --username=postgres --pwprompt
) ELSE (
    echo Data directory already exists. Skipping initialization...
)

setlocal enabledelayedexpansion

set "config_file=%PG_DATA_DIR%\postgresql.conf"
powershell -Command "(Get-Content '%config_file%') -replace '^#listen_addresses =', 'listen_addresses =' | Set-Content '%config_file%'"
powershell -Command "(Get-Content '%config_file%') -replace '^#port =', 'port =' | Set-Content '%config_file%'"

pause
