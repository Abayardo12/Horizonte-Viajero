// Insertar NAVBAR
document.addEventListener("DOMContentLoaded", function () {
  const navHTML = `
    <nav class="navbar navbar-expand-lg nav-overlay fixed-top">
      <div class="container">
        <!-- Logo -->
     <a class="navbar-brand logo-container" href="index.html">
  <img id="desktop-logo" src="Img/Logo.png" alt="Logo completo" class="desktop-logo">
  <img id="mobile-logo" src="Img/logo-responsive.png" alt="Icono" class="mobile-logo">
</a>

        <!-- Botón hamburguesa -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNav" aria-controls="navbarNav"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Contenido colapsable -->
        <div class="collapse navbar-collapse navmargen" id="navbarNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href="index.html">Inicio</a></li>
            <li class="nav-item"><a class="nav-link" href="index.html#destinos">Destinos</a></li>
            <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
            <li class="nav-item"><a class="nav-link" href="preguntas frecuentes.html">Ayuda</a></li>
            <li class="nav-item"><a class="nav-link" href="preguntas frecuentes.html#contactoform">Contacto</a></li>
          </ul>

      </div>
    </nav>
  `;

  document.getElementById("navbar-placeholder").innerHTML = navHTML;
});

// Cambiar logo al hacer scroll
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const desktopLogo = document.getElementById("desktop-logo");
  const mobileLogo = document.getElementById("mobile-logo");

  if (scrollY > 50) {
    // Cambia a logos en blanco
    desktopLogo.src = "Img/Logo-blanco.png";
    mobileLogo.src = "Img/logo-responsive-blanco.png";
  } else {
    // Restaura los logos originales
    desktopLogo.src = "Img/Logo.png";
    mobileLogo.src = "Img/logo-responsive.png";
  }
});


// FOOTER HTML como plantilla
const footerHTML = `
  <footer class="footer-horizonte" id="contacto">
    <div class="footer-overlay">
      <div class="footer-content container">
        <div class="footer-columns">
          <div class="footer-column">
            <h4>Explorar</h4>
            <ul>
              <li><a href="index.html#Destinos principales">Destinos principales</a></li>
              <li><a href="index.html#destinos">Ofertas</a></li>
              <li><a href="blog.html">Blog</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Ayuda</h4>
            <ul>
              <li><a href="preguntas frecuentes.html">Preguntas Frecuentes</a></li>
              <li><a href="preguntas frecuentes.html#contactoform">Contacto</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h4>Conectá</h4>
            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-logo">
          <img src="Img/Logo.png" alt="Horizonte Viajero" class="footer-logo-img">
        </div>
      </div>
    </div>
  </footer>
`;

// Inserta el FOOTER y funcionalidad del FAQ
window.addEventListener('DOMContentLoaded', () => {
  // Guardar el contenido actual
  const originalContent = document.body.innerHTML;

  // Crear estructura principal
  const wrapper = document.createElement('div');
  wrapper.className = 'main-wrapper';

  const main = document.createElement('main');
  main.innerHTML = originalContent;

  // Armar la estructura
  wrapper.appendChild(main);
  wrapper.insertAdjacentHTML('beforeend', footerHTML);

  // Reemplazar el body
  document.body.innerHTML = '';
  document.body.appendChild(wrapper);

  // ✅ ACTIVAR FAQ ACCORDION
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    }
  });
});


// posteo.js

// ======================
// Contenido de las publicaciones
// ======================

