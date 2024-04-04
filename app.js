const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


const flowPlanea = addKeyword(['planea'])
    .addAnswer(['🙌 Aquí encontras un información sobre Planea...'], null, null, [])



const flowModP1 = addKeyword(['1', '1.'])
    .addAnswer([
        '📄 *¿En qué consiste el modelo educativo integral y flexible con el que cuenta la Universidad Veracruzana? *',
        'Está basado en un enfoque de competencias profesionales integrales, te ayuda a desarrollar competencias propias de un profesional de tu disciplina para tener un desempeño laboral exitoso, se caracteriza por ser: ', 
        'Integral porque promueve tu formación intelectual, profesional, social y humana a través de las áreas de formación de tu plan de estudios. ',
        'Flexible en cuanto a tiempos, espacios y saberes porque te permite adecuar tu trayectoria escolar a tus necesidades e intereses, dentro de la normatividad vigente. '
    ])

const flowModP2 = addKeyword(['2', '2.'])
    .addAnswer([
        '📄 *¿Qué es la formación integral del estudiante?*', 
        'La Universidad Veracruzana, la concibe como aquella que integra la formación intelectual, profesional, social y humana, mismas que se promueven a través de las áreas de formación del plan de estudios. ',        
        'Para más información, puedes consultar la Guía del estudiante en el apartado de Modelo Educativo. ' 
    ])

const flowModP3 = addKeyword(['3', '3.'])
    .addAnswer([
        '📄 *¿Cuáles son las áreas de formación que contempla mi plan de estudios?*',
        '*Área de Formación Básica*',
        'La integran dos sub áreas: ',
        'Área de Formación Básica General (AFBG), que incluye cinco EE orientadas al desarrollo de las competencias transversales de comunicación y autoaprendizaje. ',
        'Área de Iniciación a la Disciplina (AID), la cual provee las bases disciplinarias de la profesión en la que te estás formando, por medio de EE debidamente seleccionadas con base en el perfil de egreso de la profesión. ' +
        '*Área de Formación Disciplinar (AFD)*. Es el eje de la formación específica del campo disciplinario de la profesión. Las EE que la conforman se orientan a obtener diversos saberes que determinan con certeza a la profesión. ' +
        '*Área de Formación de Elección Libre (AFEL)*. Es un espacio de expresión y crecimiento personal, cuya importancia radica en la oportunidad que brinda a los estudiantes de ampliar sus posibilidades de apertura y exploración hacia otros saberes y experiencias de aprendizajes, distintos y complementarios a los de su disciplina y futura profesión. En esta área encontrarás EE orientadas a la salud integral, idiomas, formación y divulgación científica, manifestaciones artísticas, innovación educativa, ecología y cultura ciudadana. Puedes seleccionar EE de esta área a partir del segundo periodo escolar. ' +
        '*Área de Formación Terminal (AFT)*. Está encaminada hacia la culminación de la formación profesional, así como a la orientación de los posibles perfiles profesionales. Las EE que la caracterizan son Servicio social (SS) y ' +
        '*Experiencia recepcional (ER)*, junto con otras EE que permiten perfilar futuros estudios superiores. ',
        ' ',
        'Con tu Tutor Académico o el coordinador de tutorías analizarás, entre otras cosas, la importancia de cada área de formación y las EE que las integran, así como el momento indicado para cursarlas.',
        'En la “Guía del estudiante en línea” puedes consultar los créditos de cada área de formación. '
    ])

const flowModP4 = addKeyword(['4', '4.'])
    .addAnswer([
        '📄 *¿Dónde puedo consultar el plan de estudios de mi carrera?*',
        'Para consultar tu plan de estudios, puedes ingresar a tu portal MiUV e ingresar a la Guía del estudiante en línea. Ahí encontrarás una pestaña con el nombre “Plan de estudios” donde puedes consultar las 4 áreas de formación por las que se compone, las EE que la integran y el total de créditos asignados en cada área. También puedes localizarlo a través del portal de oferta educativa. '
    ])

const flowModP5 = addKeyword(['5', '5.'])
    .addAnswer([
        '📄 *¿Cuántos períodos debo de cursar para finalizar mi carrera?*',
        'Este dato varía dependiendo del programa educativo que estás cursando, por lo que te recomiendo ingresar a la Guía del estudiante en línea, a través de MiUV y consultar el apartado de Trayectoria escolar.    '
    ])

const flowModP6 = addKeyword(['6', '6.'])
    .addAnswer([
        '📄 *¿Cuántos créditos debo cursar por periodo?*',
        'En cada Plan de estudios existe un número de créditos estándar, máximo y mínimo por periodo educativo. Para conocer este dato, debes consultar la Guía del estudiante en línea en el apartado de Trayectoria escolar.  '
    ])

const flowModP7 = addKeyword(['7', '7.'])
    .addAnswer([
        '📄 *¿Puedo cursar experiencias educativas (ee) en otra facultad diferente a la mía?*',
        'Sí, en cuyo caso deberás atender lo establecido en el Reglamento de movilidad. '
    ])

const flowModP8 = addKeyword(['8', '8.'])
    .addAnswer([
        '📄 *¿Puedo cursar experiencias educativas (ee) en otra región diferente a la mía?   *',
        'Sí, en cuyo caso deberás atender lo establecido en el Reglamento de movilidad. '
    ])

