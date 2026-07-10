@echo off
setlocal

echo.
echo === Gerando versao final do Controle Genealogico Web ===
cd /d "D:\DEV\aves-web"
if errorlevel 1 goto erro

call npm run build
if errorlevel 1 goto erro

echo.
echo === Copiando arquivos compilados para o projeto Site ===
cd /d "D:\DEV\site"
if errorlevel 1 goto erro

if not exist "public\controle-aves-web" mkdir "public\controle-aves-web"
xcopy /E /I /Y "D:\DEV\aves-web\dist\*" "D:\DEV\site\public\controle-aves-web\"
if errorlevel 1 goto erro

echo.
echo === Testando build do Site ===
call npm run build
if errorlevel 1 goto erro

echo.
echo Concluido.
echo A versao web ficara acessivel em: /controle-aves-web/
echo.
pause
exit /b 0

:erro
echo.
echo Ocorreu um erro. Leia as mensagens acima.
echo.
pause
exit /b 1
