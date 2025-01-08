@echo off

cd api
call .venv\Scripts\activate
poetry run stop_prod

call deactivate.bat

cd ..
cd client

npm run stop