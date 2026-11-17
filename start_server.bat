@echo off
title SkillHub Local Server Launcher
echo ========================================================
echo               INICIANDO PLATAFORMA SKILLHUB
echo ========================================================
echo.

set PHP_PATH=php
where php >nul 2>nul
if %errorlevel% neq 0 (
    if exist "C:\xampp\php\php.exe" (
        set PHP_PATH=C:\xampp\php\php.exe
    ) else (
        echo ERROR: No se encontro el ejecutable de PHP. Asegurate de tener PHP o XAMPP instalado.
        pause
        exit /b 1
    )
)

echo 1. Verificando y preparando la base de datos (SQLite/MySQL)...
"%PHP_PATH%" setup.php
echo.
echo 2. Iniciando el servidor local de desarrollo en http://localhost:8000 ...
echo Presiona Ctrl+C para detener el servidor.
echo.
start http://localhost:8000
"%PHP_PATH%" -S localhost:8000
pause
