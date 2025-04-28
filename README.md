SUMÁRIO

[Dados do Cliente 2](#_heading=h.gjdgxs)

[Equipe de Desenvolvimento 3](#_heading=h.30j0zll)

[1\. Introdução 4](#_heading=h.1fob9te)

[2\. Objetivo 5](#_heading=h.3znysh7)

[3\. Escopo 6](#_heading=h.2et92p0)

[4\. Backlogs do Produto 7](#_heading=h.tyjcwt)

[5\. Cronograma 8](#_heading=h.3dy6vkm)

[6\. Materiais e Métodos 9](#_heading=h.1t3h5sf)

[7\. Resultados 10](#_heading=h.4d34og8)

[8\. Conclusão 11](#_heading=h.2s8eyo1)

[9\. Homologação do MVP junto ao cliente 12](#_heading=h.17dp8vu)

[10\. Divulgação 13](#_heading=h.3rdcrjn)

[11\. Carta de Apresentação 15](#_heading=h.26in1rg)

[12\. Carta de Autorização 16](#_heading=h.lnxbz9)

[13\. Relato individual do processo 18](#_heading=h.35nkun2)

<table><thead><tr><th><h1><a id="_heading=h.gjdgxs"></a>Dados do Cliente</h1></th></tr></thead></table>

Título do Projeto: **MusclesAndDino: Gameficação da reabilitação muscular**

Cliente: Unimetrocamp

CNPJ/CPF: 04.298.309/0004-03

Contato: Jose Alonso 

Email do contato: jose.lsilva@unimetrocamp.edu.br

<table><thead><tr><th><h1><a id="_heading=h.30j0zll"></a><strong>Equipe de Desenvolvimento</strong></h1></th></tr></thead></table>

Elencar, na tabela abaixo, os dados dos integrantes e do professor-orientador.

| **Nome completo** | **Curso** | **Disciplina** |
| --- | --- | --- |
| Keven Kleber | Ciência da Computação | Programação de Software Básico em C |
| Gustavo Anacleto | Ciência da Computação | Programação de Software Básico em C 
| Vitor Dreger | Ciência da Computação | Programação de Software Básico em C |
| Pedro Lemos | Ciência da Computação | Programação de Software Básico em C |
| Thiago Lacerda | Ciência da Computação | Programação de Software Básico em C |

| **Professor Orientador** |
| --- |
| Kesede |

<table><thead><tr><th><h1><a id="_heading=h.1fob9te"></a>Introdução</h1></th></tr></thead></table>

A reabilitação muscular é um processo essencial para a recuperação de pacientes que sofreram lesões ou passaram por procedimentos que comprometeram suas capacidades motoras. No entanto, esse processo muitas vezes pode ser repetitivo, desmotivador e desgastante para os pacientes, o que pode afetar negativamente a adesão ao tratamento e, consequentemente, os resultados obtidos.

Com o objetivo de tornar a reabilitação mais atrativa, envolvente e eficaz, este projeto propõe a gamificação do processo por meio de um jogo interativo. Inspirado no popular jogo do dinossauro do Google Chrome, desenvolvido para funcionar offline, criamos uma experiência lúdica onde as ações do personagem são controladas por estímulos musculares reais captados por sensores ECG conectados a um microcontrolador Arduino.

Através da leitura de sinais eletromiográficos (EMG), o sistema é capaz de detectar contrações musculares específicas e traduzi-las em comandos dentro do jogo, promovendo a movimentação do personagem em resposta às ações do usuário. Essa abordagem busca não apenas melhorar o engajamento do paciente durante a terapia, mas também fornecer um ambiente controlado e monitorável para profissionais da saúde avaliarem o progresso do tratamento.

<table><thead><tr><th><h1><a id="_heading=h.3znysh7"></a>Objetivo</h1></th></tr></thead></table>

O principal objetivo deste projeto é desenvolver uma solução interativa que una tecnologia e entretenimento para auxiliar no processo de reabilitação muscular de forma mais eficiente e motivadora. Por meio da gamificação, busca-se transformar exercícios fisioterapêuticos repetitivos em uma experiência mais atrativa e lúdica para o paciente.

Especificamente, o projeto tem como metas:

Criar um jogo baseado no modelo do dinossauro do Google Chrome, com jogabilidade simples e acessível;

Utilizar sensores ECG conectados a um microcontrolador Arduino para captar sinais musculares e transformá-los em comandos dentro do jogo;

Promover maior engajamento e adesão dos pacientes às sessões de reabilitação;

Fornecer uma ferramenta de baixo custo e fácil implementação que possa ser utilizada por profissionais da saúde em ambientes clínicos ou domiciliares.

Ao alcançar esses objetivos, o projeto pretende contribuir com novas abordagens terapêuticas que combinem tecnologia e saúde, incentivando a recuperação ativa e divertida dos pacientes.

<table><thead><tr><th><h1><a id="_heading=h.tyjcwt"></a>Backlogs do Produto</h1></th></tr></thead></table>
Requisitos funcionais: 
  - O jogo deve ser similar ao jogo do dinossauro do google, porém sem a ação de agachar.
  - O usuário conseguirá pular somente usando a contração muscular.
Requisitos não funcionais: 
  - O jogo deve ser feito com JavaScript, Html e Css puro.
  - Ao ocorrer o estimulo muscular o sensor deve captar a informação, e enviar para o arduino.
  - O ardunino deverá simular a pressão da barra de espaço, fazendo com que o usuário jogue o jogo.

<table><thead><tr><th><h1><a id="_heading=h.3dy6vkm"></a>Cronograma</h1></th></tr></thead></table>

![Captura de tela de 2025-04-08 20-23-15](https://github.com/user-attachments/assets/ce2f6541-4f5c-472b-99a0-0de81bd2e01a)


<table><thead><tr><th><h1><a id="_heading=h.1t3h5sf"></a>Materiais e Métodos</h1></th></tr></thead></table>

- 1. **Modelagem do sistema**:
     
     ![Captura de tela de 2025-04-28 20-04-34](https://github.com/user-attachments/assets/d6e88c00-3090-4eea-b225-228797c8cad0)

   3. **Tecnologias utilizadas**: Para desenvolver o jogo utilizamos HTML, CSS e JavaScript, para captar os estimulos musculares, um sensor ECG, como meio de integração com sensor o Arduino Mega e para o código, C++;
  4. **Arquitetura do sistema**:
     

<table><thead><tr><th><h1><a id="_heading=h.4d34og8"></a>Resultados</h1></th></tr></thead></table>

- 1. **Protótipo**:
     ![Captura de tela 2025-04-28 192808](https://github.com/user-attachments/assets/9102e8f6-7a89-451b-a1aa-e1f8a246e626)
     Imagem referente ao jogo Dino, responsável por interligar o game com o processo de reabilitação muscular. O usuário através do movimento da fisioterapia conseguiria pular os obstaculos com o dinossauro.
  2. **Códigos das principais funcionalidades**:

      const character = document.getElementById('character');
      const scoreEl = document.getElementById('score');
      const timerEl = document.getElementById('timer');
      const somPonto = document.getElementById('somPonto');
      const game = document.getElementById('game');
      
      let isJumping = false;
      let score = 0;
      let time = 0;
      let timerInterval;
      let obstacles = [];
      
      function jump() {
        if (isJumping) return;
        isJumping = true;
        let jumpHeight = 150;
        let upInterval = setInterval(() => {
          let bottom = parseInt(window.getComputedStyle(character).bottom);
          if (bottom >= jumpHeight + 40) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
              bottom = parseInt(window.getComputedStyle(character).bottom);
              if (bottom <= 40) {
                character.style.bottom = '30px';
                clearInterval(downInterval);
                isJumping = false;
              } else {
                character.style.bottom = bottom - 5 + 'px';
              }
            }, 20);
          } else {
            character.style.bottom = bottom + 5 + 'px';
          }
        }, 20);
      }
      
      function startGame() {
        score = 0;
        time = 0;
        scoreEl.textContent = 'Score: 0';
        timerEl.textContent = 'Tempo: 0s';
        obstacles.forEach(obs => obs.remove());
        obstacles = [];
      
        timerInterval = setInterval(() => {
          time++;
          timerEl.textContent = `Tempo: ${time}s`;
        }, 1000);
      
        spawnObstacle();
      }
      
      function spawnObstacle() {
        const obstacle = document.createElement('div');
        obstacle.classList.add('obstacle');
        obstacle.style.right = '-60px';
        game.appendChild(obstacle);
        obstacles.push(obstacle);
        moveObstacle(obstacle);
      
        setTimeout(spawnObstacle, Math.random() * 3000 + 1000);
      }
      
      function moveObstacle(obstacle) {
        let hasScored = false;
        let moveInterval = setInterval(() => {
          let obstacleRight = parseInt(window.getComputedStyle(obstacle).right);
          if (obstacleRight >= window.innerWidth + 60) {
            obstacle.remove();
            obstacles = obstacles.filter(obs => obs !== obstacle);
            clearInterval(moveInterval);
          } else {
            obstacle.style.right = obstacleRight + 10 + 'px';
          }
      
          const characterRect = character.getBoundingClientRect();
          const obstacleRect = obstacle.getBoundingClientRect();
      
          if (
            characterRect.right > obstacleRect.left &&
            characterRect.left < obstacleRect.right &&
            characterRect.bottom > obstacleRect.top
          ) {
            gameOver();
            clearInterval(moveInterval);
          }
      
          if (!hasScored && obstacleRect.right < characterRect.left) {
            score++;
            scoreEl.textContent = `Score: ${score}`;
            somPonto.play();
            hasScored = true;
          }
        }, 30);
      }
      
      function gameOver() {
        clearInterval(timerInterval);
        alert(`Game Over!\nVocê marcou ${score} ponto(s) em ${time} segundo(s).`);
        location.reload();
      }
      
      document.addEventListener('keydown', function (e) {
        if (e.code === 'Space' || e.code === 'ArrowUp') {
          jump();
        }
      });
      
      // Adiciona suporte para clique e toque na tela (mobile)
      document.addEventListener('click', jump);
      document.addEventListener('touchstart', jump);
      
      
      startGame();

<table><thead><tr><th><h1><a id="_heading=h.2s8eyo1"></a>Conclusão</h1></th></tr></thead></table>

- 1. **Impacto do sistema:** Tornou o processo de reabilitação muscular mais lúdico e inovador ao cliente, gamificando a fisioterapia.
  2. **Melhorias Futuras**: Podemos melhorar o sensor responsável pela captação dos estímulos musculares. Além disso, criar novos jogos, com uma gama de opções para o paciente escolher.

<table><thead><tr><th><h1><a id="_heading=h.17dp8vu"></a>Homologação do MVP junto ao cliente</h1></th></tr></thead></table>

Após as entregas parciais, realizadas de acordo com os requisitos do sistema e cronograma, o MVP foi apresentado em uma reunião, realizada entre o time de desenvolvedores e o cliente.

&lt;Dica: inserir uma foto da homologação em cada linha do quadro abaixo. Serão 4 fotos (tiradas no momento da homologação) e, na linha debaixo, uma legenda para cada uma delas. A homologação, preferencialmente, deve ser presencial. Se não for viável, pode ser feita por videoconferência com prints da tela.&gt;

| &lt;foto 1: foto do time e cliente com o primeiro slide de fundo&gt; | &lt;foto 2: foto de um integrante apresentando o MVP.&gt; |
| --- | --- |
| Da esquerda para direita: &lt;legenda 1: descreva quem está na foto&gt; | &lt;legenda 2: coloque o nome de quem está apresentando&gt; |
| --- | --- |
| &lt;foto 3: foto dos participantes assistindo a homologação&gt; | &lt;foto 4: foto do plano geral do local&gt; |
| --- | --- |
| Participantes da homologação assistindo a apresentação | Participantes da homologação |
| --- | --- |

Segue abaixo a lista de presentes na homologação do MVP.

| **Lista de presentes na Homologação** |
| --- |
| &lt;Cole aqui a foto da lista de presentes na homologação.&gt; |
| --- |

Ao final da apresentação, o sistema foi homologado pelo cliente.

<table><thead><tr><th><h1><a id="_heading=h.3rdcrjn"></a>Divulgação</h1></th></tr></thead></table>

- 1. **Linkedin do Projeto**
  2. 
![Captura de tela 2025-04-14 194719](https://github.com/user-attachments/assets/5f588be9-4fda-46f1-a388-67829f5800b1)
| https://www.linkedin.com/in/dino-muscles-ab83b0360/ |

- 1. **Seminário de Projetos de Software**

**Vídeo da apresentação:** &lt;Grave sua apresentação, poste no Linkedin do projeto e insira aqui o link público (acesso sem login) do vídeo da apresentação&gt;

&lt;Na tabela abaixo, inserir uma foto da apresentação em cada linha. Serão 4 fotos (tiradas no momento da apresentação). Para cada foto, descreva uma legenda na linha de baixo.&gt;

| &lt;foto 1: foto do time com o primeiro slide de fundo&gt; | &lt;foto 2: foto de um integrante apresentando o sistema.&gt; |
| --- | --- |
| Da esquerda para direita: &lt;legenda 1: descreva quem está na foto&gt; | &lt;legenda 2: coloque o nome de quem está apresentando&gt; |
| --- | --- |
| &lt;foto 3: foto plano geral da apresentação de frente para o fundo da sala&gt; | &lt;foto 4: foto plano geral da apresentação do fundo para a frente da sala&gt; |
| --- | --- |
| Participantes do evento assistindo a apresentação | Participantes do evento assistindo a apresentação |
| --- | --- |

Segue abaixo a lista de presentes na apresentação.

| **Lista de presentes na Apresentação** |
| --- |
| &lt;Faça uma lista de presença numa folha A4, contendo no alto da folha “Seminários de Projetos de Software”. A lista deve conter ra, nome e assinatura dos presentes. Cole aqui a foto desta lista.&gt; |
| --- |

- 1. **FENETEC: Feira de Negócios em Tecnologia**

**Apresentação do projeto:** &lt;Um vídeo deve ser produzido mostrando o time apresentando seu projeto para algum visitante. Importante que neste video tenha uma tomada do banner e dos integrantes. Insira aqui o link público deste vídeo.&gt;

&lt;Na tabela abaixo, inserir uma foto da apresentação em cada linha. Serão 4 fotos (tiradas do evento). Para cada foto, descreva uma legenda na linha de baixo.&gt;

| &lt;foto 1: foto do time ao lado do poster&gt; | &lt;foto 2: foto de um integrante apresentando o sistema.&gt; |
| --- | --- |
| Da esquerda para direita: &lt;legenda 1: descreva quem está na foto&gt; | &lt;legenda 2: coloque o nome de quem está apresentando&gt; |
| --- | --- |
| &lt;foto 3: foto do público assistindo sua apresentação&gt; | &lt;foto 4: foto plano geral da FENETEC&gt; |
| --- | --- |
| Participantes do evento assistindo a apresentação | Estandes da FENETEC |
| --- | --- |

Segue abaixo a lista de presentes na FENETEC.

| **Lista de presentes na Apresentação** |
| --- |
| &lt;cole aqui a lista de presença dos visitantes da FENETEC com nome e email do visitante . Os próprios times farão um form contendo no cabeçalho: Lista de Visitantes FENETEC. Compartilhe a planilha gerada pelo form com todos os times.&gt; |
| --- |

<table><thead><tr><th><h1><a id="_heading=h.26in1rg"></a>Carta de Apresentação</h1></th></tr></thead></table>

Vimos por desta apresentar o grupo de acadêmicos do Centro Universitário Unimetrocamp, localizada à Rua Sales de Oliveira, 1661 - Campinas - SP, a fim de convidá-lo a participar de uma atividade extensionista associada ao componente curricular &lt;inserir o nome da disciplina&gt;, sob responsabilidade do orientador Prof. Kesede Rodrigues Julio (<profkesede64@gmail.com>).

Em consonância ao Plano Nacional de Educação vigente, o Centro Universitário Unimetrocamp promove o Desenvolvimento de Software que, norteados pela metodologia de Gerenciamento Ágil Scrum, tem por princípios fundantes o diagnóstico dos problemas/demandas/necessidades, a participação ativa dos interessados/públicos participantes, a construção dialógica, coletiva e experiencial de conhecimentos, o planejamento de ações, o desenvolvimento e avaliação das ações, a sistematização dos conhecimentos, a avaliação das ações desenvolvidas.

Nesse contexto, a disciplina acima mencionada tem como principal escopo os temas relacionados à Programação Orientada à Objeto / Padrões de Projetos de Software, no que diz respeito ao desenvolvimento de um software utilizando Programação Orientada à Objeto.

Sendo assim, pedimos o apoio de &lt;nome do cliente&gt; para a realização das seguintes atividades: levantamento de requisitos, validação das entregas parciais, revalidação dos requisitos, homologação do MVP, ou qualquer outra intervenção que auxilie no desenvolvimento das competências de nossos acadêmicos e ao mesmo tempo possa contribuir para a comunidade em que estamos inseridos.

Aproveitamos a oportunidade para solicitarmos, em caso de aceite, que a parceria seja formalizada, mediante assinatura da Carta de Autorização, as atividades e informações que o(s) aluno(s) poderá(ão) ter acesso.

Em tempo, registramos ainda, o convite para a participação de todos os interessados no fórum semestral de acompanhamento e avaliação das atividades realizadas, que está previsto para o final deste semestre, e será comunicado previamente em convite específico.

Desde já nos colocamos à sua disposição para quaisquer esclarecimentos.

Atenciosamente,

Campinas, \____ de \_**\_**\___ de 202_\__.![](data:image/jpeg;base64,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)

\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**

**Assinatura Direção Acadêmica da IES**

![](data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAWVBDgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiq11dwWNrLdXUyQwQqXkkkbCqo6kmgCzUe9Q4QsNxGQM8183fET4432p3L6d4UuJbKwUkPeqNss3+73Rf/AB76dK8ik1G9lvft0l5cPd7twuGlYybvXdnOaAPvKiuI+FPiC98S/D7T77UWaS7UvC8rdZdrYDfXGM+4NdvQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFF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UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUVk6/4g07wzo8+qapcCG2iH1LN2VR3Y+lABr/AIg07wzo8+qapcCG2iH1LN2VR3Y+lfJfj/4h6r461RnnkMOnRMfs9mrfKg9W/vN7/lUfj7x9qXjzWTcXBMNjESLW0DfLGvqfVj3P9K5rT9Pu9VvobGxgee6mcJHEgyWNAEMUUk8qRRozyOwVVUZLE9ABXvPw2+Bn+p1fxfF6PFph/Qy//E/n3Fdp8NfhTYeDLWK+v0S71xxlpuq2+eqx/wAi3U+wr0ygCGKJIYkijRUjRQqqowFA6AD0qaiigAooooA8s+PHiBdJ+H0lgjD7RqcqwKM8hFO52/QL/wACr5Tr1T48eIv7Z8etYRPuttKiEIwcgyN8zn/0Ff8AgNcJ4W0OXxJ4q0zRos5u51RiP4U6s34KCfwoA+pvg1pUmlfDDSlmXbJch7oj2diV/wDHdpr0CoIIIra3it4UCRRIERR0VQMAVPQAUUVT1HULXStPnv72ZYbWBC8sjdFUUAZPi7xXp3g3w9PquovwnyxQqcNNJ2Rf8ew5r4+8UeJdQ8Wa7Pq2pS7ppeEQH5Yk7Io7Af4nvWv8RvHV1468RNdPujsIMpZwZ+4mfvH/AGm6n8B2rjKACiiuivvC9zo+jw3+s/6JJdJutLRxiaVf+ehX+BPc8t2HUgA52iirFraz313Da20bSzzOsccajJZicACgDqfh14Ln8ceKIbBQyWcWJbuYfwRg9B/tHoPrntX2LaWsFhaQ2lrGsVvAixxxqMBVAwAK5T4beCIfA3haOzKq1/PiW9l/vPj7oP8AdXoPxPeu0oAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiisvW9b0/w7pM+p6pcLBaQLlmPUnsoHcnsKADW9b0/w7pM+p6pcLBaQLlmPUnsoHcnsK+SfiH8QL7x3rfnSBoNPgytpa7vuj+83qx7/AJU74h/EPUPHur73LQabAx+y2m7hf9pvVj+nQe/J2FjdapfwWNlC811O4jiiQcsT2oAXT9Pu9VvobGxgee6mcJHEgyWNfVvwx+GFp4HsBdXQSfW5lxNMOREP7ie3qe9Hwx+GFp4HsBdXQSfW5lxNMOREP7ie3qe9ejUAFFFFABRRRQAVk+Idat/Dvh6/1e6IEVpC0hBP3j/Cv1JwPxrWr50/aA8Z/a76HwnZy/urYia8IP3pCPkT8Acn3YelAHil7dT6hfXF7cuXnuJWlkY/xMxyT+Zr2j9nTw6bjWdR8RTJ8lrH9mgJH/LRuWI+igD/AIHXikMMlxKkUSM8jsFRVGSzHoBX2Z8O/Cq+DvBdjpTbTcgGW5Yd5W5b8uFz6KKAOtooooAK+aPjt49bVdWPhjTps2Nk+bplPEs3936L/wChZ9BX0jPNFbxGSeZIUHV3YKB+Jr4V1WKeDVbuG5lEs6TOJJAwYO2eWBHBz1zQBQrU0bRNR8Q6nFp2l2klzcyfdVB0Hck9h7mqUAiaZBO7pHn5mRdzAewyM/nXq2gfFzR/BOlGx8MeFVErgGW9vLnMkzD+8FXp6ANgfnQB0yeFPDPwa8Pxa5rwh1XxE4ItICP3Yk/2Qey8Zc/gATz4jr2t3/iPWLjVNSnM11cNuYnoo7Ko7KOgFWPFHijUvF2tSapqcoaRhtSNMhIlHRVHYVhUAFe0fBbTPDukyv4q8R6vptrMmY7C3uLlFcdml2k574H4n0NeL0UAfYN58ZfAVmSra+krekMEj5/ELj9a5+9/aH8Iw5W3tdVuW7FYUVf/AB5s/pXy9RQB9BXP7S0QJFr4Xdh2aW92/oEP86ybn9pDXHz9l0PTouuPNd3+nQrXiyKzsFVSzHgADk1o2/h7WrvBttIv5sjP7u2dv5CgD0O4/aC8aTH5E0uAZz+7tmPb/aY1lXHxr8fXCkf24IlPBEdrCP125rGg+HPjS5+54X1Uf9dLVo//AEICta2+DXj65xt8Pui+stxEmPwLZoAzp/id42uDl/EuoDkn93Ls6/7uKi/4WR40/wCho1X/AMCWrqYPgD43mGXi0+DjOJLrP/oINTf8M9eNP+eulf8AgQ3/AMRQBxcvj7xhI5Y+Ktaz/s30ij8g1EXj7xhG2R4q1on/AGr6Rh+rV3Mf7OvjB1y17o0fs08mf0jNEv7O3jBBlbzRpDn7q3Emf1jFAHIxfFDxvCAF8S35wc/PJu/nXTaD8e/F2lygak8GrW+eVmQRuB7MgH6g1HL8A/G8ZbZDYS4HGy5A3cdsgVwOs6LqHh/VJtO1S1e1u4sb4mIOMjI5HB/CgD658BfEPTPHunyzWaSW91bkC4tZSCUz0II+8vXnjp0FdnXyZ8Cr64tPinYwQk+VdwzRTAdCojLj/wAeRa+s6ACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiqGp6nZ6Pp8+oahcJBawLukkc8Af4+3egBmsaxY6FpU+palcJBawLud3P6Adyew718k/EP4hah481cu5aDTYGP2W0zwo/vN6sf06D3n+JXxHu/HerlYy8Gj25xbWxPU/33/2j+g49SeKtbWe9uorW1heaeVwkcca5Z2PQAUAFlZXOo3sNnZwvPczMEjijXLMx7AV9U/C34XW3gqzW/v1SfXZk+dwMrbqf4E9/Vu/06nwt+F1t4Ks1v79Un12ZPncDK26n+BPf1bv9OvptABRRRQAUUVm6lrml6LD5uqajaWSYyDcTKmfpk80AaVFeY6v8d/BWmZW3ubnUpBxi0gOM/7z7R+Wa4fVP2kro7k0jw/Cn92S7nL/AJquP/QqAPYvG3ii38IeE73WZtpeJdsEZP8ArJT91fz6+wNfF17e3Go3s95dytLcTyNLLI3VmY5JrpfF/wAQtf8AG6wx6xcRfZ4HLxwwR7EDEYz6k/U8ZPrXIUAeh/CeXw1pniM674m1GG2g0/DW0LIztJMejbVBOF6/Xb6V6zqv7RXhq13LpthqF846MwWFD+JJP/jtfMdFAHs2q/tF+IrgsmmaZYWSHoZN0zj8flH/AI7XFaj8UvG2qE+f4kvUH923YQD/AMhhaw9M8Paz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oo6AAdBViiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK8T+M/xRudCf8A4RvQbjyr50zd3Kn5oVI4VT2YjnPYYxyeO9+IPjODwP4Wn1FwHun/AHVnCT9+Qjj/AICOp+mO4r45vLy41G9mvLuZ5ridzJLI5yWYnJJoAgLFmJJJJ5JNeg/Dn4Wal45uluZQ1no8bYluSvMnqsfqffoPfpVz4Q/DhfG2qSX2qLINGs2Cvt+Xz5OD5efTHLY55HrkfU1raQWNrFa2sKQwQqEjjjXCqo6ACgCnomhad4b0uHTdJtkt7aIcKo5Y92Y92Pqa1aKKACiiigAooooAKKq3t9a6bZyXd7cRW9tEN0ksrBVUe5NeF+Ofj+F8yw8IJk8q2ozpx/2zQ/zb8u9AHrPizxxoPgyz+0avdhHYZit0+aWX/dX+pwPevnPxz8Zdd8WGSzs2bTNKbI8mJ/3ko/23/wDZRgeua89v9Qu9UvJLy/upbm4lOXlmcszfial0nR9R1y/jsdLs5bu5k+7HEuT9T6D3PFAGdXf+APhdrHjq4WfabPSUb95dun3vURj+I/oP0r07wN8A7Wy8q/8AFcgu7n7y2MX+qT/fb+I+w4/3hXtVvbw2sCW9vDHDDGoVI41Cqo9AB0oAyfDPhXSPCWlrp+j2ogi6u55eVv7zt3P6emK3qKKACiiigAooooAKKKKACiiigDH1/wAOaT4m01rHWLKO6tydwV8hlb1Vhyp+lZfhf4d+GfB80lxpGn7bhxtM8rmRwPQE9B9K6yigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD5f/AGhtTe68eWtirkxWVkvyZ4DuxYn8Rs/KvNNA0ifX9esdJtmCy3kywqzdFyep+nWuq+MxmPxX1vzs53Rbc/3fKTGKo/DDVbLRPiNo1/qBxbJMUZicBC6lAx9gWB/CgD658O6FZ+GtBtNHsE2W9sm0E9XPdj7k5Na1FFABRRRQAUVzXiHx14b8LITrGr28EuMiBW3yn/gC5P49K8j8SftGE74vDek7R0FzfHn8EU/zb8KAPfXdIkZ5GCqoyWY4AFea+MvjV4b8ORPFp86avf8ARYrZ8xofVpBx+AyfpXzf4g8a+I/E7k6xq1xcx5yIS22Jfoi4X9K56gDp/FnjvXvGd35urXpaFWzFaxDbFH9F9fc5PvXM9a6nwl4B1/xrdCPS7Q/Z1bEl1L8sMf1bufYZNfSHgb4RaD4OEd1Ig1DVRz9qmTiM/wDTNf4fryfegDx/wN8D9a8R+Xfa3v0rTmwwVl/fyD2U/d+rfka+ifDnhTRvCeniz0eyjt043vjMkh9Wbqa3KKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDxP4/eChqOkReKLKPNzYgR3QUctCTw3/AAEn8ifSvmyvve4t4rq2lt541khlUpIjjKspGCCO4xXiHin9na3nkkufDOo/ZyTkWl3lkHsrjkD6g/WgDzjw18YvF3hsJEL4X9ooA8i+BkwPZvvD88e1dtcftKXhiAt/DVvHJjlpLtnGfoFH868w8R+AvEvhZidW0ieKEf8ALwg8yL/vtcgfQ81z9vaXN2+y2t5Zm9I0LH9KAPVLv9obxfPxBa6VbDsUhdj/AOPOR+lc1qvxZ8b6xbvb3OvTRwtyUtkSH8NyANj2zWXaeA/Ft+w+zeGtVYHozWjqv5kAVv2fwV8e3jKf7EECH+Oe5jXH4bt36UAcCztI5dmLMxySTkk06GGS4mWKGNpJHOFRFySfYV7/AOG/2dLeMrL4l1VpW6m2sRtX8XYZI+ij6165oPg/w/4YiC6NpNtatjaZVXdIw93OWP50AfM/hz4J+MNe2S3Fmul2rf8ALS9O18e0Y+bP1Ar1/wAN/AXwtpASXVDNq9yOf337uLPsin+ZNer0UAVrS0trC1jtrS3jt7eMbUiiQKqj0AHSrNFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFADSAQQRkHtTY40iQJGgRR0CjAFSUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/9k=)

\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**

**Assinatura Docente**

<table><thead><tr><th><h1><a id="_heading=h.lnxbz9"></a>Carta de Autorização</h1></th></tr></thead></table>

Eu, (preencher com nome do responsável), (preencher com cargo ocupado), da (nome da empresa, organização, associação, escola, secretaria, etc., situada no endereço – inserir o endereço), autorizo a realização das seguintes atividades acadêmicas do componente extensionista &lt;código e nome da disciplina&gt;, do Centro Universitário Unimetrocamp, sob orientação do Prof. Kesede Rodrigues Julio.

| **Atividades:** |
| --- |
|     |
| --- |
|     |
| --- |
|     |
| --- |
|     |
| --- |

Conforme combinado em contato prévio, as atividades acima descritas são autorizadas para os seguintes alunos:

| **Nome dos/das alunos/as** | **Curso** | **Matrícula** |
| --- | --- | --- |
|     |     |     |
| --- | --- | --- |
|     |     |     |
| --- | --- | --- |
|     |     |     |
| --- | --- | --- |
|     |     |     |
| --- | --- | --- |
|     |     |     |
| --- | --- | --- |

Declaro que fui informado por meio da **Carta de Apresentação** sobre as características e objetivos das atividades que serão realizadas na organização/instituição/empresa a qual represento e afirmo estar ciente de tratar-se de uma atividade realizada com intuito **exclusivo de ensino de alunos de graduação**, sem a finalidade de exercício profissional.

Desta forma, autorizo, em caráter de confidencialidade:

- o acesso a informações e dados que forem necessários à execução da atividade;
- o registro de imagem por meio de fotografias;
- outro: (especificar)

Campinas, \___de \_**\_**\___\__de 202_.

\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**\_**_

(Assinatura, nome completo do responsável, email de contato e com carimbo da empresa)

<table><thead><tr><th><h1><a id="_heading=h.35nkun2"></a>Relato individual do processo</h1></th></tr></thead></table>

| &lt;nome do aluno&gt; |
| --- |
| &lt;um breve relato pessoal sobre o trabalho extensionista desenvolvido&gt; |
| --- |

| &lt;nome do aluno&gt; |
| --- |
| &lt;um breve relato pessoal sobre o trabalho extensionista desenvolvido&gt; |
| --- |

| &lt;nome do aluno&gt; |
| --- |
| &lt;um breve relato pessoal sobre o trabalho extensionista desenvolvido&gt; |
| --- |

| &lt;nome do aluno&gt; |
| --- |
| &lt;um breve relato pessoal sobre o trabalho extensionista desenvolvido&gt; |
| --- |

| &lt;nome do aluno&gt; |
| --- |
| &lt;um breve relato pessoal sobre o trabalho extensionista desenvolvido&gt; |
| --- |
