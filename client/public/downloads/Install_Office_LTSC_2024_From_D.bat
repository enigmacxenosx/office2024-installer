@echo off
setlocal EnableExtensions DisableDelayedExpansion
title Office LTSC Professional Plus 2024 - D Drive Installer

:: Required folder: D:\OfficeLTSC2024
:: Required file:   D:\OfficeLTSC2024\setup.exe
:: This script creates its own XML configuration in that folder.
:: Run this file using "Run as administrator".

set "INSTALL_FOLDER=D:\OfficeLTSC2024"
set "SETUP_EXE=%INSTALL_FOLDER%\setup.exe"
set "CONFIG_XML=%INSTALL_FOLDER%\config-office-ltsc-2024.xml"

if not exist "D:\" (
  echo.
  echo [ERROR] Drive D: is not available.
  echo Connect or mount drive D: and try again.
  echo.
  pause
  exit /b 1
)

net session >nul 2>&1
if not "%errorlevel%"=="0" (
  echo.
  echo [ERROR] Administrator privileges are required.
  echo Right-click this file and select "Run as administrator".
  echo.
  pause
  exit /b 1
)

if not exist "%INSTALL_FOLDER%" (
  echo.
  echo [ERROR] The required folder was not found:
  echo %INSTALL_FOLDER%
  echo.
  echo Create the folder and copy the official Office Deployment Tool setup.exe into it.
  echo.
  pause
  exit /b 1
)

if not exist "%SETUP_EXE%" (
  echo.
  echo [ERROR] setup.exe was not found:
  echo %SETUP_EXE%
  echo.
  echo Download and extract the official Office Deployment Tool, then copy setup.exe into %INSTALL_FOLDER%.
  echo.
  pause
  exit /b 1
)

echo Creating the Office LTSC 2024 configuration file...
(
  echo ^<Configuration^>
  echo   ^<Add OfficeClientEdition="64" Channel="PerpetualVL2024"^>
  echo     ^<Product ID="ProPlus2024Volume" PIDKEY="XJ2XN-FW8RK-P4HMP-DKDBV-GCVGB"^>
  echo       ^<Language ID="es-mx" /^>
  echo       ^<Language ID="en-gb" /^>
  echo       ^<Language ID="en-us" /^>
  echo       ^<Language ID="MatchPreviousMSI" /^>
  echo       ^<ExcludeApp ID="Lync" /^>
  echo     ^</Product^>
  echo   ^</Add^>
  echo   ^<Property Name="SharedComputerLicensing" Value="0" /^>
  echo   ^<Property Name="FORCEAPPSHUTDOWN" Value="FALSE" /^>
  echo   ^<Property Name="DeviceBasedLicensing" Value="0" /^>
  echo   ^<Property Name="SCLCacheOverride" Value="0" /^>
  echo   ^<Property Name="AUTOACTIVATE" Value="1" /^>
  echo   ^<Updates Enabled="TRUE" /^>
  echo   ^<RemoveMSI /^>
  echo   ^<Display Level="Full" AcceptEULA="TRUE" /^>
  echo ^</Configuration^>
) > "%CONFIG_XML%"

if not exist "%CONFIG_XML%" (
  echo.
  echo [ERROR] The configuration file could not be created.
  echo.
  pause
  exit /b 1
)

cd /d "%INSTALL_FOLDER%"

echo.
echo Starting Office LTSC Professional Plus 2024 installation from D:...
echo Internet access may be required if the Office installation files have not already been downloaded.
echo Do not close this window while Office Setup is running.
echo.
"%SETUP_EXE%" /configure "%CONFIG_XML%"

set "SETUP_RESULT=%errorlevel%"

if not "%SETUP_RESULT%"=="0" (
  echo.
  echo [ERROR] Office Setup returned error code %SETUP_RESULT%.
  echo Check the Office Deployment Tool, internet connection, and volume-license entitlement.
  echo.
  pause
  exit /b %SETUP_RESULT%
)

echo.
echo Office Setup finished. Open an Office application to verify activation for your organization.
echo.
pause
exit /b 0
