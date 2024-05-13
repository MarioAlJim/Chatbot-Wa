const { addKeyword } = require('@bot-whatsapp/bot')

const flowModP1 = addKeyword(['1', '1.'])
    .addAnswer([
        '📄 *¿En qué consiste el modelo educativo integral y flexible con el que cuenta la Universidad Veracruzana?*',
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
        {capture: true}, null, [flowModP1, flowModP2, flowModP3, flowModP4, flowModP5, flowModP6, flowModP7, flowModP8, flowModP9, flowModP10, flowModP11]
    )

module.exports = flowModelo