const flowModP9 = addKeyword(['9', '9.'])
    .addAnswer([
        '📄 *¿Puedo tomar una EE que se llame igual en otro programa educativo?*',
        'Sí, siempre que sea una experiencia equivalente en cuyo caso deberás atender lo señalado en el Reglamento de equivalencia y revalidación de estudios.  '
    ])

const flowModP10 = addKeyword(['10', '10.'])
    .addAnswer([
        '📄 *¿Puedo seleccionar dos áreas terminales en mi programa educativo?*',
        'No, debes seleccionar una sola área terminal y cursar las experiencias educativas que corresponda. Consulta las dudas con tu Tutor Académico o Secretario de Facultad. '
    ])

const flowModP11 = addKeyword(['11', '11.'])
    .addAnswer([
        '📄 *¿Puedo escoger EE de diferentes áreas terminales? *',
        'No, debes cursar las experiencias del área terminal elegida. Consulta las dudas con tu Tutor Académico o Secretario de Facultad. '
    ])

const flowModelo = addKeyword(['mod', 'modelo', 'modelo educativo', 'modelo educativo integral', 'modelo educativo integral y flexible', 'modelo.', 'mod.', 'modelo educativo.', 'modelo educativo integral.'])
    .addAnswer('🙌 Eligio Modelo Educativo, a continuación se presentan una serie de preguntas frecuentes')
    .addAnswer(
        [
            '📄 *1*. ¿En qué consiste el modelo educativo integral y flexible con el que cuenta la Universidad Veracruzana? ',
            '📄 *2*. ¿Qué es la formación integral del estudiante? ',
            '📄 *3*. ¿Cuáles son las áreas de formación que contempla mi plan de estudios? ',
            '📄 *4*. ¿Dónde puedo consultar el plan de estudios de mi carrera? ',
            '📄 *5*. ¿Cuántos períodos debo de cursar para finalizar mi carrera? ',
            '📄 *6*. ¿Cuántos créditos debo cursar por periodo?   ',
            '📄 *7*. ¿Puedo cursar experiencias educativas (ee) en otra facultad diferente a la mía? ',
            '📄 *8*. ¿Puedo cursar experiencias educativas (ee) en otra región diferente a la mía? ',
            '📄 *9*. ¿Puedo tomar una EE que se llame igual en otro programa educativo? ',
            '📄 *10*. ¿Puedo seleccionar dos áreas terminales en mi programa educativo? ',
            '📄 *11*. ¿Puedo escoger EE de diferentes áreas terminales? '
        ],
        null,
        null,
        [flowModP1, flowModP2, flowModP3, flowModP4, flowModP5, flowModP6, flowModP7, flowModP8, flowModP9, flowModP10, flowModP11] 
    )



const flowTutP1 = addKeyword(['1', '1.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *T1*. ¿En qué consiste la tutoría en la Universidad Veracruzana? ¿Cuál es su objetivo? ',
        'La tutoría académica consiste en el seguimiento que le da un Tutor Académico a la trayectoria escolar de los estudiantes durante su permanencia en el programa educativo, con el fin de orientarlos en las decisiones relacionadas con la construcción de su perfil profesional. '
    ])

const flowTutP2 = addKeyword(['2', '2.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *T2*. ¿Cuál es la importancia de tener un Tutor Académico? ',
        'El Tutor Académico es el responsable del seguimiento de la trayectoria escolar del Tutorado y de la orientación oportuna en la toma de decisiones relacionadas con la construcción de su perfil profesional individual, de acuerdo con sus expectativas, capacidades e intereses.  La importancia de tener esta figura presente es contar con el acompañamiento a lo largo de la trayectoria escolar y con el apoyo para atender dudas respecto a ello. '
    ])

const flowTutP3 = addKeyword(['3', '3.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *T3*. ¿Qué es el Tutorado? ',
        'Acudir a tutoría te brinda la oportunidad de recibir acompañamiento a lo largo de tu trayectoria escolar. Puedes acudir con tu tutor asignado para resolver o atender dudas relacionadas con la construcción de tu perfil profesional y, por lo tanto, recibir orientación que te permita tomar decisiones responsables e informadas. '
    ])

const flowTutP4 = addKeyword(['4', '4.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *T4*. ¿En qué situación puedo acudir con mi tutor? ',
        'Puedes acudir a tu tutor cuando tiene dudas que impactan en tu trayectoria académica, es decir, que puedes consultarlo sobre el proceso de elección de experiencias educativas para conformar tu carga de créditos, en caso de que te sientas en situación de riesgo académico, también si necesitas fortalecer procesos de aprendizaje, tu desempeño académico o si tienes dudas sobre la construcción de tu perfil profesional. También puedes acudir con tu tutor en caso de dudas sobre trámites administrativos, el plan de estudios, proyectos de investigación, de vinculación o servicio social. '
    ])

const flowTutP5 = addKeyword(['5', '5.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *T5*. Si soy un estudiante de rendimiento académico alto ¿qué beneficio me puede brindar asistir a tutoría académica? ',
        'La orientación de tu Tutor Académico sobre temas de movilidad académica, becas y Posgrados, así como servicios otra información que los estudiantes, así como los recursos de los que puede hacer uso por ser estudiante UV. '
    ])

