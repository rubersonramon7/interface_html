//efeito do boltao voltar ao topo
function topo() {
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:"smooth"
        }
    )
}
//validaçã ode login
function login() {
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario == 'admin' && senha == '123456') {
        window.location = "index.html";
        logado = 1;
    }
    if (logado == 0) {
        alert("Acesso Negado. Dados incorretos!");
    }
}
//ativar alert no botao cadastrar
function cadastro() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
}