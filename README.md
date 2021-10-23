# trabalho-bio

## Requerimentos

html5, css3, javascript, jquery

## Descrição

To fazendo esse site para o meu trabalho de Biologia, que é pra fazer um "glossário criativo" de termos usados na embriologia

Quero me esforçar pra fazer a maior parte por minha conta e a data de entrega é pra sexta-feira dia 22/10/2021

Como eu comecei a fazer realmente na segunda-feira dia 18/10 ,isso significa que eu tenho 4 dias (até quinta-feira) pra hostear 
o site, pra poder ter a chance de corrigir os erros que possam surgir na sexta-feira.

tudo que eu quero que tenha é: 
1. um nav que leve para as sections do site ('proposta', 'termos' e 'alunos');
2. os termos separados em cards;
3. cada card vai ter um "saiba mais" que vai abrir um popup com um iframe do site que foi usado como fonte;
4. os cards organizados em um carrossel, pra não ficar com um monte deles empilhado;

## Diretórios

Pra esse projeto eu usei basicamente o mesmo padrão que eu criei pra mim mesmo, com:

1. pagina inicial "solta" no diretório do projeto;
2. uma pasta "pages" pra incluir os outros htmls (não inclusa nesse projeto específico;
3. uma pasta "assets" que tem dentro todo o css, js e os arquivos "a mais" do projeto;
4. o css é separado por duas pastas:

4.1) 'common', que inclui todos os estilos e variáveis comuns aos componentes, ou do header e do footer,
nela tambem está o arquivo "common.css", que é o único importado pro html, que importa todos os arquivos da
pasta dele e o arquivo "_components.css" da outra pasta;

4.2) 'components', que inclui todos os estilos específicos dos componentes, que são todos importados dentro
do arquivo "_components.css", que por sua vez é importado pelo arquivo "common.css", que é o único que é
incluso no html;
5. o javascript está todo dentro da pasta "javascript", e dentro de um único arquivo chamado "js.js";
6. os demais conteúdos que não são necessariamente código (imagens e videos por exemplo) ficam em pastas separadas pra melhor organização, todas dentro da pasta 'assets';

## Design

Não sei fazer, por isso que eu fiz ele bem simples.

## Créditos

Caio_spr 

Com participação especial do meu pai, que me ajudou em algumas partes do projeto (tudo que usei o jquery)
