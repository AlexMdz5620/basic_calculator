const resultado = document.getElementById('resultado');
const btnCalcular = document.getElementById('btn-calcular');
const btnLimpiar = document.getElementById('btn-limpiar');
const btns = document.querySelectorAll('.btn-valor');


btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const valor = e.target.value;
        
        resultado.textContent += valor
    })
})

btnLimpiar.addEventListener('click', clean);
btnCalcular.addEventListener('click', calcular);

function clean(){
    resultado.textContent = '';
}

function calcular(){
    try {
        const expresion = resultado.textContent;
        const resultadoCalculado = math.evaluate(expresion);
        resultado.textContent = resultadoCalculado;
    } catch (error) {
        resultado.textContent = 'Error'
    }
}
