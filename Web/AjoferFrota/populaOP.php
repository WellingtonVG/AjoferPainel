
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

    $sql="SELECT DISTINCT TP_OPERACAO FROM painelajofer
    WHERE data_emissao LIKE '".$like.$cli;



    $result = mysqli_query($conn, $sql);

      echo '<option value="0">TODAS</option>' ;

    if (($_POST['vCli']=="0")==false)
    {
      while($row_pain = mysqli_fetch_assoc($result))
      {
        echo '<option value="'.$row_pain['TP_OPERACAO'].'">'.$row_pain['TP_OPERACAO'].'</option>';
      }
    }
?>
