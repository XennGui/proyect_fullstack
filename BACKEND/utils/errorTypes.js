//BACKEND/utils/errorTypes.js

const errorTypes = {
    // =============================
    // 1xx (Informativo)
    // =============================

    CONTINUE: { status: 100, message: 'El servidor acepta la petición inicial' },
    SWITCHING_PROTOCOLS: { status: 101, message: 'Cambio de protocolo (ej: de HTTP a WebSocket)' },
    PROCESSING: { status: 102, message: 'Petición en proceso' },
    EARLY_HINTS: { status: 103, message: 'Enviando headers preliminares' },

    // =============================
    // 2xx (Éxito)
    // =============================

    OK: { status: 200, message: 'Todo correcto' },
    CREATED: { status: 201, message: 'Recurso creado exitosamente' },
    ACCEPTED: { status: 202, message: 'Petición aceptada pero no procesada' },
    NON_AUTHORITATIVE_INFORMATION: { status: 203, message: 'La información puede ser de otra fuente' },
    NO_CONTENT: { status: 204, message: 'Respuesta exitosa sin contenido' },
    RESET_CONTENT: { status: 205, message: 'Contenido reiniciado, usual en formularios' },
    PARTIAL_CONTENT: { status: 206, message: 'Respuesta parcial (descargas en partes)' },
    MULTI_STATUS: { status: 207, message: 'Múltiples estados (APIs complejas)' },
    ALREADY_REPORTED: { status: 208, message: 'Respuesta ya reportada' },
    IM_USED: { status: 226, message: 'La respuesta usa manipulaciones del contenido (Delta encoding)' },

    // =============================
    // 3xx (Redirección)
    // =============================

    MULTIPLE_CHOICES: { status: 300, message: 'Múltiples opciones disponibles' },
    MOVED_PERMANENTLY: { status: 301, message: 'Redirección permanente' },
    FOUND: { status: 302, message: 'Redirección temporal' },
    SEE_OTHER: { status: 303, message: 'Ver otro recurso' },
    NOT_MODIFIED: { status: 304, message: 'El recurso no ha cambiado (usa caché)' },
    USE_PROXY: { status: 305, message: 'Se debe acceder a través de un proxy' },
    TEMPORARY_REDIRECT: { status: 307, message: 'Redirección temporal (mismo método)' },
    PERMANENT_REDIRECT: { status: 308, message: 'Redirección permanente (mismo método)' },

    // =============================
    // 4xx (Errores del cliente)
    // =============================

    BAD_REQUEST: { status: 400, message: 'Sintaxis inválida en la petición' },
    UNAUTHORIZED: { status: 401, message: 'Falta autenticación' },
    PAYMENT_REQUIRED: { status: 402, message: 'Pago requerido (no implementado comúnmente)' },
    FORBIDDEN: { status: 403, message: 'Acceso prohibido' },
    NOT_FOUND: { status: 404, message: 'Recurso no encontrado' },
    METHOD_NOT_ALLOWED: { status: 405, message: 'Método HTTP no permitido' },
    NOT_ACCEPTABLE: { status: 406, message: 'Recurso no es aceptable según lo solicitado' },
    PROXY_AUTHENTICATION_REQUIRED: { status: 407, message: 'Autenticación con proxy requerida' },
    REQUEST_TIMEOUT: { status: 408, message: 'Tiempo de espera agotado' },
    CONFLICT: { status: 409, message: 'Conflicto con el estado actual' },
    GONE: { status: 410, message: 'El recurso ya no está disponible' },
    LENGTH_REQUIRED: { status: 411, message: 'Se requiere especificar longitud' },
    PRECONDITION_FAILED: { status: 412, message: 'Falló una precondición' },
    PAYLOAD_TOO_LARGE: { status: 413, message: 'El cuerpo de la petición es muy grande' },
    URI_TOO_LONG: { status: 414, message: 'La URL excede el límite' },
    UNSUPPORTED_MEDIA_TYPE: { status: 415, message: 'Tipo de contenido no soportado' },
    RANGE_NOT_SATISFIABLE: { status: 416, message: 'Rango de datos no válido' },
    EXPECTATION_FAILED: { status: 417, message: 'Falló la expectativa del cliente' },
    I_AM_A_TEAPOT: { status: 418, message: 'Soy una tetera (RFC 2324)' },
    MISDIRECTED_REQUEST: { status: 421, message: 'Petición enviada a un servidor incorrecto' },
    UNPROCESSABLE_ENTITY: { status: 422, message: 'Entidad no procesable (semántica inválida)' },
    LOCKED: { status: 423, message: 'Recurso bloqueado' },
    FAILED_DEPENDENCY: { status: 424, message: 'Dependencia fallida' },
    TOO_EARLY: { status: 425, message: 'Demasiado pronto para procesar' },
    UPGRADE_REQUIRED: { status: 426, message: 'Se requiere actualización de protocolo' },
    PRECONDITION_REQUIRED: { status: 428, message: 'Se requiere precondición' },
    TOO_MANY_REQUESTS: { status: 429, message: 'Demasiadas peticiones (rate limit)' },
    REQUEST_HEADER_FIELDS_TOO_LARGE: { status: 431, message: 'Campos del header demasiado grandes' },
    LEGAL_BLOCK: { status: 451, message: 'Bloqueado por razones legales' },

    // =============================
    // 5xx (Errores del servidor)
    // =============================

    INTERNAL_SERVER_ERROR: { status: 500, message: 'Error interno del servidor' },
    NOT_IMPLEMENTED: { status: 501, message: 'Funcionalidad no implementada' },
    BAD_GATEWAY: { status: 502, message: 'Error en la comunicación entre servidores' },
    SERVICE_UNAVAILABLE: { status: 503, message: 'Servicio no disponible' },
    GATEWAY_TIMEOUT: { status: 504, message: 'Tiempo de espera agotado en proxy' },
    HTTP_VERSION_NOT_SUPPORTED: { status: 505, message: 'Versión HTTP no soportada' },
    VARIANT_ALSO_NEGOTIATES: { status: 506, message: 'Negociación de contenido fallida' },
    INSUFFICIENT_STORAGE: { status: 507, message: 'Espacio insuficiente en servidor' },
    LOOP_DETECTED: { status: 508, message: 'Bucle infinito detectado' },
    NOT_EXTENDED: { status: 510, message: 'Se requieren más extensiones' },
    NETWORK_AUTHENTICATION_REQUIRED: { status: 511, message: 'Autenticación de red requerida' },

    // =============================
    // Extras / No oficiales pero comunes
    // =============================

    ENHANCE_YOUR_CALM: { status: 420, message: 'Cálmate un poco (Twitter)' },
    LOGIN_TIMEOUT: { status: 440, message: 'Sesión expirada (Microsoft IIS)' },
    BLOCKED_BY_PARENTAL_CONTROLS: { status: 450, message: 'Bloqueado por control parental (IIS)' },
    CLIENT_CLOSED_CONNECTION: { status: 460, message: 'Conexión cerrada por el cliente (AWS)' },
    X_FORWARDED_FOR_TOO_LARGE: { status: 463, message: 'X-Forwarded-For demasiado largo (Nginx)' },
    REQUEST_HEADER_TOO_LARGE: { status: 494, message: 'Header demasiado grande (Nginx)' },
    SSL_CERT_ERROR: { status: 495, message: 'Error de certificado SSL (Nginx)' },
    SSL_REQUIRED: { status: 496, message: 'SSL requerido (Nginx)' },
    HTTP_TO_HTTPS: { status: 497, message: 'Petición HTTP en puerto HTTPS (Nginx)' },
    TOKEN_INVALID: { status: 498, message: 'Token expirado o inválido (Microsoft)' },
    CLIENT_CLOSED_REQUEST: { status: 499, message: 'Cliente cerró la conexión (Nginx)' },
    UNKNOWN_ERROR: { status: 520, message: 'Error desconocido (Cloudflare)' },
    SERVER_DOWN: { status: 521, message: 'Servidor abajo (Cloudflare)' },
    CONNECTION_TIMEOUT: { status: 522, message: 'Tiempo de espera agotado (Cloudflare)' },
    ORIGIN_UNREACHABLE: { status: 523, message: 'Origen inalcanzable (Cloudflare)' },
    TIMEOUT_OCCURRED: { status: 524, message: 'Ocurrió un timeout (Cloudflare)' },
    SSL_HANDSHAKE_FAILED: { status: 525, message: 'Fallo en el handshake SSL (Cloudflare)' },
    INVALID_SSL_CERT: { status: 526, message: 'Certificado SSL inválido (Cloudflare)' },
    RAILGUN_ERROR: { status: 527, message: 'Error de Railgun (Cloudflare)' },
    SITE_OVERLOADED: { status: 529, message: 'Sitio sobrecargado (Qualys)' },
    SITE_FROZEN: { status: 530, message: 'Sitio congelado (Pantheon)' },


    // =============================
    // personalizados de cliente
    // =============================
    ERROR_OBTENER_CLIENTES: { status: 500, message: 'Error al obtener los clientes' },
    ERROR_OBTENER_CLIENTE: { status: 500, message: 'Error al obtener el cliente' },
    ERROR_CREAR_CLIENTE: { status: 500, message: 'Error al crear el cliente' },
    ERROR_ACTUALIZAR_CLIENTE: { status: 500, message: 'Error al actualizar el cliente' },
    ERROR_ELIMINAR_CLIENTE: { status: 500, message: 'Error al eliminar el cliente' },
    CLIENTE_NO_ENCONTRADO: { status: 404, message: 'Cliente no encontrado' },
    CLIENTE_CREADO: { status: 201, message: 'Cliente creado exitosamente' },
    CLIENTE_ELIMINADO: { status: 204, message: 'Cliente eliminado exitosamente' },

    // =============================
    // personalizados de producto
    // =============================

    ERROR_OBTENER_PRODUCTOS: { status: 500, message: 'Error al obtener los productos' },
    ERROR_OBTENER_PRODUCTO: { status: 500, message: 'Error al obtener el producto' },
    ERROR_CREAR_PRODUCTO: { status: 500, message: 'Error al crear el producto' },
    ERROR_ACTUALIZAR_PRODUCTO: { status: 500, message: 'Error al actualizar el producto' },
    ERROR_ELIMINAR_PRODUCTO: { status: 500, message: 'Error al eliminar el producto' },
    PRODUCTO_NO_ENCONTRADO: { status: 404, message: 'Producto no encontrado' },
    CLIENTE_ID_REQUERIDO: { status: 400, message: 'cliente_id es requerido' },
    PRODUCTO_CREADO: { status: 201, message: 'Producto creado exitosamente' },
    PRODUCTO_ELIMINADO: { status: 204, message: 'Producto eliminado exitosamente' },

};

module.exports = errorTypes;
