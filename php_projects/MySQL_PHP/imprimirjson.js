
$(document).ready(function(){

    var url="crearjsonmysql.php";

    $("#tablajson tbody").html("");

    $.getJSON(url,function(clientes){

        $.each(clientes, function(i,cliente){

            var newRow =
            "<tr>"
            +"<td>"+cliente.id+"</td>"
            +"<td>"+cliente.ident+"</td>"
            +"<td>"+cliente.nom+"</td>"
            +"<td>"+cliente.ape+"</td>"
            +"</tr>";
            
            $(newRow).appendTo("#tablajson tbody");
        });
    });
});