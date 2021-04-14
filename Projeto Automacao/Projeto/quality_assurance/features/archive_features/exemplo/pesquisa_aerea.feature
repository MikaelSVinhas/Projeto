#language: pt

@pesquisa_aerea

Funcionalidade: Acessar cia de viagens e realizar uma pesquisa

Esquema do Cenário: Realizar uma pesquisa aérea
Dado que acesso a url "<url>"
E adiciono as opcoes de viagens
E seleciono o periodo da viagem, e reliazo a busca
Então valido se é retornada a pesquisa com as informações corretas


Exemplos:
|url                                                                                                                       |
|https://www.voegol.com.br/pt/sua-viagem/ofertas?gclid=EAIaIQobChMIofzGtfvp6wIVrtSzCh2DlAxMEAAYASAAEgKFYfD_BwE&gclsrc=aw.ds|
