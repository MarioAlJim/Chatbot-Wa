const { addKeyword } = require('@bot-whatsapp/bot')
const BotWhatsapp = require ("@bot-whatsapp/bot")

const flowTutP11 = addKeyword(['11', '11.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *11. ¿Necesito algo en específico para poder tomar una tutoría? *',
        'Para tomar tutoría solo se necesita tener un tutor asignado y conocer los datos sobre dónde o en qué espacio (presencial o virtual) se llevará a cabo la sesión. '
    ])

const flowTutP12 = addKeyword(['12', '12.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *12. Las sesiones de tutoría académica ¿forman parte de mi horario escolar? *',
        'Las sesiones de tutoría se realizan en horario escolar, sin embargo, las clases son pausadas para que los estudiantes puedan asistir a la sesión que les corresponde o en su defecto debes acordar con tu Tutor académico un horario que no empalme con tus clases. '
    ])

const flowTutP13 = addKeyword(['13', '13.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *13. ¿En qué lugar se llevan a cabo las tutorías? *',
        'Cuando las tutorías son presenciales se llevan a cabo dentro de las instalaciones de la Facultad en la que se encuentra el Programa Educativo al que perteneces. Ahora en contingencia sanitaria, es importante que establezcas comunicación con tu Tutor Académico para establecer el espacio virtual por el que se llevará a cabo la tutoría. '
    ])

const flowTutP14 = addKeyword(['14', '14.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *14. ¿Cuáles son los medios electrónicos adecuados para mantener comunicación con mi Tutor Académico en modalidades no presenciales? *',
        'Los medios oficiales son el correo institucional y Eminus, sin embargo, con el fin de facilitar la comunicación y conforme a los acuerdos tomados con tu Tutor, también se hace uso de Zoom, Teams o cualquier otra herramienta virtual. '
    ])

const flowTutP15 = addKeyword(['15', '15.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *15. ¿Pueden ser todas las tutorías de manera virtual? *',
        'La modalidad para llevar a cabo las sesiones de tutoría se establece con base en las necesidades que se detecten por parte de los tutores y tutorados, así como de los criterios establecidos por cada programa educativo, considerando en todo momento las circunstancias vigentes. Por ahora, debido a la contingencia, estas sesiones se realizan de manera virtual al igual que las clases. '
    ])

const flowTutP16 = addKeyword(['16', '16.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *16. ¿Dónde puedo  obtener información osbre tutorías? *',
        'Para obtener información sobre tutorías puedes consultar la Guía del estudiante en línea desde el portal MiUV. ',
        'En la Guía del estudiante en línea.https://www.uv.mx/legislacion/files/2017/07/Equivalencia-y-revalidacion-Universidad-Veracruzana.pdf',
        'En el portal del Departamento de Apoyo a la Formación Integral del Estudiante, ingresando al siguiente enlace: https://www.uv.mx/formacionintegral/estudiantes/tutorias'
    ])

const flowTutP17 = addKeyword(['17', '17.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *17. En caso de no tener un tutor asignado, ¿Quién me asigna al tutor académico? *',
        'El coordinador de tutorías de tu facultad te asignará un tutor académico al inicio del periodo escolar (semestre) y una vez que te encuentres inscrito en el programa educativo (carrera). '
    ])

const flowTutP18 = addKeyword(['18', '18.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *18. ¿Existen otros tipos de tutoría diferentes a la tutoría académica?  *',
        'En la UV, existen 4 tipos de tutoría: ',
        'Tutoría Académica ',
        'Enseñanza Tutorial ',
        'Tutoría para la apreciación artística ',
        'Tutoría para la investigación  '
    ])

const flowTutP19 = addKeyword(['19', '19.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *19. ¿Dónde puedo obtener información referente a cualquier tipo de tutoría?  *',
        'Para conocer mas puedes accerder al portal del Departamento de Apoyo a la Formación Integral del Estudiante en el siguiente enlace y seleccionar la sección Tutoria en LIcenciatura https://www.uv.mx/formacionintegral/" '
    ])

