const {addKeyword} = require("@bot-whatsapp/bot");

const flowServ1 = addKeyword(['1', '1.'])
    .addAnswer([
        '🩺 *1.* ¿Qué servicios de salud ofrece la Universidad Veracruzana y donde puedo encontrarlos?',
        'Todo estudiante tiene derecho al Seguro Facultativo, es un derecho que tienen los alumnos que cursan estudios en los niveles de Técnico Superior Universitario, Licenciatura y Posgrado, en la Universidad Veracruzana, y que no cuentan con la misma o similar protección por parte de cualquier otra Institución de Seguridad Social. Los servicios de salud, que ofrece el IMSS son: recibir atención Médico-Quirúrgica, Farmacéutica, Hospitalaria y de Maternidad, en cuyo caso no se hará extensiva la prestación a los dependientes.'
    ])

const flowServ2 = addKeyword(['2', '2.'])
    .addAnswer([
        '🩺 *2.* ¿Cómo solicito mi seguro médico en la universidad?'   ,
        'Para consultar a detalle los pasos a seguir sobre el Trámite del seguro facultativo, consultar el siguiente enlace: https://www.uv.mx/estudiantes/tramites-escolares/seguro-facultativo/'
    ])

const flowServ3 = addKeyword(['3', '3.'])
    .addAnswer([
        '🩺 *3.* ¿A dónde puedo acudir en caso de tener un problema de adicciones?',
        'Puedes comunicarte directamente al Centro para el Desarrollo Humano e Integral de los Universitarios (CEnDHIU). Para mayor información, consultar el siguiente enlace: https://www.uv.mx/estudiantes/cendhiu/  También puedes dirigirte a tu Tutor Académico para solicitar información sobre las instancias de apoyo con cuenta la Universidad.'
    ])

const flowServ4 = addKeyword(['4', '4.'])
    .addAnswer([
        '🩺 *4.* ¿Dónde puedo recibir apoyo si tengo dudas sobre mi vocación profesional?',
        ' Algunos programas educativos cuentan con un área psicopedagógica. Acércate a tu tutor académico para conocer al respecto. También solicitar apoyo al Centro para el Desarrollo Humano e Integral de los Universitarios (CEnDHIU). Para mayor información, consultar el siguiente enlace: https://www.uv.mx/estudiantes/cendhiu/'
    ])

const flowServ5 = addKeyword(['5', '5.'])
    .addAnswer([
        '🩺 *5.* Dentro de la Universidad ¿existe un área de apoyo psicológico? ',
        'La Universidad Veracruzana cuenta con Centro para el Desarrollo Humano e Integral de los Universitarios (CEnDHIU), mismo que ofrece diferentes servicios, entre ellos la asesoría psicológica. Para mayor información, consultar el siguiente enlace: https://www.uv.mx/estudiantes/cendhiu/También puedes solicitar el apoyo en la Facultad de Psicología región Xalapa y Veracruz, así mismo en el Instituto de Psicología y Educación en Xalapa.'
    ])

const flowServ6 = addKeyword(['6', '6.'])
    .addAnswer([
        '🩺 *6.* ¿Si soy un estudiante con capacidades diferentes cuáles son los apoyos que existen para mí? ',
        'Para mayor información consultar el siguiente enlace: https://www.uv.mx/cendhiu/general/programa-para-la-educacion-inclusiva-universitaria/'
    ])

const flowServiciosSalud = addKeyword(['Servicios de salud', 'Servicios de salud.', '6'])
    .addAnswer(['🙌 Aquí encontrará información sobre Servicios de salud.',
        'Ingrese el numero de la pregunta que desea consultar.'])
    .addAnswer(
        [
            '🩺 *1.* ¿Qué servicios de salud ofrece la Universidad Veracruzana y donde puedo encontrarlos?',
            '🩺 *2.* ¿Cómo solicito mi seguro médico en la universidad?',
            '🩺 *3.* ¿A dónde puedo acudir en caso de tener un problema de adicciones?',
            '🩺 *4.* ¿Dónde puedo recibir apoyo si tengo dudas sobre mi vocación profesional?',
            '🩺 *5.* Dentro de la Universidad ¿existe un área de apoyo psicológico? ',
            '🩺 *6.* ¿Si soy un estudiante con capacidades diferentes cuáles son los apoyos que existen para mí? ',
            'Para obener mas información visita la pagina: https://www.uv.mx/estudiantes/apoyos/servicios-de-salud/'
        ],
        {capture: true}, null, [flowServ1, flowServ2, flowServ3, flowServ4, flowServ5, flowServ6]
    )


module.exports = flowServiciosSalud