const flowTutP6 = addKeyword(['6', '6.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *T6*. ¿Puedo solicitar tutoría en el momento que yo lo requiera? ',
        'Las tres sesiones y horario de tutoría se establecen al inicio del periodo escolar, sin embargo, cuando tengas dudas relacionadas con tu trayectoria académica o requieras otra información puedes comunicarte con tu tutor a través de los medios de contacto que haya establecido para atender las dudas. Los datos de contacto y horario de atención de tu tutor los puedes consultar en el apartado de tutoría de la Guía del estudiante en línea. '
    ])

const flowTutP7 = addKeyword(['7', '7.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *T7*. ¿Quién me asigna a mi Tutor Académico? ',
        'El Tutor Académico es asignado por el Coordinador de Tutorías de cada Programa Educativo. Uno de tus derechos es la posibilidad de solicitar cambio de tutor hasta 3 veces a lo largo de tu trayectoria escolar.  '
    ])

const flowTutP8 = addKeyword(['8', '8.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *T8*. ¿Cómo consulto el nombre de mi tutor y dónde puedo localizarlo? ',
        'Para consultar el nombre de tu Tutor Académico asignado, debes ingresar a la Guía del estudiante en línea desde el portal MiUV. '
    ])

const flowTutP9 = addKeyword(['9', '9.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *T9*. ¿Puedo cambiar de tutor? ',
        'Según el art. 40 del Reglamento institucional de tutorías, tienes derecho de solicitar hasta 3 veces el cambio de tutor a través de la Guía del estudiante en línea. El coordinador del sistema tutorial deberá informar por escrito a los tutores sobre el cambio realizado. '
    ])

const flowTutP10 = addKeyword(['10', '10.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *T10*. ¿Cada cuánto tiempo se llevan a cabo sesiones de tutoría? ¿Cuánto duran las sesiones? ',
        'Cada periodo escolar se realizan 3 sesiones de tutoría y el tiempo estimado para cada sesión depende de los temas a tratar y las dudas que surjan durante la sesión. '
    ])

const flowTutP11 = addKeyword(['11', '11.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *T11*. ¿Necesito algo en específico para poder tomar una tutoría? ',
        'Para tomar tutoría solo se necesita tener un tutor asignado y conocer los datos sobre dónde o en qué espacio (presencial o virtual) se llevará a cabo la sesión. '
    ])

const flowTutP12 = addKeyword(['12', '12.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *T12*. Las sesiones de tutoría académica ¿forman parte de mi horario escolar? ',
        'Las sesiones de tutoría se realizan en horario escolar, sin embargo, las clases son pausadas para que los estudiantes puedan asistir a la sesión que les corresponde o en su defecto debes acordar con tu Tutor académico un horario que no empalme con tus clases. '
    ])

const flowTutP13 = addKeyword(['13', '13.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *T13*. ¿En qué lugar se llevan a cabo las tutorías? ',
        'Cuando las tutorías son presenciales se llevan a cabo dentro de las instalaciones de la Facultad en la que se encuentra el Programa Educativo al que perteneces. Ahora en contingencia sanitaria, es importante que establezcas comunicación con tu Tutor Académico para establecer el espacio virtual por el que se llevará a cabo la tutoría. '
    ])

const flowTutP14 = addKeyword(['14', '14.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *T14*. ¿Cuáles son los medios electrónicos adecuados para mantener comunicación con mi Tutor Académico en modalidades no presenciales? ',
        'Los medios oficiales son el correo institucional y Eminus, sin embargo, con el fin de facilitar la comunicación y conforme a los acuerdos tomados con tu Tutor, también se hace uso de Zoom, Teams o cualquier otra herramienta virtual. '
    ])

const flowTutP15 = addKeyword(['15', '15.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *T15*. ¿Pueden ser todas las tutorías de manera virtual? ',
        'La modalidad para llevar a cabo las sesiones de tutoría se establece con base en las necesidades que se detecten por parte de los tutores y tutorados, así como de los criterios establecidos por cada programa educativo, considerando en todo momento las circunstancias vigentes. Por ahora, debido a la contingencia, estas sesiones se realizan de manera virtual al igual que las clases. '
    ])

