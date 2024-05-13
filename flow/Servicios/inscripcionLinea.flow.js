const {addKeyword} = require("@bot-whatsapp/bot");

const flowIlP1 = addKeyword(['1', '1.'])
    .addAnswer([
        '💻 *1. ¿Qué es la IL? *',
        'Es el proceso que debes realizar en una fecha y hora indicada para ser INSCRITO y conformar tu horario del siguiente período escolar, de acuerdo a las experiencias educativas que seleccionaste en Planea UV Tu inscripción queda finalizada hasta que realizas el pago establecido en el formato que se te emite al concluir tu IL. '
    ])

const flowIlP2 = addKeyword(['2', '2.'])
    .addAnswer([
        '💻 *2. ¿Cuándo es la IL? *',
        'El período establecido para la IL se encuentra en el calendario escolar vigente, consulta en Calendarios Escolares. https://www.uv.mx/estudiantes/calendarios-escolares/ La fecha y hora en que debes inscribirte en línea se informará previamente, por lo que debes estar al pendiente de la página informativa IL que se publica en el Portal de Estudiantes sobre la Inscripción en Línea. '
    ])

const flowIlP3 = addKeyword(['3', '3.'])
    .addAnswer([
        '💻 *3. Recomendaciones. *',
        'Conoce tu plan de estudios. ',
        'Acude a las tutorías académicas. ',
        'Verifica que en tu horario se muestren las experiencias educativas que vas a cursar. ',
        'Una vez concluida tu IL, realiza el pago de tu inscripción dentro de las fechas establecidas en el formato que se emite. ',
        'Cualquier situación relacionada a este trámite acude de manera inmediata con tu Secretario de Facultad (Directorio). '
    ])

const flowIlP4 = addKeyword(['4', '4.'])
    .addAnswer([
        '💻 *4. ¿Cómo o cuándo escogeré mi horario para el siguiente periodo escolar? *',
        'Tu horario podrás planearlo en las sesiones de tutoría en conjunto con tu tutor académico, quien podrá orientarte en la selección de experiencias educativas de acuerdo con tu avance y necesidades. '
    ])

const flowIlP5 = addKeyword(['5', '5.'])
    .addAnswer([
        '💻 *5. ¿Podremos escoger con qué maestro inscribo las experiencias educativas de mi siguiente periodo escolar? *',
        'El ejercicio que se realiza desde PLANEA en cuanto a la selección de experiencias educativas, es una sugerencia. Es decir, la decisión de inscribir o no cada experiencia educativa es tuya. '
    ])

const flowIlP6 = addKeyword(['6', '6.'])
    .addAnswer([
        '💻 *6. ¿Las experiencias educativas de PLANEA, son las que cursaré en el próximo periodo escolar? *',
        'El ejercicio que PLANEA ofrece sobre la selección de experiencias educativas para tu siguiente periodo escolar, es una sugerencia. Tú decides, de acuerdo con tus necesidades y tiempos, a qué experiencias educativas te inscribes.'
    ])


const flowInscripcionlinea = addKeyword(['il', 'inscripción', 'inscripciones', 'il.', 'inscripción.', 'inscripciones.', 'Inscripción en Línea', 'Inscripción en Línea.', '9'])
    .addAnswer(['🙌 Aquí encontrará información sobre la Inscripción en Línea.',
        'Ingrese el numero de la pregunta que desea consultar.'])
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

module.exports = flowInscripcionlinea