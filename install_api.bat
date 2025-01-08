@echo off

echo Changing directory to ergo_ms_api...
cd %~dp0ergo_ms_api

echo Deleting .venv...
if exist .venv (
    rd /s /q .venv
)

echo Deleting static...
if exist static (
    rd /s /q static
)

echo Deleting logs...
if exist logs (
    rd /s /q logs
)

echo Deleting media...
if exist media (
    rd /s /q media
)

echo Creating a virtual environment using Python 3.12...
py -3.12 -m venv .venv

echo Activating the virtual environment...
call .venv\Scripts\activate

echo Installing Poetry...
pip install poetry

echo Installing dependencies using Poetry...
poetry install

echo Checking if the logs directory exists...
if not exist logs (
    mkdir logs
    echo Logs directory created successfully.
) else (
    echo Logs directory already exists.
)

echo Checking if the media directory exists...
if not exist media (
    mkdir media
    echo Media directory created successfully.
) else (
    echo Media directory already exists.
)

echo Running collectstatic command using Poetry...
poetry run collectstatic

poetry run stop_prod

echo Running the production server using Poetry...
start /B poetry run prod

call deactivate.bat

pause