const { addKeyword } = require('@bot-whatsapp/bot')
const BotWhatsapp = require ("@bot-whatsapp/bot")
const flowActividadesDeportivas = require("./actividadesDeportivas.flow");
const flowBibliotecarios = require("./bibliotecarios.flow");
const flowIdiomas = require("./centroIdiomas.flow");
const flowInvestigacion = require("./investigacion.flow");
const flowMovilidad = require("./movilidad.flow");
const flowServiciosSalud = require("./serviciosSalud.flow");
const flowTecnologia = require("./serviciosTecnologicos.flow");
const flowInscripcionLinea = require("./inscripcionLinea.flow");

 const flowServicios = addKeyword(['2', 'Servicios'])
    .addAnswer(
        [
            '❗Instrucciones: Del siguiente menú, anota el *numero* de la opción que mejor describe el tema de tu interés. ',
            'Para regresar a este menú, escribe las palabras “*hola*” o “*inicio*”.',
            '',
            '👉 *1* Actividades deportivas',
            '👉 *2* Bibliotecarios',
            '👉 *3* Centro de idiomas',
            '👉 *4* Investigación',
            '👉 *5* Movilidad nacional e internacional',
            '👉 *6* Servicios de salud',
            '👉 *7* Servicios tecnológicos',
            '👉 *8* Servicios vinculación',
            '👉 *9* Inscripción en línea ',
        ],
        {capture: true}, null, [flowActividadesDeportivas, flowBibliotecarios, flowIdiomas, flowInvestigacion, flowMovilidad, flowServiciosSalud, flowTecnologia, flowInscripcionLinea]
    )

module.exports = flowServicios