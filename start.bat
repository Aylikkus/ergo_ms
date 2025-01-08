@echo off
cd api
call .venv\Scripts\activate

poetry run stop_prod
poetry run prod

cd ..
cd client
npm run dev

pause