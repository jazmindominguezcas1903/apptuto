// El contenedor en home.html se llama "contenedorTemas"

document.addEventListener('DOMContentLoaded', () => {
  const cont = document.getElementById('contenedorTemas');

  if (!cont) return;

  const temas = [

    /* 1 */ {
      titulo: "a) Sistemas Operativos móviles y sus arquitecturas",
      img: "iso.jpg",
      contenido: `
<p><strong>Resumen:</strong> Un sistema operativo móvil (SOM) controla hardware, gestiona procesos, memoria, seguridad y ofrece una plataforma para apps.</p>

<p><strong>Sistemas más usados:</strong> Android (Linux-based), iOS (Darwin/Objective-C/Swift), HarmonyOS, KaiOS.</p>

<p><strong>Arquitecturas de CPU:</strong> <em>ARM</em> (RISC) domina por ahorro de energía; <em>ARM64</em> es estándar hoy; <em>x86</em> rara vez se usa en móviles.</p>

<p><strong>Capas típicas:</strong> Kernel → HAL → Librerías nativas (OpenGL, SQLite) → Runtime (ART/JVM) → Framework → UI.</p>

<p><strong>Ejemplo práctico:</strong> Android Runtime (ART) compila bytecode DEX a código nativo para mejor rendimiento y aislamiento. Muchos fabricantes agregan HAL para cámaras, biometría y sensores.</p>

<p><a class="btn-info" href="https://developer.android.com/guide" target="_blank">Android Dev Guide</a>
<a class="btn-info" href="https://developer.apple.com/ios/" target="_blank">iOS Dev (Apple)</a></p>`
    },

    /* 2 */ {
      titulo: "b) Aplicaciones nativas y multiplataforma",
      img: "nativas.png",
      contenido: `
<p><strong>Apps nativas:</strong> Escritas para un sistema específico (Kotlin/Java para Android; Swift/ObjC para iOS). Máximo acceso al hardware y rendimiento.</p>

<p><strong>Apps multiplataforma:</strong> Flutter (Dart), React Native (JS), Ionic (WebView), Xamarin (.NET). Ofrecen desarrollo más rápido y código compartido.</p>

<p><strong>Comparativa:</strong></p>
<ul class="lista-puntos">
  <li><strong>Rendimiento:</strong> Nativa > React Native ≈ Flutter</li>
  <li><strong>Desarrollo:</strong> Multiplataforma reduce tiempo y coste</li>
  <li><strong>Acceso a hardware:</strong> Nativo tiene ventaja; bridges/plugins solucionan esto en multiplataforma</li>
</ul>

<p><strong>Ejemplo:</strong> Crear un plugin de cámara en React Native que exponga la API nativa para ajustar exposición.</p>

<p><a class="btn-info" href="https://flutter.dev" target="_blank">Flutter</a>
<a class="btn-info" href="https://reactnative.dev" target="_blank">React Native</a></p>`
    },

    /* 3 */ {
      titulo: "c) Hardware de dispositivos móviles",
      img: "mobiles.png",
      contenido: `
<p><strong>Componentes clave:</strong> SoC (CPU + GPU + NPU), RAM, almacenamiento flash (UFS/eMMC), módem, batería, cámaras, sensores (acelerómetro, giroscopio, magnetómetro), pantallas táctiles.</p>

<p><strong>SoC moderno:</strong> Integra CPU de varios núcleos (big.LITTLE), GPU para gráficos, NPU para IA, ISP para cámaras y módem 4G/5G.</p>

<p><strong>Ejemplo de uso:</strong> La NPU acelera inferencia local (por ejemplo, reconocimiento de imágenes) sin enviar datos a la nube, mejorando privacidad y latencia.</p>

<p><a class="btn-info" href="https://www.qualcomm.com" target="_blank">Qualcomm (SoC)</a></p>`
    },

    /* 4 */ {
      titulo: "d) Lenguajes de programación de aplicaciones móviles",
      img: "programacion.png",
      contenido: `
<p>Lenguajes principales:</p>
<ul class="lista-puntos">
  <li><strong>Android:</strong> Kotlin (recomendado), Java</li>
  <li><strong>iOS:</strong> Swift (recomendado), Objective-C</li>
  <li><strong>Multiplataforma:</strong> Dart (Flutter), JavaScript/TypeScript (React Native), C# (Xamarin)</li>
</ul>

<p><strong>Ejemplo sencillo (Kotlin):</strong></p>
<pre><code>class MainActivity : AppCompatActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)
  }
}</code></pre>

<p><a class="btn-info" href="https://kotlinlang.org" target="_blank">Kotlin</a>
<a class="btn-info" href="https://developer.apple.com/swift/" target="_blank">Swift</a></p>`
    },

    /* 5 */ {
      titulo: "e) Entornos y herramientas de desarrollo nativo",
      img: "herramientas.png",
      contenido: `
<p><strong>Android Studio:</strong> IDE oficial; incluye emuladores, depurador, profiler.</p>
<p><strong>Xcode:</strong> IDE oficial para iOS; incluye simulador, instrumentos de rendimiento.</p>

<p><strong>Otras herramientas:</strong> Visual Studio Code (para Flutter/ReactNative), Firebase CLI, Fastlane (automatización de builds y distribución).</p>

<p><a class="btn-info" href="https://developer.android.com/studio" target="_blank">Android Studio</a>
<a class="btn-info" href="https://developer.apple.com/xcode/" target="_blank">Xcode</a></p>`
    },

    /* 6 */ {
      titulo: "f) Diseño de interfaces de usuario utilizando controles",
      img: "interfaz.png",
      contenido: `
<p>Controles comunes: botones, inputs, listas (RecyclerView/ListView), cards, menús, diálogos, switches, sliders.</p>

<p><strong>Buenas prácticas:</strong> consistencia, accesibilidad (labels, contrastes), tamaño de targets táctiles, feedback visual.</p>

<p><strong>Ejemplo:</strong> En Android usar ConstraintLayout para diseño responsivo y RecyclerView para listas grandes.</p>

<p><a class="btn-info" href="https://material.io/design" target="_blank">Material Design</a></p>`
    },

    /* 7 */ {
      titulo: "g) Guías de estilo o bibliotecas de componentes visuales para controles",
      img: "guias.png",
      contenido: `
<p>Guías oficiales:</p>
<ul class="lista-puntos">
  <li><strong>Material Design (Google)</strong></li>
  <li><strong>Human Interface Guidelines (Apple)</strong></li>
</ul>

<p>Bibliotecas útiles:</p>
<ul class="lista-puntos">
  <li>Material Components (Android)</li>
  <li>UIKit (iOS)</li>
  <li>React Native Paper, Flutter Material/Cupertino</li>
</ul>

<p><a class="btn-info" href="https://material.io" target="_blank">Material.io</a></p>`
    },

    /* 8 */ {
      titulo: "h) Arquitecturas y patrones de diseño",
      img: "diseño.jpg",
      contenido: `
<p>Patrones/arquitecturas comunes: MVC, MVP, MVVM, Clean Architecture (capas: UI, domain, data).</p>

<p><strong>Beneficios:</strong> separación de responsabilidades, testabilidad, mantenimiento.</p>

<p><strong>Ejemplo (MVVM):</strong> ViewModel -> Observa datos y expone LiveData al View (Activity/Fragment).</p>`
    },

    /* 9 */ {
      titulo: "i) Herramientas de control de versiones",
      img: "versiones.jpg",
      contenido: `
<p>Git: sistema distribuido. Plataformas: GitHub, GitLab, Bitbucket.</p>

<p><strong>Flujo recomendado:</strong> rama principal protegida (main/master), feature branches, PR/MR con revisión de código.</p>

<p><a class="btn-info" href="https://git-scm.com" target="_blank">Git</a>
<a class="btn-info" href="https://github.com" target="_blank">GitHub</a></p>`
    },

    /* 10 */ {
      titulo: "j) Persistencia y acceso a datos",
      img: "acceso datos.png",
      contenido: `
<p>Opciones locales: SharedPreferences (clave/valor), SQLite, Room (ORM para Android). Remotas: REST APIs, GraphQL, Firebase Firestore.</p>
x
<p><strong>Offline-first:</strong> cache local + sincronización posterior (conflictos, timestamps).</p>

<p><a class="btn-info" href="https://developer.android.com/topic/libraries/architecture/room" target="_blank">Room</a></p>`
    },

    // --- ahora los temas que ya estaban y más información adicional
    {
      titulo: "Gestión de Sensores (habilitación, obtención y procesamiento)",
      img: "sensores.png",
      contenido: `
<p>Proceso:</p>
<ol class="lista-puntos">
  <li><strong>Habilitación:</strong> solicitar permisos (runtime permissions en Android)</li>
  <li><strong>Obtención:</strong> usar APIs del sistema (SensorManager, CoreMotion)</li>
  <li><strong>Procesamiento:</strong> filtrar ruido, integrar señales, calcular métricas (ej. conteo pasos)</li>
</ol>

<p><strong>Ejemplo:</strong> usar acelerómetro + algoritmo de detección de pasos para contar pasos en una app de fitness.</p>`
    },

    {
      titulo: "Servicios y Notificaciones",
      img: "notificacion.png",
      contenido: `
<p>Servicios en Android: Foreground services (ej. reproducción audio), Background tasks (WorkManager), Push Notifications (Firebase Cloud Messaging).</p>
<p><strong>Notificaciones:</strong> diseño de canales (Android 8+), acciones rápidas, deep links.</p>`
    },

    {
      titulo: "Proveedor de contenido, tareas en segundo plano y notificaciones (implementación)",
      img: "programacion.png",
      contenido: `
<p>Explicar: ContentProvider en Android para compartir datos entre apps; WorkManager/BackgroundTasks para trabajos periódicos; FCM para push.</p>

<p><strong>Ejemplo:</strong> sincronización periódica de una DB local con servidor usando WorkManager y notificar cambios con FCM.</p>`
    },

    {
      titulo: "Servicios de cómputo en la nube aplicables",
      img: "servicioscomputo.png",
      contenido: `
<p>Ejemplos y usos:</p>
<ul class="lista-puntos">
  <li>Firebase: Auth, Firestore, Storage, Cloud Functions</li>
  <li>AWS Amplify / AWS Mobile (AppSync, Lambda)</li>
  <li>Azure Mobile Apps</li>
</ul>

<p><a class="btn-info" href="https://firebase.google.com" target="_blank">Firebase</a></p>`
    },

    {
      titulo: "Librerías y toolkits para desarrollo móvil",
      img: "tokens.png",
      contenido: `
<p>Lista breve:</p>
<ul class="lista-puntos">
  <li>Retrofit / OkHttp (HTTP)</li>
  <li>Glide / Picasso (imágenes)</li>
  <li>Room (persistencia)</li>
  <li>RxJava / Coroutines (concurrencia)</li>
</ul>`
    },

    {
      titulo: "Depuración y seguridad en el desarrollo de Apps",
      img: "depuracion.png",
      contenido: `
<p>Herramientas: Logcat, Android Profiler, Instruments (iOS), breakpoints, unit/integration testing.</p>

<p>Seguridad: permisos runtime, almacenamiento cifrado, uso de HTTPS/TLS, almacenamiento seguro de credenciales (keystore/Keychain), validación en servidor.</p>`
    },

    {
      titulo: "Herramientas para empaquetado y despliegue",
      img: "herramientas.png",
      contenido: `
<p>Empaquetado:</p>
<ul class="lista-puntos">
  <li>APK / AAB (Android)</li>
  <li>IPA (iOS)</li>
</ul>

<p>Automatización: Fastlane, Gradle CI, Bitrise, GitHub Actions para builds y despliegues.</p>`
    },

    {
      titulo: "Plataformas y canales de distribución",
      img:"programacion.png",
      contenido: `
<p>Canales:</p>
<ul class="lista-puntos">
  <li>Google Play / App Store</li>
  <li>Distribución empresarial / Sideloading</li>
  <li>Beta vía TestFlight / Google Play Beta</li>
</ul>

<p>Tipos de pruebas: internas, cerradas (beta), abiertas (publica).</p>`
    }

  ]; // end temas array

  // renderizar
  temas.forEach(t => {
    const div = document.createElement('article');
    div.className = 'tema-card';
    div.innerHTML = `
      <img src="${t.img}" alt="${escapeHtml(t.titulo)}" class="tema-img" />
      <h3>${t.titulo}</h3>
      <div class="tema-content">${t.contenido}</div>
    `;
    cont.appendChild(div);
  });
});

// util pequeño para escapar (si se necesita)
function escapeHtml(s) {
  return String(s).replace(/[&<>"'`=\/]/g, function (c) {
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','/':'&#x2F;','`':'&#x60;','=':'&#x3D;'}[c];
  });
}
