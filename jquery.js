$(document).ready(function() {

    // Quando passar o mouse no texto da legenda
    $('#texto').on('mouseover', function() {
      $(this).css('color', 'purple');
    }).on('mouseout', function() {
      $(this).css('color', 'black');
    });
  
    // Validação do formulário no envio
    $('#meuForm').submit(function(e) {
      if ($('#nome').val().trim() === '') {
        alert('Preencha o campo nome!');
        e.preventDefault(); // impede o envio do formulário
      }
    });
  
    // Campo "nome" com foco muda cor de fundo
    $('#nome').focus(function() {
      $(this).css('background-color', '#ffffcc');
    }).blur(function() {
      $(this).css('background-color', '');
    });
  
    // Seleção de estado exibe alert
    $('#estado').change(function() {
      alert('Você escolheu: ' + $(this).val());
    });
  
    // Imagem com fadeToggle
    $('img').click(function() {
      $(this).fadeToggle();
    });
  
    // Texto escondido com slideToggle
    $("#texto").dblclick(function() {
      $(this).slideToggle();
    });

    window.addEventListener('load', () => {
      document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/6942998.jpg')";
    });

  });