const posts = {
playas: {
  title: "5 playas secretas en Brasil que tenés que conocer",
  img: "img/playabrasil.jpg",
  intro: "Descubrí paraísos ocultos lejos del turismo masivo. Ideal para relajarte.",
  content: `
    <p>Brasil es sinónimo de playas paradisíacas, pero más allá de los clásicos como Copacabana o Ipanema, existe un universo de joyas escondidas a lo largo de sus 7.000 km de costa. En este artículo te llevamos a recorrer cinco playas secretas donde la tranquilidad, la belleza natural y la desconexión total son protagonistas.</p>

    <h4>1. Praia do Sancho – Fernando de Noronha</h4>
    <p>Elegida varias veces como la playa más hermosa del mundo, Praia do Sancho es un verdadero santuario escondido entre acantilados. Para llegar hay que descender por una escalera empotrada en la roca, pero la recompensa es única: arena dorada, aguas cristalinas y un entorno protegido donde incluso podés nadar con tortugas marinas.</p>

    <h4>2. Patacho – Alagoas</h4>
    <p>Ubicada en la región norte de Alagoas, Praia do Patacho es todavía poco explorada por el turismo internacional. Palmeras interminables, mar turquesa y posadas boutique sustentables hacen de este lugar un paraíso minimalista. Ideal para parejas que buscan privacidad y contacto con la naturaleza sin multitudes.</p>

    <h4>3. Galinhos – Río Grande do Norte</h4>
    <p>Galinhos es una península aislada, a la que solo se accede en barcaza. Es un lugar detenido en el tiempo, donde la pesca artesanal convive con dunas doradas y manglares. Sus playas son amplias, tranquilas y con viento constante, perfectas para relajarse o practicar kitesurf en paz.</p>

    <h4>4. Praia do Espelho – Bahía</h4>
    <p>A solo una hora de Trancoso, esta playa parece un secreto bien guardado. Se llama "Espelho" (espejo) por el reflejo del cielo sobre el agua en los días tranquilos. Rodeada de acantilados y vegetación densa, combina rusticidad con charme. Aunque tiene algo más de estructura, sigue siendo un rincón exclusivo y silencioso.</p>

    <h4>5. Lagoinha do Leste – Santa Catarina</h4>
    <p>Para los aventureros, esta playa escondida en Florianópolis es un tesoro que se gana con esfuerzo: solo se accede por senderos entre morros o por barco. Es virgen, salvaje y con un paisaje único: mar bravo de un lado y una laguna tranquila del otro. El lugar perfecto para acampar y sentir la conexión pura con el entorno.</p>

    <h4>Consejos para visitar playas secretas en Brasil</h4>
    <ul>
      <li><strong>Movete con respeto:</strong> muchas de estas playas están en zonas de conservación ambiental. Llevate tus residuos y evitá dañar el ecosistema.</li>
      <li><strong>Preguntá a los locales:</strong> son quienes mejor conocen mareas, accesos y puntos seguros.</li>
      <li><strong>Planeá con tiempo:</strong> algunas requieren logística previa, como traslados en 4x4 o reserva de hospedaje remoto.</li>
    </ul>

    <p>Explorar estas playas escondidas es regalarte una experiencia distinta: sin parlantes, sin vendedores, sin apuro. Solo mar, sol, naturaleza y silencio. Si lo que buscás es reconectar con vos y escapar del ruido del mundo, este viaje te va a marcar.</p>
  `
} ,
mochila: {
  title: "Cómo preparar tu mochila para un viaje de aventura",
  img: "img/aventura.jpg",
  intro: "Aprender a empacar con criterio puede marcar la diferencia entre una aventura disfrutable y una carga innecesaria.",
  content: `
    <p>Preparar bien tu mochila no se trata solo de ahorrar espacio, sino de llevar lo justo y necesario para moverte con libertad, adaptarte a distintos entornos y resolver imprevistos sin cargar de más. Empacar no es solo una cuestión práctica, sino también estratégica: lo que decidas incluir (o dejar fuera) puede afectar directamente tu comodidad, seguridad y disfrute durante todo el viaje.</p>

    <h4>1. Definí el tipo de aventura</h4>
    <p>No es lo mismo empacar para un trekking de varios días que para un viaje urbano con escapadas. Determiná si vas a dormir al aire libre, cocinar por tu cuenta o moverte en transporte público. Cada variable define qué objetos son realmente necesarios.</p>

    <h4>2. Elegí la mochila adecuada</h4>
    <p>El tamaño sí importa. Una mochila de entre 40 y 60 litros suele ser ideal para viajes de aventura medianos. Asegurate de que tenga refuerzo lumbar, correas ajustables, bolsillos accesibles y cinturón de carga. Probala antes del viaje, con peso real.</p>

    <h4>3. Organizá por zonas y accesibilidad</h4>
    <p>Lo pesado y voluminoso (como bolsa de dormir o comida) va cerca de la espalda y en la parte central. Lo liviano arriba, y lo que necesitás seguido (abrigo, agua, snacks, documentos) en bolsillos externos o superiores. Usá bolsas de tela o cubos de embalaje para separar por categorías.</p>

    <h4>4. Llevá lo justo, no “por si acaso”</h4>
    <p>Evitá el clásico error de empacar extras innecesarios. Preguntate: ¿esto lo voy a usar seguro? ¿Puedo conseguirlo en el camino si lo necesito? Apostá por prendas versátiles y objetos multiuso. Cada gramo cuenta cuando llevás la carga en la espalda.</p>

    <h4>5. No descuides lo esencial</h4>
    <p>Botiquín básico, linterna frontal con pilas, silbato, navaja multifunción, protector solar, bolsa de residuos, documentación y algo de efectivo siempre deben estar en la lista. También sumá una muda seca de ropa en bolsa impermeable por si todo se moja.</p>

    <h4>6. Considerá el clima y las capas</h4>
    <p>Vestite por capas: primera capa transpirable, segunda térmica y una exterior impermeable. No te olvides de gorro, guantes y buff. Incluso en verano el clima puede cambiar radicalmente en pocas horas, especialmente en zonas de montaña.</p>

    <h4>7. Testeá tu mochila antes de salir</h4>
    <p>Hacé al menos una caminata de prueba con la mochila cargada. Así podés ajustar correas, identificar puntos incómodos o peso mal distribuido. Un mal ajuste en la cadera o los hombros puede terminar en dolor o lesiones en una travesía larga.</p>

    <h4>8. Menos es más: lo que podés dejar</h4>
    <p>No lleves ropa para cada día, sino prendas que se puedan combinar, lavar y secar rápido. Evitá objetos redundantes, envases grandes, libros pesados o tecnología innecesaria. Cuanto más liviano viajás, más libre y ágil te sentís.</p>

    <h4>9. Alimentación ligera y útil</h4>
    <p>Elegí alimentos que no necesiten refrigeración, sean calóricos y ocupen poco espacio: frutos secos, barras de cereal, sobres deshidratados, snacks salados. Si llevás cocina, optimizá el combustible y los utensilios al mínimo indispensable.</p>

    <h4>10. Revisá, ajustá y aprendé</h4>
    <p>Después de cada aventura, revisá qué usaste, qué sobró y qué te faltó. Esa es la mejor guía para empacar mejor la próxima vez. Con el tiempo vas a desarrollar tu propio sistema optimizado y adaptado a tu estilo de viaje.</p>

    <p>Empacar con inteligencia es una habilidad que se afina con la experiencia. Pero con estos consejos vas a tener una base sólida para que tu mochila sea una aliada, no una carga. Recordá: el objetivo no es llevar de todo, sino llevar lo justo para disfrutar más. Viajá liviano, viajá lejos.</p>
  `
},

montaña: {
  title: "Trekking entre montañas: lo que nadie te cuenta",
  img: "img/Trekking.jpg",
  intro: "Consejos prácticos y realistas para enfrentar senderos de montaña sin sorpresas.",
  content: `
    <p>Explorar senderos de montaña puede parecer sencillo en fotos, pero en la práctica, cada paso cuenta. Desde la elección del calzado hasta la forma en que cargás tu mochila, cada decisión afecta tu rendimiento, seguridad y experiencia general.</p>

    <h4>1. Elegí el sendero según tu nivel y preparación</h4>
    <p>No todos los caminos de montaña son iguales. Hay rutas de baja dificultad ideales para comenzar y otras que requieren experiencia técnica, aclimatación o incluso equipo de escalada. Informate bien antes de salir: investigá la distancia, el desnivel, la altitud máxima, el tipo de terreno y la duración estimada. Evitá sobreestimar tus capacidades: en la montaña, el cansancio se acumula rápido.</p>

    <h4>2. Clave: calzado, medias y prevención de ampollas</h4>
    <p>El calzado es tu conexión con el terreno. Usá botas de trekking con buen agarre, caña media o alta según el terreno, y que ya hayas usado antes. Evitá estrenar calzado en travesías largas. Combiná con medias técnicas (ni muy gruesas ni muy finas) y llevá siempre curitas, cinta adhesiva y apósitos tipo Compeed. Las ampollas pueden arruinar una salida increíble.</p>

    <h4>3. Ropa por capas: preparate para todo</h4>
    <p>En la montaña el clima cambia rápido. Usá el sistema de capas: una primera capa transpirable (nunca algodón), una segunda capa térmica y una capa exterior impermeable. Agregá gorro, guantes livianos y buff. Incluso en verano podés enfrentar viento frío, niebla o tormentas eléctricas en altura.</p>

    <h4>4. Cómo distribuir bien la mochila</h4>
    <p>Llevá solo lo necesario, pero con lógica. Objetos más pesados cerca de tu espalda, livianos arriba. Lo que necesitás rápido (cortaviento, agua, snacks) accesible. Nunca olvides: protector solar, linterna frontal, botiquín básico, silbato, mapa o GPS y una bolsa de residuos. Dejá espacio para imprevistos.</p>

    <h4>5. Ritmo, pausas y señal de alerta del cuerpo</h4>
    <p>El trekking no es una carrera. Mantené un ritmo constante, respirá profundo y parate cada tanto. Si te duele la cabeza, sentís náuseas o estás muy fatigado: no sigas. Podés estar deshidratado, hipoglucémico o con mal de altura. Hidratarte y escuchar tu cuerpo es tan importante como avanzar.</p>

    <h4>6. Alimentación práctica y energética</h4>
    <p>Llevá snacks livianos pero calóricos: frutos secos, barras de cereal, chocolate negro, galletas de avena. En salidas largas, sumá algún sándwich, fruta resistente (como manzana), y sal de rehidratación en polvo. Comé en movimiento o en descansos cortos. Evitá llenarte o consumir alimentos pesados.</p>

    <h4>7. Técnica en bajadas: rodillas, tobillos y equilibrio</h4>
    <p>La bajada suele ser más exigente que la subida. Flexioná ligeramente las rodillas, bajá con pasos cortos y firmes, y usá bastones si tenés. No te lances con inercia: una torcedura puede ocurrir en segundos. Si llevás mochila, compensá el peso inclinando el cuerpo levemente hacia atrás.</p>

    <h4>8. Respetá el entorno y dejá todo como estaba</h4>
    <p>No grites, no dejes basura, no saques piedras ni flores. Caminá por las sendas marcadas para no erosionar el terreno ni molestar la fauna. Si llevás papel higiénico o envoltorios, guardalos en una bolsa sellada. El impacto de cada persona cuenta.</p>

    <h4>9. Planeá tu regreso con margen de luz</h4>
    <p>Siempre tené un horario de corte para iniciar el regreso. No subestimes el tiempo de bajada. Asegurate de llegar a un punto seguro antes del atardecer, especialmente si no conocés bien el sendero o si no llevás linterna frontal con baterías cargadas.</p>

    <h4>10. Disfrutá del camino, no solo del destino</h4>
    <p>El trekking no es solo llegar a la cima, sino vivir cada paso. Observá el paisaje, escuchá los sonidos del bosque o la montaña, registrá las sensaciones del cuerpo en movimiento. Agradecé el silencio, la simpleza, el esfuerzo. La montaña te devuelve lo que vos le das: respeto y atención.</p>

    <p>Con preparación y humildad, la montaña puede ser una experiencia transformadora. Este artículo está pensado para que te sientas más libre y más seguro al caminarla. Recordá: ningún paisaje vale una imprudencia. Y la mejor vista es siempre la que podés mirar sin apuro, con todos los sentidos abiertos.</p>
  `
}
,
surf: {
  title: "Surf seguro: consejos esenciales para disfrutar sin riesgos",
  img: "img/surf-mujer.jpg", // asegurate de tener esta imagen en tu carpeta /img/
  intro: "Aprendé a surfear con responsabilidad y a cuidar tu cuerpo, tu entorno y a los demás en el agua.",
  content: `
    <p>El surf es mucho más que un deporte: es una forma de conectarte con la naturaleza, mantener tu cuerpo activo y liberar la mente. Pero como toda actividad acuática, tiene sus riesgos. La buena noticia es que con información, preparación y sentido común, podés disfrutarlo al máximo sin ponerte en peligro.</p>

    <p>Ya sea que estés empezando o tengas algo de experiencia, nunca está de más repasar algunos principios clave para surfear de forma segura y consciente. En este artículo te compartimos recomendaciones prácticas para prepararte antes de entrar al agua, cuidarte durante la sesión y proteger el entorno marino que tanto disfrutamos.</p>

    <h4>1. Elegí el lugar adecuado para tu nivel</h4>
    <p>Muchas lesiones o sustos ocurren simplemente por estar en una playa que no se adapta a tu experiencia. Si sos principiante, buscá spots con olas suaves, fondo de arena y sin crowd agresivo. Evitá point breaks o playas con rocas hasta que ganes más control sobre la tabla.</p>

    <h4>2. Informate sobre las condiciones del mar</h4>
    <p>Antes de entrar, chequeá las condiciones: dirección y tamaño del swell, mareas, corrientes, viento. Existen apps como MagicSeaweed o Windy que te ayudan. Y si podés, hablá con surfistas locales: su experiencia vale más que cualquier pronóstico.</p>

    <h4>3. Calentá antes de surfear</h4>
    <p>El surf exige reflejos, resistencia y elasticidad. Hacer un buen calentamiento previo reduce el riesgo de tirones o contracturas, y te activa física y mentalmente. Movimientos de cuello, hombros, caderas y estiramientos dinámicos son fundamentales.</p>

    <h4>4. Usá el equipo adecuado</h4>
    <p>La tabla, el leash y el traje deben ser los correctos para tu talla, nivel y la temperatura del agua. Usar un leash en mal estado puede provocar que pierdas la tabla y ponerte en peligro. Y un neoprene demasiado chico puede limitar tus movimientos o causarte calambres.</p>

    <h4>5. Respetá la prioridad y el entorno</h4>
    <p>El respeto en el agua es clave para evitar accidentes. Nunca remes una ola que otro ya está tomando. Mantenete fuera del camino si no tenés prioridad. Y recordá: los surfistas compartimos un ecosistema frágil. No dejes basura, no pises los corales y no molestes la fauna.</p>

    <h4>6. Conocé tus límites</h4>
    <p>El ego no tiene lugar en el mar. Si sentís que estás muy cansado, que las olas crecieron demasiado o que estás perdiendo control, salí. A veces la mejor decisión es mirar desde la orilla. El océano no se va a ningún lado y siempre hay otra oportunidad para surfear.</p>

    <h4>7. Aprendé RCP y primeros auxilios</h4>
    <p>Podés no necesitarlo nunca, pero si un día alguien se accidenta cerca tuyo, saber cómo actuar puede salvarle la vida. Existen cursos accesibles que te enseñan lo básico. Como surfista, sos parte de una comunidad. Estar preparado es parte de cuidarnos entre todos.</p>

    <p>Surfear seguro no significa tener miedo. Significa estar presente, informado y atento. Cuando entendés al mar y lo respetás, la experiencia es aún más poderosa. Cuidate, cuidá a los demás, y disfrutá cada ola como si fuera la primera.</p>
  `
}

};

