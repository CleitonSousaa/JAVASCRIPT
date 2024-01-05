// Os nomes de variáveis corretos consistem apenas em letras, dígitos e sublinhados em inglês e não podem começar com um dígito. Verifique se a string fornecida é um nome de variável correto.  

function Solucao(name) {
    const palavrasReservadas = [
        'break', 'do', 'instanceof', 'typeof', 'case', 'else', 'new', 'var',
        'catch', 'finally', 'return', 'void', 'continue', 'for', 'switch', 'while',
        'debugger', 'function', 'this', 'with', 'default', 'if', 'throw', 'delete',
        'in', 'try', 'class', 'enum', 'extends', 'super', 'const', 'export', 'import',
        'implements', 'let', 'private', 'public', 'yield', 'interface', 'package',
        'protected', 'static', 'await'
    ];

    function temCaracteresEspeciaisNoMeio(nome) {
        const regex = /[^a-zA-Z0-9_$]/;
        return regex.test(nome);
    }
   
    
    for(let a = 0; a < name.length; a++){
        if(name[a] === ' ' || !isNaN(name[0]) || name[a] === '-' || palavrasReservadas.includes(name) === true || temCaracteresEspeciaisNoMeio(name) === true){
            return false
        }else{
            return true
        }
        
        
    }
}
