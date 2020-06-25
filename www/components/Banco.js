// This is a JavaScript file

$(document).on("click","#salvar",function(){
    var parametros = {
      "nome":$("#nome").val(),
       "email":$("#email").val(),
      "senha":$("#senha").val()   
    }
    $.ajax({
      type:"post", //como vai enviar os dados
      url:"http://localhost:8080/cadastra.php", //pra onde vai enviar os dados
      data:parametros,//o que será enviado

      //se funcionar
      success: function(data){
        navigator.notification.alert(data);
        $("#nome").val(""),
        $("#email").val(""),
        $("#senha").val("")  
      },

      //se não funcionar
      error: function(data){
        navigator.notification.alert("Erro ao cadastrar");
      }
    });
});