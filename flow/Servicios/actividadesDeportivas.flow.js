const { addKeyword } = require('@bot-whatsapp/bot')
const BotWhatsapp = require ("@bot-whatsapp/bot")

const flowActDep1 = addKeyword(['1', '1.'])
    .addAnswer([
        '📄 *1. Experiencias educativas AFEL*',
        'Son las materias con valor en créditos, para que los alumnos inscritos en los programas educativos de licenciatura y TSU, puedan completar el Área de Formación de Elección Libre (AFEL) como parte de su plan de estudios.' +
        'Actualmente, la DADUV ofrece a la comunidad estudiantil 30 experiencias educativas https://www.uv.mx/daduv/seccion/afel/, todas con el propósito de promover la práctica de la actividad física y el deporte para favorecer el desarrollo integral de los universitarios. '
    ])

const flowActDep2 = addKeyword(['2', '2.'])
    .addAnswer([
        '📄 *2. Promoción deportiva*',
        'Tiene como finalidad construir una cultura de vida saludable a través de la práctica de actividad física y deporte, mediante la asesoría, organización y puesta en práctica de cursos, talleres de formación deportiva y torneos de diferentes disciplinas deportivas en las cinco regiones universitarias. '
    ])

const flowActDep3 = addKeyword(['3', '3.'])
    .addAnswer([
        '📄 *3. Deporte competencia*',
        'La DADUV organiza y promueve la participación de los universitarios en competencias deportivas a nivel local, estatal, nacional e internacional, con el propósito de fomentar la participación y el desarrollo deportivo de los universitarios. '
    ])

const flowActDep4 = addKeyword(['4', '4.'])
    .addAnswer([
        '📄 *4. Atención integral para la salud del deportista*',
        'La DADUV cuenta con un equipo de profesionales en medicina del deporte, fisioterapia y nutrición, que brindan atención integral a los deportistas universitarios, con el propósito de prevenir lesiones, mejorar su rendimiento y favorecer su recuperación. '
    ])


const flowActividadesDeportivas = addKeyword(['Actividades deportivas', BotWhatsapp.EVENTS.ACTION, '1'])
    .addAnswer('🙌 La Dirección de Actividades Deportivas de la Universidad Veracruzana (DADUV), tiene como objetivo fomentar el desarrollo integral de la comunidad universitaria y sociedad en general, a través de programas que promuevan el desarrollo físico, intelectual y social a través de la práctica de actividad física y deporte, propiciando el mejoramiento de las condiciones generales de la salud universitaria.')
    .addAnswer(
        [
            '📄 *1*. Experiencias educativas AFEL',
            '📄 *2*. Promocion deportiva ',
            '📄 *3*. Deporte competencia ',
            '📄 *4*. Atencion integral para la salud del deportista ',
            'Para mas información visita la pagina: https://www.uv.mx/estudiantes/apoyos/actividades-deportivas/'
        ],
        null, null,
        [flowActDep1, flowActDep2, flowActDep3, flowActDep4]
    )

module.exports = flowActividadesDeportivas