const flowTutoria = addKeyword(['tutorial', 'tuto', 'tutoría', 'tutorías', 'tutoria', 'tutorias', 'tutor', 'tuto.', 'tutoría.', 'tutorias.', 'tutoria.'])
    .addAnswer(['🙌 Aquí encontras un información sobre Tutorías'])
    .addAnswer(
        [
            '👨‍👩‍👧‍👦 *1*. ¿En qué consiste la tutoría en la Universidad Veracruzana? ¿Cuál es su objetivo?  ',
            '👨‍👩‍👧‍👦 *2*. ¿Cuál es la importancia de tener un Tutor Académico? ',
            '👨‍👩‍👧‍👦 *3*. ¿Cómo ayudan las tutorías en mi formación académica y personal?  ',
            '👨‍👩‍👧‍👦 *4*. ¿En qué situación puedo acudir con mi tutor?  ',
            '👨‍👩‍👧‍👦 *5*. Si soy un estudiante de rendimiento académico alto ¿qué beneficio me puede brindar asistir a tutoría académica? ',
            '👨‍👩‍👧‍👦 *6*. ¿Puedo solicitar tutoría en el momento que yo lo requiera? ',
            '👨‍👩‍👧‍👦 *7*. ¿Quién me asigna a mi Tutor Académico? ',
            '👨‍👩‍👧‍👦 *8*. ¿Cómo consulto el nombre de mi tutor y dónde puedo localizarlo? ',
            '👨‍👩‍👧‍👦 *9*. ¿Puedo cambiar de tutor? ',  
            '👨‍👩‍👧‍👦 *10*. ¿Cada cuánto tiempo se llevan a cabo sesiones de tutoría? ¿Cuánto duran las sesiones? ',
            '👨‍👩‍👧‍👦 *11*. ¿Necesito algo en específico para poder tomar una tutoría? ',
            '👨‍👩‍👧‍👦 *12*. Las sesiones de tutoría académica ¿forman parte de mi horario escolar? ',
            '👨‍👩‍👧‍👦 *13*. ¿En qué lugar se llevan a cabo las tutorías? ',
            '👨‍👩‍👧‍👦 *14*. ¿Cuáles son los medios electrónicos adecuados para mantener comunicación con mi Tutor Académico en modalidades no presenciales? ',
            '👨‍👩‍👧‍👦 *15*. ¿Pueden ser todas las tutorías de manera virtual? ',
            null,
            null,
            [flowTutP1, flowTutP2, flowTutP3, flowTutP4, flowTutP5, flowTutP6, flowTutP7, flowTutP8, flowTutP9, flowTutP10, flowTutP11, flowTutP12, flowTutP13, flowTutP14, flowTutP15]
        ])


const flowIlP1 = addKeyword(['1', '1.'])
    .addAnswer([
        '💻 *IL1. ¿Qué es la IL? *',
        'Es el proceso que debes realizar en una fecha y hora indicada para ser INSCRITO y conformar tu horario del siguiente período escolar, de acuerdo a las experiencias educativas que seleccionaste en Planea UV Tu inscripción queda finalizada hasta que realizas el pago establecido en el formato que se te emite al concluir tu IL. '
    ])      

const flowIlP2 = addKeyword(['2', '2.'])
    .addAnswer([
        '💻 *IL2. ¿Cuándo es la IL? *',
        'El período establecido para la IL se encuentra en el calendario escolar vigente, consulta en Calendarios Escolares. https://www.uv.mx/estudiantes/calendarios-escolares/ La fecha y hora en que debes inscribirte en línea se informará previamente, por lo que debes estar al pendiente de la página informativa IL que se publica en el Portal de Estudiantes sobre la Inscripción en Línea. '
    ])

const flowIlP3 = addKeyword(['3', '2.'])
    .addAnswer([
        '💻 *IL3. Recomendaciones. *',
        'Conoce tu plan de estudios. ',
        'Acude a las tutorías académicas. ',
        'Verifica que en tu horario se muestren las experiencias educativas que vas a cursar. ',
        'Una vez concluida tu IL, realiza el pago de tu inscripción dentro de las fechas establecidas en el formato que se emite. ',
        'Cualquier situación relacionada a este trámite acude de manera inmediata con tu Secretario de Facultad (Directorio). '
    ])

const flowIlP4 = addKeyword(['4', '2.'])
    .addAnswer([
        '💻 *IL4. ¿Cómo o cuándo escogeré mi horario para el siguiente periodo escolar? *',
        'Tu horario podrás planearlo en las sesiones de tutoría en conjunto con tu tutor académico, quien podrá orientarte en la selección de experiencias educativas de acuerdo con tu avance y necesidades. '
    ])

const flowIlP5 = addKeyword(['5', '5.'])
    .addAnswer([
        '💻 *IL5. ¿Podremos escoger con qué maestro inscribo las experiencias educativas de mi siguiente periodo escolar? *',
        'El ejercicio que se realiza desde PLANEA en cuanto a la selección de experiencias educativas, es una sugerencia. Es decir, la decisión de inscribir o no cada experiencia educativa es tuya. '
    ])

const flowIlP6 = addKeyword(['6', '6.'])
    .addAnswer([
        '💻 *IL6. ¿Las experiencias educativas de PLANEA, son las que cursaré en el próximo periodo escolar? *',
        'El ejercicio que PLANEA ofrece sobre la selección de experiencias educativas para tu siguiente periodo escolar, es una sugerencia. Tú decides, de acuerdo con tus necesidades y tiempos, a qué experiencias educativas te inscribes.'
    ])


const flowIl = addKeyword(['il', 'inscripción', 'inscripciones', 'il.', 'inscripción.', 'inscripciones.'])  
    .addAnswer(['🙌 Aquí encontras un información sobre la Inscripción en Línea.'])
    .addAnswer(
        [
            '💻 *1*. ¿Qué es la IL? ',
            '💻 *2*. ¿Cuándo es la IL? ',
            '💻 *3*. Recomendaciones.  ',
            '💻 *4*. ¿Cómo o cuándo escogeré mi horario para el siguiente periodo escolar? ',
            '💻 *5*. ¿Podremos escoger con qué maestro inscribo las experiencias educativas de mi siguiente periodo escolar? ',
            '💻 *6*. ¿Las experiencias educativas de PLANEA, son las que cursaré en el próximo periodo escolar? ',
        ],
        null,
        null,  
        [flowIlP1, flowIlP2, flowIlP3, flowIlP4, flowIlP5, flowIlP6]
    )



