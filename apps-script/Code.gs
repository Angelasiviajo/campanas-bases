/**
 * Sí Viajo · Campañas a bases
 * Backend en Google Apps Script: guarda las campañas en la hoja "Campañas"
 * de la Google Sheet a la que está vinculado este script.
 *
 * Configuración: Proyecto > Configuración del proyecto > Propiedades del script
 *   CLAVE = la clave que va a usar el equipo para entrar
 */

const HOJA = 'Campañas';
const COLUMNAS = [
  'id', 'nombre', 'inicio', 'fin', 'tipo', 'canal', 'envia', 'base', 'mensaje', 'puntos',
  'enviados', 'respuestas', 'oportunidades', 'servicios', 'ventas', 'moneda', 'pasajeros', 'bajas',
  'resultados_actualizados', 'actualizado'
];
const NUMEROS = ['enviados', 'respuestas', 'oportunidades', 'servicios', 'ventas', 'pasajeros', 'bajas'];

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || '{}');
    const clave = PropertiesService.getScriptProperties().getProperty('CLAVE');
    if (!clave || body.key !== clave) return json_({ ok: false, error: 'clave' });

    if (body.action === 'list') return json_({ ok: true, items: listar_() });
    if (body.action === 'save') return conLock_(() => { guardar_(body.item); return json_({ ok: true }); });
    if (body.action === 'delete') return conLock_(() => { borrar_(body.id); return json_({ ok: true }); });
    return json_({ ok: false, error: 'accion' });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({ ok: true, servicio: 'Sí Viajo · Campañas a bases' });
}

function hoja_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(HOJA);
  if (!sh) {
    sh = ss.insertSheet(HOJA);
    sh.getRange(1, 1, 1, COLUMNAS.length).setValues([COLUMNAS]).setFontWeight('bold').setBackground('#ffd400');
    sh.setFrozenRows(1);
  }
  return sh;
}

function listar_() {
  const sh = hoja_();
  const datos = sh.getDataRange().getValues();
  const head = datos.shift();
  return datos.filter(r => r[0]).map(r => {
    const o = {};
    head.forEach((h, i) => { o[h] = r[i] instanceof Date ? Utilities.formatDate(r[i], 'America/Argentina/Buenos_Aires', 'yyyy-MM-dd') : r[i]; });
    const item = {
      id: String(o.id), nombre: o.nombre, inicio: String(o.inicio), fin: String(o.fin), tipo: o.tipo, canal: o.canal,
      asesor: o.envia, base: o.base, mensaje: o.mensaje, puntos: o.puntos, actualizado: o.actualizado
    };
    if (o.enviados !== '' && o.enviados !== null) {
      item.res = { moneda: o.moneda || 'USD', actualizado: o.resultados_actualizados };
      NUMEROS.forEach(k => { if (o[k] !== '') item.res[k] = Number(o[k]); });
    }
    return item;
  });
}

function guardar_(item) {
  if (!item || !item.id) throw new Error('Falta el id');
  const sh = hoja_();
  const r = item.res || {};
  const fila = COLUMNAS.map(c => {
    switch (c) {
      case 'envia': return item.asesor || '';
      case 'resultados_actualizados': return r.actualizado || '';
      case 'moneda': return r.moneda || '';
      default:
        if (NUMEROS.indexOf(c) >= 0) return r[c] == null ? '' : Number(r[c]);
        const v = item[c] == null ? '' : String(item[c]);
        return /^[=+\-@]/.test(v) ? "'" + v : v; // evita que el texto se tome como fórmula
    }
  });
  const ids = sh.getRange(1, 1, Math.max(sh.getLastRow(), 1), 1).getValues().map(x => String(x[0]));
  const idx = ids.indexOf(String(item.id));
  if (idx > 0) sh.getRange(idx + 1, 1, 1, fila.length).setValues([fila]);
  else sh.appendRow(fila);
  // fechas como texto ISO para que no cambien de zona horaria
  const row = idx > 0 ? idx + 1 : sh.getLastRow();
  sh.getRange(row, 3, 1, 2).setNumberFormat('@').setValues([[item.inicio || '', item.fin || '']]);
}

function borrar_(id) {
  const sh = hoja_();
  const ids = sh.getRange(1, 1, Math.max(sh.getLastRow(), 1), 1).getValues().map(x => String(x[0]));
  const idx = ids.indexOf(String(id));
  if (idx > 0) sh.deleteRow(idx + 1);
}

function conLock_(fn) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try { return fn(); } finally { lock.releaseLock(); }
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
