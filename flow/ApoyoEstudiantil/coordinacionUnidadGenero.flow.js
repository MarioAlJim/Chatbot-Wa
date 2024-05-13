const { addKeyword } = require('@bot-whatsapp/bot')
const BotWhatsapp = require ("@bot-whatsapp/bot")

const flowCoor1 = addKeyword('1', '1. Principales líneas de acción de la Coordinación')
    .addAnswer(
        [
            'Asesoramiento, acompañamiento y seguimiento ante las autoridades competentes de los casos que se presenten por violencia de género, acoso u hostigamiento sexual, hacia quienes integran la comunidad universitaria.',
            'Fortalecimiento de la perspectiva de género en la promoción, difusión y orientación que se ofrezca a través de políticas y acciones claras que incidan en la inclusión y participación de la comunidad universitaria.'
        ]
    );

const flowCoor2 = addKeyword('2', '2. ¿Cuál es su estructura organizacional?')
    .addAnswer(
        [
            '2. ¿Cuál es su estructura organizacional?',
            'La Coordinación de la Unidad de Género cuenta con dos áreas de apoyo:',
            'El Área Jurídica: Se encarga de diseñar instrumentos jurídicos para atender la violencia de género en la institución, además de asesorar, remitir y acompañar en los procesos universitarios de atención a quejas por violencia de género, acoso u hostigamiento sexual. Para mayor información comunicarse a:  nfalfan@uv.mx y gilbmendoza@uv.mx',
            'El Área de Capacitación: Encargada de formular y difundir campañas de prevención, atención y erradicación de los tipos de violencia en sus diferentes modalidades, además de diseñar e impartir cursos y talleres para promover la igualdad de género. Si deseas conocer más sobre temas de género, puedes escribir a los correos: ixortiz@uv.mx y motrejo@uv.mx'
        ])

const flowCoor3 = addKeyword('3', '3. ¿Qué es la perspectiva de género?')
    .addAnswer(
        [
            '3. ¿Qué es la perspectiva de género?',
            'La perspectiva de género es considerada como una herramienta conceptual que permite identificar que, las diferencias entre mujeres y hombres se dan no sólo por su determinación biológica, sino también por las diferencias culturales asignadas a los individuos, desechando cualquier estereotipo o prejuicio de género, a fin de visualizar las situaciones de desventaja provocadas por condiciones de sexo o género.'
        ])

const flowCoor4 = addKeyword( '4', '4. ¿Qué es el Reglamento para la Igualdad de Género de la Universidad Veracruzana?')
    .addAnswer(
        [
            '4. ¿Qué es el Reglamento para la Igualdad de Género de la Universidad Veracruzana?',
            'Es el documento normativo universitario de observancia general,\n' +
            'obligatoria y aplicable a quienes integran la comunidad universitaria.\n' +
            'Indica a los organismos internos sus atribuciones y al personal\n' +
            'responsable las pautas que deben seguir para llevar a cabo la\n' +
            'transversalización de la perspectiva de género en la Institución.\n' +
            'Establece las normas para promover y\n' +
            'garantizar la igualdad entre mujeres y hombres,\n' +
            'así como la prevención, atención y erradicación\n' +
            'de todo tipo de discriminación basada en el\n' +
            'sexo o género dentro de la Universidad\n' +
            'Veracruzana.',
            '',
            'Puedes descargar el reglamento con el enlace: https://www.uv.mx/legislacion/files/2021/06/Reglamento-Igualdad-Genero-28-05-2021.pdf'
        ])

const flowCoord5 = addKeyword('5', '5. ¿Qué es el Protocolo para atender la violencia de género en la Universidad Veracruzana?')
    .addAnswer([
        '5. ¿Qué es el&nbsp;Protocolo para atender la violencia de género en la Universidad Veracruzana?',
        'Es eI instrumento normativo institucional que orienta a la comunidad universitaria sobre las vías que puede seguir para identificar alguna situación de violencia de género, reconocer con quien debe acudir y establece las bases de actuación para aplicar de manera efectiva la perspectiva de género a los procedimientos universitarios existentes, para la atención de la violencia de género en las entidades académicas y dependencias de la Universidad Veracruzana.',
        '',
        'Puedes descargar el protocolo con el enlace: https://www.uv.mx/uge/files/2021/09/Protocolo_agosto-paginas-1.pdf'
    ])

