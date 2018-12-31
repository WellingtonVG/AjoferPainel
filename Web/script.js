$(document).ready(function() {
    function comboajax() {
          var idMes = $("#selectMes").val();
          var idCli = $("#cliente").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'combo01.php',
            type: 'POST',
            data:{vMes:idMes, vCli:idCli, vOP:idOP},
            success:function(data)
            {
              $("#totalprest").html(data);
            }
          })
    }
    function comboajax2() {
          var idMes = $("#selectMes").val();
          var idCli = $("#cliente").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'combo02.php',
            type: 'POST',
            data:{vMes:idMes, vCli:idCli, vOP:idOP},
            success:function(data)
            {
              $("#valor02").html(data);
            }
          })
    }
    function comboajax3() {
          var idMes = $("#selectMes").val();
          var idCli = $("#cliente").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'combo03.php',
            type: 'POST',
            data:{vMes:idMes, vCli:idCli, vOP:idOP},
            success:function(data)
            {
              $("#valor03").html(data);
            }
          })
    }
    function comboajax4() {
          var idMes = $("#selectMes").val();
          var idCli = $("#cliente").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'combo04.php',
            type: 'POST',
            data:{vMes:idMes, vCli:idCli, vOP:idOP},
            success:function(data)
            {
              $("#valor04").html(data);
            }
          })
    }
    function comboajax5() {
          var idMes = $("#selectMes").val();
          var idCli = $("#cliente").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'combo05.php',
            type: 'POST',
            data:{vMes:idMes, vCli:idCli, vOP:idOP},
            success:function(data)
            {
              $("#valor05").html(data);
            }
          })
    }
    function comboajax6() {
          var idMes = $("#selectMes").val();
          var idCli = $("#cliente").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'combo06.php',
            type: 'POST',
            data:{vMes:idMes, vCli:idCli, vOP:idOP},
            success:function(data)
            {
              $("#valor06").html(data);
            }
          })
    }
    function comboajax7() {
          var idMes = $("#selectMes").val();
          var idCli = $("#cliente").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'combo07.php',
            type: 'POST',
            data:{vMes:idMes, vCli:idCli, vOP:idOP},
            success:function(data)
            {
              $("#valor07").html(data);
            }
          })
    }
    function comboajax8() {
          var idMes = $("#selectMes").val();
          var idCli = $("#cliente").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'combo08.php',
            type: 'POST',
            data:{vMes:idMes, vCli:idCli, vOP:idOP},
            success:function(data)
            {
              $("#valor08").html(data);
            }
          })
    }
    function comboajax9() {
          var idMes = $("#selectMes").val();
          var idCli = $("#cliente").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'combo09.php',
            type: 'POST',
            data:{vMes:idMes, vCli:idCli, vOP:idOP},
            success:function(data)
            {
              $("#valor09").html(data);
            }
          })
    }
    function comboajax10() {
          var idMes = $("#selectMes").val();
          var idCli = $("#cliente").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'combo10.php',
            type: 'POST',
            data:{vMes:idMes, vCli:idCli, vOP:idOP},
            success:function(data)
            {
              $("#valor10").html(data);
            }
          })
    }
    function comboajax11() {
          var idMes = $("#selectMes").val();
          var idCli = $("#cliente").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'combo11.php',
            type: 'POST',
            data:{vMes:idMes, vCli:idCli, vOP:idOP},
            success:function(data)
            {
              $("#valor11").html(data);
            }
          })
    }
    function comboajax12() {
          var idMes = $("#selectMes").val();
          var idCli = $("#cliente").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'combo12.php',
            type: 'POST',
            data:{vMes:idMes, vCli:idCli, vOP:idOP},
            success:function(data)
            {
              $("#valor12").html(data);
            }
          })
    }
    function comboajax13() {
          var idMes = $("#selectMes").val();
          var idCli = $("#cliente").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'combo13.php',
            type: 'POST',
            data:{vMes:idMes, vCli:idCli, vOP:idOP},
            success:function(data)
            {
              $("#valor13").html(data);
            }
          })
    }
    function comboajax14() {
          var idMes = $("#selectMes").val();
          var idCli = $("#cliente").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'combo14.php',
            type: 'POST',
            data:{vMes:idMes, vCli:idCli, vOP:idOP},
            success:function(data)
            {
              $("#valor14").html(data);
            }
          })
    }
    function comboajax15() {
          var idMes = $("#selectMes").val();
          var idCli = $("#cliente").val();
          var idOP = $("#operacao").val();

          $.ajax({
            url:'combo15.php',
            type: 'POST',
            data:{vMes:idMes, vCli:idCli, vOP:idOP},
            success:function(data)
            {
              $("#valor15").html(data);
            }
          })
    }
    function comboajaxOP() {
          var idMes = $("#selectMes").val();
          var idCli = $("#cliente").val();

          $.ajax({
            url:'populaOP.php',
            type: 'POST',
            data:{vMes:idMes, vCli:idCli},
            success:function(data)
            {
              $("#operacao").html(data);
            }
          })
    }
    function combomes() {
      var idMes = $("#selectMes").val();

      $.ajax({
        url:'combomes.php',
        type: 'POST',
        data:{vMes:idMes},
        success:function(data)
        {
          $("#sec1").html(data);
        }
      })
}
function combocli() {
  var idCli = $("#cliente").val();
  $.ajax({
    url:'combocli.php',
    type: 'POST',
    data:{vCli:idCli},
    success:function(data)
    {
      $("#resultadocli").html(data);
    }
  })
}
$(document).ready(function() {
  function Bcomboajax() {
        var idMes = $("#BselectMes").val();
        var idfro = $("#frota").val();
        var idOP = $("#Boperacao").val();

        $.ajax({
          url:'Bcombo01.php',
          type: 'POST',
          data:{vMes:idMes, vfro:idfro, vOP:idOP},
          success:function(data)
          {
            $("#btotalprest").html(data);
            alert("oi2");
          }
        })
  }
  function Bcomboajax2() {
        var idMes = $("#BselectMes").val();
        var idfro = $("#frota").val();
        var idOP = $("#Boperacao").val();

        $.ajax({
          url:'Bcombo02.php',
          type: 'POST',
          data:{vMes:idMes, vfro:idfro, vOP:idOP},
          success:function(data)
          {
            $("#bvalor02").html(data);
          }
        })
  }
  function Bcomboajax3() {
        var idMes = $("#BselectMes").val();
        var idfro = $("#frota").val();
        var idOP = $("#Boperacao").val();

        $.ajax({
          url:'Bcombo03.php',
          type: 'POST',
          data:{vMes:idMes, vfro:idfro, vOP:idOP},
          success:function(data)
          {
            $("#Bvalor03").html(data);
          }
        })
  }
  function Bcomboajax4() {
        var idMes = $("#BselectMes").val();
        var idfro = $("#frota").val();
        var idOP = $("#Boperacao").val();

        $.ajax({
          url:'Bcombo04.php',
          type: 'POST',
          data:{vMes:idMes, vfro:idfro, vOP:idOP},
          success:function(data)
          {
            $("#Bvalor04").html(data);
          }
        })
  }
  function Bcomboajax5() {
        var idMes = $("#BselectMes").val();
        var idfro = $("#frota").val();
        var idOP = $("#Boperacao").val();

        $.ajax({
          url:'Bcombo05.php',
          type: 'POST',
          data:{vMes:idMes, vfro:idfro, vOP:idOP},
          success:function(data)
          {
            $("#Bvalor05").html(data);
          }
        })
  }
  function Bcomboajax6() {
        var idMes = $("#BselectMes").val();
        var idfro = $("#frota").val();
        var idOP = $("#Boperacao").val();

        $.ajax({
          url:'Bcombo06.php',
          type: 'POST',
          data:{vMes:idMes, vfro:idfro, vOP:idOP},
          success:function(data)
          {
            $("#Bvalor06").html(data);
          }
        })
  }
  function Bcomboajax7() {
        var idMes = $("#BselectMes").val();
        var idfro = $("#frota").val();
        var idOP = $("#Boperacao").val();

        $.ajax({
          url:'Bcombo07.php',
          type: 'POST',
          data:{vMes:idMes, vfro:idfro, vOP:idOP},
          success:function(data)
          {
            $("#Bvalor07").html(data);
          }
        })
  }
  function Bcomboajax8() {
        var idMes = $("#BselectMes").val();
        var idfro = $("#frota").val();
        var idOP = $("#Boperacao").val();

        $.ajax({
          url:'Bcombo08.php',
          type: 'POST',
          data:{vMes:idMes, vfro:idfro, vOP:idOP},
          success:function(data)
          {
            $("#Bvalor08").html(data);
          }
        })
  }
  function Bcomboajax9() {
        var idMes = $("#BselectMes").val();
        var idfro = $("#frota").val();
        var idOP = $("#Boperacao").val();

        $.ajax({
          url:'Bcombo09.php',
          type: 'POST',
          data:{vMes:idMes, vfro:idfro, vOP:idOP},
          success:function(data)
          {
            $("#Bvalor09").html(data);
          }
        })
  }
  function Bcomboajax10() {
        var idMes = $("#BselectMes").val();
        var idfro = $("#frota").val();
        var idOP = $("#Boperacao").val();

        $.ajax({
          url:'Bcombo10.php',
          type: 'POST',
          data:{vMes:idMes, vfro:idfro, vOP:idOP},
          success:function(data)
          {
            $("#Bvalor10").html(data);
          }
        })
  }
  function Bcomboajax11() {
        var idMes = $("#BselectMes").val();
        var idfro = $("#frota").val();
        var idOP = $("#Boperacao").val();

        $.ajax({
          url:'Bcombo11.php',
          type: 'POST',
          data:{vMes:idMes, vfro:idfro, vOP:idOP},
          success:function(data)
          {
            $("#Bvalor11").html(data);
          }
        })
  }
  function Bcomboajax12() {
        var idMes = $("#BselectMes").val();
        var idfro = $("#frota").val();
        var idOP = $("#Boperacao").val();

        $.ajax({
          url:'Bcombo12.php',
          type: 'POST',
          data:{vMes:idMes, vfro:idfro, vOP:idOP},
          success:function(data)
          {
            $("#Bvalor12").html(data);
          }
        })
  }
  function Bcomboajax13() {
        var idMes = $("#BselectMes").val();
        var idfro = $("#frota").val();
        var idOP = $("#Boperacao").val();

        $.ajax({
          url:'Bcombo13.php',
          type: 'POST',
          data:{vMes:idMes, vfro:idfro, vOP:idOP},
          success:function(data)
          {
            $("#Bvalor13").html(data);
          }
        })
  }
  function Bcomboajax14() {
        var idMes = $("#BselectMes").val();
        var idfro = $("#frota").val();
        var idOP = $("#Boperacao").val();

        $.ajax({
          url:'Bcombo14.php',
          type: 'POST',
          data:{vMes:idMes, vfro:idfro, vOP:idOP},
          success:function(data)
          {
            $("#Bvalor14").html(data);
          }
        })
  }
  function Bcomboajax15() {
        var idMes = $("#BselectMes").val();
        var idfro = $("#frota").val();
        var idOP = $("#Boperacao").val();

        $.ajax({
          url:'Bcombo15.php',
          type: 'POST',
          data:{vMes:idMes, vfro:idfro, vOP:idOP},
          success:function(data)
          {
            $("#Bvalor15").html(data);
          }
        })
  }
  function BcomboajaxOP() {
        var idMes = $("#BselectMes").val();
        var idfro = $("#frota").val();

        $.ajax({
          url:'populaOP.php',
          type: 'POST',
          data:{vMes:idMes, vfro:idfro},
          success:function(data)
          {
            $("#Boperacao").html(data);
          }
        })
  }
  function Bcombomes() {
    var idMes = $("#BselectMes").val();

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
    comboajax();
    comboajax2();
    comboajax3();
    comboajax4();
    comboajax5();
    comboajax6();
    comboajax7();
    comboajax8();
    comboajax9();
    comboajax10();
    comboajax11();
    comboajax12();
    comboajax13();
    comboajax14();
    comboajax15();
    comboajaxOP();
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
    $("#selectMes").on("change",function(){
      combomes();
      comboajax();
      comboajax3();
      comboajax2();
      comboajax4();
      comboajax5();
      comboajax6();
      comboajax7();
      comboajax8();
      comboajax9();
      comboajax10();
      comboajax11();
      comboajax12();
      comboajax13();
      comboajax14();
      comboajax15();
      comboajaxOP();
    });
    $("#cliente").on("change",function(){
      combocli();
      comboajax();
      comboajax2();
      comboajax3();
      comboajax4();
      comboajax5();
      comboajax6();
      comboajax7();
      comboajax8();
      comboajax9();
      comboajax10();
      comboajax11();
      comboajax12();
      comboajax13();
      comboajax14();
      comboajax15();
      comboajaxOP();
    });
    $("#operacao").on("change",function(){
      comboajax();
      comboajax2();
      comboajax3();
      comboajax4();
      comboajax5();
      comboajax6();
      comboajax7();
      comboajax8();
      comboajax9();
      comboajax10();
      comboajax11();
      comboajax12();
      comboajax13();
      comboajax14();
      comboajax15();
    });
});

  $("#BselectMes").on("change",function(){
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
  $("#Boperacao").on("change",function(){
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
