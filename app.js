const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')
const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const flowServicios = require("./flow/Servicios/servicios.flow");
const flowTutoria = require ( "./flow/ApoyoEstudiantil/tutoria.flow");
const flowModelo = require ( "./flow/ApoyoEstudiantil/modelo.flow");
const flowDirectorio = require ( "./flow/ApoyoEstudiantil/secretariasdeFacultadCoordinacionesEnlacesdeProgramasEducativos.flow");
const flowDefensoria = require ( "./flow/ApoyoEstudiantil/defensoriaDerechos.flow");
const {flowCoordinacion} = require ( "./flow/ApoyoEstudiantil/coordinacionUnidadGenero.flow");
const {flowComision} = require ( "./flow/ApoyoEstudiantil/comisionTecnicoAcadémicaIngresoEscolaridad.flow");
const BotWhatsapp = require("@bot-whatsapp/bot");

const flowApoyoEstudiantil = addKeyword(['1', 'Apoyo', 'Areas de apoyo estudiantil', 'Apoyo estudiantil'], 'Apoyo estudiantil')
    .addAnswer(
        [
            '❗Instrucciones: Del siguiente menú, anota el nombre de la *sección* de la opción que mejor describe el tema de tu interés. ',
            'Para regresar a este al menu anterior, escribe las palabras “*hola*” o “*inicio*”.',
            '',
            '👉 *Tutoria* Tutorias',
            '👉 *Modelo* Modelo estudiantil integral y flexible',
            '👉 *Directorio* Directorio de Secretarías de Facultad, Coordinaciones y Enlaces de Programas Educativos',
            '👉 *Defensoria* Defensoria de los Derechos Universitarios',
            '👉 *Coordinacion* Coordinación de la Unidad de Género',
            '👉 *Comision* Comisión Técnico Académica de Ingreso y Escolaridad'
        ], {capture:true}, null, [ flowModelo, flowTutoria, flowDirectorio, flowDefensoria, flowCoordinacion, flowComision]
    )

const flowBienvenida = BotWhatsapp.addKeyword([BotWhatsapp.EVENTS.ACTION, 'Hola', "Hola", 'Hi', 'hi', 'Inicio', 'inicio', 'Hola!', 'hola', 'Hola.', 'hola.', 'Inicio.', 'inicio.', '.'], 'Inicio')
    .addAnswer('🙌  ¡Hola, bienvenidos al Chatbot DAFIE UV! Puedo compartirte respuestas a preguntas frecuentes sobre tutorías.', {
        media: 'https://www.uv.mx/chinaveracruz/files/2014/09/flor-uv-01-1024x791.jpg',
    })
    .addAnswer(
        [
            '❗Instrucciones: Del siguiente menú, anota el *numero* de la opción que mejor describe el tema de tu interés. ',
            'Para regresar a este menú, escribe las palabras “*hola*” o “*inicio*”.',
            'Si la información no es suficiente, puedes contactarnos por las vías de siempre =)',
            '',
            '👉 *Apoyo* Areas de apoyo estudiantil',
            '👉 *Servicios* Servicios estudiantiles',

        ], {capture:true},null, [flowApoyoEstudiantil, flowServicios]
    )


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowBienvenida])
    const adapterProvider = createProvider(BaileysProvider)
    try {
        createBot({
            flow: adapterFlow,
            provider: adapterProvider,
            database: adapterDB,
        })
    } catch (error) {
        console.error('Error :', error.message);
    }

    QRPortalWeb()
}

main()