const flowCoord6 = addKeyword('6', '6. ¿Qué es la Violencia de Género?')
    .addAnswer(
        [
            '6. ¿Qué es la Violencia de Género?',
            'Para efectos y aplicación del Protocolo para atender la violencia de género en la Universidad Veracruzana, se considera como violencia de género, aquellas conductas que. con base en el sexo, orientación sexual, identidad y expresiÓn de génermatenten 0 dañan la dignidad de las personas.',
            'En el Protocolo la violencia de género contempla cualquiera y cada una de las manifestaciones siguientes:',
            'Discriminación por sexo:',
            'Toda distinción, exclusión o restricción basada en el sexo, que tenga por objeto o por resultado menoscabar o anular el reconocimiento,' +
            'goce o ejercicio por parte de la persona discriminada sea mujer u hombre, independientemente de su estado civil o cualquier otra circunstancia, sobre la base de la igualdad del hombre y la mujer, los ' +
            'derechos humanos y las libertades fundamentales en las esferas política, económica, social, cultural y civil o en cualquier otra. ',
            'Discriminación por género:',
            'Toda aquella exclusión basada en eI género, orientación, expresión o identidad de género, que ocasione una restricción o anulación del pleno goce de los derechos humanos y libertades.',
            'Acoso sexual:',
            'Todo comportamiento de carácter sexual no deseado y ofensivo para quien lo recibe. ',
            'Hostigamiento sexual: ',
            'Aquel comportamiento ofensivo de carácter sexual que se desarrolla en el ejercicio del poder en unarelación de subordinación.'
        ])

const flowCoord7 = addKeyword('7', '7. ¿A quién acudir si sufro violencia de género (acoso u hostigamiento sexual o discriminación por sexo o género)?')
    .addAnswer(
        ['7. ¿A quién acudir si sufro violencia de género (acoso u hostigamiento sexual o discriminación por sexo o género)?',
            'Para recibir la orientación adecuada acude a la Coordinación de la Unidad de Género quien, a través de Representaciones de la misma, darán la asesoría, el seguimiento oportuno y un adecuado acompañamiento en situaciones de violencia de género en cualquiera de sus manifestaciones, además de realizar las canalizaciones correspondientes ante situaciones que así lo requieran.',
            'Dichas acciones, van encaminadas tanto para las personas víctimas de algún hecho que pueda configurar alguna falta a la legislación universitaria (Violencia de género, acoso u hostigamiento sexual y discriminación por sexo o género), como para las autoridades encargadas de dar atención a las quejas que se formalmente se presenten, a fin de garantizar que se atiendan con perspectiva de género y con apego al Protocolo para atender la violencia de género en la Universidad Veracruzana.'
        ])

const flowCoordinacion = addKeyword(['Coordinación de la Unidad de Género', 'Coordinación'])
    .addAnswer(
        [
            '❗Instrucciones: Del siguiente menú, anota el *numero* de la opción que mejor describe el tema de tu interés. ',
            '',
            '👉 *1* Principales líneas de acción de la Coordinación',
            '👉 *2* ¿Cuál es su estructura organizacional?',
            '👉 *3* ¿Qué es la perspectiva de género?',
            '👉 *4* ¿Qué es el Reglamento para la Igualdad de Género de la Universidad Veracruzana?',
            '👉 *5* ¿Qué es el Protocolo para atender la violencia de género en la Universidad Veracruzana?',
            '👉 *6* ¿Qué es la Violencia de Género?',

        ],
        {capture: true}, null, [flowCoor1, flowCoor2, flowCoor3, flowCoor4, flowCoord5, flowCoord6, flowCoord7]
    )


module.exports = {
    flowCoordinacion
}
