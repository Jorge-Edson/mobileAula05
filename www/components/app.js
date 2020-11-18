// This is a JavaScript file

$(document).on('click', '#buscar', function() {
  $.ajax({
    type: "get", //Como vou enviar
    url: "https://viacep.com.br/ws/"+$('#cep').val()+"/json", //Para onde enviar
    success: function(data){ //Executar se der certo
      var conteudo;
      conteudo = "<p><strong>Logradouro: </strong>"+data.logradouro+"</p>";
      conteudo += "<p><strong>Bairro: </strong>"+data.bairro+"</p>";
      conteudo += "<p><strong>Cidade: </strong>"+data.localidade+"</p>";
      conteudo += "<p><strong>Estado: </strong>"+data.uf+"</p>";

      $('#dados').html(conteudo);
    },
    error: function(){ //Executar se der erro
      alert("Deu erro!");
    }
  })
});