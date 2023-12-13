# Iniciando Os Estudos Em JavaScript
Meus primeiros passos em JavaScript foi com base no livro [JavaScript: O Guia Definitivo](https://www.amazon.com.br/JavaScript-Guia-Definitivo-David-Flanagan/dp/856583719X/ref=sr_1_4?adgrpid=1148990309509643&hvadid=71812059845248&hvbmt=be&hvdev=c&hvlocphy=147852&hvnetw=s&hvqmt=e&hvtargid=kwd-71812410690954%3Aloc-20&hydadcr=5629_13210324&keywords=livro+de+javascript&qid=1701191624&sr=8-4&ufe=app_do%3Aamzn1.fos.6121c6c4-c969-43ae-92f7-cc248fc6181d), junto com a playlist do [curso em vídeo](https://www.youtube.com/playlist?list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm).

## PASSO 1:

### EX001:
Meu primeiro passo é criar um arquivo básico de html e fazer algumas modificações como style, título e parágrafo (básico de HTML e CSS). Seguindo, na parte do body eu adiciono a tag 'script' e dentro dela começo a desenvolver meus códigos js.

#### alert / prompt / confirm
O primeiro foi um 'alert' onde coloco uma janela com uma mensagem que ira aparecer quando rodar minha página web. Logo em seguida, uso o comando 'confirm' que serve para fazer uma pergunta e assim você responde ok ou cancela. E por fim, o comando 'prompt' que realiza uma pergunta, mas possibilita eu colocar uma resposta.

## PASSO 2:

### EX001:
Utilizando o mesmo código do ex001. Só que agorá iremos salver a nossa resposta que vem do prompt.

#### váriaveis 
Váriaveis servem para guardar dados para serem utilizados ao longo do programa. Podemos guardar números inteiros ou decimais e strings (para isso tem que colocar entre "). Cada váriavel é declarada com 'var' e possui um identificador (var nome = "Zé"). 

Para salvar a resposta é preciso adicionar var na frente do prompt como mostrado no exemplo. E depois, adiciona um alert para mostrar na tela (a variavel nome ao ser representada no alert não pode ficar dentro de aspas isso se chama 'concatenação').

### EX002:
Neste trecho de código em JavaScript, estamos realizando uma operação de soma entre 'numero1' e 'numero2'. O ponto crucial aqui é a necessidade de estar atento à conversão de tipos. No JavaScript, ao declarar uma variável como 'var n1 = 23', ela é automaticamente tratada como uma string pelo interpretador. Isso pode gerar um problema quando tentamos realizar a soma de 'n1' com 'n2', pois ocorrerá uma concatenação em vez de uma adição, devido à natureza da variável ser interpretada como string. Portanto, é essencial ter precaução ao lidar com tipos de dados para evitar comportamentos inesperados durante operações matemáticas. Ali, lidamos com 'var numero1 = Number(prompt("digite um número aqui: "));' para mudar para number ou 'String(n)' de numero para string.

#### Atenção:
Uma alternativa mais eficiente é empregar o método 'template string' como substituto da concatenação tradicional. Para isso, utilizamos as crases (``) em vez das aspas. Dessa forma, além de proporcionar uma sintaxe mais clara e legível, o 'template string' também facilita a incorporação de variáveis diretamente na string, tornando o código mais conciso e expressivo. Essa abordagem simplifica a construção de strings complexas, proporcionando uma maneira elegante de intercalar valores e texto de forma mais eficiente.

### EX003:
Neste contexto, empregamos o comando 'document.write' para exibir diretamente na página web, evitando a criação de uma janela separada. Adicionalmente, aplicamos o método 'n.toLocaleUpperCase()' para converter toda a string em letras maiúsculas, proporcionando uma apresentação mais uniforme e visualmente consistente. Além disso, utilizamos '.length' para acessar e mostrar a quantidade de caracteres presentes na string, fornecendo assim informações valiosas sobre a extensão do conteúdo. Essas técnicas combinadas contribuem para uma manipulação eficaz e uma apresentação aprimorada dos dados na interface da página. 

### EX004:
Examinamos os operadores em JavaScript, incluindo adição (+), multiplicação (*), divisão (/) e resto de divisão (%). Além disso, abordamos os operadores de incremento e decremento, destacando suas peculiaridades. É importante notar que ++x difere de x++, pois, em nosso exemplo, ++x é incrementado antes de ser atribuído a y, enquanto que no próximo exemplo x++ é incrementado após ser atribuído a y, resultando em valores distintos para y.

### EX005: 
No exemplo 5, exploramos EXPRESSÕES RELACIONAIS relacionadas aos "operadores de igualdade". Notamos que o operador (===) é mais restritivo do que (==), como ilustrado no exemplo em que o operador '==' não reconheceu que n2 era uma string, ao passo que o operador '===' identificou corretamente. Essa distinção também se aplica à desigualdade (!=) e à desigualdade mais restrita (!==), seguindo a mesma lógica dos operadores de igualdade.

Dando continuidade ao tema do exemplo 5, exploramos os "operadores de comparação". Aqui encontramos, os operadores 'maior que (>)', 'menor que (<)', 'maior ou igual a (>=)', 'menor ou igual a (<=)'.
 
## PASSO 3:
 Entendendo DOM - Document Object Model...

### EX001:
 "O DOM (Modelo de Objeto de Documento) representa um documento da página web por meio de nós e objetos, organizados em uma estrutura em árvore. Essa estrutura permite o acesso e a manipulação de elementos HTML utilizando JavaScript.

#### Selecionando:

Uma maneira de acessar e manipular elementos é através do método getElementsByTagName(). Ao utilizar esse método, podemos especificar a tag desejada entre parênteses, como no exemplo 'p'. Podemos então selecionar uma tag específica 'p' adicionando colchetes e indicando a ordem em que ela aparece no documento (por exemplo, [0] para a primeira tag 'p'). Posteriormente, é possível manipular o conteúdo ou atributos dessa tag com base na estrutura em árvore do DOM. Um exemplo prático seria: window.document.write('p')[0] para acessar e manipular a primeira tag 'p'."

Outras formas: é por ID, NOME, CLASSE e SELETOR.