const flowAfir1 = addKeyword(['1', '1.'])
    .addAnswer([
        '💻 *1. ¿A partir de qué periodo escolar (semestre) puedo inscribir experiencias educativas (materias) del AFEL? *',
        'Puedes inscribir experiencias educativas en línea a partir del segundo periodo escolar.'
    ])

const flowAfir2 = addKeyword(['2', '2.'])
    .addAnswer([
        '💻 *2. ¿En dónde puedo consultar las fechas de inscripción para el AFEL? *',
        'En el calendario escolar aparecen las fechas de inscripción semestral e intersemestral, ahí puedes consultarlas: Calendarios Escolares – Portal de Estudiantes (uv.mx)'
    ])

const flowAfir3 = addKeyword(['3', '3.'])
    .addAnswer([
        '💻 *3. ¿Puedo cursar experiencias educativas (materias) de AFEL en periodo intersemestral o solo en el periodo semestral? *',
        'Sí, puedes cursar experiencias educativas (materias) del AFEL tanto en el periodo intersemestral como en el periodo semestral (regular). Tú decides considerando tus necesidades académicas, intereses y disponibilidad de tiempo.',

    ])

const flowAfir4 = addKeyword(['4', '4.'])
    .addAnswer([
        '💻 *4. ¿Cómo me inscribo? *',
        'A partir del segundo periodo escolar (semestre) podrás inscribir las experiencias educativas (materias) ofertadas a través del portal MiUV. El trámite se denomina reinscripción y tiene los siguientes momentos: ',
        '1.	Inscripción en Línea (IL)',
        '2.	Inscripción a Lugares vacantes.'
    ])

const flowAfir5 = addKeyword(['5', '5.'])
    .addAnswer([
        '💻 *5. ¿Cuántas experiencias educativas (materias) del AFEL puedo inscribir por semestre? *',
        'En los periodos regulares (semestrales) podrás inscribir el número de experiencias educativas acorde a tus intereses y necesidades de formación. Es importante consideres: ',
        '•	Enriquezcan tu formación humana, intelectual, social o profesional, no las elijas únicamente por el número de créditos.',
        '•	La dirección donde se imparten y el tiempo que necesitarás para trasladarte en el caso de las presenciales.',
        '•	La oferta cambia cada periodo escolar, consulta de forma permanente el portal del AFEL para conocer alternativas de acreditación (https://www.uv.mx/formacionintegral/afel/alternativas-para-obtener-creditos/) y el portal de estudiantes para consulta de trámites escolares.https://www.uv.mx/estudiantes/tramites-escolares/'
    ])

const flowAfir6 = addKeyword(['6', '6.'])   
    .addAnswer([
        '💻 *6. ¿Hay un número límite de semestres para cubrir todos los créditos del AFEL?* ',
        'Puedes cursar las EE del AFEL a lo largo de tu permanencia en la UV, desde el segundo y hasta el último periodo escolar (semestre).'
    ])

const flowAfir7 = addKeyword(['7', '7.'])
    .addAnswer([
        '💻 *7. ¿Puedo inscribir experiencias educativas (materias) de AFEL aunque ya tenga cubiertos todos los créditos de esta área? *',
        'Sí puedes, aunque ya no te serán considerados los créditos que obtengas, pues ya tienes cubiertos los que tu plan de estudios solicita. En estos casos es importante consideres que la inscripción solo podrás realizarla a lugares vacantes pues el sistema ya no te ofertará EE del AFEL.'
    ])

const flowAfir8 = addKeyword(['8', '8.'])
    .addAnswer([
        '💻 *8. ¿Tienen costo las experiencias educativas (materias) del AFEL? *',
        'En el periodo regular (semestre) no tienen costo. En el periodo intersemestral generalmente su costo es de $350.00. Es importante que consultes cada periodo los lineamientos en el portal de estudiantes para conocer la actualización de la información. https://www.uv.mx/estudiantes/procesos-de-inscripcion/'
    ])

const flowAfir9 = addKeyword(['9', '9.'])
    .addAnswer([
        '💻 *9. ¿El pago de las experiencias educativas (materias) para intersemestral se realiza en el banco o en ventanilla? *',
        'En su mayoría, los pagos correspondientes para poder cursar EE en el AFEL se realizan en el banco que se indica al momento que realizas tu Inscripción en Línea (IL).'
    ])

const flowAfir10 = addKeyword(['10', '10.'])    
    .addAnswer([
        '💻 *10. ¿Qué sucede si no realizo el pago de las experiencias educativas (materias) en intersemestral? *',
        'En caso de no realizar el pago con la cantidad establecida, tu lugar y por lo tanto tu inscripción en la experiencia educativa (materia) no es válida, se cancela tu inscripción.'
    ])

const flowAfir11 = addKeyword(['11', '11.'])
    .addAnswer([
        '💻 *11. ¿Puedo cursar más de una experiencia educativa (materia) del AFEL en intersemestral? *',
        'Sí. En el caso específico del periodo intersemestral podrás cursar un máximo dos experiencias educativas (materias) independientemente del área de formación. Es importante que revises a detalle los lineamientos de inscripción que se publican cada periodo escolar para conocer los detalles o actualizaciones. https://www.uv.mx/estudiantes/procesos-de-inscripcion/'
    ])

