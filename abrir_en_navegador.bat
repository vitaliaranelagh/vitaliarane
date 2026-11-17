@echo off
title Vitalia - Almacen Saludable
echo ========================================================
echo         VITALIA - ALMACEN SALUDABLE (RANELAGH)
echo ========================================================
echo.
echo Seleccione la opcion que desea abrir:
echo.
echo [1] Abrir la Pagina Web Oficial (Estilo Adidas / Tienda Online)
echo [2] Abrir el Plan de Negocios Integral (20 Puntos / Panel)
echo [3] Abrir ambas paginas en pestañas simultaneas
echo.
set /p opt="Ingrese su opcion (1, 2 o 3, presione Enter para 1): "

if "%opt%"=="2" (
    echo Abriendo Plan de Negocios...
    start index.html
) else if "%opt%"=="3" (
    echo Abriendo Pagina Web Oficial y Plan de Negocios...
    start web_oficial.html
    timeout /t 1 /nobreak >nul
    start index.html
) else (
    echo Abriendo Pagina Web Oficial...
    start web_oficial.html
)

exit
