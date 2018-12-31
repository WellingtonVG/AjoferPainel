
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

    $sql="SELECT DISTINCT TP_OPERACAO FROM painelajofer
    WHERE data_emissao LIKE '".$like.$fro;



    $result = mysqli_query($conn, $sql);

      echo '<option value="0">TODAS</option>' ;

    if (($_POST['vfro']=="0")==false)
    {
      while($row_pain = mysqli_fetch_assoc($result))
      {
        echo '<option value="'.$row_pain['TP_OPERACAO'].'">'.$row_pain['TP_OPERACAO'].'</option>';
      }
    }
?>
