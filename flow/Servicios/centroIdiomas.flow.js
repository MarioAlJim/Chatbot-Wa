const { addKeyword } = require('@bot-whatsapp/bot')
const BotWhatsapp = require ("@bot-whatsapp/bot")

const flowIdi1 = addKeyword(['1'])
    .addAnswer(
        [
            '📑 *1* Requisitos de inscripcion',
            'Los requisitos de inscripción en los Centros de idiomas y/o de Autoacceso son los siguientes:',
            '- Cumplir con lo estipulado en la Convocatoria, la cual se publica cada semestre, en los meses de junio y diciembre.',
            '- Tener una edad mínima de 16 años cumplidos.',
            '- Imprimir la solicitud de registro de inscripción.',
            '- Presentar identificación vigente con fotografía, en el caso de alumnos UV presentar credencial que lo acredite.',
            '- Presentar fotocopia del acta de nacimiento o CURP.',
            '- Realizar el pago.'
        ]
    )

const flowIdi2 = addKeyword(['2'])
    .addAnswer(
        ['📑 *2* Beneficios de estudiar en los CI y CAA',
            'Estudiar en los Centros de Idiomas (CI) y Centros de Autoacceso (CAA) te permitirá:',
        '- Elegir entre diferentes modalidades de aprendizaje.',
        '- Prepararte para participar en los programas de Movilidad UV para realizar estancias académicas en el extranjero en modalidades presencial o virtual.' ,
        '- Realizar el trámite de transferencia de calificación en las experiencias educativas del Área de Formación Básica General (AFBG).' ,
        '- Obtener créditos en el Área de Formación de Elección Libre (AFEL).' ,
        '- Acreditar el examen de Comprensión de Textos en Inglés.' ,
        '- Certificar niveles de dominio en el Idioma.' ,
        '- Cumplir con el requisito de dominio del idioma para:' ,
        '-- Egresar de programas de Licenciatura, Técnico Superior Universitario y Posgrado;' ,
        '-- Ingresar a programas de Posgrado.']
    )

const flowIdi3 = addKeyword(['3'])
    .addAnswer(
        ['📑 *3* Examen de Certificación Lingüística',
            'En los CI y CAA también se aplican exámenes para certificar tu nivel en los idiomas de Lengua Inglesa, Aleman e Italiano',
            'Exámenes de Certificación de Lengua Inglesa EXAVER.' ,
            '- EXAVER I' ,
            '- EXAVER 2' ,
            '- EXAVER 3' ,
            'Examen para la Certificación del Italiano como Lengua Extranjera. Certificación de Italiano CILS' ,
            'Examen de Certificación de Lengua Alemana. Certificación de Alemán ÖSD'
        ]
    )

const flowIdi4 = addKeyword(['4'])
    .addAnswer(
        [
            '📑 *4* Obtención de créditos en Licenciatura',
            'Puedes acreditar las experiencias educativas de Inglés I/Lengua I o Inglés II/Lengua II del Área de Formación Básica General, así como obtener créditos para el Área de Formación de Elección Libre, a través de las siguientes opciones:',
        'Presentando el Exámenes de Certificación de Lengua Inglesa EXAVER.' ,
        'Presentando una certificación nacional o extranjera reconocida por la Secretaría Académica, consulta la tabla de certificaciones válidas, disponible en el portal web de cada Centro de Idiomas o Centro de Autoacceso.' ,
        'Realizando cursos en los Centros de Idiomas y Autoacceso, a través del trámite de transferencia de calificación.' ,
        'El trámite de transferencia de créditos y equivalencias se realizan en línea a través del Centro de Idiomas de tu Región' ,
        '- Coatzacoalcos' ,
        '- Veracruz' ,
        '- Córdoba' ,
        '- Orizaba' ,
        '- Poza Rica' ,
        '- Xalapa' ,
        '-- Centro de Idiomas' ,
        '-- Centro de Autoacceso USBI Xalapa']
    )

const flowIdiomas = addKeyword(['Idiomas', '3'])
    .addAnswer(
        [
            'A través de los Centros de Idiomas (CI) y de los Centros de Autoacceso (CAA) en las diferentes regiones universitarias, ' +
            'la Dirección de Centros de Idiomas y de Autoacceso (DCIA) apoya la formación integral de los estudiantes al capacitarlos en el uso ' +
            'y manejo de lenguas extranjeras y nacionales en un nivel competitivo, prepararlos para la Movilidad Estudiantil en ' +
            'Instituciones Educativas Extranjeras y dotarlos de herramientas lingüísticas actuales que les permita una rápida y eficaz adaptación ' +
            'al mundo laboral con un alto sentido de responsabilidad, liderazgo y respeto hacia otras culturas y hacia una revaloración de la propia.'
        ]
    )
    .addAnswer(
        'Idiomas que se imparten en los Centro de Idiomas',
        {
            media: 'https://www.uv.mx/estudiantes/files/2021/07/CI-Idiomas-e1625185718358-1024x391.png',
        })
    .addAnswer('Idiomas que se imparten en los centro de Autoacceso',
        {
            media: 'https://www.uv.mx/estudiantes/files/2021/11/CI-CAA-Idiomas-z-e1690929120960-1024x483.png',
        })
    .addAnswer('Modalidades de aprendizaje de idiomas',
        {
            media: 'https://www.uv.mx/estudiantes/files/2021/07/CI-2-1024x576.png'
        })
    .addAnswer(['Tambien te comparto el siguiente contenido:',
        '📑 *1* Requisitos de inscripcion',
        '📑 *2* Beneficios de estudiar en los CI y CAA',
        '📑 *3* Examen de Certificación Lingüística',
        '📑 *4* Obtención de créditos en Licenciatura',
        'Para mas información visita la pagina: https://www.uv.mx/estudiantes/apoyos/centros-de-idiomas-y-de-autoacceso/'
    ], {capture: true}, null, [flowIdi1, flowIdi2, flowIdi3, flowIdi4])


module.exports = flowIdiomas