const flowIr = addKeyword(['ir', 'ir.', 'inscripción', 'inscripciones', 'inscripción.', 'inscripciones.'])
    .addAnswer(['🙌 Aquí encontras un información sobre Inscripciones y reinscripciones'])
    .addAnswer(
        [
            '💻 *1.* ¿A partir de qué periodo escolar (semestre) puedo inscribir experiencias educativas (materias) del AFEL? ',
            '💻 *2.* ¿En dónde puedo consultar las fechas de inscripción para el AFEL? ',
            '💻 *3.* ¿Puedo cursar experiencias educativas (materias) de AFEL en periodo intersemestral o solo en el periodo semestral? ',
            '💻 *4.* ¿Cómo me inscribo? ',
            '💻 *5.* ¿Cuántas experiencias educativas (materias) del AFEL puedo inscribir por semestre?',
            '💻 *6.* ¿Hay un número límite de semestres para cubrir todos los créditos del AFEL?* ',
            '💻 *7.* ¿Puedo inscribir experiencias educativas (materias) de AFEL aunque ya tenga cubiertos todos los créditos de esta área?',
            '💻 *8.* ¿Tienen costo las experiencias educativas (materias) del AFEL?',
            '💻 *9.* ¿El pago de las experiencias educativas (materias) para intersemestral se realiza en el banco o en ventanilla?',
            '💻 *10.* ¿Qué sucede si no realizo el pago de las experiencias educativas (materias) en intersemestral?',
            '💻 *11.* ¿Puedo cursar más de una experiencia educativa (materia) del AFEL en intersemestral?',
        ],
        null,
        null,
        [flowAfir1, flowAfir2, flowAfir3, flowAfir4, flowAfir5, flowAfir6, flowAfir7, flowAfir8, flowAfir9, flowAfir10, flowAfir11]
    )



const flowCr1 = addKeyword(['1', '1.'])
    .addAnswer([
        '🎓 *1. ¿Qué otras alternativas hay para obtener créditos en el AFEL? *',
        'Para obtener créditos en el AFEL puedes:',
        '•	Cursar experiencias (materias) exclusivas del AFEL. https://www.uv.mx/formacionintegral/afel/catalogo-ee/',
        '•	Participar en Tutoría para la Investigación (https://www.uv.mx/formacionintegral/tutorias/tutorias-licenciatura/tutoria-para-la-investigacion/proposito-y-lineamientos-de-operacion-de-tutoria-para-la-investigacion/) o Tutoría para la Apreciación Artística (https://www.uv.mx/formacionintegral/tutorias/tutorias-licenciatura/tutoria-apreciacion-artistica/oferta-de-programas/).',
        '•	Participar como Monitor en tu programa educativo (carrera). https://www.uv.mx/formacionintegral/tutorias/tutorias-licenciatura/programa-de-monitores/',
        '•	Participar en los eventos del Programa Ven a la Cultura (https://www.uv.mx/formacionintegral/afel/ven-a-la-cultura/). Para que este reconocimiento sea válido, el evento deberá estar registrado en el programa con anticipación, es decir, que no es retroactivo.',
        'Puedes consultar todas las alternativas actuales en el portal del AFEL:',
        'https://www.uv.mx/formacionintegral/afel/alternativas-para-obtener-creditos/'
    ])

const flowCr2 = addKeyword(['2', '2.'])
    .addAnswer([
        '🎓 *2. ¿Se asignan créditos en el AFEL por asistencia a cursos extracurriculares o participación en eventos culturales? *',
        'Sí, a través del Programa Ven a la Cultura. Los eventos disponibles puedes consultarlos ingresando a través de tu portal donde debes ubicar el recuadro de Ven a la Cultura o en el siguiente enlace: https://www.uv.mx/registro/venalacultura/ ',
        'Para mayor información sobre el programa, consulta el siguiente enlace: https://www.uv.mx/formacionintegral/afel/ven-a-la-cultura/'
        ])  

const flowCr3 = addKeyword(['3', '3.'])
    .addAnswer([
        '🎓 *3. ¿El cursar inglés u otros idiomas cuenta como una materia de AFEL? *',
        'Sí, siempre que se oferten en el periodo escolar o realices el trámite de transferencia de créditos correspondiente. https://www.uv.mx/estudiantes/tramites-escolares/transferencias/',
        'Puedes consultar en el catálogo de AFEL las experiencias educativas (materias) que se pueden llegar a ofertar. https://www.uv.mx/formacionintegral/afel/catalogo-ee/'
    ])

const flowCr4 = addKeyword(['4', '4.'])
    .addAnswer([
        '🎓 *4. ¿El cursar deportes cuenta como una materia de AFEL? *',
        'Sí, siempre que se oferten en el periodo escolar. Las experiencias educativas de deportes son ofertadas por la Dirección de Actividades Deportivas. https://www.uv.mx/daduv/',
        'Puedes consultar en el catálogo de AFEL las experiencias educativas (materias) que se pueden llegar a ofertar. https://www.uv.mx/formacionintegral/afel/catalogo-ee/'
    ])

