const {addKeyword} = require("@bot-whatsapp/bot");


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
    .addAnswer(['🙌 Aquí encontrará información sobre Inscripciones y reinscripciones.',
        'Ingrese el numero de la pregunta que desea consultar. '])
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
            '',
            'Te compartimos un video tutorial del proceso de IL elaborado por estudiantes de la Facultad de Pedagogía, Xalapa para que tengas mayor claridad de cómo se lleva a cabo.',
            'https://youtu.be/p7UQ0ndYCDE'
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
    .addAnswer(['🙌 Aquí encontrará información sobre Créditos,',
        'Ingrese el numero de la pregunta que desea consultar.'])
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
        '🔎 *6*. ¿Qué debo hacer en caso de no aparecer en la lista de la EE que solicité y pagué en tiempo y forma?',
        'Debes consultar con el Secretario de tu facultad para el seguimiento y atención de tu caso: ',
        'Consulta el directorio de Secretarios de facultad aquí. '
    ])

const flowOferta = addKeyword(['oferta', 'oferta.'])
    .addAnswer(['🙌 Aquí encontrará información sobre en qué lugares se ofertan experiencias educativas de AFEL.',
        'Ingrese el numero de la pregunta que desea consultar.'])
    .addAnswer(
        [
            '🔎 *1*. ¿Quién imparte las experiencias educativas del AFEL? ',
            '🔎 *2*. ¿Dónde puedo verificar la dirección dónde se imparte cada EE? ',
            ' En cuanto a escolaridad',
            '🔎 *3*. ¿Qué sucede si rebaso el número de créditos establecidos para el AFEL?',
            '🔎 *4*. ¿Si rebaso el número de créditos en el AFEL es posible validarlos como optativas?',
            '🔎 *5*. ¿Mi promedio se ve afectado en caso de reprobar alguna EE de AFEL?',
            '🔎 *6*. ¿Qué debo hacer en caso de no aparecer en la lista de la EE que solicité y pagué en tiempo y forma?',
        ],
        null,
        null,
        [flowOf1, flowOf2, flowOf3, flowOf4, flowOf5, flowOf6]
    )



const flowAfel1 = addKeyword(['1', '1.'])
    .addAnswer([
        '🎓 *1. ¿Qué tipo de experiencias educativas (materias) se imparten en AFEL? * ',
        'El AFEL promueve aprendizajes complementarios a la disciplina ya que se integra por experiencias educativas orientadas a la salud integral, idiomas, formación y divulgación científica, manifestaciones artísticas, innovación educativa, ecología y cultura ciudadana. Conoce más aquí https://www.uv.mx/formacionintegral/afel/afel-descripcion/ sobre los temas que se abordar en las experiencias educativas (materias) del AFEL ',
        'Consulta aquí https://www.uv.mx/formacionintegral/afel/catalogo-ee/ el catálogo de experiencias educativas del AFEL'
    ])

const flowAfel2 = addKeyword(['2', '2.'])
    .addAnswer([
        '🎓 *2. ¿Es obligatorio cubrir esta Área de formación?* ',
        'Sí, es obligatorio. Cada plan de estudios establece el número de créditos que debes cubrir a lo largo de tu trayectoria escolar.'
    ])

const flowAfel3 = addKeyword(['3', '3.'])
    .addAnswer([
        '🎓 *3. ¿Cuántos créditos necesito en total para acreditar esta área de formación? *',
        'Cada plan de estudios establece el número de créditos que debes cubrir. Para conocer a detalle consulta en la siguiente página cuantos créditos te pide para el AFEL tu plan de estudios, ya sea que curse un programa de Técnico Superior Universitario o de Licenciatura.'
    ])

const flowAfel4 = addKeyword(['4', '4.'])
    .addAnswer([
        '🎓 *4. ¿Dónde puedo consultar la oferta de las Experiencias Educativas (EE) del Área de Formación de Elección Libre (AFEL)? *',
        'La oferta educativa del AFEL la puedes consultar cada periodo escolar en el portal de estudiantes MiUV al momento de la Inscripción en Línea (IL). ',
        'Posterior a la IL podrás consultar los lugares vacantes en el portal del Departamento de Apoyo a la Formación Integral del Estudiante, en el apartado de AFEL. http://www.uv.mx/formacionintegral/afel/entidades-que-ofertan-ee/ ',
        'Adicionalmente puedes consultarla en los portales de las diferentes entidades que participan en el AFEL. https://www.uv.mx/formacionintegral/afel/entidades-que-ofertan-ee/directorio-de-contactos-en-entidades/'
    ])

const flowAfel5 = addKeyword(['5', '5.'])
    .addAnswer([
        '🎓 *5. ¿Puedo cursar alguna EE en el campus de otra región? *',
        'Sí, en periodos regulares puedes cursar experiencias educativas en regiones distintas a la que perteneces haciendo el proceso señalado en el Reglamento de Movilidad. https://www.uv.mx/legislacion/files/2017/07/Movilidad-Universidad-Veracruzana.pdf'
    ])

