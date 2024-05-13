const {addKeyword} = require("@bot-whatsapp/bot");

const flowVin1 = addKeyword(['1', 'Vinculacion Social'])
    .addAnswer(
            [
                '👉 *1* Vinculación Social',
                'La vinculación social se puede desarrollar a través de:' ,
                'Brigadas Universitarias, los cuales son equipos multidisciplinarios de estudiantes, que realizan su servicio social, práctica escolar, experiencia recepcional y el voluntariado universitario, se ubican en comunidades rurales, indígenas o urbanas del Estado de Veracruz.\n' +
                'Casas de la Universidad, son espacios que vinculan a nuestra Universidad con la Sociedad, en estos espacios la participación de los investigadores y docentes tienen un importante aporte para el proceso, pues junto con los estudiantes, se vuelven factores de cambio social.\n'
            ]
    )

const flowVin2 = addKeyword(['2', 'Vinculacion Laboral'])
    .addAnswer(
            [
                '👉 *2* Vinculación Laboral',
                'Busca apoyar la vinculación de estudiantes y egresados de la UV con el campo laboral de conformidad con su perfil académico y acorde a los requerimientos sociales. Para ello se ofrecen los siguientes servicios:' ,
                '' ,
                'Vinculación a Prácticas Profesionales, Residencias, Estancias, Trainee.' ,
                'Bolsa de trabajo UV' ,
                'Formación para el empleo' ,
                'Certificaciones' ,
                'Experiencias educativas de vinculación AFEL' ,
                'Programa “Mi Primer Empleo”']
    )

const flowVin3 = addKeyword(['3', 'Desarrollo Emprendedor e Innovación'])
    .addAnswer(
        [
            '👉 *3* Desarrollo Emprendedor e Innovación',
            '- Emprende UV: engloba una serie de acciones, redes de contacto, espacios y capacitaciones que inspiran, conectan e impulsan la cultura emprendedora y consolidan estrategias de emprendimiento e innovación que coadyuvan en el quehacer universitario, a través de un modelo que favorece la generación de diferentes estilos de emprendimiento.' ,
            '- Células de Innovación: Permite a los estudiantes integrarse en un equipo que aplicará los conocimientos adquiridos en el aula en escenarios reales, a través de la formulación de  proyectos de innovación, que proponen posibles soluciones a las problemáticas presentadas por una empresa.'
        ]
    )

const flowVin4 = addKeyword(['4', 'Registro de Propiedad Intelectual'])
    .addAnswer(
        [
            '👉 *4* Registro de Propiedad Intelectual',
            'A través de la Dirección de Vinculación se ofrece asesoría, gestión, acompañamiento y seguimiento en temas de:' ,
            '- Protección intelectual de “ideas” o resultados de investigación y apoyo en la consecución de fondos para la protección intelectual.' ,
            '- Transferencia o venta de tecnología y conocimientos y apoyo en la gestión de acciones complementarias: spin off o incubación para universitarios; start up o incubación para académicos e investigadores y; paquetes tecnológicos y trabajo vinculado para la adaptación, implementación y absorción de tecnologías o conocimientos por la empresa, el gobierno o la sociedad.'
        ]
    )

const flowVinculacion = addKeyword(['8', 'Vinculacion'])
    .addAnswer(
            [
                'Los jóvenes universitarios juegan un rol preponderante y fundamental en el desarrollo de la sociedad, al aportar conocimientos útiles y alternativas de solución a las demandas y requerimientos de los diferentes sectores y el entorno. Por otro lado, el campo de trabajo demanda profesionistas ampliamente competitivos. Por ello, la Universidad Veracruzana implementa diversas estrategias para la formación integral de sus estudiantes, entre éstas se encuentra la realización de actividades de vinculación.',
                'Es por ello que la Dirección General de Vinculación, coordinadamente con las distintas entidades académicas y dependencias de la Universidad, impulsa diferentes programas y estrategias para vincular a los estudiantes.',
                '❗Instrucciones: Del siguiente menú, anota el *numero* de la opción que mejor describe el tema de tu interés. ',
                '',
                '👉 *1* Vinculación Social',
                '👉 *2* Vinculación Laboral ',
                '👉 *3* Desarrollo Emprendedor e Innovación',
                '👉 *4* Registro de Propiedad Intelectual'
            ], {capture:true}, null, [
            flowVin1, flowVin2, flowVin3, flowVin4
        ]
    )

module.exports = flowVinculacion