// ===== Generar dinámicamente el blog si existe el contenedor =====
document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blog-container");
  if (blogContainer) {
    for (const [id, post] of Object.entries(posts)) {
      const card = document.createElement("article");
      card.className = "blog-card";

      card.innerHTML = `
        <img src="${post.img}" alt="${post.title}">
        <div class="blog-card-content">
          <h3>${post.title}</h3>
          <p>${post.intro}</p>
          <a href="posteo.html?id=${id}">Leer más →</a>
        </div>
      `;

      blogContainer.appendChild(card);
    }
  }
});

// ======================
// Obtener ID de URL y renderizar contenido
// ======================

const params = new URLSearchParams(window.location.search);
const postId = params.get("id");
const post = posts[postId];

// Log para debug (podés borrar si no necesitás)
console.log("Post ID:", postId);
console.log("Post encontrado:", post);

if (post) {
  document.getElementById("post-title").textContent = post.title;
  document.getElementById("post-img").src = post.img;
  document.getElementById("post-img").alt = post.title;
  document.getElementById("post-intro").textContent = post.intro;
  document.getElementById("post-content").innerHTML = post.content;

  renderRelatedPosts(postId); // ✅ Esto activa los relacionados
} else {
  document.getElementById("post-container").innerHTML = `<p class="text-danger">Publicación no encontrada.</p>`;
}

