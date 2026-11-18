# Campañas a bases · Sí Viajo

Calendario y resultados de las comunicaciones que se envían a las bases de clientes. Tiene una vista por semana, otra por mes y la lista completa. Cada campaña guarda:

- quién la envía
- el mensaje y los puntos a tener en cuenta
- enviados, respuestas, oportunidades, servicios vendidos y ventas

Los datos se guardan en una **Google Sheet** de la empresa. La página se publica gratis con **GitHub Pages**.

## Puesta en marcha (una sola vez, unos 10 minutos)

### 1. Crear la Google Sheet y su script
1. Creá una Google Sheet nueva desde la cuenta de la empresa. Por ejemplo: "Campañas a bases – datos".
2. Abrí **Extensiones › Apps Script**.
3. Borrá lo que aparezca y pegá todo el contenido de `apps-script/Code.gs`. Guardá.
4. Entrá a **Configuración del proyecto** (el ícono de engranaje), bajá hasta **Propiedades del script** y agregá:
   - Propiedad: `CLAVE`
   - Valor: la clave que va a usar el equipo, por ejemplo `siviajo-campanas-2026`
5. Tocá **Implementar › Nueva implementación**, elegí el tipo **Aplicación web** y configurá:
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier usuario**
6. Autorizá los permisos que pide Google y copiá la **URL de la aplicación web**. Es la que termina en `/exec`.

### 2. Conectar la página
1. En este repositorio abrí `config.js`, tocá el lápiz para editar y pegá la URL entre las comillas de `API_URL`.
2. Guardá con **Commit changes**.

### 3. Publicar con GitHub Pages
1. Entrá a **Settings › Pages**.
2. En "Source" elegí **Deploy from a branch**, branch **main**, carpeta **/ (root)**, y tocá **Save**.
3. En 1 o 2 minutos la app queda publicada en `https://angelasiviajo.github.io/campanas-bases/`.

### 4. Compartir
Pasale al equipo el link y la clave. La clave se pide una sola vez en cada navegador.

## Notas
- La hoja **Campañas** se crea sola la primera vez que se guarda una campaña. Tiene una columna por dato, así que sirve también para armar reportes.
- Para cambiar la clave, editá la propiedad `CLAVE` en Apps Script. Todos van a tener que ingresar la nueva.
- Si cambiás el código de `Code.gs`, hacé **Implementar › Gestionar implementaciones › Editar › Nueva versión** para que el cambio tome efecto. La URL sigue siendo la misma.
- El repositorio es público pero solo tiene código. Los datos quedan en la Google Sheet y solo se leen con la clave.
