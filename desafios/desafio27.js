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



if(Solucao("var_1__Int") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("qq-q") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("2w2") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao(" variable") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("va[riable0") === false)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("variable0") === true)
    console.log('Passou')
else
    console.log('Falhou')

if(Solucao("a") === true)
    console.log('Passou')
else
    console.log('Falhou')
if(Solucao("_Aas_23") === true)
    console.log('Passou')
else
    console.log('Falhou')
if(Solucao("a a_2") === false)
    console.log('Passou')
else
    console.log('Falhou')
    if(Solucao("0ss") === false)
    console.log('Passou')
else
    console.log('Falhou')