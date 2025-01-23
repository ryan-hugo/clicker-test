
document.addEventListener('DOMContentLoaded'), () => {
    
    const my_Input = document.getElementById('num');
    let stack = [];
    function obterValor(){
        let valor = my_Input.value; 
        stack.push(valor);
    }

    const submit_btn = document.getElementById('submit');
    submit_btn.onclick(obterValor());


}
    

