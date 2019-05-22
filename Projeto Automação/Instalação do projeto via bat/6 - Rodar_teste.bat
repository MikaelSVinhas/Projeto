ECHO OFF
CLS
@CHCP 1252 >NUL
cd\Source - Automação\Quality_Assurance\protractor
npm run test -- --cucumberOpts.tags=@TAG
rem pause


rem "Favor Editar o Conteúdo após o @ para definir os testes que devem ser executados"
rem Exemplos: @Pronto-tag (testes Prontos), @NomeMódulo (testes do módulo), @IdDaFeature (testes da feature), @IdDaUserStory (Testes da UserStory), @IdDaTask (Teste da Task)
rem @IdDoTestCase (Teste do TestCase)  
rem "test": "cd ./quality_assurance && protractor conf.js --cucumberOpts.tags --disableChecks",
rem npm run test -- --cucumberOpts.tags=@smoketest