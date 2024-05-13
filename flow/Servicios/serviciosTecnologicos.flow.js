const {addKeyword} = require("@bot-whatsapp/bot");

const flowTec1 = addKeyword(['1', '1.'])
    .addAnswer([
        '🖥️ *1.* ¿En las clases virtuales nos capacitan para el uso de alguna plataforma?',
        'Si, esta capacitación la realiza la Coordinación para la educación en línea.'
    ])

const flowTec2 = addKeyword(['2', '2.'], '2.')
    .addAnswer([
        '🖥️ *2.* ¿Dónde o cómo puedo actualizar mi información personal, por ejemplo: correo electrónico, número de celular y dirección? ',
        ' En servicios de tecnología de información pueden apoyarte con la actualización de los datos. Para mayor detalle consulta el siguiente enlace: https://www.uv.mx/estudiantes/servicios-tecnologicos/'
    ])

const flowTecnologia = addKeyword(['7','Servicios de tecnología de informacíon', 'Servicios de tecnología de informacíon.', 'tecnología', 'tecnología.'])
    .addAnswer([
        '🖥️ La Dirección General de Tecnología de Información es la dependencia responsable de gestionar los servicios y soluciones de tecnologías de la información tales como, sistemas informáticos, seguridad informática, atención técnica, infraestructura tecnológica, servicios de telecomunicaciones y portales universitarios, entre otros, para dar soporte a la operación de la Universidad Veracruzana.',
        '❗Instrucciones: Del siguiente menú, anota el *numero* de la opción que mejor describe el tema de tu interés. ',
    ])
    .addAnswer([
            '🖥️ *1.* ¿En las clases virtuales nos capacitan para el uso de alguna plataforma?',
            '🖥️ *2.* ¿Dónde o cómo puedo actualizar mi información personal, por ejemplo: correo electrónico, número de celular y dirección? ',
            'Para obener mas información visita la pagina: https://www.uv.mx/estudiantes/apoyos/servicios-tecnologicos/'
        ],
        {capture: true},
        null,
        [flowTec1, flowTec2])

module.exports = flowTecnologia