const flowTutP20 = addKeyword(['20', '20.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *20. En el caso de tener problemas con una experiencia educativa, ¿existen asesorías y con quién me puedo dirigir para pedir apoyo? *',
        'En caso de tener problemas con una EE, debes dirigirte a tu Tutor Académico para atender dudas o para que este pueda canalizarte con otra persona dentro de la institución que pueda orientarte sobre los saberes que se abordan en la EE. También tienes la posibilidad de solicitar un Programa de Apoyo a la Formación Integral (PAFI), ya que éstos están dirigidos a apoyar a los estudiantes que así lo requieran, en fortalecer sus procesos de aprendizaje relacionados con los saberes teóricos y heurísticos de las experiencias educativas (EE), o bien que tengan interés en una formación disciplinar más amplia. '
    ])

const flowTutP21 = addKeyword(['21', '21.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *21. ¿Qué es el programa de monitores? *',
        'El programa de monitores es aquel que, con un grupo de estudiantes de diferentes Programas Educativos, busca apoyar la actividad tutorial que se realiza en las entidades académicas a través de la orientación a sus pares de semestres inferiores. Asimismo, favorecer en los estudiantes que participan como Monitores habilidades relacionadas con el trabajo en equipo, comunicación y liderazgo, propiciando un interés permanente en su formación académica. '
    ])

const flowTutP22 = addKeyword(['22', '22.'])
    .addAnswer([
        '🤝 *17. ¿Cuáles son mis derechos y obligaciones como universitario? *',
        'Para conocer los derechos y obligaciones que tienes como estudiante de la Universidad Veracruzana, consulta el Estatuto de Alumnos 2008. https://www.uv.mx/legislacion/files/2012/12/estatutodelosalumnos2008.pdf'
    ])

const flowTutP23 = addKeyword(['23', '23.'])
    .addAnswer([
        '🤝 *18. ¿Qué documentos normativos debo conocer para saber mis derechos y obligaciones como tutorado? *',
        ' Para conocer los derechos y obligaciones como tutorado, todo estudiante debe conocer: ',
        'El Reglamento del Sistema Institucional de Tutorías https://www.uv.mx/legislacion/files/2012/12/Reglamento_del_Sistema_Institucional_de_Tutorias.pdf',
        'El Estatuto de Alumnos 2008 https://www.uv.mx/legislacion/files/2021/06/Estatuto-Alumnos-28-05-2021.pdf'
    ])

const flowTutP24 = addKeyword(['24', '24.'])
    .addAnswer([
        '🤝 *19. ¿Qué pasa si no asisto a tutorías? *',
        'Según el artículo 168 y 169 del Estatuto de alumnos 2008, la tutoría académica es un derecho y una obligación de los estudiantes UV. El impacto de no asistir a las sesiones de tutoría es que pierdes la oportunidad de conocer temas e información importante sobre tu vida académica, tu trayectoria escolar y la experiencia compartida de otros compañeros sobre asuntos académicos que pueden ser de tu interés. '
    ])

const flowTutP1 = addKeyword(['1', '1.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *1. ¿En qué consiste la tutoría en la Universidad Veracruzana? ¿Cuál es su objetivo? *',
        'La tutoría académica consiste en el seguimiento que le da un Tutor Académico a la trayectoria escolar de los estudiantes durante su permanencia en el programa educativo, con el fin de orientarlos en las decisiones relacionadas con la construcción de su perfil profesional. '
    ])

const flowTutP2 = addKeyword(['2', '2.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *2. ¿Cuál es la importancia de tener un Tutor Académico? *',
        'El Tutor Académico es el responsable del seguimiento de la trayectoria escolar del Tutorado y de la orientación oportuna en la toma de decisiones relacionadas con la construcción de su perfil profesional individual, de acuerdo con sus expectativas, capacidades e intereses.  La importancia de tener esta figura presente es contar con el acompañamiento a lo largo de la trayectoria escolar y con el apoyo para atender dudas respecto a ello. '
    ])

