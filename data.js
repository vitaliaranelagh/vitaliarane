/**
 * VITALIA - ALMACÉN SALUDABLE
 * BASE DE DATOS E INFORMACIÓN INTEGRAL DEL PLAN DE NEGOCIOS (20 PUNTOS)
 */

window.VitaliaData = {
  // ==========================================
  // 1. DATOS PERSONALES DEL EMPRENDIMIENTO
  // ==========================================
  punto1: {
    nombre: "VITALIA - Almacén Saludable",
    justificacionNombre: "El nombre 'VITALIA' deriva del latín 'vitalis' (que significa 'lleno de vida, dotado de fuerza vital'). Elegimos este nombre porque sintetiza nuestra filosofía: el alimento no es un simple combustible biológico, sino una fuente activa de vitalidad, salud y longevidad cuando proviene de la tierra sin químicos, conservantes artificiales ni ultraprocesamiento. Representa el despertar hacia una nutrición consciente y regenerativa.",
    domicilio: "Calle 361 N° 1245 entre calles 312 y 313",
    localidad: "Ranelagh (CP 1888), Partido de Berazategui",
    provincia: "Provincia de Buenos Aires, Argentina",
    contextoUbicacion: "Ubicado en el polo neurálgico y residencial de Ranelagh, a pocas cuadras de la histórica Estación de Trenes y del Parque de la Estación, caracterizado por su entorno arbolado, vida familiar al aire libre y una creciente comunidad que prioriza el bienestar natural.",
    telefonos: {
      fijo: "+54 9 11 3755-4748",
      whatsapp: "+54 9 11 3755-4748 (Línea directa pedidos & delivery)"
    },
    webMail: {
      mail: "Vitaliaranelagh@gmail.com",
      pedidos: "Vitaliaranelagh@gmail.com",
      web: "https://www.vitalia-almacen.com.ar"
    },
    redes: {
      instagram: "@VitaliaRanelagh",
      facebook: "Vitalia Almacén Saludable Ranelagh",
      tiktok: "@VitaliaRanelagh"
    },
    rubro: "Comercio minorista de alimentos saludables, dietética moderna y productos agroecológicos a granel y envasados de origen vegetal.",
    descripcionRubro: "Comercialización consciente de alimentos naturales, orgánicos, sin TACC y a granel, orientados a la salud integral y la sustentabilidad ambiental.",
    horarios: {
      atencionLocal: "Lunes a Sábados de 09:00 a 13:30 hs y de 16:30 a 20:30 hs.",
      fraccionamientoProduccion: "Lunes, Miércoles y Viernes de 07:30 a 09:00 hs (procesamiento de granolas, frutos secos y envasado en frascos sanitizados).",
      recepcionProveedores: "Martes y Jueves de 08:00 a 10:00 hs (recepción de verduras agroecológicas de quintas locales y distribuidoras).",
      entregasDelivery: "Lunes a Sábados de 14:00 a 16:30 hs (Ranelagh, Berazategui Centro, Hudson y Quilmes Sur)."
    },
    fechaInicio: "1 de Septiembre de 2026"
  },

  // ==========================================
  // 2. HISTORIA DEL EMPRENDIMIENTO (18 RENGLONES)
  // ==========================================
  punto2: {
    lineasContadas: 18,
    historia: `Vitalia nació en una sobremesa familiar bajo los frondosos árboles de Ranelagh, motivada por una necesidad genuina y urgente.
Todo comenzó a fines de 2024, cuando a uno de los fundadores le diagnosticaron celiaquía severa y su hermana adoptó una dieta basada en plantas.
Al intentar abastecer su alacena cotidiana con alimentos libres de gluten y agroecológicos, chocaron con una realidad desalentadora:
en la zona sur no existían propuestas integrales de confianza y debían viajar semanalmente hasta Capital Federal para conseguir harinas puras y frutos frescos.
Notaron que otros vecinos, deportistas del golf local y madres de escuelas de Ranelagh compartían la misma frustración cotidiana.
Decidieron actuar: comenzaron coordinando compras comunitarias mayoristas directamente a pequeñas cooperativas de La Plata y Mendoza.
El garage familiar pronto se transformó en un punto de retiro barrial donde los pedidos crecían exponencialmente semana tras semana.
Los vecinos no solo buscaban productos de calidad a precio justo, sino también el consejo cálido de cómo cocinarlos y activar las semillas.
Ese entusiasmo colectivo demostró que Ranelagh no solo demandaba una dietética más, sino un verdadero espacio de encuentro y salud.
Con ahorros familiares, pasión compartida y la convicción de reconectar a las personas con la comida real, gestaron el proyecto Vitalia.
Diseñaron un concepto de almacén cálido, sin envases plásticos de un solo uso, priorizando el granel en frascos de vidrio y la economía circular.
Unieron lazos directos con productores agroecológicos del cordón hortícola bonaerense para garantizar alimentos cosechados en su punto óptimo.
Seleccionaron un local luminoso y accesible en el corazón de Ranelagh, acondicionándolo con madera recuperada y energía luminosa natural.
Hoy, Vitalia es el reflejo vivo de aquel sueño familiar: un almacén donde cada producto cuenta una historia limpia y transparente.
Nos consolidamos como el refugio saludable de Ranelagh, donde comer bien deja de ser una moda costosa para convertirse en un estilo de vida.
Acompañamos a cada familia en su transición hacia hábitos que nutren el cuerpo, cuidan el bolsillo y protegen la naturaleza.
Vitalia es volver a las raíces, revalorizar lo simple y celebrar la vitalidad cotidiana junto a nuestra comunidad.`
  },

  // ==========================================
  // 3. ACTIVIDADES Y RESPONSABLES
  // ==========================================
  punto3: {
    tabla: [
      {
        actividad: "Planificación comercial, compras mayoristas y finanzas generales",
        responsable: "Camila Rodríguez (Co-fundadora & Administración)",
        horasSemanales: 14,
        frecuencia: "Lunes y Jueves (mañana y tarde)"
      },
      {
        actividad: "Recepción de mercadería, control de calidad y fraccionamiento a granel",
        responsable: "Martín Benítez (Co-fundador & Logística)",
        horasSemanales: 16,
        frecuencia: "Lunes, Miércoles y Viernes (primer turno)"
      },
      {
        actividad: "Atención al cliente en mostrador, asesoramiento nutricional y caja",
        responsable: "Sofía Valenzuela (Nutricionista & Atención)",
        horasSemanales: 28,
        frecuencia: "Lunes a Viernes (turnos rotativos) y Sábados"
      },
      {
        actividad: "Gestión de pedidos online, WhatsApp comercial y coordinación de envíos",
        responsable: "Martín Benítez & Sofía Valenzuela",
        horasSemanales: 10,
        frecuencia: "Lunes a Sábados (mediodía y cierre)"
      },
      {
        actividad: "Creación de contenidos para redes sociales, fotos y marketing digital",
        responsable: "Julián Gómez (Community Manager & Creativo)",
        horasSemanales: 8,
        frecuencia: "Martes y Jueves"
      },
      {
        actividad: "Limpieza, sanitización de frascos y mantenimiento preventivo del local",
        responsable: "Equipo Completo (rotativo)",
        horasSemanales: 6,
        frecuencia: "Diario (apertura y cierre de local)"
      }
    ],
    totalHorasSemanales: 82
  },

  // ==========================================
  // 4. PITCH ELEVATOR (25 RENGLONES EXACTOS)
  // ==========================================
  punto4: {
    lineasContadas: 25,
    textoPitch: `¿Sabías que más del 70% de los alimentos que compramos en el supermercado contienen aditivos químicos o excesos de azúcares ocultos?
En pleno siglo XXI, comer sano en el conurbano bonaerense se convirtió en un desafío agotador y confuso para miles de familias.
Las personas quieren alimentarse mejor, pero terminan pagando sobreprecios absurdos por productos que ni siquiera son tan saludables.
Soy Camila, co-fundadora de Vitalia, y creamos en Ranelagh el primer almacén saludable que democratiza la alimentación consciente y real.
En Vitalia unificamos tres soluciones indispensables en un solo espacio cálido, transparente y pensado para el bienestar de la comunidad:
primero, una selección rigurosa de alimentos a granel, frutos secos activados, harinas puras y productos certificados 100% libres de gluten.
Segundo, canastas agroecológicas de verduras frescas cosechadas en quintas locales de Berazategui y La Plata, sin pesticidas ni agrotóxicos.
Y tercero, un sistema innovador de frascos de vidrio retornables que elimina el plástico de un solo uso y premia el compromiso ecológico del vecino.
No somos una dietética tradicional donde te despachan sin saber qué necesitás; somos un centro de asesoramiento cercano y empático.
En nuestro mostrador te explicamos cómo reemplazar el azúcar, qué harinas usar para cocinar sin TACC y cómo conservar tus legumbres.
Además, desarrollamos productos propios innovadores como nuestra Crema Andina Crunch, una combinación funcional única de cajú, cacao y maca.
A través de nuestra plataforma web y WhatsApp coordinamos entregas a domicilio en menos de 24 horas en Ranelagh, Berazategui y Hudson.
El mercado de la alimentación natural y basada en plantas en Argentina crece a un ritmo superior al 22% interanual sostenido.
En solo seis meses de compras comunitarias barriales validamos la demanda real con más de 180 familias que compran regularmente.
Hoy contamos con un plan de negocio sólido, habilitaciones en trámite, alianzas directas con productores y una ubicación comercial estratégica.
Nuestra estructura de costos optimizada nos permite ofrecer precios entre un 15% y un 20% más competitivos que las dietéticas de cadena.
Estamos proyectando un punto de equilibrio operativo para el cuarto mes de funcionamiento, con un recupero de inversión en dieciséis meses.
Para acelerar el acondicionamiento final del local y la compra del molino de frutos secos, estamos sumando capital de inversión inicial.
Te invito a ser parte de esta transformación que no solo es un negocio altamente rentable, sino que genera un impacto positivo en la comunidad.
La salud de las personas comienza en el plato de cada día, y en Vitalia estamos sembrando el futuro de la nutrición en zona sur.
¿Tenés tu teléfono a mano para agendarnos una reunión este jueves y mostrarte los números detallados junto a una degustación de nuestros productos?
Estoy convencida de que te va a encantar nuestro proyecto tanto como a nosotros.
Acompañanos a llenar de vida a Ranelagh.
Muchas gracias por tu tiempo y tu confianza.
¡Te esperamos en Vitalia para nutrir la vida desde la raíz!`
  },

  // ==========================================
  // 5. DESCRIPCIÓN GENERAL DE "MI NEGOCIO"
  // ==========================================
  punto5: {
    objetivosSMART: {
      general: "Consolidar a Vitalia como el almacén saludable de referencia en Ranelagh y Berazategui, alcanzando una cartera recurrente de 400 clientes mensuales y una facturación neta promedio de $14.500.000 ARS mensuales al cabo de los primeros 12 meses de operación.",
      especificos: [
        "SMART 1 (Ventas & Clientes): Captar 150 clientes recurrentes y lograr un ticket promedio de $28.000 ARS durante los primeros 90 días desde la apertura del local físico y tienda online.",
        "SMART 2 (Sustentabilidad & Granel): Lograr que el 45% de las ventas de frutos secos, semillas y legumbres se realicen en frascos de vidrio retornables o bolsas biodegradables dentro de los primeros 6 meses, evitando el uso de más de 3.000 bolsas plásticas descartables.",
        "SMART 3 (Alianzas Agroecológicas): Establecer convenios directos con 4 cooperativas de productores hortícolas y cerealeros libres de agrotóxicos de la zona La Plata-Berazategui durante el primer cuatrimestre para garantizar frescura y márgenes de ganancia superiores al 38%."
      ]
    },
    sectorActividad: [
      { tipo: "Comercio (vendo lo que otros fabrican)", marcado: true, justificacion: "Comercialización minorista de marcas certificadas orgánicas, sin TACC, veganas y suplementos naturales." },
      { tipo: "Producción (vendo mis propios productos)", marcado: true, justificacion: "Elaboración propia de granolas horneadas, mezclas funcionales, frutos secos activados y la Crema Andina Crunch." },
      { tipo: "Servicio (asesoramiento y logística)", marcado: true, justificacion: "Asesoría nutricional personalizada en mostrador y servicio de delivery programado con bolsas térmicas en zona sur." }
    ],
    mision: "Nutrir y transformar la calidad de vida de nuestra comunidad en Ranelagh, brindando acceso sencillo y confiable a alimentos limpios, agroecológicos y sin aditivos, promoviendo el consumo responsable y el cuidado del medio ambiente a través de la educación y el trato humano cercano.",
    ideasMensajes: [
      { transmision: "Nutrición Real y Consciente", percepcion: "Alimentos puros, sin químicos ocultos ni engaños de marketing; comida que hace bien al cuerpo." },
      { transmision: "Cercanía y Confianza Humana", percepcion: "Un almacén atendido por personas que te escuchan, te asesoran con calidez y conocen tus necesidades." },
      { transmision: "Sustentabilidad y Respeto", percepcion: "Un compromiso real con el planeta: apoyo a quintas locales, reducción de plásticos y precios justos." }
    ],
    dondeRealizoActividad: "Local comercial a la calle en Calle 361 N° 1245 (Ranelagh, Buenos Aires), complementado con tienda virtual de comercio electrónico y canal de WhatsApp para entregas a domicilio en Berazategui, Hudson y Quilmes.",
    conQuienRealizoActividad: {
      opcion: "Con familiares y colaboradores",
      marcado: true,
      detalle: "Emprendimiento familiar asociativo fundado por Camila y Martín, sumando a Sofía (asesora nutricional) y Julián (diseñador y community manager)."
    },
    principalesProductosPrioridad: [
      "1. Frutos secos seleccionados (nueces, almendras, cajú), semillas activadas y legumbres a granel.",
      "2. Alimentos certificados Sin TACC (premezclas, pastas secas, galletitas artesanales y harinas funcionales).",
      "3. Bolsones de frutas y verduras agroecológicas de estación provenientes de quintas familiares locales.",
      "4. Superalimentos y suplementos funcionales (maca peruana, espirulina, matcha, chía, levadura nutricional).",
      "5. Línea de producción propia Vitalia: Crema Andina Crunch, granolas tostadas con miel y snacks saludables."
    ],
    vision: {
      proximoAno: "Consolidar el local físico en Ranelagh con flujo constante de clientes, alcanzar el punto de equilibrio financiero y posicionar el delivery zonal.",
      de1a3Anos: "Incorporar equipamiento industrial para multiplicar la producción propia de untables y granolas, abriendo un punto de venta en City Bell o Quilmes.",
      masDe3Anos: "Crear nuestra propia franquicia de almacenes saludables y sustentables con certificación de Empresa B en el corredor sur bonaerense.",
      masDe10Anos: "Ser la marca líder referente de alimentos agroecológicos de producción regenerativa de la provincia de Buenos Aires, con centros de distribución comunitaria y escuela de hábitos saludables."
    }
  },

  // ==========================================
  // 6. TRES NECESIDADES QUE ATENDEMOS
  // ==========================================
  punto6: [
    {
      necesidad: "a) Acceso local y transparente a alimentos libres de químicos y ultraprocesados",
      detalle: "Los vecinos de Ranelagh y alrededores debían trasladarse hasta 25 km para conseguir productos agroecológicos puros. Vitalia acerca alimentos directos de la quinta a la mesa, garantizando trazabilidad y frescura diaria sin intermediarios especuladores."
    },
    {
      necesidad: "b) Inclusión, seguridad alimentaria y asesoramiento para personas con condiciones especiales",
      detalle: "Celiaquía, intolerancia a la lactosa, alergias alimentarias, diabetes o dietas basadas en plantas generan miedo a la contaminación cruzada y desinformación. Ofrecemos góndolas estrictamente sectorizadas y asesoramiento profesional para que compren con total tranquilidad."
    },
    {
      necesidad: "c) Consumo económico y sostenible con reducción activa del residuo plástico",
      detalle: "La compra en paquetes cerrados tradicionales obliga a pagar packaging desechable y comprar cantidades innecesarias. Nuestro modelo a granel permite llevar desde 50 gramos exactos en frascos retornables, ahorrando dinero y cuidando el planeta."
    }
  ],

  // ==========================================
  // 7. DESCRIPCIÓN DE NUESTROS PRINCIPALES PRODUCTOS
  // ==========================================
  punto7: [
    {
      producto: "Mix Funcional 'Vitalia Energy' (Frutos secos activados y semillas)",
      queHace: "Aporta energía limpia, ácidos grasos esenciales Omega 3 y 6, y antioxidantes naturales para el rendimiento diario y deportivo.",
      necesidades: "Satisface la necesidad de un snack saludable para la oficina o el colegio, combate la fatiga muscular y el hambre entre comidas sin picos de glucosa.",
      propiedades: "Nueces Chandler partidas a mano, almendras Nonpareil activadas en agua purificada, castañas de cajú tostadas sin sal, semillas de calabaza y pasas de uva rubias. Libre de gluten, sin conservantes ni aceites refinados añadidos."
    },
    {
      producto: "Bolsón Agroecológico Semanal de Quinta Familiar (7 kg surtidos)",
      queHace: "Provee verduras y frutas de estación cosechadas menos de 24 horas antes de su entrega, cultivadas sin pesticidas sintéticos.",
      necesidades: "Garantiza nutrición rica en micronutrientes para toda la familia, previniendo enfermedades y apoyando a pequeños productores locales.",
      propiedades: "Acelga verde esmeralda, kale rizado, tomates perita madurados en planta, zanahorias con chala, zapallo anco y hojas de rúcula salvaje. Cultivo con compost biológico, certificado de transición agroecológica UTT."
    },
    {
      producto: "Premezcla Universal Sin TACC 'Vitalia Cocina Fácil' (Bolsa de 1 kg)",
      queHace: "Permite elaborar panes, pizzas, tortas y galletitas caseras sin gluten con idéntica textura y elasticidad que las masas tradicionales.",
      necesidades: "Elimina la frustración de las personas con celiaquía al hornear en casa masas secas o quebradizas, ofreciendo una solución económica y segura.",
      propiedades: "Fórmula balanceada con fécula de mandioca, almidón de maíz, harina de arroz refinada y goma xántica de alta pureza. Análisis de gluten por método ELISA (< 5 ppm), apto para celíacos y libre de alérgenos de soja."
    }
  ],

  // ==========================================
  // 8. COMPETENCIA Y PROVEEDORES
  // ==========================================
  punto8: {
    competidores: [
      {
        nombre: "Dietética La Estación (Ranelagh)",
        tipo: "Comercio tradicional barrial",
        ubicacion: "Av. Luis Agote N° 850 (Frente a estación)",
        fortalezas: "Ubicación con alto tránsito peatonal, 15 años de trayectoria barrial, clientes de edad avanzada fidelizados.",
        debilidades: "Local oscuro y saturado, escasa variedad de productos sin TACC, fraccionamiento en bolsas plásticas sin rotulado claro, nula presencia digital.",
        precios: "Medio-Alto (recargo considerable en productos envasados)",
        diferenciadorVitalia: "Estética luminosa y moderna, venta a granel en frascos retornables, asesoramiento nutricional joven, tienda web y delivery."
      },
      {
        nombre: "Hipermercado Cencosud / Góndola Saludable (Berazategui)",
        tipo: "Gran superficie comercial",
        ubicacion: "Av. Fangio y Calle 14 (Berazategui)",
        fortalezas: "Financiación bancaria masiva, promociones 2x1 y estacionamiento amplio.",
        debilidades: "Precios extremadamente caros en productos dietéticos específicos, sin venta a granel, sin asesoramiento personalizado, atención impersonal.",
        precios: "Muy Altos en el rubro dietética / Sin TACC",
        diferenciadorVitalia: "Precios entre un 20% y 35% más accesibles en granel, productos frescos de quintas locales que no llegan al supermercado, calidez de barrio."
      }
    ],
    proveedores: [
      {
        nombre: "Cooperativa Hortícola Agroecológica UTT (Unión de Trabajadores de la Tierra)",
        rubro: "Hortalizas, verduras de hoja, frutas de estación y legumbres secas",
        ubicacion: "Cordón Hortícola La Plata / Berazategui",
        condicionesComerciales: "Entrega semanal en local martes y jueves. Pago contado a 7 días. Precios concertados transparentes y justos para ambas partes.",
        calidadGarantizada: "Certificación participativa de agroecología, sin agrotóxicos ni abonos de síntesis química."
      },
      {
        nombre: "Distribuidora Mayorista 'El Naranjo Natural'",
        rubro: "Frutos secos importados y nacionales, harinas alternativas, semillas y frutas desecadas",
        ubicacion: "Mercado Central de Buenos Aires / Distribución zona sur",
        condicionesComerciales: "Compra mínima por bulto cerrado de 10 kg o 25 kg. Descuento del 8% por pago en transferencia inmediata. Flete bonificado.",
        calidadGarantizada: "Control de humedad, fecha de cosecha certificada y análisis de libres de gluten en origen."
      }
    ],
    ventajasCompetitivas: [
      "1. Sistema de Frascos Retornables y Granel Cero Plástico: Bonificación económica al cliente y compromiso medioambiental real.",
      "2. Asesoría Nutricional Profesional en el Mostrador: Atención guiada por una licenciada en nutrición para evacuar dudas reales.",
      "3. Trazabilidad Agroecológica Local: Frutas y verduras cosechadas a menos de 20 km de distancia el mismo día de la venta.",
      "4. Omnicanalidad Ágil: Tienda online fluida sincronizada con stock físico y delivery en el día mediante WhatsApp comercial.",
      "5. Elaboración Propia Innovadora: Creaciones exclusivas de la marca Vitalia que no se consiguen en ninguna otra dietética."
    ],
    comoDarAConocer: "Campaña de lanzamiento 'Ranelagh Respira Salud' con degustaciones gratuitas frente a la estación, convenios con gimnasios y centros de yoga de la zona, pauta geolocalizada en Instagram/TikTok para el radio Ranelagh-Berazategui, y talleres barriales de cocina consciente.",
    rolPromociones: "En la gestión comercial de Vitalia, las promociones no son una liquidación desesperada, sino una herramienta estratégica de rotación de stock, captación de nuevos clientes ('Primer pedido con 15% OFF') y fomento de la sustentabilidad ('Miércoles Verde: traé tu frasco y llevate 20% más').",
    canalesVenta: {
      fisico: "Showroom y almacén a la calle en Calle 361 N° 1245 (Ranelagh): experiencia sensorial con aromas a canela, maderas claras, dispensers transparentes y degustación diaria.",
      virtual: "Tienda online www.vitalia-almacen.com.ar con carrito integrado, catálogo interactivo de WhatsApp Business con respuestas automatizadas y cobro por QR / Mercado Pago / Transferencia."
    }
  },

  // ==========================================
  // 9. CREACIÓN DE UN PRODUCTO INNOVADOR
  // ==========================================
  punto9: {
    listado20: [
      "1. Almendras Nonpareil peladas",
      "2. Nueces Chandler mariposa",
      "3. Castañas de Cajú tostadas",
      "4. Semillas de chía orgánica",
      "5. Semillas de lino dorado",
      "6. Cacao amargo ecuatoriano puro 100%",
      "7. Harina de almendras sin piel",
      "8. Harina de coco agroecológica",
      "9. Maca andina peruana en polvo",
      "10. Quinoa real orgánica en grano",
      "11. Quinoa inflada tipo pop crocante",
      "12. Dátiles Medjool seleccionados",
      "13. Pasta de maní natural sin azúcar",
      "14. Avena arrollada gruesa tradicional",
      "15. Coco rallado fino sin sulfito",
      "16. Espirulina pura en polvo",
      "17. Polen apícola multifloral",
      "18. Miel cruda de monte nativo",
      "19. Sal rosa del Himalaya fina",
      "20. Semillas de girasol activadas"
    ],
    seleccion10: [
      "1. Castañas de Cajú (base untuosa de sabor suave y neutro)",
      "2. Cacao amargo puro 100% (antioxidante noble, sabor intenso y profundo)",
      "3. Maca andina peruana (adaptógeno energizante natural)",
      "4. Quinoa inflada crocante (textura crujiente sin gluten ni aditivos)",
      "5. Dátiles Medjool (endulzante natural de bajo índice glucémico y fibra)",
      "6. Semillas de chía (espesante mucilaginoso y aporte de Omega 3)",
      "7. Almendras Nonpareil (riqueza en calcio y vitamina E)",
      "8. Harina de coco (aroma exótico y fibra prebiótica)",
      "9. Sal rosa del Himalaya (realzador de sabores minerales)",
      "10. Pasta de maní natural (proteína vegetal concentrada)"
    ],
    productoNuevo: {
      nombre: "VITALIA CREMA ANDINA CRUNCH",
      ingredientesMezclados: [
        "Castañas de Cajú tostadas y emulsionadas (60%)",
        "Cacao amargo ecuatoriano de comercio justo (18%)",
        "Maca andina peruana gelatinizada (7%)",
        "Crispis de Quinoa real inflada crocante (10%)",
        "Pasta de Dátiles Medjool y pizca de sal del Himalaya (5%)"
      ],
      concepto: "Una crema untable funcional, nutritiva y crocante que reemplaza definitivamente a las cremas de avellanas ultraprocesadas y cargadas de azúcar y aceite de palma del supermercado. Una explosión de sabor a chocolate real con la energía revitalizante de la maca y un crujiente toque de quinoa andina.",
      disenoVisual: {
        envase: "Frasco de vidrio prismático hexagonal de 300 gramos, con tapa dorada hermética 'twist-off' libre de BPA y precinto de seguridad en papel kraft reciclado.",
        etiqueta: "Etiqueta autoadhesiva ecológica con diseño botánico minimalista, tipografía limpia, ventanas transparentes que dejan ver la textura de la crema y los copos crocantes de quinoa.",
        coloresTexturas: "Color chocolate marrón oscuro aterciopelado con pequeños destellos dorados de la quinoa crocante. Textura untable ultra suave al paladar con explosión crujiente al morder."
      },
      caracteristicasTecnicas: {
        beneficios: "Brinda energía sostenida sin caídas de glucosa, mejora la concentración mental por los polifenoles del cacao y el poder adaptógeno de la maca, 100% libre de gluten, sin lácteos (apto veganos y APLV), sin azúcar refinada ni conservantes.",
        presentaciones: "Pote de 300g (familiar) y Frasco Pocket de 120g (para deportistas y meriendas escolares).",
        precioSugerido: "$6.800 ARS (300g) / $3.200 ARS (120g).",
        publicoObjetivo: "Deportistas, padres que buscan meriendas sanas para sus hijos, oficinistas, personas veganas y celíacas de Ranelagh y zona sur.",
        vidaUtil: "9 meses a temperatura ambiente en lugar fresco y seco (no requiere refrigeración antes de abrir)."
      },
      valorAgregadoDiferenciacion: "A diferencia de las cremas industriales que tienen hasta un 55% de azúcar blanca y aceites hidrogenados dañinos, nuestra Crema Andina Crunch se elabora en frío con frutos secos reales, contiene adaptógenos ancestrales andinos y ofrece una textura crunch inédita en el mercado artesanal argentino."
    }
  },

  // ==========================================
  // 10. COSTOS FIJOS DEL NEGOCIO (CALCULADORA ARS)
  // ==========================================
  punto10: {
    items: [
      { concepto: "Alquiler de local comercial (Calle 361 Ranelagh)", valor: 450000 },
      { concepto: "Energía Eléctrica comercial (Edesur - heladeras y luces)", valor: 85000 },
      { concepto: "Gas Natural comercial (Metrogas)", valor: 28000 },
      { concepto: "Agua de red comercial (AySA)", valor: 22000 },
      { concepto: "Publicidad Digital y Redes (Meta Ads y TikTok Ads)", valor: 75000 },
      { concepto: "Régimen Monotributo AFIP/ARCA (Categoría C)", valor: 35400 },
      { concepto: "Honorarios profesionales de Contador matriculado", valor: 65000 },
      { concepto: "Plataforma Tienda Online, hosting y dominio .com.ar", valor: 24000 },
      { concepto: "Viáticos, fletes y combustible para repartos locales", valor: 80000 },
      { concepto: "Seguro integral de comercio y responsabilidad civil", valor: 38000 },
      { concepto: "Software de facturación, punto de venta y control de stock", valor: 26000 },
      { concepto: "Artículos de limpieza, bolsas compostables y sanitización", valor: 32000 }
    ],
    margenBrutoEstimado: 0.40 // 40% de margen promedio sobre ventas
  },

  // ==========================================
  // 11. PLANILLA DE INVERSIONES INICIALES
  // ==========================================
  punto11: {
    inversiones: [
      { item: "Refacción y acondicionamiento del local (pintura ecológica, carpintería, luminarias LED)", monto: 1850000, categoria: "Infraestructura" },
      { item: "Mobiliario rústico de pino tratado y exhibidores de madera para granel", monto: 1200000, categoria: "Mobiliario" },
      { item: "Balanza electrónica de precisión Systel Croma con impresor de tickets y código de barras", monto: 420000, categoria: "Maquinaria" },
      { item: "Heladera exhibidora vertical 4 puertas para frescos y bebidas fermentadas", monto: 1650000, categoria: "Refrigeración" },
      { item: "Molino procesador de frutos secos y semillas para elaboración de pastas en vivo", monto: 780000, categoria: "Producción" },
      { item: "Dispensers acrílicos para granos, frascos de exhibición de 5 y 10 litros de vidrio", monto: 540000, categoria: "Equipamiento" },
      { item: "Stock inicial de mercadería no perecedera (frutos secos, harinas, superalimentos)", monto: 2600000, categoria: "Materia Prima" },
      { item: "Cartelería exterior en madera calada con retroiluminación LED y marquesina", monto: 480000, categoria: "Imagen" },
      { item: "Gastos legales, habilitación municipal de Berazategui, libros y matafuegos", monto: 350000, categoria: "Habilitaciones" },
      { item: "Fondo de caja chica y reserva operativa de contingencia inicial", monto: 600000, categoria: "Capital de Trabajo" }
    ]
  },

  // ==========================================
  // 12. CLIENTES: ESTUDIO DESCRIPTIVO Y TRANSVERSAL
  // ==========================================
  punto12: {
    metodologia: "Estudio descriptivo, transversal y cuantitativo aplicado en Ranelagh y Berazategui a una muestra de 15 personas segmentadas en 3 rangos de edad equivalentes (5 entrevistados por grupo).",
    grupos: [
      { id: "G1", nombre: "Grupo 1 (18 a 25 años)", descripcion: "Jóvenes estudiantes, universitarios y deportistas." },
      { id: "G2", nombre: "Grupo 2 (25 a 35 años)", descripcion: "Jóvenes profesionales, parejas jóvenes y personas con primeras familias." },
      { id: "G3", nombre: "Grupo 3 (35 a 50 años)", descripcion: "Adultos consolidados, jefes/as de hogar con hijos y foco en salud preventiva." }
    ],
    entrevistados: [
      { id: 1, grupo: "G1", nombre: "Matías Costa", sexo: "Masculino", edad: 21, localidad: "Ranelagh", respuestas: [1, 2, 1, 1, 2, 2, 1, 2, 1, 2] },
      { id: 2, grupo: "G1", nombre: "Valentina Ruiz", sexo: "Femenino", edad: 19, localidad: "Ranelagh", respuestas: [2, 1, 1, 2, 1, 1, 2, 1, 1, 1] },
      { id: 3, grupo: "G1", nombre: "Facundo Luna", sexo: "Masculino", edad: 24, localidad: "Berazategui", respuestas: [1, 2, 2, 1, 2, 2, 1, 2, 2, 2] },
      { id: 4, grupo: "G1", nombre: "Camila Peralta", sexo: "Femenino", edad: 23, localidad: "Ranelagh", respuestas: [2, 1, 1, 2, 1, 1, 1, 1, 1, 1] },
      { id: 5, grupo: "G1", nombre: "Ignacio Vega", sexo: "Masculino", edad: 20, localidad: "Ranelagh", respuestas: [1, 3, 2, 1, 3, 2, 2, 2, 2, 2] },

      { id: 6, grupo: "G2", nombre: "Luciana Morales", sexo: "Femenino", edad: 28, localidad: "Ranelagh", respuestas: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { id: 7, grupo: "G2", nombre: "Esteban Rivas", sexo: "Masculino", edad: 32, localidad: "Ranelagh", respuestas: [1, 1, 1, 1, 2, 1, 1, 1, 1, 2] },
      { id: 8, grupo: "G2", nombre: "Mariana Soria", sexo: "Femenino", edad: 29, localidad: "Berazategui", respuestas: [2, 1, 1, 2, 1, 1, 1, 1, 1, 1] },
      { id: 9, grupo: "G2", nombre: "Joaquín Díaz", sexo: "Masculino", edad: 34, localidad: "Ranelagh", respuestas: [1, 2, 2, 1, 2, 2, 1, 2, 1, 2] },
      { id: 10, grupo: "G2", nombre: "Florencia Paz", sexo: "Femenino", edad: 27, localidad: "Ranelagh", respuestas: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1] },

      { id: 11, grupo: "G3", nombre: "Gabriela Romero", sexo: "Femenino", edad: 42, localidad: "Ranelagh", respuestas: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { id: 12, grupo: "G3", nombre: "Roberto Gómez", sexo: "Masculino", edad: 47, localidad: "Ranelagh", respuestas: [1, 2, 1, 1, 2, 2, 1, 1, 2, 2] },
      { id: 13, grupo: "G3", nombre: "Silvia Castro", sexo: "Femenino", edad: 39, localidad: "Berazategui", respuestas: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
      { id: 14, grupo: "G3", nombre: "Marcelo Rossi", sexo: "Masculino", edad: 49, localidad: "Ranelagh", respuestas: [1, 2, 2, 2, 3, 2, 1, 2, 2, 2] },
      { id: 15, grupo: "G3", nombre: "Andrea Navarro", sexo: "Femenino", edad: 44, localidad: "Ranelagh", respuestas: [2, 1, 1, 1, 1, 1, 1, 1, 1, 1] }
    ],
    preguntas: [
      {
        id: 1,
        pregunta: "¿Con qué frecuencia compra alimentos naturales o de dietética?",
        opciones: ["Semanalmente (1)", "Quincenalmente (2)", "Mensualmente (3)"],
        distribucionTotal: { "Semanalmente": 9, "Quincenalmente": 5, "Mensualmente": 1 }
      },
      {
        id: 2,
        pregunta: "¿Qué tipo de productos consume con mayor regularidad?",
        opciones: ["Frutos secos y semillas (1)", "Alimentos sin TACC (2)", "Frutas y verduras agroecológicas (3)"],
        distribucionTotal: { "Frutos secos / semillas": 9, "Alimentos sin TACC": 5, "Verduras agroecológicas": 1 }
      },
      {
        id: 3,
        pregunta: "¿Cuál es su principal motivación para comprar en un almacén saludable?",
        opciones: ["Salud y prevención física (1)", "Restricción alimentaria/Celiaquía (2)", "Cuidado del medio ambiente (3)"],
        distribucionTotal: { "Salud y prevención": 11, "Restricción / Celiaquía": 4, "Medio ambiente": 0 }
      },
      {
        id: 4,
        pregunta: "¿Qué factor determina más su decisión al elegir dónde comprar?",
        opciones: ["Calidad y frescura (1)", "Precios justos (2)", "Cercanía física (3)"],
        distribucionTotal: { "Calidad y frescura": 10, "Precios justos": 5, "Cercanía": 0 }
      },
      {
        id: 5,
        pregunta: "¿Cuánto gasta aproximadamente al mes en productos saludables?",
        opciones: ["Más de $40.000 ARS (1)", "Entre $20.000 y $40.000 ARS (2)", "Menos de $20.000 ARS (3)"],
        distribucionTotal: { "Más de $40.000": 8, "$20.000 a $40.000": 5, "Menos de $20.000": 2 }
      },
      {
        id: 6,
        pregunta: "¿Utilizaría un sistema de frascos de vidrio retornables con descuento en su compra?",
        opciones: ["Sí, me encanta la idea (1)", "Tal vez, si no es engorroso (2)", "No, prefiero descartable (3)"],
        distribucionTotal: { "Sí, me encanta": 11, "Tal vez": 4, "No": 0 }
      },
      {
        id: 7,
        pregunta: "¿Le resulta difícil conseguir productos saludables de calidad en Ranelagh?",
        opciones: ["Sí, debo viajar a otras localidades (1)", "A veces encuentro, pero con poca variedad (2)", "No, consigo todo fácilmente (3)"],
        distribucionTotal: { "Sí, debo viajar": 12, "A veces con poca variedad": 3, "No": 0 }
      },
      {
        id: 8,
        pregunta: "¿Valora recibir asesoramiento nutricional personalizado en el mostrador?",
        opciones: ["Mucho, me ayuda a elegir (1)", "Poco, ya sé lo que compro (2)", "Indiferente (3)"],
        distribucionTotal: { "Mucho": 10, "Poco": 5, "Indiferente": 0 }
      },
      {
        id: 9,
        pregunta: "¿Por cuál canal prefiere realizar consultas o pedidos a domicilio?",
        opciones: ["WhatsApp (1)", "Página Web / Tienda Online (2)", "Llamada Telefónica (3)"],
        distribucionTotal: { "WhatsApp": 11, "Tienda Online": 4, "Llamada": 0 }
      },
      {
        id: 10,
        pregunta: "¿Compraría un producto innovador como la 'Crema Andina Crunch' (cajú, cacao y maca)?",
        opciones: ["Definitivamente sí (1)", "Probablemente sí, probaría primero (2)", "No me llama la atención (3)"],
        distribucionTotal: { "Definitivamente sí": 9, "Probablemente sí": 6, "No": 0 }
      }
    ],
    conclusiones: [
      "1. Fuerte insatisfacción con la oferta actual en Ranelagh: El 80% de los encuestados afirma tener dificultades para conseguir productos saludables variados en su zona, debiendo trasladarse a Berazategui centro o Quilmes.",
      "2. Alta predisposición al sistema ecológico de frascos retornables: El 73% de los participantes adoptaría con entusiasmo frascos de vidrio retornables para ahorrar dinero y no generar basura plástica.",
      "3. Disposición a pagar y gasto consolidado: El 86% de los entrevistados gasta más de $20.000 ARS mensuales en este rubro, de los cuales más de la mitad supera los $40.000 ARS, confirmando el poder adquisitivo favorable de Ranelagh.",
      "4. Validación comercial del producto innovador: El 100% de la muestra respondió positivamente a la Crema Andina Crunch (60% compra segura y 40% compra tras degustación), confirmando un potencial de venta inmediata.",
      "5. Canal predilecto: WhatsApp se posiciona como el rey indiscutido de la interacción y pedidos (73%), seguido por la tienda virtual, validando nuestra estrategia de atención cercana y digital."
    ]
  },

  // ==========================================
  // 13. COMPETENCIAS LABORALES (5 EXPLICADAS)
  // ==========================================
  punto13: [
    {
      titulo: "1. Asesoramiento Nutricional y Conocimiento Técnico de Alimentos Funcionales",
      descripcion: "Capacidad de comprender a fondo las propiedades bioactivas, índice glucémico, perfiles de aminoácidos y beneficios de cada producto para guiar con idoneidad científica al cliente, diferenciándonos de un simple despachador de mercadería."
    },
    {
      titulo: "2. Manipulación Higiénica de Alimentos y Protocolos Estrictos Libres de Gluten (Sin TACC)",
      descripcion: "Conocimiento riguroso de las normas de bromatología y prevención absoluta de la contaminación cruzada ambiental y de contacto, asegurando que los productos destinados a personas celíacas mantengan su pureza e inocuidad total."
    },
    {
      titulo: "3. Gestión Eficiente de Inventario a Granel y Control de Rotación (Método PEPS / FIFO)",
      descripcion: "Habilidad para controlar fechas de ingreso, condiciones de humedad, temperatura y aireación de frutos secos, semillas y harinas para evitar rancidez, mermas económicas y asegurar que el cliente siempre reciba productos de frescura insuperable."
    },
    {
      titulo: "4. Comunicación Empática, Escucha Activa y Hospitalidad en la Atención al Cliente",
      descripcion: "Destreza para recibir a cada vecino con calidez, detectar sus preocupaciones de salud o limitaciones en la cocina, y construir un vínculo de confianza comunitaria duradera que transforma la compra en una experiencia reconfortante."
    },
    {
      titulo: "5. Marketing de Contenidos Digitales y Dinamización de Comunidades Locales",
      descripcion: "Capacidad para crear videos dinámicos, recetas sencillas, responder con agilidad por WhatsApp y administrar pauta geolocalizada, logrando que el almacén sea una presencia cotidiana positiva en las redes de los vecinos de Ranelagh."
    }
  ],

  // ==========================================
  // 14. MATRIZ FODA Y CRUCES ESTRATÉGICOS
  // ==========================================
  punto14: {
    foda: {
      fortalezas: [
        "F1. Ubicación comercial estratégica en el corazón residencial y arbolado de Ranelagh.",
        "F2. Alianza directa con cooperativas hortícolas agroecológicas de la zona La Plata-Berazategui.",
        "F3. Equipo con formación en nutrición profesional y vocación de servicio personalizado.",
        "F4. Sistema pionero de granel en frascos de vidrio retornables con economía circular.",
        "F5. Desarrollo de productos de autor propios de alto margen (Crema Andina Crunch)."
      ],
      oportunidades: [
        "O1. Crecimiento sostenido del 22% anual en el consumo de alimentos saludables y sin TACC en Argentina.",
        "O2. Escasa competencia moderna en Ranelagh: las dietéticas existentes están desactualizadas.",
        "O3. Comunidad local con perfil socioeconómico medio-alto dispuesto a pagar por calidad y salud.",
        "O4. Tendencia creciente de rechazo a plásticos de un solo uso y búsqueda de sustentabilidad.",
        "O5. Alianzas con centros de yoga, gimnasios y clubes deportivos tradicionales de Ranelagh."
      ],
      debilidades: [
        "D1. Marca nueva en el mercado que debe ganar la confianza y credibilidad de los vecinos.",
        "D2. Espacio de almacenamiento y depósito acotado en el local para compras mayoristas gigantes.",
        "D3. Dependencia de la estacionalidad climática para ciertos productos frescos agroecológicos.",
        "D4. Inversión inicial acotada que exige una gestión estricta del flujo de fondos."
      ],
      amenazas: [
        "A1. Contexto inflacionario que puede elevar los costos fijos y precios de reposición de insumos.",
        "A2. Posible desembarco de cadenas de dietéticas franquiciadas en la avenida comercial principal.",
        "A3. Aumento en las tarifas de servicios públicos comerciales (electricidad para refrigeración).",
        "A4. Problemas de desabastecimiento temporal de frutos secos importados (almendras, cajú)."
      ]
    },
    estrategiasCruzadas: [
      {
        tipo: "Estrategias FO (Fortalezas + Oportunidades)",
        descripcion: "Aprovechar la formación nutricional del equipo (F3) y la ubicación en Ranelagh (F1) para captar al público de ingresos medios-altos (O3) mediante talleres de cocina saludable y convenios con los clubes deportivos (O5)."
      },
      {
        tipo: "Estrategias DO (Debilidades + Oportunidades)",
        descripcion: "Superar la condición de marca nueva (D1) capitalizando la insatisfacción con la competencia desactualizada (O2) mediante campañas agresivas de degustación gratuita y boca a boca digital en WhatsApp."
      },
      {
        tipo: "Estrategias FA (Fortalezas + Amenazas)",
        descripcion: "Utilizar las alianzas directas con cooperativas locales (F2) y el modelo a granel retornable (F4) para mantener precios más competitivos y amortiguar los incrementos inflacionarios (A1) frente a cadenas tradicionales."
      },
      {
        tipo: "Estrategias DA (Debilidades + Amenazas)",
        descripcion: "Implementar un control semanal de stock mínimo y compras sincronizadas a demanda para contrarrestar la limitación de espacio (D2) y el riesgo de faltantes por importación o inflación (A4)."
      }
    ]
  },

  // ==========================================
  // 15. BUYER PERSONA
  // ==========================================
  punto15: {
    nombre: "Lucía Beltrán",
    edad: 32,
    estadoCivil: "Casada, madre de un niño de 3 años (Benjamín)",
    profesion: "Arquitecta independiente, trabaja de forma híbrida desde su casa en Ranelagh",
    arquetipo: "La Madre Consciente y Profesional Proactiva",
    cita: "«No quiero alimentar a mi hijo con ultraprocesados llenos de azúcar, pero con el trabajo y la casa necesito opciones prácticas, limpias y cerca de casa.»",
    demografia: "Vive en una casa con jardín a 8 cuadras de la estación de Ranelagh. Nivel socioeconómico ABC1 / C2. Practica yoga dos veces por semana.",
    metasObjetivos: [
      "Cocinar de manera nutritiva y variada para su familia sin pasar horas cocinando.",
      "Reducir al máximo los residuos plásticos y la huella ecológica de su hogar.",
      "Comprar alimentos seguros para su hijo, quien tiene sensibilidad leve al gluten."
    ],
    frustracionesDolores: [
      "Perder tiempo viajando a Quilmes o Capital para conseguir frutos secos frescos y harinas puras.",
      "Desconfiar de las etiquetas de supermercado que dicen 'dietético' pero tienen jarabe de maíz.",
      "La mala atención de las dietéticas antiguas de la zona donde no saben explicar qué ingredientes tiene cada producto."
    ],
    canalesHabituales: "Instagram (revisa recetas saludables a la noche), WhatsApp (canal de compra y coordinación), podcast de bienestar mientras trabaja.",
    comoVitaliaLaConquista: "Vitalia le ofrece un espacio estético y cercano donde puede rellenar sus frascos de vidrio, recibir sugerencias de desayunos prácticos de parte de la nutricionista de mostrador y pedir por WhatsApp cuando está tapada de entregas laborales."
  },

  // ==========================================
  // 16. MARCA DE MI NEGOCIO
  // ==========================================
  punto16: {
    nombreEslogan: {
      nombre: "VITALIA",
      subtitulo: "Almacén Saludable",
      eslogan: "Nutrí tu vida desde la raíz."
    },
    variantesMarca: [
      {
        tipo: "Isotipo",
        definicion: "Representación de la marca construida únicamente por un elemento visual o símbolo gráfico sin texto.",
        descripcionVisual: "Un brote botánico verde germinando con hoja protectora externa, silueta interior estilizada y punto central de vitalidad.",
        svgCode: `<div class="flex items-center justify-center p-2"><img src="isotipo.jpg" alt="Vitalia Isotipo Oficial" style="max-height:80px; width:auto; object-fit:contain; mix-blend-mode:multiply;" class="mx-auto drop-shadow-sm"></div>`
      },
      {
        tipo: "Logotipo",
        definicion: "Representación tipográfica pura del nombre de la marca, sin elementos icónicos adyacentes.",
        descripcionVisual: "La palabra 'VITALIA' diseñada con una tipografía sans-serif humanista personalizada, de trazos suaves y esquinas ligeramente redondeadas que transmiten calidez y pureza.",
        svgCode: `<div class="flex flex-col items-center justify-center h-full"><span style="font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:1.8rem;letter-spacing:0.18em;color:#1b4332;">VITALIA</span><span style="font-size:0.65rem;letter-spacing:0.35em;color:#52796f;font-weight:600;margin-top:2px;">ALMACÉN SALUDABLE</span></div>`
      },
      {
        tipo: "Imagotipo (ELEGIDO)",
        definicion: "Unión armónica de símbolo (isotipo) y texto (logotipo) que funcionan juntos pero conservan su legibilidad si se utilizan por separado.",
        descripcionVisual: "El isotipo del brote botánico a la izquierda acompañado por el nombre 'VITALIA' en verde bosque profundo y el descriptor 'ALMACÉN SALUDABLE'. Es la identidad oficial definitiva.",
        svgCode: `<div class="flex items-center justify-center p-2"><img src="imagotipo.jpg" alt="Vitalia Imagotipo Oficial" style="max-height:80px; width:auto; object-fit:contain; mix-blend-mode:multiply;" class="mx-auto drop-shadow-sm"></div>`
      },
      {
        tipo: "Isologo",
        definicion: "Integración indivisible del símbolo y el texto en una sola estructura unificada (ej. sello o emblema circular).",
        descripcionVisual: "Un sello circular botánico donde el texto 'VITALIA ALMACÉN SALUDABLE • RANELAGH •' circula por el borde exterior envolviendo al brote central germinando.",
        svgCode: `<svg viewBox="0 0 120 120" class="w-24 h-24 mx-auto"><circle cx="60" cy="60" r="54" fill="none" stroke="#2d6a4f" stroke-width="3" stroke-dasharray="4,2"/><circle cx="60" cy="60" r="46" fill="#f4fbf7" stroke="#b7e4c7" stroke-width="1.5"/><path d="M60 35 C48 48 42 64 60 78 C78 64 72 48 60 35 Z" fill="#2d6a4f"/><text x="60" y="94" font-size="7" font-weight="bold" fill="#1b4332" text-anchor="middle" letter-spacing="1">VITALIA • 2026</text></svg>`
      }
    ],
    justificacionEleccion: "Justificación de Marca Seleccionada: Elegimos el IMAGOTIPO como la identidad oficial de Vitalia. Esta elección se fundamenta en su versatilidad técnica y comunicacional: permite utilizar el símbolo gráfico de la hoja/semilla de forma independiente como sello de lacre o estampa en las tapas de los frascos de vidrio y bolsas biodegradables, mientras que en la marquesina exterior del local en Ranelagh y en los membretes oficiales ambos elementos conviven con máxima jerarquía, solidez visual y legibilidad a distancia.",
    packaging: "Packaging Biodegradable y Circular: Frascos de vidrio hexagonales reutilizables con precinto de papel kraft, bolsas de papel madera con fuelle para compras a granel impresas con tintas vegetales al agua, y bolsas tote-bag de lienzo de algodón crudo reutilizables que los clientes pueden adquirir una sola vez para sus compras semanales.",
    publicoObjetivoPosicionamiento: "Público Objetivo: Hombres y mujeres de 22 a 65 años de Ranelagh, Berazategui y Hudson, familias con niños pequeños, celíacos y deportistas. Posicionamiento: 'El almacén saludable de cercanía más transparente, estético y confiable de la zona sur bonaerense'.",
    mediosCreativosElegidos: "Video reels dinámicos de cocina de 30 segundos, carruseles educativos con infografías de sustitución de ingredientes y podcasts cortos con micro-cápsulas de nutrición emitidas en las historias semanales de Instagram."
  },

  // ==========================================
  // 17. MARKETING DIGITAL (4 PARTES)
  // ==========================================
  punto17: {
    parte1: {
      nombreNegocio: "VITALIA - Almacén Saludable",
      descripcionExacta50Palabras: "Vitalia es un almacén saludable en Ranelagh que comercializa alimentos agroecológicos, sin TACC y a granel para familias conscientes y deportistas. Nos hace especiales el asesoramiento nutricional en mostrador, el sistema de frascos retornables cero residuos y productos propios de autor como nuestra Crema Andina Crunch.",
      paletaIdentidad: {
        verdeBosque: "#1B4332 (Solidez, confianza y naturaleza)",
        verdeSalvia: "#52B788 (Frescura, vitalidad y equilibrio)",
        cremaAvena: "#F8FAF7 (Pureza, calidez y bienestar)",
        terracotaAndino: "#C86D51 (Tierra fértil, cacao y cercanía)"
      }
    },
    parte2: {
      redes: [
        {
          red: "Instagram",
          usuario: "@VitaliaRanelagh",
          fotoPerfil: "Imagotipo oficial sobre fondo verde bosque con aro dorado sutil.",
          estiloComunicacion: "Cálido, visualmente estético, empático y educativo. Foco en recetas en video, fotos luminosas del local y comunidad de vecinos."
        },
        {
          red: "TikTok",
          usuario: "@VitaliaRanelagh",
          fotoPerfil: "Isotipo del brote germinando con fondo verde flúor orgánico de alto contraste.",
          estiloComunicacion: "Dinámico, divertido, desmitificador de mitos nutricionales, ágil y cercano a la juventud y familias jóvenes."
        }
      ]
    },
    parte3: {
      promoVenta: {
        titulo: "Promo 'Semana del Frasco Retornable'",
        formato: "Flyer interactivo de oferta en feed con código QR",
        texto: "¡Traé tus frascos y llevate 20% OFF en todos los frutos secos y semillas a granel! Cuidá tu bolsillo y al planeta en un solo paso. Válido de martes a sábados en nuestro local de Ranelagh."
      },
      videoPresentacion: {
        duracion: "22 segundos",
        tipo: "Reel / TikTok de Presentación del Almacén",
        guion: [
          { segundo: "00:00 - 00:04", escena: "Plano rápido de la entrada luminosa del local en Ranelagh con el cartel de madera y sonido de campanita.", locucion: "«¿Cansado de buscar alimentos sanos y que te vendan cualquier cosa?»" },
          { segundo: "00:04 - 00:10", escena: "Transición rápida a dispensers de vidrio con nueces cayendo a granel y verduras agroecológicas frescas.", locucion: "«Llegó Vitalia a Ranelagh: tu nuevo almacén saludable libre de agrotóxicos y 100% transparente.»" },
          { segundo: "00:10 - 00:16", escena: "Sofía (nutricionista) sonriendo y pesando un frasco en la balanza con asesoría personalizada.", locucion: "«Acá te asesoramos con amor, podés comprar en frascos retornables y cuidás el planeta.»" },
          { segundo: "00:16 - 00:22", escena: "Plano final del local con dirección en pantalla y sticker animado.", locucion: "«Te esperamos en Calle 361 al 1245. ¡Vení a nutrir tu vida desde la raíz!»" }
        ]
      },
      videoVentaProducto: {
        duracion: "26 segundos",
        tipo: "Reel / TikTok de Venta de Crema Andina Crunch",
        guion: [
          { segundo: "00:00 - 00:05", escena: "Primer plano extremo de una tostada de pan masa madre sobre la que se unta la Crema Andina Crunch escuchándose el crocante de la quinoa.", locucion: "«¿Creías que comer chocolate sano y rico era imposible? Escuchá este crunch...»" },
          { segundo: "00:05 - 00:12", escena: "Frasco girando mostrando los ingredientes: castañas de cajú, cacao puro ecuatoriano y maca andina.", locucion: "«Nuestra Crema Andina Crunch no tiene azúcar refinada, ni lácteos ni aceite de palma. Solo ingredientes reales.»" },
          { segundo: "00:12 - 00:19", escena: "Persona comiendo con una sonrisa y disfrutando de la energía limpia.", locucion: "«Te llena de vitalidad sin picos de glucosa y es apta para celíacos y veganos.»" },
          { segundo: "00:19 - 00:26", escena: "Llamado a la acción con teléfono en pantalla y frascos listos para entrega.", locucion: "«Probala hoy en Vitalia Ranelagh o pedila por WhatsApp con envío en el día. ¡Te va a fascinar!»" }
        ]
      },
      interactivoEncuesta: {
        plataforma: "Instagram Stories",
        formato: "Sticker de Encuesta + Caja de preguntas",
        pregunta: "¿Qué es lo que más te cuesta al momento de cocinar saludable?",
        opciones: ["Opción A: Ideas de recetas rápidas (48%)", "Opción B: Conseguir harinas sin TACC buenas (32%)", "Opción C: Los precios del súper (20%)"],
        remate: "¡Esta semana Sofía nuestra nutri sube 3 recetas con ingredientes de Vitalia que resuelven tus cenas en 15 minutos!"
      },
      memePublicitario: {
        formato: "Meme de 2 paneles clásico (Expectativa vs Realidad saludable)",
        panel1: "Imagen 1: Persona entrando con cara seria: 'Solo voy a entrar a Vitalia a comprar 100 gramos de nueces y nada más.'",
        panel2: "Imagen 2: La misma persona saliendo feliz con dos bolsas de tela llenas de frascos de Crema Andina, granola tostada, verduras agroecológicas y una sonrisa: 'El almacén no me deja ir, es todo muy rico.'",
        pieDeFoto: "No lo decimos nosotros, lo dicen sus bolsas de compras 😂💚 ¿A quién más le pasa? ¡Los leemos en comentarios!"
      },
      publicacionEstatica: {
        foto: "Fotografía cenital estética de un bowl de cerámica artesanal con yogur natural, rodajas de banana, granola crocante Vitalia y lluvia de cacao puro sobre mesa de madera rústica.",
        copyTexto: "Despertar con energía no es cuestión de suerte, es nutrir tu cuerpo con alimentos vivos y reales 🌿✨ En Vitalia Ranelagh encontrás los mejores frutos secos activados y granolas caseras sin azúcar. Pasá hoy por tu dosis de bienestar cotidiano 🥣💛 #VitaliaRanelagh #AlimentacionConsciente #RanelaghSaludable #SinTaccZonaSur",
        palabrasContadas: 46,
        hashtags: ["#VitaliaRanelagh", "#AlimentacionConsciente", "#RanelaghSaludable", "#SinTaccZonaSur"]
      }
    },
    parte4: {
      estrategiaHorarios: [
        { contenido: "Reels / TikToks de recetas y productos", red: "Instagram y TikTok", horario: "19:30 a 20:30 hs", justificacion: "Horario clave de regreso del trabajo donde los usuarios viajan en tren o descansan en su casa planificando qué cenar o desayunar al día siguiente." },
        { contenido: "Stories con encuestas y recordatorios de pedidos", red: "Instagram", horario: "12:15 a 13:30 hs", justificacion: "Pico de almuerzo laboral y pausas donde se incrementan los pedidos express de WhatsApp para el reparto de la tarde." },
        { contenido: "Memes y contenido de humor cotidiano", red: "Instagram y Facebook", horario: "Sábados a las 10:30 hs", justificacion: "Momento distendido de fin de semana donde los vecinos organizan las compras del fin de semana y pasean por Ranelagh." }
      ],
      publicoObjetivoDigital: "Personas de 22 a 55 años que residen en Ranelagh, Berazategui, Hudson, Quilmes y Sourigues, con intereses en nutrición sana, celiaquía, yoga, running, maternidad consciente y cocina casera.",
      porQueEstasRedes: "Instagram es la vidriera aspiracional y estética obligatoria para el rubro gastronómico y saludable en Argentina, permitiendo una interacción directa vía mensajes directos; mientras que TikTok permite viralización orgánica sin costo hacia nuevos públicos jóvenes que no nos conocen."
    }
  },

  // ==========================================
  // 18. MODELO DE NEGOCIO CANVAS
  // ==========================================
  punto18: {
    sociosClave: [
      "Cooperativas hortícolas agroecológicas de La Plata y Berazategui (UTT)",
      "Distribuidora mayorista de frutos secos 'El Naranjo Natural'",
      "Productores de miel pura y mermeladas sin azúcar de cooperativas del interior",
      "Gimnasios, centros de estética y estudios de yoga de Ranelagh",
      "Club de Golf y entidades deportivas tradicionales de la zona"
    ],
    actividadesClave: [
      "Selección y compra directa a productores agroecológicos",
      "Control de inocuidad y fraccionamiento higiénico a granel",
      "Atención y asesoramiento nutricional personalizado en tienda",
      "Producción de línea de autor propia (Crema Andina Crunch y granolas)",
      "Logística de envíos a domicilio y gestión comercial omnicanal"
    ],
    recursosClave: [
      "Local comercial cálido y equipado en Calle 361 Ranelagh",
      "Balanza de precisión Systel, heladera de 4 puertas y molino de frutos secos",
      "Equipo interdisciplinario (nutricionista, logística y marketing)",
      "Stock variado de mercadería certificada sin TACC y a granel",
      "Plataforma de comercio electrónico y canal de WhatsApp comercial"
    ],
    propuestaValor: [
      "Alimentos limpios, agroecológicos y sin químicos al alcance del vecino de Ranelagh.",
      "Asesoramiento empático y calificado en mostrador para dudas nutricionales.",
      "Ahorro económico y residuo cero mediante compra a granel en frascos retornables.",
      "Variedad garantizada de productos libres de gluten certificados sin contaminación cruzada.",
      "Productos de autor exclusivos que combinan placer, nutrición y salud real."
    ],
    relacionClientes: [
      "Atención consultiva y cercana por nombre de pila",
      "Comunidad en WhatsApp con tips, recetas y recordatorios de promociones",
      "Beneficios de fidelización por retorno de frascos de vidrio",
      "Talleres presenciales y degustaciones mensuales en el local"
    ],
    canales: [
      "Local físico a la calle en Ranelagh",
      "Tienda online www.vitalia-almacen.com.ar",
      "Catálogo dinámico de WhatsApp Business",
      "Redes sociales (Instagram @VitaliaRanelagh y TikTok @VitaliaRanelagh)",
      "Servicio de delivery propio en furgoneta acondicionada"
    ],
    segmentosClientes: [
      "Familias y residentes de Ranelagh y Berazategui preocupados por la nutrición saludable",
      "Personas con condiciones dietarias específicas (celíacos, diabéticos, intolerantes, veganos)",
      "Deportistas y corredores que buscan energía limpia y suplementos naturales",
      "Vecinos ecologistas comprometidos con la reducción del uso de plásticos"
    ],
    estructuraCostos: [
      "Costos fijos mensuales (alquiler del local, servicios de luz/gas/agua, seguros)",
      "Costo de mercadería vendida (compra mayorista de materias primas)",
      "Impuestos y cargas sociales (Monotributo AFIP/ARCA, ARBA Ingresos Brutos)",
      "Inversión en pauta publicitaria digital y marketing",
      "Mantenimiento de equipamiento, embalajes compostables y logística"
    ],
    fuentesIngresos: [
      "Venta minorista de alimentos a granel (frutos secos, legumbres, semillas)",
      "Venta de productos envasados de terceros certificados (sin TACC, orgánicos)",
      "Comercialización de bolsones agroecológicos semanales de verdura de quinta",
      "Venta de productos de marca propia Vitalia (Crema Andina, granolas)",
      "Servicio de envíos a domicilio en zona sur"
    ]
  },

  // ==========================================
  // 19. CUESTIÓN IMPOSITIVA (AFIP/ARCA Y ARBA)
  // ==========================================
  punto19: {
    inscripcionPasoAPaso: [
      "1. Trámite de CUIT Digital: Obtención de la Clave Única de Identificación Tributaria mediante la app 'Mi AFIP' validando datos biométricos y DNI argentino vigente.",
      "2. Clave Fiscal Nivel 3: Validación de identidad con prueba de vida y reconocimiento facial móvil para operar en la plataforma web de AFIP / ARCA.",
      "3. Adhesión al Domicilio Fiscal Electrónico: Declaración de casilla de correo y celular oficial donde se recibirán las notificaciones tributarias legales obligatorias.",
      "4. Declaración de Actividad Económica en Nomenclador CLAE: Alta en el código de actividad de AFIP N° 472190: 'Venta al por menor de productos alimenticios n.c.p., en comercios especializados' (incluye dietéticas, almacenes naturales y venta de frutos secos a granel).",
      "5. Adhesión al Régimen Simplificado (Monotributo) y emisión de Factura Electrónica Clase 'C' mediante el sistema de 'Comprobantes en Línea' o lector fiscal homologado."
    ],
    categoriaMonotributo: {
      categoriaElegida: "CATEGORÍA C (Venta de cosas muebles / Comercio minorista)",
      justificacionTecnica: "Se elige la Categoría C ya que nuestra proyección de facturación bruta anual para el primer año se sitúa en aproximadamente $12.800.000 ARS, lo cual se encuadra cómodamente dentro de los parámetros de esta escala para comercio. Además, la superficie afectada del local comercial en Ranelagh es de 45 m² (el tope de la Cat. C permite hasta 60 m²) y el consumo eléctrico estimado de 4.800 kWh anuales encaja dentro del límite permitido (hasta 6.700 kWh). Permite operar de forma transparente y con margen de crecimiento antes de recategorizarse.",
      cuadroValoresMensuales: [
        { concepto: "Impuesto Integrado (comercio de cosas muebles)", valor: 6700 },
        { concepto: "Aporte Previsional Jubilatorio (SIPA)", valor: 13800 },
        { concepto: "Aporte al Sistema Nacional de Seguro de Salud (Obra Social)", valor: 14900 },
        { concepto: "Régimen Simplificado Ingresos Brutos ARBA (Provincia de Buenos Aires)", valor: 18500 }
      ],
      totalMensualPagar: 53900
    }
  },

  // ==========================================
  // 20. DIAGRAMA DE GANTT (16 SEMANAS / 5 FASES)
  // ==========================================
  punto20: {
    duracionTotalSemanas: 16,
    fases: [
      {
        fase: "Fase 1: Planificación Legal y Selección del Local",
        colorClass: "fase-1",
        semanas: "Semanas 1 a 4",
        tareas: [
          { tarea: "Firma de contrato de locación comercial en Ranelagh", semInicio: 1, semFin: 2, estado: "Completado" },
          { tarea: "Trámites de CUIT, AFIP y habilitación municipal de Berazategui", semInicio: 2, semFin: 4, estado: "Completado" },
          { tarea: "Diseño de identidad visual de marca y arquitectura del local", semInicio: 2, semFin: 4, estado: "Completado" }
        ]
      },
      {
        fase: "Fase 2: Acondicionamiento del Local y Equipamiento",
        colorClass: "fase-2",
        semanas: "Semanas 4 a 8",
        tareas: [
          { tarea: "Obras de pintura ecológica, iluminación LED y carpintería", semInicio: 4, semFin: 7, estado: "Completado" },
          { tarea: "Instalación de heladeras de frío y balanza Systel homologada", semInicio: 6, semFin: 8, estado: "Completado" },
          { tarea: "Montaje de estanterías, dispensers de acrílico y frascos de granel", semInicio: 7, semFin: 8, estado: "Completado" }
        ]
      },
      {
        fase: "Fase 3: Acuerdos con Proveedores y Stock Inicial",
        colorClass: "fase-3",
        semanas: "Semanas 8 a 11",
        tareas: [
          { tarea: "Firma de convenios con Cooperativas de La Plata (UTT) y El Naranjo", semInicio: 8, semFin: 9, estado: "En Proceso" },
          { tarea: "Recepción de primer lote mayorista de frutos secos y harinas sin TACC", semInicio: 9, semFin: 10, estado: "En Proceso" },
          { tarea: "Producción inicial del lote de lanzamiento de 'Crema Andina Crunch'", semInicio: 10, semFin: 11, estado: "Pendiente" }
        ]
      },
      {
        fase: "Fase 4: Campaña de Marketing Digital y Expectativa",
        colorClass: "fase-4",
        semanas: "Semanas 11 a 14",
        tareas: [
          { tarea: "Lanzamiento de redes sociales y pauta geolocalizada en Ranelagh", semInicio: 11, semFin: 13, estado: "Pendiente" },
          { tarea: "Despliegue de la tienda web y vinculación con WhatsApp Business", semInicio: 12, semFin: 14, estado: "Pendiente" },
          { tarea: "Distribución de folletería ecológica y degustaciones con gimnasios", semInicio: 13, semFin: 14, estado: "Pendiente" }
        ]
      },
      {
        fase: "Fase 5: Apertura Oficial y Puesta en Marcha",
        colorClass: "fase-5",
        semanas: "Semanas 14 a 16",
        tareas: [
          { tarea: "Evento de Inauguración oficial con vecinos de Ranelagh y degustación", semInicio: 14, semFin: 15, estado: "Pendiente" },
          { tarea: "Arranque de operaciones regulares y servicio de delivery zonal", semInicio: 15, semFin: 16, estado: "Pendiente" },
          { tarea: "Primer balance mensual de ventas, control de mermas y ajustes", semInicio: 16, semFin: 16, estado: "Pendiente" }
        ]
      }
    ]
  }
};