const flowAfel = addKeyword(['afel', 'af', 'afel.', 'af.'])
    .addAnswer(['🙌 Aquí encontrará información sobre el Área de Formación de Elección Libre (AFEL).',
        'El AFEL promueve aprendizajes complementarios a la disciplina ya que se integra por experiencias educativas orientadas a la salud integral, idiomas, formación y divulgación científica, manifestaciones artísticas, innovación educativa, ecología y cultura ciudadana.',
        'Ingrese el numero de la pregunta que desea consultar.'])
    .addAnswer(
        [
            '🎓 *1.* ¿Qué tipo de experiencias educativas (materias) se imparten en AFEL? ',
            '🎓 *2.* ¿Es obligatorio cubrir esta Área de formación?',
            '🎓 *3.* ¿Cuántos créditos necesito en total para acreditar esta área de formación?',
            '🎓 *4.* ¿Dónde puedo consultar la oferta de las Experiencias Educativas (EE) del Área de Formación de Elección Libre (AFEL)? ',
            '🎓 *5.* ¿Puedo cursar alguna EE en el campus de otra región?',
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















const flowAfbg1 = addKeyword(['1', '1.'])
    .addAnswer([
        '📚 *1.* ¿Qué pasa si repruebo una experiencia educativa que pertenece al Área de Formación Básica General?',
        'Para las experiencias educativas (EE) del AFBG no existe examen extraordinario, por lo que deben ser acreditadas en examen ordinario. Si repruebas tendrás que inscribirte nuevamente a la EE reprobada.  Sin embargo, si agotas dos inscripciones (Estatuto de los alumnos 2008) y sólo adeudas una EE puede acreditarla en examen de última oportunidad.'
    ])

const flowAfbg2 = addKeyword(['2', '2.'])
    .addAnswer([
        '📚 *2.* ¿Es obligatorio cursar inglés o puede cursar otro idioma?',
        'Para los planes de estudio que reconocen Inglés como única opción de idioma en el AFBG, los estudiantes deben cursar Inglés 1 y 2 respectivamente. Para los planes de estudio que reconoce Lengua 1 y 2 en el AFBG, los estudiantes deben cursar el nivel 2 que corresponde al idioma que cursaron en nivel 1. Siempre que esta se encuentre en la lista de opciones susceptibles a reconocimiento en la EE de Lengua, respectivamente.'
    ])

const flowAfbg3 = addKeyword(['3', '3.'])
    .addAnswer([
        '📚 *3.* ¿Se puede hacer examen de conocimiento y no cursarlas?',
        'Si reconoces que tienes habilidades en los saberes de las EE del AFBG, puedes realizar el examen por competencias y de esta manera acreditarlas. Para mayor información puedes consultar el siguiente enlace: https://www.uv.mx/estudiantes/afbg/'
    ])

const flowAfbg = addKeyword(['afbg', 'afbg.'])
    .addAnswer(['🙌 Aquí encontrará información sobre el Área de Formación Básica General (AFBG).',
        'Ingrese el numero de la pregunta que desea consultar.'])
    .addAnswer(
        [
            '📚 *1.* ¿Qué pasa si repruebo una experiencia educativa que pertenece al Área de Formación Básica General?',
            '📚 *2.* ¿Es obligatorio cursar inglés o puede cursar otro idioma?',
            '📚 *3.* ¿Se puede hacer examen de conocimiento y no cursarlas?'
        ],
        null,
        null,
        [flowAfbg1, flowAfbg2, flowAfbg3]
    )


const flowTram1 = addKeyword(['1', '1.'])
    .addAnswer([
        '📑 *1.* ¿Cómo dar de baja E.E.?',
        'El trámite depende del tipo de baja que desees realizar:',
        'Baja Temporal por periodo escolar https://www.uv.mx/estudiantes/tramites-escolares/baja-temporal-por-periodo-escolar/',
        'Baja Temporal por experiencia educativa https://www.uv.mx/estudiantes/tramites-escolares/baja-temporal-por-experiencia/',
        'Baja Temporal Extemporánea https://www.uv.mx/estudiantes/tramites-escolares/baja-temporal-extemporanea/',
        'Baja Definitiva https://www.uv.mx/estudiantes/tramites-escolares/baja-definitiva/'
    ])

const flowTram2 = addKeyword(['2', '2.'])
    .addAnswer([
        '📑 *2.* ¿Cuál es el trámite para cambiarse de programa educativo (carrera)?',
        'Para consultar a detalle los pasos a seguir para el cambio de programa educativo, consulta el siguiente enlace: https://www.uv.mx/estudiantes/tramites-escolares/cambios-de-programa-educativo/'
    ])

const flowTram3 = addKeyword(['3', '3.'])
    .addAnswer([
        '📑 *3.* ¿En qué horario puedo realizar mis trámites escolares?',
        'Accede al portal oficial de tu facultad para conocer los horarios y medios de atención establecidos.'
    ])

const flowTram4 = addKeyword(['4', '4.'])
    .addAnswer([
        '📑 *4.* ¿Cuáles son los trámites para cursar una experiencia educativa en otra facultad?',
        'Para mayor información consulta el Reglamento de movilidad. https://www.uv.mx/legislacion/files/2017/07/Movilidad-Universidad-Veracruzana.pdf',
        'Actualmente, debido a la contingencia sanitaria por COVID-19, las EE se están impartiendo en línea, por lo que puedes cursar EE que sean de otras regiones. Sin embargo, es importante consideres que una vez que se retorne a las actividades presenciales y, de acuerdo al semáforo epidemiológico, deberás asistir a tomar clases en el caso de las que tienen un horario declarado para ello.'
    ])

const flowTram5 = addKeyword(['5', '5.'])
    .addAnswer([
        '📑 *5.* ¿A quién debo dirigirme para que me expidan un justificante cuando que me encuentro enfermo o tengo problemas personales?',
        'Puedes dirigirte a la clínica en la que te encuentras dado de alta donde puedan valorarte y extender un justificante médico.  También puedes acudir a los Centros Centinela CEnDHIU para recibir valoración, mismos que puedes consultar en el siguiente enlace: https://www.uv.mx/cendhiu/'
    ])

const flowTram6 = addKeyword(['6', '6.'])
    .addAnswer([
        '📑 *6.* ¿Se debe entregar cada semestre el certificado digital de preparatoria para inscripción?',
        ' No, pero cualquier duda puedes comunicarte con tu Secretario de Facultad para conocer mayor detalle.'
    ])

const flowTram7 = addKeyword(['7', '7.'])
    .addAnswer([
        '📑 *7.* ¿Cómo hago para que me aparezca mi calificación de idiomas en mi cardex? ',
        ' El trámite debes realizar en el Centro de Idiomas donde acreditaste el curso. Para mayor detalle puedes consultar el siguiente enlace seleccionando la región a la que perteneces: https://www.uv.mx/estudiantes/tramites-escolares/transferencias/'
    ])

const flowTramites = addKeyword(['Tramites', 'Tramites.'])
    .addAnswer(['🙌 Aquí encontrará información sobre Trámites.',
        'Ingrese el numero de la pregunta que desea consultar.'])
    .addAnswer(
        [
            '📑 *1.* ¿Cómo dar de baja E.E.?',
            '📑 *2.* ¿Cuál es el trámite para cambiarse de programa educativo (carrera)?',
            '📑 *3.* ¿En qué horario puedo realizar mis trámites escolares?',
            '📑 *4.* ¿Cuáles son los trámites para cursar una experiencia educativa en otra facultad?',
            '📑 *5.* ¿A quién debo dirigirme para que me expidan un justificante cuando que me encuentro enfermo o tengo problemas personales?',
            '📑 *6.* ¿Se debe entregar cada semestre el certificado digital de preparatoria para inscripción?',
            '📑 *7.* ¿Cómo hago para que me aparezca mi calificación de idiomas en mi cardex? '
        ],
        null, null, [flowTram1, flowTram2, flowTram3, flowTram4, flowTram5, flowTram6, flowTram7]
    )


const flowBeca = addKeyword(['becas', 'becas.', 'beca', 'beca.'])
    .addAnswer([
        '🎓 *1.* ¿Qué tipos de becas ofrece la universidad para sus estudiantes? Para mayor información consultar el siguiente enlace https://www.uv.mx/estudiantes/becas-y-estimulos/',
    ])


const flowInst1 = addKeyword(['1', '1.'])
    .addAnswer([
        '🏫 *1.* ¿Dónde o con quién puedo identificar la infraestructura que compone mi Facultad o la Universidad?',
        ' Existen diferentes figuras dentro de la UV que pueden apoyar a los estudiantes con estas dudas, sin embargo lo más cercano es consultar con tu Tutor Académico o al Monitor de tu Programa Educativo, en caso de que esta figura se encuentre activa.'
    ])

const flowInst2 = addKeyword(['2', '2.'])
    .addAnswer([
        '🏫 *2.* ¿Hay algún reglamento en los laboratorios y talleres?',
        'Si, debes consultarlo en tu Facultad o solicitarlo para consulta. También puedes consultar los reglamentos disponibles en el siguiente enlace: https://www.uv.mx/legislacion/reglamentos/'
    ])

const flowInstalaciones = addKeyword(['instalaciones', 'instalaciones.', 'instalaciones universitarias', 'instalaciones universitarias.', 'instalacion', 'instalacion.'])
    .addAnswer([ '🙌 Aquí encontrará información sobre Instalaciones Universitarias.',
        'Ingrese el numero de la pregunta que desea consultar.'
    ])
    .addAnswer([
            '🏫 *1.* ¿Dónde o con quién puedo identificar la infraestructura que compone mi Facultad o la Universidad? ',
            '🏫 *2.* ¿Hay algún reglamento en los laboratorios y talleres? ',
        ],
        null,
        null,
        [flowInst1, flowInst2])



const flowIncidencia = addKeyword(['insidencias', 'Insidencia', 'insidencias.', 'Insidencia.', 'reportar insidencia', 'reportar insidencia.', 'reportar insidencias', 'reportar insidencias.'])
    .addAnswer(['🙌 Aquí encontrará información sobre las Insidencias.',
        'Ingrese el numero de la pregunta que desea consultar.'])

module.exports = {

}