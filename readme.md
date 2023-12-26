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

Outras formas: é por ID, NOME, CLASS e SELETOR. A lógica é a mesma, o que muda é o método onde é tag muda para 'id' ou 'clas'.

### EX002:
Explorando mais o DOM, entramos no fascinante mundo dos eventos. É nesse contexto que podemos atribuir funcionalidades a eventos como o mouse, ou qualquer outro evento disponível em [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events). No exemplo 002, ao utilizar o seletor 'id' em conjunto com FUNÇÕES em JavaScript, conseguimos programar a execução de eventos somente quando o mouse interage com uma região específica. Em outras palavras, a ação não ocorrerá automaticamente após o carregamento da página web.

Destaca-se que empregamos o método 'addEventListener()' para estabelecer a conexão entre a função definida em JavaScript e o HTML, proporcionando uma abordagem eficiente para a interação dinâmica entre o usuário e a página.

### EX003:
Para aprofundar nossa compreensão sobre eventos, exploramos suas funcionalidades ao criar uma calculadora simples que realiza exclusivamente operações de soma. Nesse contexto, aplicamos conceitos fundamentais, como o uso de selecionadores, tags específicas como 'input' e 'div', e a implementação de funções em JavaScript. Essa prática proporcionou uma compreensão mais sólida da interação dinâmica entre elementos HTML e scripts, permitindo a execução de ações específicas, como a adição de valores em resposta a eventos do usuário.

## PASSO 4:
Neste quarto passo da nossa jornada, exploramos as estruturas de condição. Nos exemplos ex001 e ex002, estudamos a instrução condicional 'if' e a aplicamos em ambos os casos. A estrutura de condição 'if' é fundamental na programação e permite que um bloco de código seja executado apenas se uma condição específica for verdadeira. Isso possibilita a criação de lógica de ramificação, onde diferentes ações podem ser tomadas dependendo das circunstâncias.

### EX001:
Aqui, desenvolvemos uma maneira de calcular se o valor adicionado à variável é maior que 60. Se essa condição for verdadeira, a estrutura condicional 'if' exibirá uma mensagem indicando que a multa foi aplicada devido ao excesso de velocidade.

### EX002:
Neste exercício, utilizamos a estrutura 'if' para determinar de qual país você é e, consequentemente, verificar se é brasileiro ou americano. 

### EX003: 
Com base no exemplo 001, desenvolvemos uma página web que solicita que você insira uma velocidade e, em seguida, utiliza a estrutura condicional 'if' para verificar se o limite de velocidade foi ultrapassado ou não. Vale ressaltar que empregamos tags como 'input' para adicionar o campo de texto e para verificar o resultado com um simples clique.

### EX004:
Seguindo a mesma abordagem do exercício anterior, utilizamos como ponto de partida o ex002. Neste contexto, questionamos sobre o país de origem da pessoa. Se a resposta for Brasil ou EUA (considerando apenas essas duas opções), será exibido que a pessoa é brasileira, por exemplo, e em seguida a bandeira do país correspondente será apresentada. 

### EX005:
No exercício 5, analisamos a idade de um indivíduo e determinamos se ele deve votar ou não, seguindo o sistema brasileiro. A abordagem utilizada envolveu a estrutura condicional composta, combinando o uso do if e else.

### EX006: 
No exercício 6, empregamos novamente a estrutura condicional composta. No entanto, é crucial observar um detalhe significativo, uma vez que utilizamos a função 'new Date()' para obter a hora específica no momento da execução do código. O 'new Date()' é uma função em JavaScript que cria uma instância de data, permitindo a manipulação e obtenção de informações sobre datas e horas.

### EX007:
Aqui, analisamos mais uma estrutura de condição, mais especificamente o 'switch'. Esta estrutura é utilizada para lidar com valores mais específicos, como um único valor, ou seja, situações menos complexas. A importância do 'switch' reside no fato de que, em casos mais simples, ela é consideravelmente mais útil do que o if.

## DESAFIO 01:
Aqui é onde colocamos a mão na massa e criamos um site com as funcionalidades aprendidas de javaScript anteriormente...