const flowTutP3 = addKeyword(['3', '3.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *3*. ¿Qué es el Tutorado? *',
        'Acudir a tutoría te brinda la oportunidad de recibir acompañamiento a lo largo de tu trayectoria escolar. Puedes acudir con tu tutor asignado para resolver o atender dudas relacionadas con la construcción de tu perfil profesional y, por lo tanto, recibir orientación que te permita tomar decisiones responsables e informadas. '
    ])

const flowTutP4 = addKeyword(['4', '4.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *4*. ¿En qué situación puedo acudir con mi tutor? *',
        'Puedes acudir a tu tutor cuando tiene dudas que impactan en tu trayectoria académica, es decir, que puedes consultarlo sobre el proceso de elección de experiencias educativas para conformar tu carga de créditos, en caso de que te sientas en situación de riesgo académico, también si necesitas fortalecer procesos de aprendizaje, tu desempeño académico o si tienes dudas sobre la construcción de tu perfil profesional. También puedes acudir con tu tutor en caso de dudas sobre trámites administrativos, el plan de estudios, proyectos de investigación, de vinculación o servicio social. '
    ])

const flowTutP5 = addKeyword(['5', '5.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *5. Si soy un estudiante de rendimiento académico alto ¿qué beneficio me puede brindar asistir a tutoría académica? *',
        'La orientación de tu Tutor Académico sobre temas de movilidad académica, becas y Posgrados, así como servicios otra información que los estudiantes, así como los recursos de los que puede hacer uso por ser estudiante UV. '
    ])

const flowTutP6 = addKeyword(['6', '6.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *6. ¿Puedo solicitar tutoría en el momento que yo lo requiera? *',
        'Las tres sesiones y horario de tutoría se establecen al inicio del periodo escolar, sin embargo, cuando tengas dudas relacionadas con tu trayectoria académica o requieras otra información puedes comunicarte con tu tutor a través de los medios de contacto que haya establecido para atender las dudas. Los datos de contacto y horario de atención de tu tutor los puedes consultar en el apartado de tutoría de la Guía del estudiante en línea. '
    ])

const flowTutP7 = addKeyword(['7', '7.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *7. ¿Quién me asigna a mi Tutor Académico? *',
        'El Tutor Académico es asignado por el Coordinador de Tutorías de cada Programa Educativo. Uno de tus derechos es la posibilidad de solicitar cambio de tutor hasta 3 veces a lo largo de tu trayectoria escolar.  '
    ])

const flowTutP8 = addKeyword(['8', '8.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *8. ¿Cómo consulto el nombre de mi tutor y dónde puedo localizarlo? *',
        'Para consultar el nombre de tu Tutor Académico asignado, debes ingresar a la Guía del estudiante en línea desde el portal MiUV. '
    ])

const flowTutP9 = addKeyword(['9', '9.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *9. ¿Puedo cambiar de tutor? *',
        'Según el art. 40 del Reglamento institucional de tutorías, tienes derecho de solicitar hasta 3 veces el cambio de tutor a través de la Guía del estudiante en línea. El coordinador del sistema tutorial deberá informar por escrito a los tutores sobre el cambio realizado. '
    ])

const flowTutP10 = addKeyword(['10', '10.'])
    .addAnswer([
        '👨‍👩‍👧‍👦 *10. ¿Cada cuánto tiempo se llevan a cabo sesiones de tutoría? ¿Cuánto duran las sesiones? *',
        'Cada periodo escolar se realizan 3 sesiones de tutoría y el tiempo estimado para cada sesión depende de los temas a tratar y las dudas que surjan durante la sesión. '
    ])

