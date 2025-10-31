document.addEventListener('DOMContentLoaded',()=>{const nomeInput=document.getElementById('nome');const emailInput=document.getElementById('email');const cpfInput=document.getElementById('cpf');const telefoneInput=document.getElementById('telefone');const datanascimento=document.getElementById('nascimento');const cepInput=document.getElementById('cep');const enderecoInput=document.getElementById('endereco');const cidadeInput=document.getElementById('cidade');const estadoInput=document.getElementById('estado');if(nomeInput){nomeInput.addEventListener('input',()=>{validateField(nomeInput,isNomeValido)})}
if(emailInput){emailInput.addEventListener('input',()=>{validateField(emailInput,isEmailValido)})}
if(cpfInput){emailInput.addEventListener('input',()=>{validateField(cpfInput,isCpfValido)})}
if(telefoneInput){telefoneInput.addEventListener('input',()=>{validateField(telefoneInput,isTelefoneValido)})}
if(datanascimento){datanascimento.addEventListener('input',()=>{validateField(datanascimento,isDataNascimentoValida)})}
if(cepInput){cepInput.addEventListener('input',()=>{validateField(cepInput,isCepValido)})}
if(enderecoInput){enderecoInput.addEventListener('input',()=>{validateField(enderecoInput,isEnderecoValido)})}
if(cidadeInput){cidadeInput.addEventListener('input',()=>{validateField(cidadeInput,isCidadeValida)})}
if(estadoInput){estadoInput.addEventListener('input',()=>{validateField(estadoInput,isEstadoValido)})}
function validateField(inputElement,validationRule){const value=inputElement.value;const formGroup=inputElement.parentElement;const errorMessageElement=formGroup.querySelector('.error-message');const[isValid,message]=validationRule(value);if(isValid){formGroup.classList.remove('error');errorMessageElement.textContent=''}else{formGroup.classList.add('error');errorMessageElement.textContent=message}}
function isNomeValido(value){if(value.trim().length===0){return[!1,'O campo nome não pode estar vazio.']}
if(value.trim().length<3){return[!1,'O nome deve ter pelo menos 3 caracteres.']}
return[!0,'']}
function isEmailValido(value){const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(value.trim().length===0){return[!1,'O campo e-mail não pode estar vazio.']}
if(!emailRegex.test(value)){return[!1,'Por favor, insira um e-mail válido (ex: seu.email@provedor.com).']}
return[!0,'']}
function isCpfValido(value){const cpfRegex=/^\d{3}\.\d{3}\.\d{3}-\d{2}$/;if(value.trim().length===0){return[!1,'O campo CPF não pode estar vazio.']}
if(!cpfRegex.test(value)){return[!1,'Por favor, insira um CPF válido (ex: 000.000.000-00).']}
return[!0,'']}
function isTelefoneValido(value){const telefoneRegex=/^\(\d{2}\)\s\d{5}-\d{4}$/;if(value.trim().length===0){return[!1,'O campo telefone não pode estar vazio.']}
if(!telefoneRegex.test(value)){return[!1,'Por favor, insira um telefone válido (ex: (00) 00000-0000).']}
return[!0,'']}
function isDataNascimentoValida(value){if(value.trim().length===0){return[!1,'O campo data de nascimento não pode estar vazio.']}
const date=new Date(value);if(isNaN(date.getTime())){return[!1,'Por favor, insira uma data de nascimento válida.']}
return[!0,'']}
function isCepValido(value){const cepRegex=/^\d{5}-\d{3}$/;if(value.trim().length===0){return[!1,'O campo CEP não pode estar vazio.']}
if(!cepRegex.test(value)){return[!1,'Por favor, insira um CEP válido (ex: 00000-000).']}
return[!0,'']}
function isEnderecoValido(value){if(value.trim().length===0){return[!1,'O campo endereço não pode estar vazio.']}
return[!0,'']}
function isCidadeValida(value){if(value.trim().length===0){return[!1,'O campo cidade não pode estar vazio.']}
return[!0,'']}
function isEstadoValido(value){if(value.trim().length===0){return[!1,'O campo estado não pode estar vazio.']}
return[!0,'']}})