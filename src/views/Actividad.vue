<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Procedimiento de la valoración de apoyos',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar la apropiación de los conocimientos sobre accesibilidad, ajustes razonables, caja de herramientas y formatos.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Todas las personas con discapacidad requieren una valoración de apoyos para ejercer su derecho a decidir de manera autónoma, segura y con los ajustes razonables que puedan necesitar?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sí, porque al tener alguna discapacidad requieren ajustes razonables que faciliten la toma de decisiones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'No, porque no todas las personas con discapacidad necesitan apoyos para tomar decisiones de forma autónoma y segura.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sí, porque como medida de protección se valora el tipo de apoyo que les permita decidir con seguridad y confianza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Si, porque todas las personas con discapacidad, sin excepción, no tienen capacidad jurídica para la toma de decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Una persona con discapacidad auditiva necesita una valoración de apoyos para ejercer su derecho a decidir de manera autónoma y con acceso pleno a la información?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'No, solo requiere ajustes razonables que faciliten la comunicación y el acceso pleno a la información.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sí, porque las personas sordas enfrentan barreras comunicativas que dificultan ejercer decisiones de manera adecuada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sí, porque al tener una discapacidad, pueden requerir valoración de apoyos para que otra persona les ayude a decidir con respaldo jurídico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'No, porque las personas con discapacidad auditiva no requieren ajustes razonables, ya que se pueden desplazar autónomamente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Todas las personas con discapacidad intelectual requieren una valoración de apoyos para ejercer su derecho a decidir sobre distintos aspectos de la vida de forma autónoma, informada y segura?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'No, solo en algunos casos se realiza valoración de apoyos para facilitar decisiones informadas sobre aspectos puntuales de la vida.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Siempre se requiere valoración de apoyos para que otra persona respalde decisiones sobre todos los aspectos de la vida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sí, se necesita valoración de apoyos para acceder a adjudicación judicial que permita a otra persona tomar decisiones por ellas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sí, las personas con discapacidad intelectual requieren de un proceso de interdicción, para que una persona de confianza pueda ayudarles a tomar decisiones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Cuando se realiza una valoración de apoyos, debe tenerse en cuenta:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una entrevista semiestructurada general.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Una entrevista grupal.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Una entrevista semiestructurada individual.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Una entrevista estructurada vecinal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: 'El consentimiento informado es:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un documento que firma la persona con discapacidad de manera posterior a la valoración de apoyos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un documento que firma la familia de manera posterior a la valoración de apoyos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un documento que firma la persona con discapacidad para su entrevista de valoración de apoyos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un documento que firma la familia para establecer una red de posibles apoyos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué se debe considerar para implementar ajustes razonables que garanticen el ejercicio pleno de los derechos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un ajuste específico según el tipo de discapacidad que presente la persona con discapacidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ajustes diversos que respondan a necesidades particulares, siempre que la persona los solicite de forma voluntaria.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un diagnóstico de acuerdo con el Sistema Internacional de Enfermedades Mentales (CIE 11).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La historia clínica como referencia para identificar los antecedentes de salud en cada caso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué es un ajuste razonable para garantizar el ejercicio pleno de derechos de las personas con discapacidad en igualdad de condiciones?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La implementación y uso de herramienta tecnológica que facilite la interacción con personas con discapacidad en contextos específicos y necesarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Modificaciones y adaptaciones necesarias y adecuadas que no generen carga excesiva y garanticen derechos en igualdad de condiciones con otras personas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Estrategia que permite a personas con discapacidad tomar decisiones informadas, seguras y respetadas en distintos ámbitos de vida.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Modificaciones en las rutinas de las personas con discapacidad y que le permitan acceder a los diferentes servicios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          texto:
            'El principio que establece que el derecho a la accesibilidad no puede dividirse ni aplicarse parcialmente, y que garantiza este derecho para todas las personas con discapacidad sin distinción, se denomina:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Principio de indivisibilidad',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Principio de interdependencia',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Principio de progresividad', esCorrecta: false },
            { id: 'd', texto: 'Principio de dependencia', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Desde el principio de interdependencia, ¿cuál afirmación refleja correctamente la relación entre el derecho al trabajo y el derecho a la accesibilidad para personas con discapacidad?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El derecho al trabajo y el derecho a la accesibilidad son independientes y tienen sus propias particularidades y formas de garantizarse.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El derecho al trabajo y el derecho a la accesibilidad se amplían progresivamente en el tiempo, según nuevas normatividades vigentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El derecho al trabajo y el derecho a la accesibilidad implican realizar procesos educativos con quienes valoran los apoyos requeridos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El derecho al trabajo y el derecho a la accesibilidad se entrelazan, convirtiéndose en una sola garantía.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué distingue a los ajustes razonables de los ajustes procesales en el ejercicio de derechos de las personas con discapacidad?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los ajustes razonables se aplican en contextos judiciales; los ajustes procesales garantizan acceso a la información y comunicación general.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los ajustes razonables permiten adaptarse a las necesidades de la red de apoyo de las personas con discapacidad; los procesales son meramente instrumentales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los ajustes razonables garantizan acceso a la información, comunicación y entornos físicos; los procesales se aplican en contextos judiciales o administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los ajustes razonables permiten identificar las necesidades de las personas con discapacidad; los procesales realizar las adaptaciones respectivas en cualquier entorno físico o institucional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de las siguientes acciones corresponde a los mínimos para el acercamiento con las personas con discapacidad psicosocial en las valoraciones de apoyo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Actuar de manera natural, empleando un lenguaje igual al que se usa con las demás personas, sin modificar tono ni forma.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Hablar con un lenguaje infantilizado para facilitar la comprensión de la persona y acorde con su nivel intelectual y capacidad comunicativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evitar en la medida de lo posible el contacto directo para evitar incomodar a la persona y su red de apoyo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Dirigir la conversación únicamente a la red de apoyo de la persona, pues solo esta puede explicar el proceso cabalmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'Recursos humanos como docentes, intérpretes y modelos lingüísticos garantizan comunicación, información y aprendizaje accesible para personas con discapacidad en condiciones de equidad:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tecnologías y productos de apoyo',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Recursos pedagógicos', esCorrecta: false },
            { id: 'c', texto: 'Recursos comunicativos', esCorrecta: true },
            { id: 'd', texto: 'Recursos especializados', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'El derecho a la accesibilidad es un derecho humano que se fundamenta en los siguientes principios:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Principio de universalidad.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Principio de indivisibilidad e interdependencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Principio de progresividad, igualdad y no discriminación.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Principio de igualdad y no discriminación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'Luego de identificar necesidades específicas y contar con orientaciones, ¿qué acciones podrían aplicarse al entrevistar una persona con discapacidad intelectual grave para evaluar motivaciones y proyecto de vida?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Asegurar la accesibilidad de los materiales cuando no sabe leer ni escribir, usando videos, pictogramas e imágenes visuales claras y comprensibles.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Diseñar preguntas accesibles con lenguaje concreto y sencillo, usando imágenes o símbolos en papel bond, una pregunta por hoja.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Verificar la comprensión confirmando que la respuesta sea coherente. Si hay confusión, pedir explicación con sus propias palabras para validar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Explorar sueños, intereses y apoyos necesarios utilizando herramientas para identificar motivaciones, metas, gustos y objetivos de la persona entrevistada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuáles afirmaciones describen adecuadamente algunos aspectos del uso del Personal Map como herramienta aplicable en valoraciones de apoyo para personas con discapacidad?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El Personal Map permite identificar gustos, motivaciones, sueños y objetivos, facilitando una conversación centrada en la persona entrevistada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El Personal Map se utiliza exclusivamente para evaluar habilidades cognitivas y no aborda intereses, motivaciones, sueños ni metas personales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El Personal Map permite conocer aspectos esenciales de la persona: intereses, metas y apoyos necesarios para alcanzarlos plenamente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El Personal Map es una técnica verbal que excluye elementos visuales y no considera los sueños, motivaciones ni aspiraciones personales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'La accesibilidad, vista desde el principio de la universalidad, está pensada para todos (as, es), en este caso el para todos (as, es) dependerá si la persona tiene algún tipo de discapacidad. La universalidad no es un derecho que todos los seres humanos del planeta tengan, este responde a una necesidad.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Los recursos y apoyos orientados a fortalecer la autonomía, la independencia y la toma de decisiones de las personas con discapacidad pueden ser de orden tecnológico, pedagógico o una combinación de ambos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Las personas con discapacidad son nombradas así, porque ellas mismas decidieron que este término era pertinente porque las hacía visibles en todos los escenarios de participación del mundo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Una persona sin discapacidad que trabaja en un tercer piso sin ascensor puede exigir legalmente la instalación de una rampa o elevador por motivos de accesibilidad.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'La caja de herramientas tiene como propósito evaluar a las personas con discapacidad sin necesidad de estrategias, recursos ni acciones afirmativas por parte de las personas facilitadoras del proceso de valoración.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento del componente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
