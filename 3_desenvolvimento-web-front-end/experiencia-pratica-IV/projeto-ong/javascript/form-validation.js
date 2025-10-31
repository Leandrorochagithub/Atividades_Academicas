// Espera o DOM carregar antes de executar
document.addEventListener('DOMContentLoaded', () => {

    // 1. SELECIONAR OS ELEMENTOS
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const cpfInput = document.getElementById('cpf');
    const telefoneInput = document.getElementById('telefone');
    const datanascimento = document.getElementById('nascimento');
    const cepInput = document.getElementById('cep');
    const enderecoInput = document.getElementById('endereco');
    const cidadeInput = document.getElementById('cidade');
    const estadoInput = document.getElementById('estado');

    // 2. ADICIONAR "OUVINTES DE EVENTOS"
    // 'input' para feedback instantâneo (enquanto digita)
    if (nomeInput) {
        nomeInput.addEventListener('input', () => {
            validateField(nomeInput, isNomeValido);
        });
    }

    if (emailInput) {
        emailInput.addEventListener('input', () => {
            validateField(emailInput, isEmailValido);
        });
    }

        if (cpfInput) {
        emailInput.addEventListener('input', () => {
            validateField(cpfInput, isCpfValido);
        });
    }

    if (telefoneInput) {
        telefoneInput.addEventListener('input', () => {
            validateField(telefoneInput, isTelefoneValido);
        });
    }

    if (datanascimento) {
        datanascimento.addEventListener('input', () => {
            validateField(datanascimento, isDataNascimentoValida);
        });
    }

    if (cepInput) {
        cepInput.addEventListener('input', () => {
            validateField(cepInput, isCepValido);
        });
    }

    if (enderecoInput) {
        enderecoInput.addEventListener('input', () => {
            validateField(enderecoInput, isEnderecoValido);
        });
    }

    if (cidadeInput) {
        cidadeInput.addEventListener('input', () => {
            validateField(cidadeInput, isCidadeValida);
        });
    }

    if (estadoInput) {
        estadoInput.addEventListener('input', () => {
            validateField(estadoInput, isEstadoValido);
        });
    }

    // 3. FUNÇÃO DE VALIDAÇÃO GENÉRICA
    // (Recebe o campo e a regra de validação)
    function validateField(inputElement, validationRule) {
        const value = inputElement.value;
        const formGroup = inputElement.parentElement; // O <div class="form-group">
        const errorMessageElement = formGroup.querySelector('.error-message');

        // 4. A LÓGICA
        const [isValid, message] = validationRule(value);

        if (isValid) {
            // Se for válido: remove o erro
            formGroup.classList.remove('error');
            errorMessageElement.textContent = '';
        } else {
            // Se for inválido: adiciona o erro
            formGroup.classList.add('error');
            errorMessageElement.textContent = message;
        }
    }

    // 5. REGRAS DE VALIDAÇÃO ESPECÍFICAS
    
    /**
     * Regra para o Nome
     * Retorna [boolean, string] -> [éValido, mensagemDeErro]
     */
    function isNomeValido(value) {
        if (value.trim().length === 0) {
            return [false, 'O campo nome não pode estar vazio.'];
        }
        if (value.trim().length < 3) {
            return [false, 'O nome deve ter pelo menos 3 caracteres.'];
        }
        return [true, '']; // Tudo certo!
    }

    /**
     * Regra para o Email */
    function isEmailValido(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (value.trim().length === 0) {
            return [false, 'O campo e-mail não pode estar vazio.'];
        }
        if (!emailRegex.test(value)) {
            return [false, 'Por favor, insira um e-mail válido (ex: seu.email@provedor.com).'];
        }
        return [true, '']; // Tudo certo!
    }

    /**
        * Regra para o CPF */
        function isCpfValido(value) {
            const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
            if (value.trim().length === 0) {
                return [false, 'O campo CPF não pode estar vazio.'];
            }
            if (!cpfRegex.test(value)) {
                return [false, 'Por favor, insira um CPF válido (ex: 000.000.000-00).'];
            }
            return [true, '']; // Tudo certo!
        }

    /**
     * Regra para o Telefone */
    function isTelefoneValido(value) {
        const telefoneRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;
        
        if (value.trim().length === 0) {
            return [false, 'O campo telefone não pode estar vazio.'];
        }
        if (!telefoneRegex.test(value)) {
            return [false, 'Por favor, insira um telefone válido (ex: (00) 00000-0000).'];
        }
        return [true, '']; // Tudo certo!
    }

    /**
     * Regra para a Data de Nascimento */
    function isDataNascimentoValida(value) {
        if (value.trim().length === 0) {
            return [false, 'O campo data de nascimento não pode estar vazio.'];
        }
        // Verifica se a data é válida
        const date = new Date(value);
        if (isNaN(date.getTime())) {
            return [false, 'Por favor, insira uma data de nascimento válida.'];
        }
        return [true, '']; // Tudo certo!
    }

    /**
     * Regra para o CEP */
    function isCepValido(value) {
        const cepRegex = /^\d{5}-\d{3}$/;
        
        if (value.trim().length === 0) {
            return [false, 'O campo CEP não pode estar vazio.'];
        }
        if (!cepRegex.test(value)) {
            return [false, 'Por favor, insira um CEP válido (ex: 00000-000).'];
        }
        return [true, '']; // Tudo certo!
    }

    /**
     * Regra para o Endereço */
    function isEnderecoValido(value) {
        if (value.trim().length === 0) {
            return [false, 'O campo endereço não pode estar vazio.'];
        }
        return [true, '']; // Tudo certo!
    }

    /**
     * Regra para a Cidade */
    function isCidadeValida(value) {
        if (value.trim().length === 0) {
            return [false, 'O campo cidade não pode estar vazio.'];
        }
        return [true, '']; // Tudo certo!
    }

    /**
     * Regra para o Estado */
    function isEstadoValido(value) {
        if (value.trim().length === 0) {
            return [false, 'O campo estado não pode estar vazio.'];
        }
        return [true, '']; // Tudo certo!
    }
});