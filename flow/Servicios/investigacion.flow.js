const { addKeyword } = require('@bot-whatsapp/bot')

const flowInv1 = addKeyword(['1'])
    .addAnswer(
        [
            '📚️ *1* Estancias Intersemestrales de Investigación Científica',
            'Su objetivo es fomentar el interés de los estudiantes de licenciatura en la investigación, así como promover la movilidad entre las cinco regiones universitarias durante el verano y al interior de cada región en el invierno.' ,
            'Durante las tres semanas que duran aproximadamente y con el acompañamiento de los investigadores, estas estancias introducen a los estudiantes en diferentes proyectos de investigación de diversas áreas del conocimiento, ampliando su panorama y asegurando una mejor elección de trabajo recepcional o estudios de posgrado.' ,
            '6 créditos de AFEL (una única vez)' ,
            'Periodicidad: bianual verano/invierno.',
            'https://www.uv.mx/investigacion/general/estancias-intersemestrales-de-investigacion/'
        ]
    )

const flowInv2 = addKeyword(['2'])
    .addAnswer(
        [
            '📚 *2* Sábados en la Ciencia ',
            'Este programa de divulgación científica tiene su sede en el Museo de Antropología de Xalapa y su objetivo es compartir el conocimiento de los especialistas al público familiar, a través de conferencias, experimentos, exposiciones interactivas y otras dinámicas, en una mezcla particular para cada evento.',
            'https://www.uv.mx/investigacion/difusion-de-la-investigacion/programa-sabados-en-la-ciencia/'
        ]
    )

const flowInv3 = addKeyword(['3'])
    .addAnswer(
        [
            '📚 *3* Tardes de Ciencia ',
            'Es un programa de divulgación científica a través de charlas virtuales orientadas a compartir el conocimiento de los especialistas al público en general. Se han expuesto temas científicos, tecnológicos, humanísticos y artísticos a un público muy diverso, incluso algunas personas han encontrado o reencausado su vocación profesional, a partir de la emoción que da la ciencia a todo aquel que se acerca a ella de la manera adecuada.'
        ]
    )

const flowInv4 = addKeyword(['4'])
    .addAnswer(
        [
            '📚 *4* Un minuto de Ciencia ',
            'Conoce los proyectos de investigación que se realizan en la Universidad Veracruzana, a través de cápsulas de video de los investigadores e investigadoras donde comentan su línea de investigación y los resultados obtenidos en ellas.',
            'https://www.uv.mx/investigacion/general/1-minuto-de-ciencia/'
        ]
    )


const flowInvestigacion = addKeyword(['Investigacion', '4'])
    .addAnswer(
        [
            'La Dirección General de Investigaciones está integrada por 26 Institutos de Investigación, 16 Centros de Investigación y el Programa de Estudios de Cambio Climático de la Universidad Veracruzana, conoce sus actividades y proyectos de investigación.',
            {
                media: 'https://www.uv.mx/estudiantes/files/2021/06/mensaje-investigacion-1024x279.png'
            }
        ]
    )
    .addAnswer(
        [
            'Tambien te comparto el siguiente contenido:',
            '',
            '📚️ *1* Estancias Intersemestrales de Investigación Científica ',
            '📚 *2* Sábados en la Ciencia ',
            '📚 *3* Tardes de Ciencia  ',
            '📚 *4* Un minuto de Ciencia ',
            'Para mas información visita la pagina: https://www.uv.mx/estudiantes/apoyos/investigacion/'
        ], {capture:true}, null, [
        flowInv1, flowInv2, flowInv3, flowInv4
        ]
    )
module.exports = flowInvestigacion