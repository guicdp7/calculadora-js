'use strict';

function onInitApp() {
  var f$id = document.getElementById.bind(document);

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
    inputVisor: f$id('inputVisor')
  };
  
  var $v = {
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
  }
  
  function onNumberBtClick(event) {
    var value = event.target.value;
    
    if (value === '0' && $v.visor() === '0'){
      return;
    }
    
    if (value !== '0' && $v.visor() === '0'){
      $v.visor(value);
      return;
    }
    
    var result = $v.visor() + value;
    
    $v.visor(result);
  }
  
  onAppReady();
}

document.addEventListener('DOMContentLoaded', onInitApp);