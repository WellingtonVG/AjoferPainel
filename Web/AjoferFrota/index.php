<?php
	include_once("conexao.php");
?>

<html>
<head>
  <title>Painel de Gestão Ajofer</title>
  <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet">
  <link rel="stylesheet" href="styleB.css" />
  <link rel="stylesheet" href="style2B.css" />
  <script language="javascript" src="functions.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script language="javascript" src="scriptB.js"></script>
</head>
<body>
  <div id="logo">
  <img src="logo.png" alt="Computer Man" style="width:30vw; ">
  </div>
  <div id="login_div" class="main-div">
    <h3 id="titlelogin">Painel de Gestão</h3>
    <input type="email" placeholder="E-mail..." id="email_field" />
    <input type="password" placeholder="Senha..." id="password_field" />

    <button onclick="login()" id="btnacessar">Acessar</button>
  </div>

  <div id="user_div2" class="loggedin-div2">

          <!--Página completa-->
          <section id="main">
            <!--Cabeçalho A-->
            <section class="cabecalhoA">
              <div id="resultadocli"></div>
              <script>
                var resultmes = 'Eu sou uma variável JavaScript.';
               </script>
            </section>
                <!--Cabeçalho B-->
            <section class="cabecalhoB">
              <div id="titulo">
              PAINEL DE GESTÃO AJOFER
              </div>
              <section id="subtitulo">
                <section class="sec1" id="sec1">
                  
                </section>
                <section class="sec2" id="sec2">
                  <div class="btnA">
                    <button onclick="gotocliente()" id="btFrota">Clientes</button>
                  </div>
                  <div class="btnB">
                    <button onclick="logout()" id="btnsair">Sair</button>
                  </div>                  
                </section>
              
              </section>
            </section>
                <!--Lado Esquerdo-->
            <section class="Lside" id="LadoA">
                <!--cabelçalho opçoes-->
              <section id="cabecalhoLadoA">
                    <!--cabelçalho opçoes A-->
                  <section class="selecMES comboninja">
                    <div id="DIVselecMES">
                      Selecione o Mês:
                    </div>
                    <form name="form1">
                      <select name="selectMes" id="selectMes">
                        <option value="0">TODOS</option>
                        <option value="01">Janeiro</option>
                        <option value="02">Fevereiro</option>
                        <option value="03">Março</option>
                        <option value="04">Abril</option>
                        <option value="05">Maio</option>
                        <option value="06">Junho</option>
                        <option value="07">Julho</option>
                        <option value="08">Agosto</option>
                        <option value="09">Setembro</option>
                        <option value="10">Outubro</option>
                        <option value="11">Novembro</option>
                      </select>
                    </form>
      
                  </section>
                    <!--cabelçalho opçoes B-->
                  <section class="selecfrota comboninja2">
                    <div class="DIVselecCli">
                      Selecione a Frota
                    </div>
                    <div id="DIVselecCli">
                    <form name="form2">
                      <select  name="frota" id="frota">
      
                        <option value="0">TODOS</option>
                        <?php
                              $result_painel = "SELECT DISTINCT cast(TRIM(LEADING '0' FROM cavalo) as unsigned integer) as Tcavalo, cavalo FROM painelajofer
                              order by Tcavalo";
                              $resultado_niveis_acesso = mysqli_query($conn, $result_painel);
                              while($row_painelajofer = mysqli_fetch_assoc($resultado_niveis_acesso)){ ?>
                                <option value="<?php echo $row_painelajofer['cavalo']; ?>"><?php echo $row_painelajofer['Tcavalo']; ?></option> <?php
                              }
                            ?>
                      </select>
                    </form>
                  </div>
                  </section>
                    <!--cabelçalho opçoes C-->
                  <section class="selecOP comboninja">
                    <div class="DIVselecOP" >
                      Selecione a operação
                    </div>
                    <div id="DIVselecOP">
                    <form name="form2">
                      <select  name="operacao" id="operacao">
      
                      </select>
                    </form>
                  </div>
                  </section>
      
              </section>
                <!--valores frete-->
              <section id="valoresLadoA">
                <section class="vrfrete">
                  <div class="title_box01" id="bill_to">
                    <div id="title01"> Valor do Frete</div>
                      <div id="totalprest" class="valoresMonetarios">
      
                      </div>
                    </div>
                </section>
                <section class="vrmercadorias">
                  <div class="title_box02" id="bill_to">
                    <div id="title02"> Valor das Mercadorias</div>
                      <div id="valor02" class="valoresMonetarios">
      
                      </div>
                    </div>
                </section>
                <section class="vrfretepeso">
                  <div class="title_box03" id="bill_to">
                    <div id="title03"> Valor do Frete Peso</div>
                      <div id="valor03" class="valoresMonetarios">
      
                      </div>
                    </div>
                </section>
                <section class="vricms">
                  <div class="title_box04" id="bill_to">
                    <div id="title04"> Valor do ICMS</div>
                      <div id="valor04" class="valoresMonetarios">
      
                      </div>
                    </div>
                </section>
                <section class="vrfretevalor">
                  <div class="title_box05" id="bill_to">
                    <div id="title05">Frete Valor</div>
                      <div id="valor05" class="valoresMonetarios">
      
                      </div>
                    </div>
                </section>
                <section class="vrpedagio">
                  <div class="title_box06" id="bill_to">
                    <div id="title06">Valor do Pedágio</div>
                      <div id="valor06" class="valoresMonetarios">
      
                      </div>
                    </div>
                </section>
                <section class="outrosvr">
                  <div class="title_box07" id="bill_to">
                    <div id="title07">Outros Valores</div>
                      <div id="valor07" class="valoresMonetarios">
      
                      </div>
                    </div>
                </section>
                <section class="vrgris">
                  <div class="title_box08" id="bill_to">
                    <div id="title08">GRIS / Taxas em Contrato</div>
                      <div id="valor08" class="valoresMonetarios">
      
                      </div>
                    </div>
                </section>
              </section>
            </section>
                <!--Lado Direito-->
            <section id="Rside">
              <section class="anImpacto">
              <div class="title_box09" id="bill_to">
                <div id="title09">Análise de Impacto</div>
                  <div id="content09">
                    <section class="anImpacto2" id="anImpacto2">
                      <section class="fretesobremercad">
                        <div class="qdtitulo">
                          FRETE SOBRE AS MERCADORIAS
                        </div>
                        <div class="qdconteudo" id="valor09">
      
                        </div>
                      </section>
                      <section class="pedagiosobrefrete">
                        <div class="qdtitulo">
                          PEDÁGIO SOBRE O FRETE
                        </div>
                        <div class="qdconteudo" id="valor10">
                        </div>
                      </section>
                      <section class="pesomedioentrega">
                        <div class="qdtitulo">
                          PESO MÉDIO POR ENTREGA (TON)
                        </div>
                        <div class="qdconteudo"  id="valor11">
      
                        </div>
                      </section>
                    </section>
                  </div>
                </div>
                </section>
      
              <section class="anFreteQtdEntrega">
                <div class="title_box10" id="bill_to">
                  <div id="title10">Análise do frete em relação a quantidade de entrega</div>
                    <div id="content10">
                      <section class="anFreteQtdEntrega2" id="anFreteQtdEntrega2">
                        <section class="qtddocs">
                          <div class="qdtitulo">
                            QUANTIDADE DE DOCUMENTOS EMITIDOS
                          </div>
                          <div class="qdconteudo" id="valor12">
      
                          </div>
                        </section>
                        <section class="vrfreteporentrega">
                          <div class="qdtitulo">
                            VALOR DO FRETE POR ENTREGA
                          </div>
                          <div class="qdconteudo" id="valor13">
      
                          </div>
                        </section>
                      </section>
                    </div>
                  </div>
              </section>
              <section class="anFreteTon">
                <div class="title_box11" id="bill_to">
                  <div id="title11">Análise do frete em relação a tonelagem transportada</div>
                    <div id="content11">
                      <section class="anFreteTon2" id="anFreteTon2">
                      <section class="toneladatransp">
                        <div class="qdtitulo">
                          TONELADAS TRANSPORTADAS
                        </div>
                        <div class="qdconteudo" id="valor14">
      
                        </div>
                      </section>
                      <section class="vrfreteporton">
                        <div class="qdtitulo">
                          VALOR DO FRETE POR TONELADA
                        </div>
                        <div class="qdconteudo" id="valor15">
      
                        </div>
                      </section>
                    </section>
                    </div>
                  </div>
              </section>
            </section>
          </section>
  </div>



  <script src="https://www.gstatic.com/firebasejs/5.7.0/firebase.js"></script>
  <script>
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyD4TjSjtcD8br0PgnOGDKzIAtdI1jzY58E",
      authDomain: "paine-ajofer.firebaseapp.com",
      databaseURL: "https://paine-ajofer.firebaseio.com",
      projectId: "paine-ajofer",
      storageBucket: "paine-ajofer.appspot.com",
      messagingSenderId: "591866816937"
    };
    firebase.initializeApp(config);
  </script>
  <script src="index.js"></script>

</body>
</html>