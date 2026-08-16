@echo off
setlocal EnableExtensions
title Office LTSC Professional Plus 2024 Installer

:: This script must be kept in the same folder as setup.exe and confMO2024LTSC.xml.
:: Run this file with Administrator privileges.

net session >nul 2>&1
if not "%errorlevel%"=="0" (
  echo.
  echo [ERROR] Administrator privileges are required.
  echo Right-click this file and choose ^"Run as administrator^".
  echo.
  pause
  exit /b 1
)

cd /d "%~dp0"

if not exist "setup.exe" (
  echo.
  echo [ERROR] setup.exe was not found in this folder.
  echo Download and extract the official Office Deployment Tool here, then run this file again.
  echo.
  pause
  exit /b 1
)

if not exist "confMO2024LTSC.xml" (
  echo.
  echo [ERROR] confMO2024LTSC.xml was not found in this folder.
  echo Keep this batch file, setup.exe, and the XML configuration together.
  echo.
  pause
  exit /b 1
)

echo.
echo Starting Office LTSC Professional Plus 2024 installation...
echo Do not close this window while Office setup is running.
echo.
setup.exe /configure confMO2024LTSC.xml

if not "%errorlevel%"=="0" (
  echo.
  echo [ERROR] Office Setup returned an error. Check the XML file and Office Deployment Tool setup.
  echo.
  pause
  exit /b %errorlevel%
)

echo.
echo Office Setup finished. Review any messages from the installer before closing this window.
echo.
pause
exit /b 0
