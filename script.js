<!-- Início do bloco de script JavaScript integrado -->
        document.getElementById('form-diagnostico').addEventListener('submit', function (e) { // Adiciona um ouvinte para interceptar o envio (submit) do formulário
            e.preventDefault(); // Previne o comportamento padrão do navegador de recarregar a página ao enviar o formulário
            this.style.display = 'none'; // Oculta o formulário original modificando o display do próprio formulário atual para 'none'
            document.getElementById('confirmacao').style.display = 'block'; // Exibe o painel de confirmação de sucesso mudando o display para 'block'
        });
