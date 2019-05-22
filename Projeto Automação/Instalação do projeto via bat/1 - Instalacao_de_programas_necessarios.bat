@echo off
cls
@cls
@CHCP 1252 >NUL
:start
	cd..
	cd..
	cd C:\Projeto Automação\Instalação do projeto via bat\exec
	start C:\Projeto Automação\Instalação do projeto via bat\exec\jre-8u201-windows-x64.exe %1% /s
	@echo Instalando o Java
	timeout 50
	,
	
	@echo Instalando o Node.js
	msiexec.exe /i "C:\Projeto Automação\Instalação do projeto via bat\exec\node-v10.15.1-x64.msi" /passive
	timeout 30

	@echo Instalando o Git
	cd C:\Projeto Automação\Instalação do projeto via bat\exec\
	Git-2.21.0-64-bit.exe /VERYSILENT
	timeout 10

	exit
	
	
