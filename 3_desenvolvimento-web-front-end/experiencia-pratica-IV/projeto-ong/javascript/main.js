// Espera o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SELECIONA OS ELEMENTOS
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // 2. FUNÇÃO PRINCIPAL: APLICA O TEMA
    // (Esta é a função que faz o trabalho de verdade)
    function setTheme(theme) {
        if (theme === 'dark') {
            // 1. Adiciona o atributo data-theme="dark" no <body>
            body.setAttribute('data-theme', 'dark');
            // 2. Salva a escolha no 'banco de dados' do navegador
            localStorage.setItem('theme', 'dark');
            // 3. Muda o ícone do botão para LUA (com acessibilidade)
            if (themeToggle) {
                themeToggle.innerHTML = '<span aria-hidden="true">🌙</span>';
                themeToggle.setAttribute('aria-label', 'Mudar para tema claro');
            }
        } else {
            // 1. Remove o atributo data-theme do <body>
            body.removeAttribute('data-theme');
            // 2. Salva a escolha (light)
            localStorage.setItem('theme', 'light');
            // 3. Muda o ícone do botão para SOL (com acessibilidade)
            if (themeToggle) {
                themeToggle.innerHTML = '<span aria-hidden="true">☀️</span>';
                themeToggle.setAttribute('aria-label', 'Mudar para tema escuro');
            }
        }
    }

    // 3. FUNÇÃO DE "TOGGLE": ALTERNA O TEMA
    // (Esta função é chamada quando o botão é CLICADO)
    function toggleTheme() {
        // Verifica qual é o tema atual salvo
        const currentTheme = localStorage.getItem('theme');
        
        // Se for 'light' (ou nulo), muda para 'dark'. Senão, muda para 'light'.
        const newTheme = (currentTheme === 'light' || !currentTheme) ? 'dark' : 'light';
        
        // Chama a função principal para aplicar o novo tema
        setTheme(newTheme);
    }

    // 4. FUNÇÃO DE "STARTUP": CARREGA O TEMA
    // (Esta função é chamada UMA VEZ quando a página carrega)
    function loadTheme() {
        // 1. Verifica se o usuário JÁ escolheu um tema antes
        const savedTheme = localStorage.getItem('theme');
        
        // 2. Se não escolheu, verifica se o SISTEMA OPERACIONAL prefere dark mode
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme) {
            // Se tem um tema salvo, aplica esse tema
            setTheme(savedTheme);
        } else if (prefersDark) {
            // Se não tem salvo, mas o OS prefere escuro, aplica o escuro
            setTheme('dark');
        } else {
            // Se não for nenhum dos acima, aplica o claro (padrão)
            setTheme('light');
        }
    }

    // 5. "LIGA OS FIOS"
    // Conecta o botão de tema ao evento de 'clique'
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Carrega o tema salvo assim que a página é aberta
    loadTheme();
});