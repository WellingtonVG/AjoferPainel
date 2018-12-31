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
      $sql1="SELECT sum(total_prest) as soma FROM painelajofer
      where data_emissao LIKE'".$like.$fro.$operacao;
      $resultado1 = mysqli_query($conn, $sql1);
      $row_painelajofer1 = mysqli_fetch_assoc($resultado1);

    $vfrete= $row_painelajofer1['soma'];

      $sql2="SELECT sum(peso) as soma FROM painelajofer
      where data_emissao LIKE'".$like.$fro.$operacao;
      $resultado2 = mysqli_query($conn, $sql2);
      $row_painelajofer2 = mysqli_fetch_assoc($resultado2);

    $vpeso= $row_painelajofer2['soma'];

      if((is_null($vfrete))||(is_null($vpeso)))
      {
        $divi=0;
      }
      else
      {
        $divi=($vfrete/($vpeso/1000));
      }

      echo 'R$' . number_format($divi, 2, ',', '.');
?>