const flowCreditos = addKeyword(['creditos.', 'creditos', 'créditos', 'créditos.', 'credito', 'credito.'])
    .addAnswer(['🙌 Aquí encontras un información sobre Créditos'])
    .addAnswer(
        [
            '🎓 *1*. ¿Qué otras alternativas hay para obtener créditos en el AFEL? ',
            '🎓 *2*. ¿Se asignan créditos en el AFEL por asistencia a cursos extracurriculares o participación en eventos culturales? ',
            '🎓 *3*. ¿El cursar inglés u otros idiomas cuenta como una materia de AFEL? ',
            '🎓 *4*. ¿El cursar deportes cuenta como una materia de AFEL?',
        ],
        null,
        null,
        [flowCr1, flowCr2, flowCr3, flowCr4]
    )



const flowOf1 = addKeyword(['1', '1.'])
    .addAnswer([
        '🔎 *1*. ¿Quién imparte las experiencias educativas del AFEL? ',
        'Las experiencias educativas (materias) del AFEL se imparten a través de académicos que colaboran en Institutos de Investigación, Centros de Investigación o Direcciones generales, tales como Dirección de Actividades Deportivas, Dirección de Difusión Cultural, Dirección General del Sistema de Enseñanza Abierta, Dirección General de la Universidad Veracruzana Intercultural, entre otras. ',
        'En la siguiente liga puedes consultar las entidades que imparten: https://www.uv.mx/formacionintegral/afel/entidades-que-ofertan-ee/'
    ])

const flowOf2 = addKeyword(['2', '2.']) 
    .addAnswer([
        '🔎 *2*. ¿Dónde puedo verificar la dirección dónde se imparte cada EE? ',
        'Cuando realizas tu inscripción en línea, te indica la entidad y dirección donde cursarás la EE. En caso de que la dirección no se encuentre puedes buscarla en el siguiente enlace para contar a los responsables y obtener mayor información: https://www.uv.mx/formacionintegral/afel/entidades-que-ofertan-ee/'
    ])

const flowOf3 = addKeyword(['3', '3.'])
    .addAnswer([
        '🔎 *3*. ¿Qué sucede si rebaso el número de créditos establecidos para el AFEL?',
        'No hay problema, solo que ya no te serán considerados los créditos que obtengas, pues ya tienes cubiertos los que tu plan de estudios solicita. ',
        'Consulta aquí tu plan de estudios y verifica el número de créditos que pide para el AFEL:',
        '•	Técnico Superior Universitario https://www.uv.mx/oferta-educativa/tsu/',
        '•	Licenciatura https://www.uv.mx/oferta-educativa/licenciatura/'
    ])

const flowOf4 = addKeyword(['4', '4.'])
    .addAnswer([
        '🔎 *4*. ¿Si rebaso el número de créditos en el AFEL es posible validarlos como optativas?',
        'No, esta opción no es posible, dado que para las optativas se establecen otras experiencias educativas (materias). Las modalidades para acreditar esta área deberás consultarla con el Secretario de tu Facultad o con tu Tutor Académico. ',
        'Consulta el directorio de Secretarios de facultad aquí. https://www.uv.mx/estudiantes/directorio-secretarias-facultad/'
    ])

const flowOf5 = addKeyword(['5', '5.']) 
    .addAnswer([
        '🔎 *5*. ¿Mi promedio se ve afectado en caso de reprobar alguna EE de AFEL?',
        'Sí, en el periodo escolar (semestre) en el que la repruebas, dado que la calificación se integra tu cardex y se promedia con las calificaciones obtenidas en las demás experiencias educativas (materias), por tanto cualquier calificación aprobatoria o reprobatoria impacta en tu promedio.'
    ])

const flowOf6 = addKeyword(['6', '6.'])
    .addAnswer([
        '🔎 *OF6*. ¿Qué debo hacer en caso de no aparecer en la lista de la EE que solicité y pagué en tiempo y forma?',
        'Debes consultar con el Secretario de tu facultad para el seguimiento y atención de tu caso: ',
        'Consulta el directorio de Secretarios de facultad aquí. '
    ])

const flowOferta = addKeyword(['oferta', 'oferta.'])
    .addAnswer(['🙌 Aquí encontras un información sobre en qué lugares se ofertan experiencias educativas de AFEL'])
    .addAnswer(
        [
            '🔎 *OF1*. ¿Quién imparte las experiencias educativas del AFEL? ',
            '🔎 *OF2*. ¿Dónde puedo verificar la dirección dónde se imparte cada EE? ',
            ' En cuanto a escolaridad',
            '🔎 *OF3*. ¿Qué sucede si rebaso el número de créditos establecidos para el AFEL?',
            '🔎 *OF4*. ¿Si rebaso el número de créditos en el AFEL es posible validarlos como optativas?',
            '🔎 *OF5*. ¿Mi promedio se ve afectado en caso de reprobar alguna EE de AFEL?',
            '🔎 *OF6*. ¿Qué debo hacer en caso de no aparecer en la lista de la EE que solicité y pagué en tiempo y forma?',
        ],
        null,
        null,
        [flowOf1, flowOf2, flowOf3, flowOf4, flowOf5, flowOf6]
    )



