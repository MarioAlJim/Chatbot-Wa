const { addKeyword } = require('@bot-whatsapp/bot')
const BotWhatsapp = require ("@bot-whatsapp/bot")

const flowBibliotecarios = addKeyword(['Bibliotecarios', '3'])
    .addAnswer(
        [
                ' 📕La Dirección General de Bibliotecas coordina todos los servicios ofrecidos por las bibliotecas universitarias. https://www.uv.mx/dgbuv/',
                '',
                'El Sistema Bibliotecario está integrado por 57 bibliotecas (35 en facultades, 12 en Institutos, 4 en UVI y 6 Unidades de Servicios Bibliotecarios y de Información – USBI)  distribuidas en las cinco regiones UV.  A continuación, te presentamos algunos de los servicios proporcionados:',
                'Préstamo interno o en sala, consiste en utilizar los recursos documentales dentro del espacio físico de la biblioteca.',
                'Préstamo externo o a domicilio, son los recursos documentales que puedes llevarte a casa.',
                'Préstamo Interbibliotecario, los usuarios integrantes de la UV podrán acceder a los recursos documentales de las bibliotecas del Sistema y de otras Instituciones de Educación Superior, a través de www.uv.mx/dgbuv/prestamo-interbibliotecario/',
                'Para obtener información más detallada sobre los servicios bibliotecarios, puedes visitar la página https://www.uv.mx/estudiantes/apoyos/bibliotecarios/'
        ]
    )


module.exports = flowBibliotecarios