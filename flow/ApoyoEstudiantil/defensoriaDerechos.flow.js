const { addKeyword } = require('@bot-whatsapp/bot')
const BotWhatsapp = require ("@bot-whatsapp/bot")


const flowDefensoria = addKeyword(['Defensoría', 'Defensoría de los Derechos Universitarios', 'Defensoría de los Derechos Universitarios.'])
    .addAnswer(
        [
            '❗La Defensoria de los Derechos Universitarios se dedica a:',
            'Conocer y resolver las quejas que formulen los integrantes de la comunidad universitaria.',
            'Solicitar informes y practicar las investigaciones pertinentes para el conocimiento del hecho.',
            'Solicitar la aplicación de medidas cautelares.',
            'Orientar a los quejosos, autoridades o funcionarios que lo soliciten, así como gestionar ante estas dos últimas, la solución de los asuntos o formular propuesta para resolver el conflicto.',
            'Participar como observador a petición de parte en los actos universitarios.',
            'Emitir recomendaciones que sean procedentes.',
            'Rendir informe de labores ante el consejo universitario general.'
        ]
    )
    .addAnswer(
        [
            '❗Si deseas más información, o si deseas presentar una queja, puedes ingresar al siguiente enlace:',
            'https://www.uv.mx/estudiantes/defensoria-de-los-derechos-universitarios/'
        ]
    )

module.exports = flowDefensoria