const flowTutoria = addKeyword(['tutorial', 'tuto', 'tutoría', 'tutorías', 'tutoria', 'tutorias', 'tutor', 'tuto.', 'tutoría.', 'tutorias.', 'tutoria.'])
    .addAnswer(['🙌 Aquí encontrará información sobre Tutorías',
        'Ingrese el numero de la pregunta que desea consultar. '])
    .addAnswer(
        [
            '👨‍👩‍👧‍👦 *1*. ¿En qué consiste la tutoría en la Universidad Veracruzana? ¿Cuál es su objetivo?  ',
            '👨‍👩‍👧‍👦 *2*. ¿Cuál es la importancia de tener un Tutor Académico? ',
            '👨‍👩‍👧‍👦 *3*. ¿Cómo ayudan las tutorías en mi formación académica y personal?  ',
            '👨‍👩‍👧‍👦 *4*. ¿En qué situación puedo acudir con mi tutor?  ',
            '👨‍👩‍👧‍👦 *5*. Si soy un estudiante de rendimiento académico alto ¿qué beneficio me puede brindar asistir a tutoría académica? ',
            '👨‍👩‍👧‍👦 *6*. ¿Puedo solicitar tutoría en el momento que yo lo requiera? ',
            '👨‍👩‍👧‍👦 *7*. ¿Quién me asigna a mi Tutor Académico? ',
            '👨‍👩‍👧‍👦 *8*. ¿Cómo consulto el nombre de mi tutor y dónde puedo localizarlo? ',
            '👨‍👩‍👧‍👦 *9*. ¿Puedo cambiar de tutor? ',
            '👨‍👩‍👧‍👦 *10*. ¿Cada cuánto tiempo se llevan a cabo sesiones de tutoría? ¿Cuánto duran las sesiones? ',
            '👨‍👩‍👧‍👦 *11*. ¿Necesito algo en específico para poder tomar una tutoría? ',
            '👨‍👩‍👧‍👦 *12*. Las sesiones de tutoría académica ¿forman parte de mi horario escolar? ',
            '👨‍👩‍👧‍👦 *13*. ¿En qué lugar se llevan a cabo las tutorías? ',
            '👨‍👩‍👧‍👦 *14*. ¿Cuáles son los medios electrónicos adecuados para mantener comunicación con mi Tutor Académico en modalidades no presenciales? ',
            '👨‍👩‍👧‍👦 *15*. ¿Pueden ser todas las tutorías de manera virtual? ',
            '👨‍👩‍👧‍👦 *16*. ¿Dónde puedo  obtener información sobre tutorías? ',
            '👨‍👩‍👧‍👦 *17*. En caso de no tener un tutor asignado, ¿Quién me asigna al tutor académico? ',
            '👨‍👩‍👧‍👦 *18*. ¿Existen otros tipos de tutoría diferentes a la tutoría académica?  ',
            '👨‍👩‍👧‍👦 *19*. ¿Dónde puedo obtener información referente a cualquier tipo de tutoría?  ',
            '👨‍👩‍👧‍👦 *20*. En el caso de tener problemas con una experiencia educativa, ¿existen asesorías y con quién me puedo dirigir para pedir apoyo? ',
            '👨‍👩‍👧‍👦 *21*. ¿Qué es el programa de monitores? ',
            'Adicionalmente puedes consultar:',
            '🤝 *22. ¿Cuáles son mis derechos y obligaciones como universitario? ' ,
            '🤝 *23. ¿Qué documentos normativos debo conocer para saber mis derechos y obligaciones como tutorado? ',
            '🤝 *24. ¿Qué pasa si no asisto a tutorías?'
        ],
        {capture: true}, null, [
            flowTutP1, flowTutP2, flowTutP3 , flowTutP4, flowTutP5, flowTutP6, flowTutP7, flowTutP8, flowTutP9, flowTutP10, flowTutP11, flowTutP12, flowTutP13, flowTutP14, flowTutP15, flowTutP16, flowTutP17, flowTutP18, flowTutP19, flowTutP20, flowTutP21, flowTutP22, flowTutP23, flowTutP24
        ]
    )

module.exports = flowTutoria