// ======================
// Renderizar artículos relacionados
// ======================

function renderRelatedPosts(currentId, max = 2) {
  const relatedContainer = document.getElementById("related-container");
  if (!relatedContainer) return;

  relatedContainer.innerHTML = "";
  let count = 0;

  for (const [id, post] of Object.entries(posts)) {
    if (id !== currentId && count < max) {
      const col = document.createElement("div");
      col.className = "col-md-6";

      col.innerHTML = `
        <a href="posteo.html?id=${id}" class="related-card text-decoration-none d-flex align-items-center p-2 shadow-sm rounded bg-white">
          <img src="${post.img}" alt="${post.title}" class="related-thumb me-3">
          <div>
            <small class="text-uppercase text-muted mb-1 d-block">Consejo</small>
            <h4 class="fs-6 fw-semibold mb-0">${post.title}</h4>
          </div>
        </a>
      `;

      relatedContainer.appendChild(col);
      count++;
    }
  }
}


// ======================
// Artículos relacionados (2 máx, diferentes del actual)
// ======================

function renderRelatedPosts(currentId, max = 2) {
  const relatedContainer = document.getElementById("related-container");
  if (!relatedContainer) return;

  relatedContainer.innerHTML = "";
  let count = 0;

  for (const [id, post] of Object.entries(posts)) {
    if (id !== currentId && count < max) {
      const col = document.createElement("div");
      col.className = "col-md-6";

      col.innerHTML = `
        <a href="posteo.html?id=${id}" class="related-card text-decoration-none d-flex align-items-center p-2 shadow-sm rounded bg-white">
          <img src="${post.img}" alt="${post.title}" class="related-thumb me-3">
          <div>
            <small class="text-uppercase text-muted mb-1 d-block">Consejo</small>
            <h4 class="fs-6 fw-semibold mb-0">${post.title}</h4>
          </div>
        </a>
      `;

      relatedContainer.appendChild(col);
      count++;
    }
  }
}


document.addEventListener('DOMContentLoaded', function () {
  console.log("Inicializando carrusel...");

  const carouselElement = document.querySelector('#carouselExampleDark');

  if (carouselElement && typeof bootstrap !== 'undefined') {
    new bootstrap.Carousel(carouselElement, {
      interval: 4000,
      ride: 'carousel',
      pause: false,
      wrap: true
    });
    console.log("Carrusel inicializado correctamente.");
  } else {
    console.error("No se encontró el carrusel o Bootstrap no está definido.");
  }
});


