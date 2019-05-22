@echo off
@break off
@title Criar Novo Diretório, Caso Não Exista - Mikael Vinhas
@color 0a
@cls
@CHCP 1252 >NUL

setlocal EnableDelayedExpansion

if not exist "C:\Projeto Automação" (
  mkdir "C:\Projeto Automação"
  if "!errorlevel!" EQU "0" (
    echo Diretório criado com Sucesso!
  ) else (
    echo Erro ao criar Diretório C:\Projeto Automação
  )
) else (
  echo Diretório já Existe!
)

if not exist "C:\Projeto Automação\Projeto\Screenshots" (
  mkdir "C:\Projeto Automação\Projeto\Relatórios\Screenshot"  
  if "!errorlevel!" EQU "0" (
    echo Diretório criado com Sucesso!
  ) else (
    echo Erro ao criar Diretório C:\Projeto Automação\Projeto\Relatórios\Screenshot
  )
) else (
  echo Diretório já Existe!
)



echo off
cls