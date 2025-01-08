@echo off

cd ergo_ms_api
call .venv\Scripts\activate
poetry run stop_prod

call deactivate.bat

cd ..
cd ergo_ms_client

npm run stop