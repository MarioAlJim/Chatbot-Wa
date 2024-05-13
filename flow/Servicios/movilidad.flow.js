const { addKeyword } = require('@bot-whatsapp/bot')


const flowMov1 = addKeyword(['1'])
    .addAnswer(
        [
            '️️✈️ *1* ¿Cuándo puedo iniciar con mi proceso de movilidad? ',
            'Desde que ingresas a la UV puedes comenzar a planear las opciones de movilidad que desees cursar.' ,
            'Puedes realizar una estancia semestral, actividades de investigación, desarrollo de proyectos en programas especiales o prácticas profesionales, así como realizar cursos virtuales y tener contacto con maestros y estudiantes de otras universidades que te ayuden a fortalecer conocimientos y habilidades específicas.'
        ]
    )

const flowMov2 = addKeyword(['2'])
    .addAnswer(
        [
            '✈️ *2* ¿Cuáles son los requisitos?',
            'Los requisitos pueden variar de una convocatoria a otra, pero en términos generales:' ,
            '',
            'Haber cubierto el 100 por ciento de las experiencias educativas del Área de Formación Básica General;' ,
            'Un promedio igual o superior a 8.5 al momento de realizar la solicitud;' ,
            'Haber cursado entre el 50 y el 70 por ciento de los créditos de tu plan de estudios;' ,
            'En caso de necesitarse, la acreditación del idioma del país o programa que deseas;' ,
            'Es preferible que hayas acreditado tus asignaturas en exámenes ordinarios.'
        ]
    )

const flowMov3 = addKeyword(['3'])
    .addAnswer(
        [
            '✈️ *3* ¿Cómo es el proceso de selección?',
            'Además de los requisitos que se describen en cada convocatoria, un Comité de Selección analiza cada solicitud y valora:' ,
            '' ,
            'Que cuentes con un perfil académico y personal destacado; si bien el promedio es un indicador importante, no define la selección.',
            'Tu currículum y la participación en proyectos académicos,  la obtención de reconocimientos o premios, asistencia a congresos o seminarios que estén en relación con tu proyecto de movilidad.' ,
            'Las actividades extracurriculares, todo lo que haces dentro y fuera de la Universidad que complemente tu educación superior es fundamental en tu formación integral, por ejemplo: actividades recreativas, deportivas, artísticas, pertenencia a asociaciones, etcétera.'
        ]
    )

const flowMov4 = addKeyword(['4'])
    .addAnswer(
        [
            '✈️ *4* ¿Puedo irme a dónde quiera?',
            'En la planeación de tu estancia o para participar en alguna convocatoria, es básico que consideres la pertinencia e impacto de la movilidad para tu carrera, es decir, que expreses claramente la relevancia académica de tu solicitud y justifiques tu elección sobre la institución donde te gustaría realizar tu movilidad.'
        ]
    )

const flowMov5 = addKeyword(['5'])
    .addAnswer(
        [
            '✈️ *5* ¿Quién lo paga?',
            'Cada convocatoria establece las posibilidades de fuentes de financiamiento de acuerdo al tipo de movilidad estudiantil. Pudiendo ser recursos de la Universidad Veracruzana, así como becas o apoyos económicos de organismos externos.\n' +
            'Consulta el portal web y redes sociales del Departamento de Movilidad Estudiantil (https://www.uv.mx/movilidad/) y Académica y el Programa de Movilidad (https://www.uv.mx/promuv/).'
        ]
    )

const flowMovilidad = addKeyword(['5', 'Movilidad nacional e internacional'])
    .addAnswer(
        'Como estudiante de la Universidad Veracruzana, la Dirección General de Relaciones Internacionales,  a través de la Coordinación de Movilidad Estudiantil y Académica, te permite acceder a una amplia variedad de programas de movilidad nacionales e internacionales, realizando actividades presenciales o virtuales en alguna de las más de 200 universidades con las que se cuentan convenios de colaboración.'
    )
    .addAnswer(
        [
            '❗Instrucciones: Del siguiente menú, anota el *numero* de la opción que mejor describe el tema de tu interés. ',
            '',
            '✈️ *1* ¿Cuándo puedo iniciar con mi proceso de movilidad? ',
            '✈️ *2* ¿Cuáles son los requisitos?',
            '✈️ *3* ¿Cómo es el proceso de selección?',
            '✈️ *4* ¿Puedo irme a dónde quiera?',
            '✈️ *5* ¿Quién lo paga?'
            ], {capture:true}, null, [
        flowMov1, flowMov2, flowMov3, flowMov4, flowMov5
        ]
    )

module.exports = flowMovilidad