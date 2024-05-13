const { addKeyword } = require('@bot-whatsapp/bot')
const BotWhatsapp = require ("@bot-whatsapp/bot")

const flowCom1 = addKeyword(['1'])
    .addAnswer(
        [
            '*1* ¿Cuáles son sus atribuciones?',
            'Las atribuciones de la Comisión Técnico Académica de Ingreso y Escolaridad son:',
            'I. Establecer los mecanismos y criterios para aplicar la reglamentación relativa a la escolaridad;',
            'II. Definir las políticas generales de la Universidad Veracruzana, con relación al ingreso, permanencia y egreso de los alumnos;',
            'III. Establecer lineamientos para la elaboración de procedimientos, mecanismos e instrumentos para la selección de alumnos de nuevo ingreso, con transparencia y rendición de cuentas;',
            'IV. Vigilar la optimización de los lugares disponibles relacionados con la oferta educativa de las entidades académicas;',
            'V. Evaluar los procedimientos en materia de escolaridad;',
            'VI. Conocer y resolver sobre los casos atípicos de ingreso, permanencia y egreso de los alumnos, o que presenten irregularidades en la aplicación de la legislación universitaria; ',
            'VII. Aprobar la propuesta de calendario escolar, que presente el Director General de Administración Escolar.'
        ]
    )

const flowCom2 = addKeyword([ '2'])
    .addAnswer(
        [
            '*2* ¿En qué te puede ayudar?',
            'Una de las funciones de la CTAIE es resolver los casos atípicos de ingreso, permanencia y egreso de los alumnos, o que presenten irregularidades en la aplicación de la Legislación Universitaria.',
            'Un caso atípico es aquella situación de ingreso y escolaridad, que por su naturaleza y características particulares, su resolución no se encuentra establecida en la Legislación Universitaria o se presentan irregularidades en la aplicación de la misma.',
            'Si tienes una situación escolar que no se resolvió favorablemente a través de diversas instancias de resolución, y consideras que la respuesta debe reconsiderarse por ser un caso atípico, dirige una solicitud a esta Comisión.',
            '',
            '*Requisitos.*',
            'Preparar una solicitud con los siguientes datos: ',
            'Nombre completo',
            'Matrícula',
            'Entidad académica',
            'Petición concreta (ser explícito y claro en lo que solicita) ',
            'Narración breve de los hechos y justificación',
            'Anexar documentos que se relacionen con los hechos ',
            'Lugar, fecha y firma',
            '',
            '¿Qué tienes que hacer?',
            '1. Enviar una solicitud con los requisitos indicados a través del correo electrónico ctaie@uv.mx',
            '2. Al momento de recibir la solicitud se te confirmará la recepción y se te informará el tiempo máximo de respuesta.',
            '3. La respuesta de resolución te será enviada al correo electrónico.',
            '',
            '*Consideraciones.*',
            'Si al analizar la solicitud recibida se identifica que el caso escolar no es atípico, se le dará respuesta conforme a la normatividad vigente, desde la Dirección de Servicios Escolares, dependiente de la Dirección General de Administración Escolar.',
            'La CTAIE no tiene atribuciones para interpretación de la Legislación Universitaria o para estructurar, dictaminar o sancionar faltas de los integrantes de la comunidad universitaria.',
            'Dudas e información a través del correo electrónico ctaie@uv.mx'
        ]
    )

const flowCom3 = addKeyword(['3'])
    .addAnswer(
        [
            '*3* ¿Quiénes son sus integrantes?',
            'La Comisión Técnico Académica de Ingreso y Escolaridad es un órgano colegiado de coordinación, apoyo, consulta, seguimiento, evaluación y decisión, responsable de definir las políticas, estrategias y procedimientos de ingreso y escolaridad, coherentes con los fines de la Universidad Veracruzana, en relación con la formación profesional con pertinencia y calidad que respondan a las necesidades que plantea el desarrollo integral del Estado y el país.',
            'La Comisión Técnico Académica de Ingreso y Escolaridad se integra por:',
            'I. El Presidente que será el Rector de la Universidad;',
            'II. El Secretario Técnico, que será el Secretario Académico, quien convoca y en ausencia del Rector preside las sesiones;',
            'III. El Secretario Ejecutivo que será el Director General de Administración Escolar;',
            'IV. Los Directores Generales de las Áreas Académicas;',
            'V. El Director General del Sistema de Enseñanza Abierta;',
            'VI. El Director General de la Unidad de Estudios de Posgrado;',
            'VII. El Director del Área de Formación Básica General;',
            'VIII. El Director General de la Universidad Veracruzana Intercultural; ',
            'IX. Los Secretarios Académicos Regionales. '
        ]
    )

const flowComision = addKeyword(['Areas de apoyo estudiantil', 'Apoyo estudiantil'])
    .addAnswer(
        [
            '❗Instrucciones: Del siguiente menú, anota el *numero* de la opción que mejor describe el tema de tu interés. ',
            '',
            '👉 *1* ¿Cuáles son sus atribuciones?',
            '👉 *2* ¿En qué te puede ayudar?',
            '👉 *3* ¿Qué es la perspectiva de género?'
        ],
        {capture: true}, null, [flowCom1, flowCom2, flowCom3]
    )

module.exports = {
    flowComision
}