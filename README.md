<style>
    :root {
    --cabeza-height: 90px;
    --extra-margin: 20px;
}

body {
    margin: 0;
    padding: 0;
    background-color: skyblue;
}

/* Estilos para la cabeza */
.cabeza {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
    height: var(--cabeza-height);
    width: 100%;
    z-index: 1000;
    padding: 0 20px; /* Añade espacio alrededor del contenido */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

/* Estilos para el contenido de la cabeza */
.info {
    display: flex; /* Hace que los elementos se alineen en una fila */
    align-items: center; /* Alinea verticalmente los elementos */
}

.logo {
    margin-left: 20px;
    margin-right: 800px; /* Empuja el logo hacia la izquierda */
}

.logo img {
    height: var(--cabeza-height); /* Ajusta la altura del logo según el encabezado */
    width: auto;
}

.encabezado {
    display: flex;
    align-items: center;
    font-family: Avelire;
    font-weight: bold;
}

.encabezado a {
    text-decoration: none;
    color: black;
}

.tarifas, .socios{
    margin: 30px;
}

/* Estilos para el contenido principal */
.contenido, .conte {
    margin-top: calc(var(--cabeza-height) + var(--extra-margin));
    padding: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
}

table caption {
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 10px;
    color: #333;
    padding: 10px;
    background-color: #f0f0f0;
}

table th, table td {
    padding: 12px 15px;
    text-align: center;
}

table th {
    background-color: #4CAF50;
    color: white;
}

table tbody tr:nth-child(even) {
    background-color: #f2f2f2;
}

table tbody tr:hover {
    background-color: #ddd;
}
.conte{
    width: 700px;
    font-family: Astonpoliz;
    margin-left: 20px;
    padding: 20px; /* Espacio alrededor del contenido */
    background-color: #f9f9f9; /* Color de fondo */
    border: 1px solid #ddd; /* Borde */
    border-radius: 8px; /* Borde redondeado */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra */
}

.conte h2 {
    font-family: astonpoliz;
    font-size: 24px;
    color: #333; /* Cambia el color según tus preferencias */
    margin-bottom: 10px; /* Espacio inferior */
}

.conte p {
    font-family: astonpoliz;
    font-size: 16px;
    line-height: 1.6; /* Espaciado entre líneas */
    color: #666; /* Cambia el color según tus preferencias */
}

.bloque {
    background-color: #f0f0f0; /* Color de fondo */
    border-radius: 10px; /* Borde redondeado */
    margin-bottom: 20px; /* Espacio entre bloques */
    padding: 20px;
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: row;
    align-items: center; /* Centra verticalmente el contenido */
}

.bloque p, .bloque h3 {
    margin: 0;
}

.bloque h3{
    font-family: Avelire;
    font-size: 50px;
    margin-bottom: 20px;
}

.bloque2, .bloque3, .bloque4 p{
    font-family: Astonpoliz;
    font-size: 16px;
}

.bloque img {
    margin-left: 50px;
    margin-right: 50px;
    height: auto;
    width: 400px;
    border-radius: 5px; /* Borde redondeado para las imágenes */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra sutil para las imágenes */
}

.SP {
    font-family: GulfDisplay;
    font-size: 89px;
}

.eslogan {
    font-family: Verdana;
    font-size: 20px;
}

.paginado {
    bottom: 10px;
    position: fixed;
    top: var(--cabeza-height);
    float: right;
    margin-left: 84%;
    font-family: GulfDisplay;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centra verticalmente el contenido */
    align-items: center; /* Centra horizontalmente el contenido */
    min-height: var(100vh - --cabeza-height); /* Mínimo 100% del alto de la ventana */
}


.letra {
    flex: 1; /* Ocupa todo el espacio disponible */
    display: flex;
    justify-content: center; /* Centra horizontalmente la letra */
    align-items: center; /* Centra verticalmente la letra */
    font-size: 36px;
    margin: 10px;
    overflow: hidden; /* Evita que las letras se salgan del contenedor */
}

/* Estilos para el pie de página */
.pie {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
    position: relative; /* Cambiado a position: relative */
    width: 100%;
}

.pie .icpie {
    display: flex;
    justify-content: center;
    align-items: center;
}

.pie .icpie a {
    margin: 0 10px;
}

.icpie img{
    width: 25px;
    height: auto;
}

.polpie {
    margin-bottom: 10px;
}

.polpie p {
    margin: 0;
}

@media screen and (max-width: 768px) {
    .cabeza {
        flex-direction: column;
        align-items: flex-start;
    }

    .encabezado {
        margin-top: 10px;
    }
}

@media screen and (max-width: 600px) {
    .bloque {
        flex-direction: column;
    }

    .bloque img {
        margin-top: 10px; /* Espacio entre imagen y texto */
    }
}

/* Fuente personalizada */
@font-face {
    font-family: GulfDisplay;
    src: url(FUENTES/GulfsDisplay.ttf);
}

@font-face {
    font-family: Astonpoliz;
    src: url(FUENTES/Astonpoliz.otf);
}

@font-face {
    font-family: Avelire;
    src: url(FUENTES/AVELIRE.woff);
}

</style>
<body>
    <div class="cabeza">
        <div class="info">
            <div class="logo">
                <img src="IMÁGENES/Sparky Perros.png" alt="sparky">
            </div>
            <div class="encabezado">
                <div class="tarifas">
                    <a href="sptarifas.html">Tarifas</a>
                </div>
                <div class="socios">
                    <a href="spsocios.html">Socios</a>
                </div>
            </div>
        </div>
    </div>
    <div class="contenido">
        <div class="bloque bloque1">
            <div class="b1p">
                <p class="SP">Sparky Canes</p>
                <p class="eslogan">Cuidado y paseo de perros</p>
            </div>
            <div class="imb imb1">
                <img src="IMÁGENES/Schnauzer-miniatura-corriendo.jpg" alt="SPini">
            </div>
        </div>
        <div class="bloque bloque2">
            <div class="b2p">
                <h3>¿Quiénes somos?</h3>
                <p>En Sparky Canes nos dedicamos con pasión al cuidado integral y el paseo de tus 
                    mejores amigos de cuatro patas. Nuestro compromiso es brindarles atención amorosa, 
                    seguridad y diversión en cada momento que pasan con nosotros.
                </p>
            </div>
            <div class="imb imb2">
                <img src="IMÁGENES/dog-running-1.jpg" alt="SPqs">
            </div>
        </div>
        <div class="bloque bloque3">
            <div class="imb imb3">
                <img src="IMÁGENES/Mi-perro-si-esta-sano-y-saludable.jpg" alt="SPpq">
            </div>
            <div class="b3p">
                <h3>¿Por qué Sparky Canes?</h3>
                <p>Elegir Sparky Canes significa optar por un servicio que va más allá del simple 
                    cuidado de mascotas. Nos destacamos por nuestra atención personalizada, compromiso 
                    con la seguridad y el confort de cada perro, y la pasión que tenemos por lo que 
                    hacemos.</p>
            </div>
        </div>
        <div class="bloque bloque4">
            <div class="b4p">
                <h3>¿Dónde estamos?</h3>
                <p>Estamos ubicados en <em>Las Magnolias, 119, Urb. Repartición, Comas</em>. Nuestras 
                    instalaciones están diseñadas para proporcionar un ambiente acogedor y seguro, ideal 
                    para el cuidado y el paseo diario de tus amigos peludos.</p>
            </div>
            <div class="imb imb4">
                <img src="IMÁGENES/caseta-perro.jpg" alt="SPde">
            </div>
        </div>
    </div>
    <div class="pie">
        <div class="polpie">
            <p>Políticas de Privacidad</p>
        </div>
        <div class="icpie">
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank"><img src="IMÁGENES/gmsp.png" alt="gmsp"></a>
            <a href="https://www.instagram.com/sparky_canes24/" target="_blank"><img src="IMÁGENES/igsp.png" alt="igsp"></a>
            <a href="https://x.com/Sparky_Perros24" target="_blank"><img src="IMÁGENES/xsp.png" alt="xsp"></a>
        </div>
    </div>
</body>
