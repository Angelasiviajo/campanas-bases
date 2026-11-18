# Campañas a bases · Sí Viajo

Calendario y tablero de resultados de las comunicaciones que Sí Viajo envía a sus bases de clientes.

## ¿Para qué existe?

Todas las semanas salen mensajes a las bases desde distintas áreas: recompra, promociones, reactivación, cumpleaños, lanzamientos y salidas grupales. Hasta ahora esa información estaba repartida en chats, planillas y cabezas. Este proyecto la junta en un solo lugar con dos objetivos:

1. **Que todos sepan qué campaña se está ejecutando.** Marketing, People, Ventas y Dirección Comercial ven en el momento qué sale esta semana y este mes, quién lo envía, a qué base va, cuál es el mensaje y qué hay que tener en cuenta. Así se evitan pisadas, mensajes duplicados al mismo cliente y asesores que no saben por qué los está llamando alguien.
2. **Medir de forma visible el impacto de cada campaña.** Cada comunicación registra cuántos mensajes salieron, cuántos respondieron, cuántas oportunidades generó y cuánto se vendió. Con eso se decide con datos qué conviene repetir, qué hay que ajustar y qué no funciona.

## Qué muestra la app

### Resumen
Arriba de todo se ve cuántas campañas hay **activas hoy**, cuántas **en esta semana**, cuántas **arrancan en los próximos 7 días** y cuántas están **programadas**.

### Tablero de resultados
Es la barra negra. Suma los resultados de las campañas del período que estés mirando (semana, mes o todas):

| Métrica | Qué indica |
|---|---|
| Enviados | Mensajes que salieron |
| Respondieron y % de respuesta | Si el mensaje genera conversación |
| Oportunidades | Respuestas que pidieron cotización o pasaron a un asesor |
| Servicios vendidos y Ventas | Lo que efectivamente se cerró, siempre juntos |
| Ticket promedio | Ventas ÷ servicios vendidos |
| Conversión total | Servicios vendidos ÷ enviados |
| Pasajeros y bajas | Volumen de pasajeros y clientes que pidieron no recibir más mensajes |

### Vistas
- **Semana:** cada campaña aparece como una barra sobre los días en que está activa. Abajo hay una tarjeta por campaña con el mensaje y sus resultados.
- **Mes:** un calendario con las campañas de cada día, en el color de su tipo.
- **Todas:** una tabla con las métricas de cada campaña y otra con el ranking por **tipo de campaña**, para ver qué tipo rinde más.

Se puede filtrar por tipo y por quién envía, y buscar por texto.

### Ficha de cada campaña
Al tocar una campaña se abre su ficha. Tiene:
- fechas, quién envía, canal y base o segmento
- el **mensaje**, con un botón para copiarlo
- los **puntos a tener en cuenta**: a quién no enviarle, cómo personalizar, a quién derivar
- el formulario de **resultados**, que calcula las tasas mientras se cargan los números

Desde la ficha se puede editar, duplicar o borrar la campaña.

## Datos de cada campaña

| Campo | Opciones o ejemplo |
|---|---|
| Nombre | "Recompra verano 2027" |
| Inicio y fin | Fechas en que la campaña está activa |
| Tipo | Recompra · Promo / evento · Reactivación · Cumpleaños / fecha especial · Lanzamiento / novedad · Grupal / salida · Fidelización / Plus · Informativa |
| Quién envía | Marketing · People · Ventas · Director comercial · Otro |
| Canal | WhatsApp · Email · SMS · Llamado · Redes / DM |
| Base / segmento | "Pasajeros Europa 2025" |
| Mensaje | El texto que se envía |
| Puntos a tener en cuenta | Exclusiones, personalización, derivación |
| Resultados | Enviados, respondieron, oportunidades, servicios vendidos, ventas (USD, ARS o EUR), pasajeros, bajas |

El **estado** se calcula solo según las fechas: Programada, Activa o Finalizada.

## Cómo se usa (rutina del equipo)

1. **Antes de enviar:** quien envía carga la campaña con sus fechas, el mensaje y los puntos a tener en cuenta.
2. **El día del envío:** se cargan los **enviados**.
3. **Todos los viernes:** se actualizan respondieron, oportunidades, servicios vendidos y ventas. Siempre se cargan los números **acumulados**.
4. **Al cerrar la campaña:** se hace la carga final.
5. **En las reuniones semanales:** se abre la vista Semana para ver qué sale y la vista Todas para ver qué está funcionando.

Si una campaña ya arrancó y no tiene números, aparece el aviso **"Falta cargar resultados"**.

## Archivo

- `index.html`: la app completa en un solo archivo, con su HTML, CSS y JavaScript. No necesita instalación ni dependencias. Usa las fuentes Archivo y Figtree de Google Fonts y los colores de marca, negro y amarillo.

## Dónde se guardan los datos

- **Versión en Claude (claude.ai):** los datos se guardan en una base compartida. Todo el equipo con acceso ve y carga lo mismo en tiempo real. **Es la versión recomendada para el uso diario.**
- **Este HTML abierto por fuera de Claude** (GitHub Pages o el archivo local): los datos se guardan **solo en el navegador** de quien los carga. Sirve para verla o probarla, pero no se comparte entre personas. Para que funcione como herramienta de equipo fuera de Claude hay que conectarle una base de datos.

## Publicar con GitHub Pages

1. Entrá a **Settings › Pages**.
2. Elegí **Deploy from a branch**, branch `main` y carpeta `/ (root)`, y tocá **Save**.
3. En unos minutos queda en `https://angelasiviajo.github.io/campanas-bases/`.

## Responsable

Marketing de Sí Viajo.
