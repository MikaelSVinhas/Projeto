@echo off
@break off
@title Criar Novo Diret�rio, Caso N�o Exista - Mikael Vinhas
@color 0a
@cls
@CHCP 1252 >NUL

setlocal EnableDelayedExpansion

if not exist "C:\Projeto Automa��o" (
  mkdir "C:\Projeto Automa��o"
  if "!errorlevel!" EQU "0" (
    echo Diret�rio criado com Sucesso!
  ) else (
    echo Erro ao criar Diret�rio C:\Projeto Automa��o
  )
) else (
  echo Diret�rio j� Existe!
)

if not exist "C:\Projeto Automa��o\Projeto\Screenshots" (
  mkdir "C:\Projeto Automa��o\Projeto\Relat�rios\Screenshot"  
  if "!errorlevel!" EQU "0" (
    echo Diret�rio criado com Sucesso!
  ) else (
    echo Erro ao criar Diret�rio C:\Projeto Automa��o\Projeto\Relat�rios\Screenshot
  )
) else (
  echo Diret�rio j� Existe!
)



echo off
cls