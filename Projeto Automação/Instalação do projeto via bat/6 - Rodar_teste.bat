ECHO OFF
CLS
@CHCP 1252 >NUL
cd\Source - Automa��o\Quality_Assurance\protractor
npm run test -- --cucumberOpts.tags=@TAG
rem pause


rem "Favor Editar o Conte�do ap�s o @ para definir os testes que devem ser executados"
rem Exemplos: @Pronto-tag (testes Prontos), @NomeM�dulo (testes do m�dulo), @IdDaFeature (testes da feature), @IdDaUserStory (Testes da UserStory), @IdDaTask (Teste da Task)
rem @IdDoTestCase (Teste do TestCase)  
rem "test": "cd ./quality_assurance && protractor conf.js --cucumberOpts.tags --disableChecks",
rem npm run test -- --cucumberOpts.tags=@smoketest