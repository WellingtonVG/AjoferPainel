
<?php
      include_once("conexao.php");

      if($_POST['vMes']=="0")
      {
        $like = "%/%/2018'";
      }
      else {
        $like = "%/".$_POST['vMes']."/2018'";
      }

      if($_POST['vfro']=="0")
      {
        $fro="";
      }
      else
      {
        $fro = " and cavalo = '".$_POST['vfro']."'";
      }
      if(($_POST['vOP']=="0")||($_POST['vOP']==""))
      {
        $operacao = "";
      }
      else {
        $operacao = " and tp_operacao = '".$_POST['vOP']."'";
      }

      $sql="SELECT sum(total_prest) as soma FROM painelajofer
      where data_emissao LIKE'".$like.$fro.$operacao;


        $resultado = mysqli_query($conn, $sql);
        $row_painelajofer = mysqli_fetch_assoc($resultado);
        echo 'R$' . number_format($row_painelajofer['soma'], 2, ',', '.');
?>
