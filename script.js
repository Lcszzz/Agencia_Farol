gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText); // Registra os plugins do GSAP no início para evitar erros de inicialização

document.getElementById('form-diagnostico').addEventListener('submit', function (e) { // Adiciona um ouvinte para interceptar o envio (submit) do formulário
    e.preventDefault(); // Previne o comportamento padrão do navegador de recarregar a página ao enviar o formulário
    this.style.display = 'none'; // Oculta o formulário original modificando o display do próprio formulário atual para 'none'
    document.getElementById('confirmacao').style.display = 'block'; // Exibe o painel de confirmação de sucesso mudando o display para 'block'
});



gsap.from(".brand", {
    y: 50,
    opacity: 0,
    duration: 2.2,
    delay: 0.5,
    ease: "power.out",
});

let smoother = ScrollSmoother.create({ // Cria o ScrollSmoother antes de definir os ScrollTriggers
    smooth: 2, // Tempo em segundos para alcançar a posição de rolagem original/nativa
    effects: true, // Ativa a verificação de atributos data-speed e data-lag nos elementos
    smoothTouch: 0.1, // Tempo de suavização de rolagem em dispositivos de toque (0.1 segundos)
    wrapper: "#smooth-wrapper", // Seletor do elemento container externo de embrulho
    content: "#smooth-content", // Seletor do elemento interno que contém o conteúdo
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => { // Seleciona todos os links de ancoragem interna que iniciam com '#'
    anchor.addEventListener("click", function (e) { // Adiciona um ouvinte de evento para escutar cliques nos links âncora
        e.preventDefault(); // Previne a navegação âncora padrão e instantânea do navegador
        let targetId = this.getAttribute("href"); // Obtém o valor do atributo href correspondente ao ID do elemento alvo
        smoother.scrollTo(targetId, true, "top 80px"); // Rola suavemente até o elemento usando ScrollSmoother com compensação para o cabeçalho fixo
    });
});

