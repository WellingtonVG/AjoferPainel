$(document).ready(function() {
    function Bcomboajax() {
          var idMes = $("#selectMes").val();
          var idfro = $("#frota").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'Bcombo01.php',
            type: 'POST',
            data:{vMes:idMes, vfro:idfro, vOP:idOP},
            success:function(data)
            {
              $("#totalprest").html(data);
            }
          })
    }
    function Bcomboajax2() {
          var idMes = $("#selectMes").val();
          var idfro = $("#frota").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'Bcombo02.php',
            type: 'POST',
            data:{vMes:idMes, vfro:idfro, vOP:idOP},
            success:function(data)
            {
              $("#valor02").html(data);
            }
          })
    }
    function Bcomboajax3() {
          var idMes = $("#selectMes").val();
          var idfro = $("#frota").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'Bcombo03.php',
            type: 'POST',
            data:{vMes:idMes, vfro:idfro, vOP:idOP},
            success:function(data)
            {
              $("#valor03").html(data);
            }
          })
    }
    function Bcomboajax4() {
          var idMes = $("#selectMes").val();
          var idfro = $("#frota").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'Bcombo04.php',
            type: 'POST',
            data:{vMes:idMes, vfro:idfro, vOP:idOP},
            success:function(data)
            {
              $("#valor04").html(data);
            }
          })
    }
    function Bcomboajax5() {
          var idMes = $("#selectMes").val();
          var idfro = $("#frota").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'Bcombo05.php',
            type: 'POST',
            data:{vMes:idMes, vfro:idfro, vOP:idOP},
            success:function(data)
            {
              $("#valor05").html(data);
            }
          })
    }
    function Bcomboajax6() {
          var idMes = $("#selectMes").val();
          var idfro = $("#frota").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'Bcombo06.php',
            type: 'POST',
            data:{vMes:idMes, vfro:idfro, vOP:idOP},
            success:function(data)
            {
              $("#valor06").html(data);
            }
          })
    }
    function Bcomboajax7() {
          var idMes = $("#selectMes").val();
          var idfro = $("#frota").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'Bcombo07.php',
            type: 'POST',
            data:{vMes:idMes, vfro:idfro, vOP:idOP},
            success:function(data)
            {
              $("#valor07").html(data);
            }
          })
    }
    function Bcomboajax8() {
          var idMes = $("#selectMes").val();
          var idfro = $("#frota").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'Bcombo08.php',
            type: 'POST',
            data:{vMes:idMes, vfro:idfro, vOP:idOP},
            success:function(data)
            {
              $("#valor08").html(data);
            }
          })
    }
    function Bcomboajax9() {
          var idMes = $("#selectMes").val();
          var idfro = $("#frota").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'Bcombo09.php',
            type: 'POST',
            data:{vMes:idMes, vfro:idfro, vOP:idOP},
            success:function(data)
            {
              $("#valor09").html(data);
            }
          })
    }
    function Bcomboajax10() {
          var idMes = $("#selectMes").val();
          var idfro = $("#frota").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'Bcombo10.php',
            type: 'POST',
            data:{vMes:idMes, vfro:idfro, vOP:idOP},
            success:function(data)
            {
              $("#valor10").html(data);
            }
          })
    }
    function Bcomboajax11() {
          var idMes = $("#selectMes").val();
          var idfro = $("#frota").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'Bcombo11.php',
            type: 'POST',
            data:{vMes:idMes, vfro:idfro, vOP:idOP},
            success:function(data)
            {
              $("#valor11").html(data);
            }
          })
    }
    function Bcomboajax12() {
          var idMes = $("#selectMes").val();
          var idfro = $("#frota").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'Bcombo12.php',
            type: 'POST',
            data:{vMes:idMes, vfro:idfro, vOP:idOP},
            success:function(data)
            {
              $("#valor12").html(data);
            }
          })
    }
    function Bcomboajax13() {
          var idMes = $("#selectMes").val();
          var idfro = $("#frota").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'Bcombo13.php',
            type: 'POST',
            data:{vMes:idMes, vfro:idfro, vOP:idOP},
            success:function(data)
            {
              $("#valor13").html(data);
            }
          })
    }
    function Bcomboajax14() {
          var idMes = $("#selectMes").val();
          var idfro = $("#frota").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'Bcombo14.php',
            type: 'POST',
            data:{vMes:idMes, vfro:idfro, vOP:idOP},
            success:function(data)
            {
              $("#valor14").html(data);
            }
          })
    }
    function Bcomboajax15() {
          var idMes = $("#selectMes").val();
          var idfro = $("#frota").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'Bcombo15.php',
            type: 'POST',
            data:{vMes:idMes, vfro:idfro, vOP:idOP},
            success:function(data)
            {
              $("#valor15").html(data);
            }
          })
    }
    function BcomboajaxOP() {
          var idMes = $("#selectMes").val();
          var idfro = $("#frota").val();

          $.ajax({
            url:'BpopulaOP.php',
            type: 'POST',
            data:{vMes:idMes, vfro:idfro},
            success:function(data)
            {
              $("#operacao").html(data);
              
            }
          })
    }
    function Bcombomes() {
      var idMes = $("#selectMes").val();

      $.ajax({
        url:'Bcombomes.php',
        type: 'POST',
        data:{vMes:idMes},
        success:function(data)
        {
          $("#sec1").html(data);
        }
      })
}
function Bcombocli() {
  var idfro = $("#frota").val();
  $.ajax({
    url:'Bcombocli.php',
    type: 'POST',
    data:{vfro:idfro},
    success:function(data)
    {
      $("#resultadocli").html(data);
    }
  })
}
    Bcomboajax();
    Bcomboajax2();
    Bcomboajax3();
    Bcomboajax4();
    Bcomboajax5();
    Bcomboajax6();
    Bcomboajax7();
    Bcomboajax8();
    Bcomboajax9();
    Bcomboajax10();
    Bcomboajax11();
    Bcomboajax12();
    Bcomboajax13();
    Bcomboajax14();
    Bcomboajax15();
    BcomboajaxOP();
    $("#selectMes").on("change",function(){
      Bcombomes();
      Bcomboajax();
      Bcomboajax3();
      Bcomboajax2();
      Bcomboajax4();
      Bcomboajax5();
      Bcomboajax6();
      Bcomboajax7();
      Bcomboajax8();
      Bcomboajax9();
      Bcomboajax10();
      Bcomboajax11();
      Bcomboajax12();
      Bcomboajax13();
      Bcomboajax14();
      Bcomboajax15();
      BcomboajaxOP();
    });
    $("#frota").on("change",function(){
      Bcombocli();
      Bcomboajax();
      Bcomboajax2();
      Bcomboajax3();
      Bcomboajax4();
      Bcomboajax5();
      Bcomboajax6();
      Bcomboajax7();
      Bcomboajax8();
      Bcomboajax9();
      Bcomboajax10();
      Bcomboajax11();
      Bcomboajax12();
      Bcomboajax13();
      Bcomboajax14();
      Bcomboajax15();
      BcomboajaxOP();
    });
    $("#operacao").on("change",function(){
      Bcomboajax();
      Bcomboajax2();
      Bcomboajax3();
      Bcomboajax4();
      Bcomboajax5();
      Bcomboajax6();
      Bcomboajax7();
      Bcomboajax8();
      Bcomboajax9();
      Bcomboajax10();
      Bcomboajax11();
      Bcomboajax12();
      Bcomboajax13();
      Bcomboajax14();
      Bcomboajax15();
    });
});
