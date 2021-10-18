'use strict';

function onInitApp() {
  var f$id = document.getElementById.bind(document);
  
  var f$calc = (a, operator, b) => {
    var values = [Number(a), Number(b)];
    
    switch(operator) {
      case '+': 
        return values[0] + values[1];
      case '-':
        return values[0] - values[1];
      case 'X': 
        return values[0] * values[1];
      case '/':
        return values[0] / values[1];
    }
  }

  var $e = {
    btn0: f$id('btn0'),
    btn1: f$id('btn1'),
    btn2: f$id('btn2'),
    btn3: f$id('btn3'),
    btn4: f$id('btn4'),
    btn5: f$id('btn5'),
    btn6: f$id('btn6'),
    btn7: f$id('btn7'),
    btn8: f$id('btn8'),
    btn9: f$id('btn9'),
    btnDividir: f$id('btnDividir'),
    btnVezes: f$id('btnVezes'),
    btnMenos: f$id('btnMenos'),
    btnPonto: f$id('btnPonto'),
    btnIgual: f$id('btnIgual'),
    btnMais: f$id('btnMais'),
    formCalculadora: f$id('formCalculadora'),
    inputVisor: f$id('inputVisor'),
    smallCalc: f$id('smallCalc')
  };
  
  var firstCalc = '0';
  var lastOperator = '=';
  var isResult = false;
  
  var $v = {
    firstCalc: (value) => value ? firstCalc = value : firstCalc,
    
    isResult: (value) => value || value === false ? isResult = value : isResult,
    
    lastOperator: (value) => value ? lastOperator = value : lastOperator,
    
    smallCalc: (value) => value || value === '' ? $e.smallCalc.innerHTML = value : $e.smallCalc.innerHTML,
    
    visor: (value) => value ? $e.inputVisor.value = value : $e.inputVisor.value
  };
  
  function onAppReady() {
    $e.btn0.addEventListener('click', onNumberBtClick);
    $e.btn1.addEventListener('click', onNumberBtClick);
    $e.btn2.addEventListener('click', onNumberBtClick);
    $e.btn3.addEventListener('click', onNumberBtClick);
    $e.btn4.addEventListener('click', onNumberBtClick);
    $e.btn5.addEventListener('click', onNumberBtClick);
    $e.btn6.addEventListener('click', onNumberBtClick);
    $e.btn7.addEventListener('click', onNumberBtClick);
    $e.btn8.addEventListener('click', onNumberBtClick);
    $e.btn9.addEventListener('click', onNumberBtClick);
    
    $e.btnMais.addEventListener('click', onOperatorClick);
    $e.btnMenos.addEventListener('click', onOperatorClick);
    $e.btnVezes.addEventListener('click', onOperatorClick);
    $e.btnDividir.addEventListener('click', onOperatorClick);
    
    $e.btnIgual.addEventListener('click', onBtEqualClick);
    
  }
  
  function onNumberBtClick(event) {
    var value = event.target.value;
    
    if (value === '0' && $v.visor() === '0'){
      return;
    }
    
    if ((value !== '0' && $v.visor() === '0')  || $v.isResult()){
      $v.visor(value);
      $v.isResult(false);
      return;
    }
    
    var result = $v.visor() + value;
    
    $v.visor(result);
  }
  
  function onBtEqualClick() {
    if ($v.visor() !== '' && $v.visor() !== '0' && $v.lastOperator() !== '=') {
      $v.visor(f$calc($v.firstCalc(), $v.lastOperator(), $v.visor()));
    }
    
    if ($v.visor() === '' || $v.visor() === '0' && $v.lastOperator() !== '=') {
      $v.visor($v.firstCalc());
    }
    
    $v.lastOperator('=');
    $v.firstCalc('0');
    $v.smallCalc('');
    $v.isResult(true);
  }
  
  function onOperatorClick(event) {
    var operator = event.target.value;
    
    if ($v.visor() === '' || $v.visor() === '0') {
      if ($v.firstCalc() !== '0'){
        $v.smallCalc($v.smallCalc().replace($v.lastOperator(), operator));
        $v.lastOperator(operator);
      }
      
      return;
    }
    
    if ($v.visor() !== '' && $v.visor() !== '0' && $v.lastOperator() !== '=') {
      $v.visor(f$calc($v.firstCalc(), $v.lastOperator(), $v.visor()));
    }
    
    $v.lastOperator(operator);
    $v.firstCalc($v.visor());
    $v.visor('0');
    $v.smallCalc($v.firstCalc() + ' ' + $v.lastOperator());
    
  }
  
  onAppReady();
}

document.addEventListener('DOMContentLoaded', onInitApp);