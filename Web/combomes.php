
<?php
      include_once("conexao.php");

      if($_POST['vMes']=="01")
      {
        $escrita = "Janeiro";
      }

      if($_POST['vMes']=="02")
      {
        $escrita = "Fevereiro";
      }
      if($_POST['vMes']=="03")
      {
        $escrita = "Março";
      }
      if($_POST['vMes']=="04")
      {
        $escrita = "Abril";
      }
      if($_POST['vMes']=="05")
      {
        $escrita = "Maio";
      }
      if($_POST['vMes']=="06")
      {
        $escrita = "Junho";
      }
      if($_POST['vMes']=="07")
      {
        $escrita = "Julho";
      }
      if($_POST['vMes']=="08")
      {
        $escrita = "Agosto";
      }
      if($_POST['vMes']=="09")
      {
        $escrita = "Setembro";
      }
      if($_POST['vMes']=="10")
      {
        $escrita = "Outubro";
      }
      if($_POST['vMes']=="11")
      {
        $escrita = "Novembro";
      }
      if($_POST['vMes']=="12")
      {
        $escrita = "Dezembro";
      }
      if($_POST['vMes']=="0")
      {
        $escrita = "";
      }

      echo $escrita;
?>
