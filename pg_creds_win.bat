@echo off

set PG_DIR=%~dp0pgsql
set PG_DATA_DIR=%PG_DIR%\data

"%PG_DIR%\bin\pg_ctl.exe" -D "%PG_DATA_DIR%" -l logfile start
"%PG_DIR%\bin\psql.exe" -U postgres -h localhost -p 5432 -c "CREATE DATABASE oms;"

"%PG_DIR%\bin\pg_ctl.exe" -D "%PG_DATA_DIR%" stop

set SERVICE_NAME=PostgreSQLService
set SERVICE_DISPLAY_NAME=PostgreSQL Service
set SERVICE_DESCRIPTION=Service to run PostgreSQL
set SERVICE_USER=.\postgres
set SERVICE_PASSWORD=password

sc create %SERVICE_NAME% binPath= "%PG_DIR%\bin\pg_ctl.exe -D \"%PG_DATA_DIR%\" -l logfile runservice" start= auto DisplayName= "%SERVICE_DISPLAY_NAME%" obj= "%SERVICE_USER%" password= "%SERVICE_PASSWORD%"

pause
