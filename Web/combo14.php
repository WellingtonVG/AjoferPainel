<?php
      include_once("conexao.php");

      if($_POST['vMes']=="0")
      {
        $like = "%/%/2018'";
      }
      else {
        $like = "%/".$_POST['vMes']."/2018'";
      }

      if($_POST['vCli']=="0")
      {
        $cli="";
      }
      else
      {
        $cli = " and cliente_fat = '".$_POST['vCli']."'";
      }
      if(($_POST['vOP']=="0")||($_POST['vOP']==""))
      {
        $operacao = "";
      }
      else {
        $operacao = " and tp_operacao = '".$_POST['vOP']."'";
      }
      $sql="SELECT sum(cast(REPLACE(PESO, ',', '.') as DECIMAL(65))) as soma FROM painelajofer
      where data_emissao LIKE'".$like.$cli.$operacao;

      $resultado = mysqli_query($conn, $sql);
      $row_painelajofer = mysqli_fetch_assoc($resultado);
      $peso = $row_painelajofer['soma']/1000;
      
      

      echo number_format($peso, 2, ',', '.').' T';

?>
