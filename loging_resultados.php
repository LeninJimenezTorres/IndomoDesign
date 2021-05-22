<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <!-- <meta http-equiv="X-UA-Compatible" content="IE=edge">-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="styles.css">
    <title>Consulta Resultados</title>
</head>
<body>
    <div class="big-container">
        <div class="container-body">
            <div class="body-left"></div>
            <div class="body-right"></div>
            <header class="encabezado">
                <div class="container-header-2">
                    <h1>SCOL</h1>
                </div>
                <div class="container-header-1">
                    <p>Sistema de Consulda Online Lux</p>
                </div>

                <!-- <div class="container-menu">
                    <nav>
                        <ul>
                            <li><a href="https://laboratoriocpi.com/">INICIO</a></li>
                            <li><a href="#">ADQUIRIR SISTEMA</a></li>
                        </ul>
                    </nav>
                </div> -->
            
            </header>  
            <div class="formulario">
                <form action="./loging_resultados.php" method="post">
                    <input class="usuario" type="text" name="user" placeholder="Ingrese su usuario">
                    <button class="boton" type="submit">Ingresar</button>
                </form>
            </div>
            <footer>
                <div class="pie">
                    <div class="developer">
                        <h3>DEVELOPED BY</h3>
                        
                        <h4>LENIN JIMENEZ TORRES</h4>
                        <h5>IT ENGINEER</h5>
                    </div>
                    <div class="comprar">
                       <button type="submit" class="boton-pie">Adquirir Sistema</button>
                    </div>
                    <div class="social">
                        <div class="contacts">
                            <h2>CONTACT</h2>
                        </div>    
                        <div class="icons">
                            <div class="linkedin">
                                <a href="#">
                                    <img class="iconL" src="./Galeria/IconoL.png">
                                </a>
                            </div>
                            <div class="instagram">
                                <a href="#">
                                    <img class="iconI"src="./Galeria/IconoI.png">
                                </a>
                            </div>
                            <div class="gmail">
                                <a href="#">
                                    <img class="iconG" src="./Galeria/IconoG.png">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <div class="derechos">
                        <p>2021 Todos los derechos reservados</p>
                    </div>
                </div>
            </footer>  
        </div>
        <video  id="videoBGS" poster="./Galeria/woman.png" autoplay muted loop>
            <source src="./Galeria/woman.mp4" type="video/mp4">
        </video>
        
    </div>
</body>
</html>