const flowAfel1 = addKeyword(['af1', 'af1.'])
    .addAnswer([
        '🎓 *AF1. ¿Qué tipo de experiencias educativas (materias) se imparten en AFEL? * ',
        'El AFEL promueve aprendizajes complementarios a la disciplina ya que se integra por experiencias educativas orientadas a la salud integral, idiomas, formación y divulgación científica, manifestaciones artísticas, innovación educativa, ecología y cultura ciudadana. Conoce más aquí https://www.uv.mx/formacionintegral/afel/afel-descripcion/ sobre los temas que se abordar en las experiencias educativas (materias) del AFEL ',
        'Consulta aquí https://www.uv.mx/formacionintegral/afel/catalogo-ee/ el catálogo de experiencias educativas del AFEL'
    ])

const flowAfel2 = addKeyword(['af2', 'af2.'])
    .addAnswer([
        '🎓 *AF2. ¿Es obligatorio cubrir esta Área de formación?* ',
        'Sí, es obligatorio. Cada plan de estudios establece el número de créditos que debes cubrir a lo largo de tu trayectoria escolar.'
    ])

const flowAfel3 = addKeyword(['af3', 'af3.'])
    .addAnswer([
        '🎓 *AF3. ¿Cuántos créditos necesito en total para acreditar esta área de formación? *',
        'Cada plan de estudios establece el número de créditos que debes cubrir. Para conocer a detalle consulta en la siguiente página cuantos créditos te pide para el AFEL tu plan de estudios, ya sea que curse un programa de Técnico Superior Universitario o de Licenciatura.'
    ])

const flowAfel4 = addKeyword(['af4', 'af4.'])
    .addAnswer([
        '🎓 *AF4. ¿Dónde puedo consultar la oferta de las Experiencias Educativas (EE) del Área de Formación de Elección Libre (AFEL)? *',
        'La oferta educativa del AFEL la puedes consultar cada periodo escolar en el portal de estudiantes MiUV al momento de la Inscripción en Línea (IL). ',
        'Posterior a la IL podrás consultar los lugares vacantes en el portal del Departamento de Apoyo a la Formación Integral del Estudiante, en el apartado de AFEL. http://www.uv.mx/formacionintegral/afel/entidades-que-ofertan-ee/ ',
        'Adicionalmente puedes consultarla en los portales de las diferentes entidades que participan en el AFEL. https://www.uv.mx/formacionintegral/afel/entidades-que-ofertan-ee/directorio-de-contactos-en-entidades/'
    ])

const flowAfel5 = addKeyword(['af5', 'af5.'])
    .addAnswer([
        '🎓 *AF5. ¿Puedo cursar alguna EE en el campus de otra región? *',
        'Sí, en periodos regulares puedes cursar experiencias educativas en regiones distintas a la que perteneces haciendo el proceso señalado en el Reglamento de Movilidad. https://www.uv.mx/legislacion/files/2017/07/Movilidad-Universidad-Veracruzana.pdf'
    ])

const flowAfel = addKeyword(['afel', 'af', 'afel.', 'af.'])
    .addAnswer(['🙌 Aquí encontras un información sobre el Área de Formación de Elección Libre (AFEL).'])
    .addAnswer(
        [
            '🎓 *AF1.* ¿Qué tipo de experiencias educativas (materias) se imparten en AFEL? ',
            '🎓 *AF2.* ¿Es obligatorio cubrir esta Área de formación?',
            '🎓 *AF3.* ¿Cuántos créditos necesito en total para acreditar esta área de formación?',
            '🎓 *AF4.* ¿Dónde puedo consultar la oferta de las Experiencias Educativas (EE) del Área de Formación de Elección Libre (AFEL)? ',
            '🎓 *AF5.* ¿Puedo cursar alguna EE en el campus de otra región?',    
            '*IMPORTANTE: La oferta cambiar cada periodo escolar.*',
            ' ',
            'Adicionalmente puedes consultar las siguientes secciones de contenido:',
            '💻 *IR. Inscripciones y reinscripciones:*',
            '🎓 *CRÉDITOS. Opciones para obtener créditos de AFEL*',
            '🔎 *OFERTA. En qué lugares se ofertan experiencias educativas de AFEL*'

        ],
        null,
        null,
        [flowAfel1, flowAfel2, flowAfel3, flowAfel4, flowAfel5, flowIr, flowCreditos, flowOferta]
    )



const flowIncidencia = addKeyword(['insidencias', 'Insidencia'])
    .addAnswer(['🙌 Aquí encontras un información sobre las Insidencias'])

const flowPrincipal = addKeyword(['hola', 'que tal', 'buen día'])
    .addAnswer('🙌 Hola bienvenido a este *Chatbot* sobre Tutorías', {
        media: 'https://media.giphy.com/media/3o7TKz9bZx8Yh1g0Ji/giphy.gif',
    })
    .addAnswer(
        [
            'Te comparto las siguientes secciones de contenido',
            '👉 *Planea*',
            '👉 *Modelo*',
            '👉 *Tutoria*',
            '👉 *Inscripciónen en Línea* ',
            '👉 *AFEL* ',
            '👉 *Reportar Incidencias*',
            '👉 Para poder acceder ingresa la sección que deseas consultar',
        ],
        null,
        null,
        [flowPlanea, flowModelo, flowTutoria, flowIl, flowAfel, flowIncidencia]
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal, flowPlanea, flowModelo, flowTutoria, flowIl, flowAfel, flowIncidencia])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
