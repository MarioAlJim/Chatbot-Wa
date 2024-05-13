const BotWhatsapp = require("@bot-whatsapp/bot");

const botConfig = BotWhatsapp.addKeyword(['Directorio de Secretarías de Facultad, Coordinaciones y Enlaces de Programas Educativos', 'Directorio de Secretarías de Facultad, Coordinaciones y Enlaces de Programas Educativos', 'Directorio'])
    .addAnswer([
        'Para cunsultar el directorio de Secretarías de Facultad, Coordinaciones y Enlaces de Programas Educativos por favor accede al siguiente enlace',
        'https://www.uv.mx/estudiantes/directorio-secretarias-facultad/'
    ]);

module.exports = botConfig;