### EX01:
Nesse exercício criamos um site que verifica a hora local e mostra na tela uma imagem que trás semelhança com o horário determinado. Além do mais, o fundo do site (background) também muda de cor conforme o horario.

### EX02:
Seguindo a mesma estrutura do exerício anterior, criamos um site onde ele verifica idade da pessoa e mostra na tela uma mensagem, seguida de uma foto que represente a idade dela. 

## PASSO 5:
Nossa trajetoria agora se esbarra nas estruturas de repetição ou nos laços...

### EX001:
Nesse exercício, nos deparamos com um laço básico: 'while'. Sua ideia é que adicionemos uma condição e se essa for verdadeira a instrução será realizada até que a condição seja falsa e assim encerrando o laço.

### EX002:
No exercício 2 damos continuidade e observamos a estrtura 'do/while'. Sua diferena para estrutura anterior é que realizamos primeiro a instrução e depois verificamos a condição. 

### EX003:
Nesse terceiro exercício, aprendemos uma estrutura de repetição muito útil e utilizada: 'for'. Esse laço consegue testar três níveis de condição dentro de um parêntese apenas. Ele consegue declarar a variável, colocar uma condição para ela e ainda atribuir um valor.

### EX004:
Análisamos a intrução 'for/in'. Apesar de utilizar a palavra-chave 'for', é um tipo de laço completamente diferente do laço for normal: for (variável in objeto) {instrução};

A variável - deve ser algo apropriado para o lado esquerdo de uma expressão de atribuição; O objeto - é uma expressão avaliada com um 'objeto'

## DESAFIO 02:
Os próximo desafio é criar um site no mesmo modelo do desafio 01, mas utilizando as estruturas de repetição...

### EX001:
Desenvolvemos um site que realiza contagens com base nos dados inseridos. Ou seja, implementamos uma área interativa e outra para realizar os cálculos. O ponto crucial reside no uso da tag 'input', proporcionando ao usuário três opções para seleção (início, fim e intervalo), tornando a experiência mais flexível e adaptável às preferências do usuário.

### EX002:
Seguindo a abordagem semelhante ao exemplo anterior (ex 001), desenvolvemos um site dedicado às tabuadas. Neste exercício, empregamos a estrutura de repetição 'for' para calcular as tabuadas, incorporando uma nuance em HTML. Introduzimos uma nova tag, denominada 'select', que cria um quadro interativo permitindo a seleção de valores por meio da tag 'option'. Esta última é gerada dinamicamente através de JavaScript, proporcionando uma experiência mais fluida e personalizada.

## PASSO 6:
Dando continuidade ao nosso estudo, verificamos agora as intruções de laços...

### BREAK:
A instrução 'break', quando utilizada isoladamente, tem o efeito de interromper imediatamente a execução do laço ou da condição. No exemplo apresentado, observamos o uso de uma rotulação em um bloco 'for', dentro do qual outro bloco 'for' é empregado. Ao utilizar a instrução 'break', conseguimos guiar o programa para sair tanto da instrução externa quanto da instrução interna.

### CONTINUE: 
Semelhante ao 'break', porém, em vez de sair de um laço, 'continue;' reinicia o laço na próxima iteração. Como exemplificado, a importância do 'continue' é evidente; caso não estivesse presente, a execução do console.log dentro da declaração 'if' seria realizada, resultando na exibição da mensagem que identifica o número como ímpar, mesmo que anteriormente tenha sido determinado como par. Desta forma, ele volta para o topo do laço e faz as verificações. 

### RETURN:
A instrução 'return' é restrita ao corpo de uma função, sendo utilizada para especificar o valor a ser retornado quando a função é chamada. No exemplo fornecido, a instrução 'return' é empregada para retornar o resultado da multiplicação da variável 'x'.

### THROW:
Uma exceção é um indicativo de que uma condição excepcional ou erro ocorreu. Em JavaScript, as exceções são acionadas durante erros em tempo de execução ou quando o programa explicitamente emite uma explicação por meio da instrução 'throw'. No exemplo fornecido, a instrução 'throw' é responsável por exibir uma mensagem de erro, como se fosse originada pelo próprio programa. Sem ela, o programa continuaria sua execução, potencialmente realizando cálculos inesperados.



 