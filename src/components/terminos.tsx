import { useRef } from "react";


const Terminos = () => {

  const endRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow p-6">
        <div className="container mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-end mb-4">
            <button onClick={scrollToBottom} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Ir al final
            </button>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">1. CONVENIO DE USUARIO.</h2>
            <p className="text-gray-700">
              El presente Convenio (en adelante el "Convenio del Usuario") regula el uso de los servicios prestados por Cad Toner. a través del portal de internet o las páginas o sitios hospedados, ubicados o ligados al o en el mismo, el cual se ubica en la dirección www.cadtoner.com.mx (en adelante "Cad Toner" o el "Portal"). Cada vez que una persona acceda al Portal o utilice los servicios prestados por Cad Toner que se detallan más adelante, adquiere la calidad de usuario de Cad Toner (en adelante el "Usuario"). El Usuario al acceder a Cad Toner o al utilizar los servicios prestados a través del Portal acepta de manera tácita e incondicional sujetarse a los términos y condiciones contenidos en este Convenio del Usuario, por lo que se y alcance del mismo en la versión del Convenio del Usuario publicada en línea por Cad Toner de tiempo en tiempo en el momento mismo en que el Usuario acceda a Cad Toner. Por lo anterior, se recomienda al Usuario que cada vez que utilice los servicios de Cad Toner lea cuidadosamente el Convenio del Usuario ya que el mismo puede ser actualizado y/o modificado por Cad Toner en cualquier momento sin notificación personal directa al Usuario.
            </p>
            <p className="text-gray-700">
              En relación con lo anterior, el Usuario en cualquier momento podrá examinar la versión actualizada del Convenio del Usuario únicamente con oprimir el texto Convenio del Usuario que se encuentra localizado en la parte inferior de la página de acceso.
            </p>

            <h2 className="text-2xl font-bold">2. SERVICIO.</h2>
            <p className="text-gray-700">
              Cad Toner proporciona a los Usuarios, directa o indirectamente, el acceso y/o el uso, según sea el caso, de una serie de recursos, servicios y contenidos en línea a través del sistema o red global de información conocida como "Internet" (World Wide Web o www), incluyendo, pero no limitado a: Información de productos y servicios de compras electrónicas a través de los servicios de intermediación del Portal (en adelante los "Servicios"). Cad Toner se reserva el derecho de modificar, agregar o eliminar unilateralmente, en cualquier momento y sin previo aviso, los Servicios, la presentación y configuración de Cad Toner y cualquiera de los Servicios, así como las condiciones requeridas para acceder y/o utilizar cualquiera de los Servicios. De la misma forma, la adquisición, compra, venta u obtención de cualquier artículo a través de cualquiera de los Servicios es bajo el único y exclusivo riesgo de los Usuarios y
            </p>

            <h2 className="text-2xl font-bold">3. ACCESO A CAD TONER Y USO DE LOS SERVICIOS.</h2>
            <h3 className="text-xl font-bold">3.1 SERVICIO SIN COSTO.</h3>
            <p className="text-gray-700">
              La prestación de los Servicios proporcionados a los Usuarios por Cad Toner es de forma gratuita, excepto por ciertos Servicios que sólo pueden utilizarse mediante el pago de un precio y los cuales Cad Toner identificará para la utilización del Usuario de tiempo en tiempo. Cad Toner proporciona únicamente a sus Usuarios la capacidad para utilizar los Servicios por lo que el Usuario es el responsable de contar con el equipo necesario para establecer la conexión y el acceso al Internet a través de cualquier teléfono u otra conexión a través de tecnología conocida o por conocerse. El Usuario será responsable en todo momento de los costos asociados con dicho acceso.
            </p>

            <h3 className="text-xl font-bold">3.2 USO ADECUADO DE CAD TONER.</h3>
            <p className="text-gray-700">
              El Usuario se compromete a utilizar y acceder a Cad Toner y a hacer uso de los Servicios conforme a lo establecido en las leyes, la moral, las buenas costumbres y el orden público aplicables en el país en que se ubique al accesar los Servicios con lo dispuesto en este Convenio del Usuario, por lo que se obliga a abstenerse de utilizar a Cad Toner y los Servicios o de realizar actos con fines o efectos ilícitos, lesivos de derechos e intereses de terceros, contrarios al Convenio del Usuario o con fines sediciosos o clandestinos o que de cualquier forma puedan dañar, inutilizar, sobrecargar o deteriorar a Cad Toner y los Servicios o impedir su uso normal de los Usuarios, en cuyo caso Cad Toner podrá, al tener conocimiento de dicho uso, suspender los Servicios al Usuario inmediatamente después de que Cad Toner haya obtenido dicho conocimiento, y el Usuario tendrá cinco días para remediar dicho uso o expresar ante Cad Toner lo que a su derecho convenga.
            </p>

            <h3 className="text-xl font-bold">3.3 CONTENIDO CAD TONER.</h3>
            <p className="text-gray-700">
              El Usuario manifiesta que conoce y está enterado de que toda la información, datos, texto, software, sonido, fotografías, gráficas, videos, mensajes u otros materiales contenidos en Cad Toner así como el Portal mismo y su diseño de página"lay-out" (en adelante el "Contenido"), ya sea publicado para el público en general o transmitido en privado, es de la titularidad exclusiva del propietario de dicho Contenido y de la exclusiva responsabilidad de la persona que originó el Contenido y no de Cad Toner, excepto cuando expresamente se señale lo contrario. Por lo anterior, Cad Toner no es responsable del Contenido y la publicación del mismo ni representa de modo alguno la opinión de Cad Toner. El Usuario o la persona que genere el Contenido, será el único responsable del mismo ya sea que haya sido introducido, publicado, enviado por correo electrónico o que de cualquier otra manera sea transmitido a través de Cad Toner o de los Servicios.
            </p>
            <p className="text-gray-700">
              En virtud de que Cad Toner no controla el Contenido que es transmitido, almacenado o publicado a través de los Servicios, no garantiza la exactitud, veracidad, idoneidad, actualidad, integridad, utilidad o calidad del mismo. El Usuario al utilizar el Servicio, puede ser expuesto a Contenido que es ofensivo, indecente o inaceptable para él mismo o ilegal bajo las leyes aplicables en el país de residencia del Usuario o en el país en el que se ubique el Usuario al acceder a los Servicios, por lo que Cad Toner, bajo ninguna circunstancia, será responsable ante el Usuario o ante terceras personas por el Contenido, incluyendo, pero no limitado a errores de cualquier tipo u omisiones en cualquier Contenido, o de pérdidas, daños, penas y/o multas de cualquier clase en que se incurra como resultado de cualquier Contenido publicado, enviado por correo electrónico o de otra manera transmitido a través del Portal.
            </p>

            <h3 className="text-xl font-bold">3.4 USO ADECUADO DE LOS SERVICIOS DE CAD TONER.</h3>
            <p className="text-gray-700">
              En los casos en que el Usuario haga uso de aquellos Servicios que, por su naturaleza, permiten a los Usuarios introducir Contenido en Cad Toner y hacerlos accesibles a otros Usuarios, como por ejemplo, entre otros, los servicios de correo electrónico, .o compras en línea (conjuntamente en adelante "Servicios en línea") se obliga a utilizar los mismos conforme a las leyes que resulten aplicables, la moral, las buenas costumbres, el orden público y el Convenio de Usuarios. De manera enunciativa, más no limitativa, el Usuario se obliga y está de acuerdo en no utilizar los Servicios para:
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>introducir, publicar, enviar por correo electrónico o de otra manera transmitir cualquier Contenido que vaya en contra de las leyes aplicables, la moral, las buenas costumbres, perjudique, amenace, abuse, ataque, difame, calumnie, viole la privacidad de terceros, genere odio racial y/o étnico y/o religioso o que cualquier otra manera sea contrario a lo establecido en el presente Convenio del Usuario, en cuyo caso Cad Toner podrá, al tener conocimiento de dicho uso, suspender los Servicios al Usuario inmediatamente después de que Cad Toner haya obtenido dicho conocimiento, y el Usuario tendrá cinco días para remediar dicho uso o expresar ante Cad Toner lo que a su derecho convenga;</li>
              <li>Hacerse pasar por otra persona o entidad, introducir datos falsos, alterados o distorsionados ocasionando el error, la confusión, el malentendido o el engaño;</li>
              <li>Falsificar encabezados o de otra manera manipular identificadores para ocultar el origen de cualquier Contenido transmitido a través de los Servicios;</li>
              <li>Introducir, publicar, enviar correos electrónicos o de otra manera transmitir cualquier Contenido al que no se tenga derecho de transmitir bajo alguna ley o bajo alguna relación contractual o fiduciaria (como información privilegiada, información propia o confidencial conocida o revelada como parte de una relación laboral o bajo Convenios de confidencialidad);</li>
              <li>Introducir, publicar, copiar, lucrar con y/o enviar correos electrónicos o de alguna otra manera transmitir cualquier Contenido que infrinja cualquier derecho de autor, patente, marca registrada, secretos comerciales, derechos de reproducción o cualquier otro derecho de propiedad industrial y/o intelectual de cualquier tercero y/o de Cad Toner;</li>
              <li>Introducir, publicar, enviar correos electrónicos o de alguna otra manera transmitir cualquier publicidad, material promocional, correos basura (junk mail), cartas de cadena, pirámides de estafa, o cualquier otra forma de policitación, excepto en esas áreas de Cad Toner que son designadas expresamente para ese propósito (como serían en su caso, los sectores de compras)</li>
              <li>Introducir, publicar, enviar correos electrónicos o de alguna otra manera transmitir cualquier material que contenga virus de programas de cómputo o cualquier otro código de computadoras, archivos o programas diseñados para interrumpir, destruir o limitar la funcionalidad de cualquier programa de cómputo para computadora o hardware o equipos de telecomunicaciones;</li>
              <li>Interrumpir el flujo normal de diálogo, causar el deslizamiento rápido de la pantalla (scroll) a una velocidad en la cual los demás usuarios de los Servicios no sean capaces de escribir a través del teclado de la computadora, o de otra manera actuar de un modo que afecte adversamente la habilidad de otros usuarios para interactuar en tiempo real (real time exchanges);</li>
              <li>Interferir con o interrumpir los Servicios y/o los servidores o las redes internas conectadas con los Servicios;</li>
              <li>Violar cualquier ley aplicable en México, Distrito Federal, el lugar de residencia del Usuario, y/o el lugar en el que el Usuario esté ubicado al acceder al Servicio sea dicha ley municipal, provincial, local, estatal, federal o internacional, incluyendo, pero no limitado a, regulaciones promulgadas por cualquier Bolsa de Valores en la que específicamente se hagan transacciones bursátiles y/o cualquier otra similar; así como cualquier regulación con fuerza de ley, ya sea de manera intencional o sin intención;</li>
              <li>Acechar o de otra manera acosar a otra persona;</li>
              <li>Coleccionar o guardar datos personales acerca de otros; y,</li>
              <li>Cualquier otra actividad que sea contraria a las buenas costumbres.</li>
              <li>Introducirse a los Servicios personales de otras personales y accesar a su información personal, cuenta de correo electrónico, etc.</li>
            </ul>
            <p className="text-gray-700">
              Aun cuando Cad Toner no efectúa revisiones ni chequeos previos (pre-screen) del Contenido, tanto Cad Toner como las personas que designe para tales efectos, tendrán a su discreción el derecho (pero no la obligación) de, en cualquier tiempo y sin previa notificación a los Usuarios, revisar, rehusar, eliminar, modificar, sustituir y/o o mover cualquier Contenido que esté disponible a través de los Servicios y Cad Toner podrá suspender el acceso o cualquier servicio al Usuario por tal razón. La misma facultad y derecho tendrá Cad Toner para remover cualquier Contenido que viole el Convenio del Usuario o que de otra manera signifique o implique una objeción y/o contradicción al mismo. Cad Toner manifiesta y el Usuario acepta que es de la exclusiva responsabilidad de los Usuarios el evaluar y correr con el riesgo asociado con el uso de cualquier Contenido, incluyendo lo relacionado con la exactitud, la totalidad o la utilidad del Contenido; por lo anterior, el Usuario manifiesta y expresamente reconoce que no puede confiarse del Contenido accesible a través de Cad Toner.
            </p>
            <p className="text-gray-700">
              El Usuario reconoce y está de acuerdo en que Cad Toner puede mantener y conservar en sus archivos para sí la información personal, el Contenido de los Usuarios y también puede revelar el mismo si por mandato de ley y/o de autoridad competente le fuere requerido o por considerar de buena fe que dicho mantenimiento o revelación es razonablemente necesario para: (1) cumplir con procesos legales, ya sean administrativos o judiciales; (2) cumplir con el Convenio del Usuario; (3) responder a reclamaciones que involucren cualquier Contenido que menoscabe derechos de terceros; o (4) proteger los derechos, la propiedad, o la seguridad de Cad Toner, sus Usuarios y el público en general.
            </p>
            <p className="text-gray-700">
              El Usuario reconoce que para la prestación de los Servicios, el procesamiento técnico y la transmisión de los mismos, incluyendo el Contenido, puede involucrar (a) transmisiones a través de varias redes; y (b) cambios para adaptarse y estar conforme a los requerimientos técnicos para conectarse a las redes o dispositivos.
            </p>
            <p className="text-gray-700">
              Con respecto al uso de Servicios específicos contenidos en Cad Toner, el Usuario deberá regirse por lo acordado en este Convenio del Usuario.
            </p>
            <h3 className="text-xl font-bold">3.5 USO ADECUADO DEL CONTENIDO DE CAD TONER.</h3>

            <p className="text-gray-700">
El Usuario deberá abstenerse de obtener e incluso intentar obtener Contenido a través de Cad Toner o los Servicios mediante medios o procedimientos distintos de los que, según el caso, se hayan puesto a su disposición para este efecto o se hayan indicado para este efecto en las páginas web del Portal en que se encuentren los Contenidos, o en general de los que se empleen habitualmente en Internet con este propósito.
</p>
<p className="text-gray-700">
El Usuario se obliga a usar el Contenido de forma diligente, correcta y lícita, por lo que en caso contrario Cad Toner podrá suspender los Servicios al Usuario inmediatamente después de que Cad Toner haya tenido conocimiento de dicho uso, y el Usuario tendrá cinco días para remediar dicho uso o expresar ante Cad Toner lo que a su derecho convenga.
</p>
<p className="text-gray-700">
Asimismo, el Usuario, en particular, se compromete a abstenerse de:
</p>
<p className="text-gray-700">
(a) Utilizar el Contenido de forma, con fines o efectos contrarios a las leyes aplicables de México, Distrito Federal, el lugar de residencia del Usuario, y/o el lugar desde donde se accese a los Servicios, la moral, las buenas costumbres y/o al orden público;
</p>
(b) Reproducir, copiar, distribuir, permitir el acceso del público a través de cualquier modalidad de comunicación pública, transformar o modificar el Contenido, sin contar con la autorización previa del titular de los derechos correspondientes;

(c) Suprimir, eludir o manipular los derechos de autor, marcas, patentes, el "copyright" y demás datos identificativos de los derechos de Cad Toner o de sus titulares incorporados al Contenido, así como los dispositivos técnicos de protección, las huellas digitales o cualesquiera mecanismos de información que pudiere contener el Contenido; y

(d) Emplear el Contenido y, en particular, la información de cualquier clase obtenida a través de Cad Toner o de los Servicios, para remitir publicidad, comunicaciones con fines de venta directa o con cualquier otra clase de finalidad comercial, mensajes no solicitados dirigidos a una pluralidad de personas con independencia de su finalidad, así como a abstenerse de comercializar o divulgar de cualquier modo dicha información.

Cualquier Contenido que sea bajado ("downloaded") por el Usuario a través de los Servicios, será bajo su propia discreción y riesgo, por lo que será el único responsable de cualquier daño a su computadora, equipo o sistema, así como por la pérdida o afectación de datos contenidos en los mismos.

4. DERECHOS DE PROPIEDAD INTELECTUAL.

El Usuario reconoce que el Servicio y cualquier software que sea necesario para ser utilizado en conexión con el Servicio, puede contener información ajena y confidencial que puede estar protegida por las leyes de propiedad intelectual y otras leyes aplicables. El Usuario manifiesta que está enterado y conforme en que el Contenido que se encuentre en la publicidad de los patrocinadores o anunciantes y/o información presentada a su atención a través del Servicio o de patrocinadores o anunciantes, puede estar protegida y/o limitado su uso por derechos de autor, de reproducción, de marca, patentes u otros derechos de propiedad y leyes.

Exceptuando expresamente aquello que esté autorizado y así sea específicamente señalado por Cad Toner, sus patrocinadores o anunciantes, los Usuarios se comprometen a no modificar, copiar o reproducir, rentar, prestar, vender, distribuir o crear obras del Servicio y/u obras derivadas y/o basadas en el Servicio, en su totalidad o en parte.

Todo el Contenido de los Servicios está amparado por derechos de propiedad Intelectual. Todos los derechos reservados. Prohibida su reproducción total o parcial." o por Contenido de terceras partes proveedoras de Contenido que igualmente, se encuentran protegidos por las leyes internacionales de derechos de propiedad intelectual. Cad Toner, cadtoner.com.mx y todos y cada uno de los nombres utilizados en el Servicio y en general en Cad Toner que incluyan la palabra Cad Toner en su denominación, son marcas registradas propiedad de Cad Toner. Igualmente, el logotipo y Mascota de Cad Toner está registrado y es propiedad de Cad Toner. El Usuario se obliga a no reproducir, duplicar, vender o explotar por razones comerciales, la totalidad y/o cualquier porción de los Servicios o del Contenido bajo circunstancia alguna.

5. PROCEDIMIENTO EN CASO DE VIOLACIÓN DE DERECHOS DE PROPIEDAD INTELECTUAL.

En el caso de que algún Usuario o un tercero consideren que cualquiera de los Contenidos que se encuentren o sean introducidos en Cad Toner y/o cualquiera de sus Servicios, violen sus derechos de propiedad intelectual, deberán enviar una notificación a Cad Toner en la que indiquen, cuando menos: (a) los datos personales (nombre, dirección, número de teléfono y dirección de correo electrónico del reclamante); (b) la firma autógrafa con los datos personales del titular de los derechos de propiedad intelectual o de la persona debidamente autorizada para actuar en nombre y por cuenta del titular de los derechos de propiedad intelectual supuestamente infringidos y/o violados; (c) la indicación precisa y completa del (los) Contenido(s) protegido(s) mediante los derechos de propiedad intelectual supuestamente infringidos, así como de su localización en Cad Toner o alguno de los Servicios; (d) una declaración expresa y clara de que la introducción del (los) Contenido(s) indicado(s) se ha realizado sin el consentimiento del titular de los derechos de propiedad intelectual supuestamente infringidos; (e) una declaración expresa, clara y bajo la responsabilidad del reclamante de que la información proporcionada en la notificación es exacta y de que la introducción del (los) Contenido(s) constituye una violación de sus derechos de propiedad intelectual; (f) copia simple del documento que acredite la titularidad del supuesto derecho infringido. Estas notificaciones deberán ser enviadas a "la Dirección Jurídica de Cad Toner." al e-mail webmaster@cadtoner.com.mx, y se le indicarán los pasos a seguir y la dirección física a la cual deberán entregarse los documentos originales.

6. PUBLICIDAD.

En caso de que el Usuario lo desee, podrá entrar en correspondencia con o participar en promociones de los patrocinadores o anunciantes que muestren sus productos y/o servicios en los Servicios. Cualquiera de dichas correspondencias o promociones, incluyendo la entrega de y el pago de los productos y/o servicios, y cualquiera de los otros términos, condiciones, garantías o declaraciones asociadas con dicha correspondencia o promociones, son entendidas como exclusivas entre el Usuario correspondiente y el anunciante y/o patrocinador, por lo que Cad Toner no será responsable de la veracidad, funcionalidad, contenido y calidad de dichos productos y/o servicios o del pago realizado a dicha persona.

Por lo anterior, Cad Toner no asume ni asumirá ninguna responsabilidad u obligación a ese respecto, ni puede ni será responsable por ninguna de dichas correspondencias o promociones ni será responsable por cualquier pérdida en que se incurra como resultado de dichos tratos o como resultado de la presencia de dichos patrocinadores o anunciantes en el Servicio. Cad Toner no ofrece ninguna garantía respecto a la información propia y/o de terceros.

7. ENLACES A SITIOS DE TERCEROS (LINKS).

En algunos casos, Cad Toner proporciona enlaces (links) a otros sitios de Internet y/o a otros recursos de terceros. En virtud de que Cad Toner  no tiene control sobre dichos sitios o sus recursos, el Usuario reconoce y acepta que Cad Toner no es ni será responsable por la disponibilidad de dichos sitios externos y ajenos a Cad Toner o del acceso a los mismos, ni de los recursos que éstos utilicen, ni asegura que el sitio contenga información legítima y/o licita y no acepta ni aceptará ser considerado como responsable por la imposibilidad de acceso a éstos ni de cualquier Contenido, anuncios, productos u otros materiales de o disponibles en dichos sitios o recursos. De la misma forma, Cad Toner no será responsable por pérdidas o daños causados o supuestamente causados por o en conexión con el uso la seguridad sobre dicho Contenido, productos o servicios disponibles en o a través de cualquiera de dichos sitios o recursos.

8. INDEMNIZACIÓN.

En todos los casos que más adelante se mencionan y/o de aquellos que se deriven de éstos, el Usuario acepta ser responsable y acuerda indemnizar, mantener y sacar en paz y a salvo a Cad Toner, sus directores, funcionarios, empleados, colaboradores, proveedores, agentes y/o accionistas, en y de cualquier reclamo y/o demanda, incluyendo honorarios razonables de abogados y costas y gastos de juicios, hechos por terceras partes debido a o derivado de: (a) el Contenido que entregue, publique, envíe por correo electrónico u otros Servicios de Cad Toner o de otra manera transmita a través de los Servicios; (b) por la utilización del Servicio; (c) la conexión con o a los Servicios; (d) cualquier violación al Convenio del Usuario o los Convenios Específicos; o (e) cualquier infracción y/o violación que respecto a cualquiera de los derechos de propiedad intelectual o de otro derecho de cualquier persona o entidad.

9. TERMINACIÓN.

Todo Usuario del Servicio, acepta y acuerda que Cad Toner, a su exclusiva discreción y sin notificación previa, puede terminar o suspender el uso de la totalidad o parte de los Servicios por cualquier causa o razón, por lo que reconocen que Cad Toner no será responsable frente a los Usuarios o frente a terceros por dicha terminación o suspensión.

10. POLÍTICAS DEL USO DE LOS SERVICIOS.

Los Usuarios aceptan y reconocen que Cad Toner puede establecer en cualquier tiempo y sin previa notificación a los Usuarios prácticas y políticas generales y específicas, así como limitaciones concernientes a los Servicios, siempre que las mismas sean publicadas en el Portal, a partir de lo cual le serán aplicables a los Usuarios.

11. VIOLACIÓN AL CONVENIO DEL USUARIO.

Cad Toner solicita a todos los Usuarios que reporten cualquier violación al Convenio del Usuario o de los Convenios Específicos en cuanto tengan conocimiento de ello a través de cualquier tipo de comunicación.

12. LÍMITE DE RESPONSABILIDAD.

Cad Toner de ningún modo puede garantizar que los Servicios: (a) cumplan con los requisitos apropiados, requeridos o esperados para o por cada uno de los Usuarios; (b) no se interrumpan; (c) lleguen a tiempo; (d) lleguen con cierto nivel de velocidad; (e) lleguen sin errores; (f) o que los resultados obtenidos por el uso de los mismos sean exactos y/o confiables.

Cad Toner no garantiza que cualquier error en el software de los Servicios sea(n) o pueda(n) ser corregido(s) total o parcialmente, por lo que Cad Toner no estará obligado a realizar concesión alguna. Cad Toner no será responsable por daños directos, indirectos, morales, especiales o consecuenciales que resulten del uso del Servicio o de la imposibilidad para usarlo.

El precio, calidad, cantidad, tiempos de entrega serán establecidos en el sitio los cuales podrán variar sin previa notificación, por lo tanto, se aplicarán las condiciones que se encuentran en el preciso momento en que se efectúa la compra. Igualmente, Cad Toner no se hace responsable de la entrega en tiempo por causas de fuerza mayor o por las condiciones climáticas, viales, etc. o por servicios prestados por terceros, por lo que el usuario libera a Cad Toner de cualquier responsabilidad.

13. LEGISLACIÓN.

El Usuario al accesar a Cad Toner acepta en forma expresa e irrevocable el hecho que este Convenio del Usuario, así como la relación del Usuario con Cad Toner será regida por e interpretada de acuerdo con, las leyes de los Estados Unidos Mexicanos. En caso de controversia, el Usuario y Cad Toner se someten expresamente a la jurisdicción de los Tribunales de la Ciudad de México, Distrito Federal, renunciando los Usuarios como Cad Toner, a cualquier otro fuero que pudiera corresponderles por razón de su domicilio presente o futuro.

14. RENUNCIA.

La falta de Cad Toner de ejercitar o hacer cumplir cualquier derecho o disposición del Convenio del Usuario o de los Convenios Específicos no constituirá una renuncia a dicho derecho o disposición a menos que sea reconocido y aceptado por escrito por Cad Toner.

15. VALIDEZ E INTERPRETACIÓN.

En caso de que cualquiera de las disposiciones contenidas en el Convenio del Usuario o en cualquiera de los Convenios Específicos sea encontrada sin validez por parte de un Tribunal o Corte de jurisdicción competente o sea imposible de hacer cumplir, ambas partes acuerdan en solicitar al Tribunal o la Corte que se esfuerce para darle efecto a la(s) intención(es) de las partes así reflejadas en dichas disposiciones. Sin embargo, las demás disposiciones de este Convenio del Usuario, permanecerán con validez y plena fuerza legal.

16. QUEJAS.

Cualquier reclamo o acción que resulte de o que se relacione con el Convenio del Usuario o del uso de los Servicios, tendrá que ser presentada dentro de los dos meses inmediatos siguientes a la fecha en que el hecho del cual se derive el reclamo o a la acción legal correspondiente se haya verificado, o perderá ese derecho para siempre. El Usuario manifiesta su aceptación a lo anterior, sin importar lo establecido o dispuesto en alguna legislación que señale lo contrario.

17. TITULOS.

Los encabezados y sub-encabezados contenidos en este Convenio del Usuario, existen para conveniencia exclusivamente y no tienen efectos legales o contractuales.

CAD TONER el logotipo de CAD TONER Y MASCOTA “Inky” son marcas registradas. Derechos Reservados © Cad Toner.

 


 
Política de Garantías

Cartuchos Originales
Procedimientos de garantía en Cartuchos Originales
El Cliente deberá acudirá a los Centros de Servicio Autorizados para proceder con el trámite de la garantía correspondiente.

Requisitos de los centros de servicios autorizados
Factura debe contener su código de barras y número de lote.
Caja y Empaque (sin este el fabricante negará la garantía).

El tiempo de respuesta de los centros de servicio
Varía según la marca

Teléfonos de Centro de Servicios
CANON: 01-800-710-7168   
BROTHER:83-40-60-87 / 01-800-759-8000

EPSON: 01-800-087-1080 / 10-52-31-16    

HP / SAMSUNG: 01-800-063-02-31 / 83-76-58-61 / 01-55-50-91-24-55

KODAK: 01-800-288-5632
LEXMARK: 01 – 800-700-19-10 / 01-800-718-99-70   
OKIDATA: 01-800-718-9970
XEROX: 01-800-009-3769

CAD TONER en la marca HP sin compromiso puede apoyar al cliente a enviar su cartucho original al centro de servicio autorizado  

Nota.-No se le puede dar uno a cambio, se le informará el diagnostico o solución del producto según el tiempo de respuesta del centro de servicio esto puede demorar de 4 a 6 semanas hábiles

(En caso de que el cliente necesite otro cartucho para su uso, se le factura y cobra).

FORMATO DE RESPONSIVA

Cliente autoriza a Cad Toner revisar su cartucho original automáticamente pierde garantía en el centro de servicio autorizado.
CAD TONER   Realizará el proceso de revisión del cartucho original en 24 horas y se le informará el diagnostico.  Esto no significa que se haya autorizado un reemplazo, nota de crédito y/o la reparación absoluta del producto.


Cartuchos de toner remanufacturados y compatibles
I.- Anulación de la garantía
El cartucho perderá la garantía de manera automática si se encuentra en las siguientes condiciones: 

Quebrado
Tambor dañado (raspado, picado o velado por la exposición prolongada a la luz)
Cualquier sustancia u objeto extraño presente como: grapas, clips, etc.
Toner apelmazado o solidificado por la exposición a la humedad
Deformación por exposición al calor
Que no cuente con su número de lote (consecutivo) e identificaciones propias de la empresa (caja y etiqueta)
Que haya sido alterado por un tercero
II.- Cambio Inmediato
Para obtener la garantía de forma inmediata (cartucho nuevo del mismo tipo a cambio del cartucho con falla), se deben cumplir con los siguientes requisitos: 

1.- Que no presente ninguna condición mencionada en el inciso I 

2.- Que contengan por lo menos, el 70% del tóner, de acuerdo a la tabla de pesos y contenidos. 

3.- Que estén dentro del periodo de garantía (90 días a partir de la fecha de facturación)  

III.- Garantía de reparación sin costo
En el caso de que se cumpla con los puntos 1 y 3 del inciso II, pero no con el 2, es decir, que el cartucho contenga entre el 30% y el 69% del toner, Cad Toner se compromete a revisar, diagnosticar y reparar el cartucho sin costo. 

IV.- Garantía de revisión sin costo
En el caso de que se cumpla con los puntos 1 y 3 del inciso II y contiene menos del 30% del tóner, se considera como un cartucho en el final del ciclo de impresión, por lo que se puede proceder a una revisión y diagnóstico sin costo.

Sin embargo, si la falla es atribuible al desgaste de las piezas, éstas tendrán que ser reemplazadas con costo para el cliente (ver inciso V) o bien, existe la opción de remanufacturar su cartucho nuevamente, con la bonificación del costo, de acuerdo al porcentaje de tóner útil sobrante. 

V.- Mantenimiento con costo
En el caso de que se cumpla con el punto 1 del inciso II, pero no con los puntos 2 y 3, la revisión, diagnóstico y reparación, se consideran como Mantenimiento, mismo que tiene un costo adicional de acuerdo al modelo del cartucho. Si el cartucho contiene menos del 30% del tóner, se recomienda remanufacturarlo nuevamente al precio de lista. 

VI.- Bonificación 
La bonificación se realizará sólo cuando la calidad del cartucho no sea de entera satisfacción para los requerimientos del cliente. Esto significa que el cartucho funciona correctamente, pero existe una alta exigencia de calidad para impresiones específicas, como documentos con códigos de barras, fotografías y/o logotipos con combinaciones de colores precisas.

La bonificación se hará en forma de nota de crédito, por el monto que equivalga al porcentaje de tóner no utilizado. La nota de crédito podrá ser utilizada en compras posteriores y tendrá un año de vigencia a partir de la fecha de expedición. 

Cartuchos de tinta remanufacturados y compatibles
I.- Anulación de la garantía
El cartucho perderá la garantía de manera automática si se encuentra en las siguientes condiciones: 

Quebrado
Que se le haya retirado, dañado o alterado alguna pieza electrónica (circuito, placa de inyección, chip)
Que no cuente con su número de lote (consecutivo) e identificaciones propias de la empresa (caja y etiqueta) 
II.- Cambio inmediato
Para obtener la garantía de forma inmediata (cartucho nuevo del mismo tipo a cambio del cartucho con falla), se deben cumplir con los siguientes requisitos: 

1.- Que no presente ninguna condición mencionada en el inciso I 

2.- Que contengan por lo menos, el 70% de la tinta, de acuerdo a la tabla de pesos y contenidos. 

3.- Que estén dentro del periodo de garantía (30 días a partir de la fecha de facturación) 

III.- Garantía de reparación sin costo
En el caso de que se cumpla con los puntos 1 y 3 del inciso II, pero no con el 2, es decir, que el cartucho contenga entre el 30% y el 69% de la tinta, Cad Toner se compromete a revisar, diagnosticar y reparar el cartucho sin costo. 

Si el cartucho no tiene reparación se hará una bonificación, leer inciso VI. 

IV.- Garantía de revisión sin costo
En el caso de que se cumpla con los puntos 1 y 3 del inciso II y contiene menos del 30% de la tinta, se considera como un cartucho en el final del ciclo de impresión, por lo que se puede proceder a una revisión y diagnóstico sin costo. 

Si la falla es eliminada, se entregará el mismo cartucho con la misma cantidad de tinta contenida al momento de la reclamación de la garantía. 

Si la falla no es eliminada, podrá hacerse bonificación, leer inciso VI. 

V.- Mantenimiento sin costo
En el caso de que se cumpla con el punto 1 del inciso II, pero no con los puntos 2 y 3, la revisión, diagnóstico y reparación, se consideran como Mantenimiento, mismo que no tendrá un costo adicional. 

Si la falla es eliminada, se entregará el mismo cartucho con la misma cantidad de tinta contenida al momento de la reclamación de la garantía. 

Si el cartucho contiene menos del 30% de la tinta, se recomienda remanufacturarlo nuevamente al precio de lista. En este punto no aplica bonificación. 

VI.- Bonificación
La bonificación se realizará sólo cuando la calidad del cartucho no sea de entera satisfacción para los requerimientos del cliente o haya dejado de funcionar y se encuentra en las condiciones que se mencionan en el inciso I. 

La bonificación se hará en forma de nota de crédito, por el monto que equivalga al porcentaje de la tinta no utilizada. La nota de crédito podrá ser utilizada en compras posteriores y tendrá un año de vigencia a partir de la fecha de expedición. 

Cartuchos de toner y tinta originales e impresoras
I.- Cambio inmediato
La única forma en la que Cad Toner se compromete a realizar el cambio inmediato, es cuando se haya entregado un producto diferente al solicitado. 

II.- Garantía del fabricante
En el caso de los cartuchos originales e impresoras, se recomienda hacer el trámite de la garantía, directamente en los centros de atención del fabricante. 

El trámite de la garantía a través de un distribuidor, como lo es Cad Toner, podría tardar como mínimo, 4 semanas. 

III.- Garantía en Cad Toner
El cliente puede solicitar la revisión y reparación de cartuchos originales e impresoras a Cad Toner, estando plenamente consciente de que, automáticamente la perderá con el fabricante y en caso de que estos no puedan ser reparados, absorberá la pérdida.

IV.- Bonificación
En estos productos, no existe la bonificación por parte de Cad Toner, en ningún caso. 

 

Para solicitar la garantía le recomendamos utilizar las siguientes vías: 

-       A través de su Ejecutiva, tanto por teléfono y correo electrónico como presentándose en el mostrador de la sucursal en donde haya adquirido el producto. El horario de atención en las sucursales es de lunes a viernes de 9:00 am a 1:00 pm y de 2:00 a 7:00 pm y sábado de 9:00 a 1:30 pm. 

-       Llamando al teléfono 81 305 305 extensiones 110,133, 213 y 216. El horario de atención telefónica es de lunes a viernes de 8:30 am a 7:00 pm y sábado de 9:00 a 1:30 pm. 

-       Enviando un correo electrónico a las direcciones servicio_alcliente1@cadtoner.com.mx y servicio_alcliente4@cadtoner.com.mx 

-       Presentándose directamente en el departamento de Servicio al Cliente, ubicado en 5 de mayo 1338 pte. Col. Centro, Monterrey, N.L. El horario de atención telefónica es de lunes a viernes de 8:30 am a 7:00 pm y sábado de 9:00 a 1:30 pm., por esta vía, el tiempo de respuesta es inmediato. Utilizando las vías mencionadas en los párrafos anteriores, es de 24 a 36 horas hábiles.

Cad Toner. 
www.cadtoner.com.mx

5 de Mayo 1338 Pte.

Centro Monterrey, Nuevo Leon. 6400

(81) 81-305-305
<div ref={endRef}></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terminos;