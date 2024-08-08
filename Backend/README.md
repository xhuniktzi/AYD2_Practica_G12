# AYD2_Practica_G12
### Backend Endpoints

# Abogado 
## 1. Agregar Expediente 
<strong>URL</strong>: /agregarExpediente  \
<strong>Método</strong>: POST \
<strong>Descripción</strong>: Este endpoint permite agregar un nuevo expediente en la base de datos.

Parámetros en el cuerpo de la solicitud (JSON):

- <strong>codigo_Documento (int)</strong>: Código del documento relacionado con el expediente.
- <strong>contenido_Documento (string)</strong>: Descripción o contenido del documento.
- <strong>codigo_Estado (int)</strong>: Código del estado del expediente.

Ejemplo:

```json
{
    "codigo_Documento": 1,
    "contenido_Documento": "Texto",
    "codigo_Estado": 1
}
```

Resputa Esperado
```json
{
    "expedienteId": "1"
}
```


## 2. Obtener Contenido de Documento
<strong>URL</strong>: /generarDocumentos/:expedienteId \
<strong>Método</strong>: GET \
<strong>Descripción</strong>: Este endpoint permite obtener el contenido de un documento relacionado con un expediente existente en la base de datos.

Parámetros en la URL:

- <strong>expedienteId (int)</strong>: El ID del expediente cuyo contenido se desea obtener.
Ejemplo:

```
GET /generarDocumentos/2/1123
```
Respuesta esperado
```json
{
    "contenido": "Descripción del documento"
}
```

## 3. Actualizar Estado del Expediente 
<strong>URL</strong>: /actualizarEstado/:expedienteId \
<strong>Método</strong>: PUT \
<strong>Descripción</strong>: Este endpoint permite actualizar el estado de un expediente existente.

Parámetros en la URL:

- <strong>expedienteId (int)</strong>: El ID del expediente cuyo estado se desea actualizar.

Parámetros en el cuerpo de la solicitud (JSON):

- <strong>codigo_Estado (int)</strong>: Nuevo código del estado del expediente.
Ejemplo de solicitud:

```json
{
    "codigo_Estado": 2
}
```
Respuesta esperado:

```json
{
    "no_Expediente": "1",
    "codigo_Estado": "2"
}
```

# Cita

## 1. Crear Cita
<strong>URL</strong>: /create \
<strong>Método</strong>: POST \
<strong>Descripción</strong>: Este endpoint permite crear una nueva cita en la base de datos.

Parámetros en el cuerpo de la solicitud (JSON):

- <strong>CUI_Cliente (int)</strong>: Identificador único del cliente. 
- <strong>fecha (date)</strong>: Fecha de la cita. 
- <strong>hora (time)</strong>: Hora de la cita. 

Ejemplo:

```json
{
    "CUI_Cliente": 1234567890123,
    "fecha": "2023-08-10",
    "hora": "10:00:00"
}
```
Respuesta esperado:

```json
{
    "codigo_Cita": "1"
}
```

## 2. Actualizar Cita
<strong>URL</strong>: /:id \
<strong>Método</strong>: PUT \
<strong>Descripción</strong>: Este endpoint permite actualizar los detalles de una cita existente.

Parámetros en la URL:

<strong>id (int)</strong>: El ID de la cita que se desea actualizar.

Parámetros en el cuerpo de la solicitud (JSON):

- Cualquier campo que desees actualizar (CUI_Cliente, fecha, hora, etc.).

Ejemplo:

```json
{
    "fecha": "2023-08-12",
    "hora": "11:00:00"
}
```
Respuesta esperado:
```json
204 No Content
```

No hay cuerpo en la respuesta.

## 3. Obtener Citas por Cliente
<strong>URL</strong>: /clients/:id \
<strong>Método</strong>: GET \
<strong>Descripción</strong>: Este endpoint permite obtener todas las citas asociadas a un cliente específico.

Parámetros en la URL:

- <strong>id (int)</strong>: El CUI del cliente cuyas citas se desean consultar. \

Ejemplo:

```
GET /clients/1234567890123
```

Respuesta esperado:

```json
[
    {
        "codigo_Cita": "1",
        "CUI_Cliente": "1234567890123",
        "fecha": "2023-08-10",
        "hora": "10:00:00"
    },
    {
        "codigo_Cita": "2",
        "CUI_Cliente": "1234567890123",
        "fecha": "2023-08-12",
        "hora": "11:00:00"
    }
]
```


# Cliente

## 1. Obtener Información de un Cliente
<strong>URL</strong>: /:id \
<strong>Método</strong>: GET \
<strong>Descripción</strong>: Este endpoint permite obtener la información de un cliente específico según su CUI.

Parámetros en la URL:

- <strong>id (int)</strong>: El CUI del cliente cuya información se desea consultar.
Ejemplo de solicitud:

```http
GET /1234567890123
```

Respuesta esperado:

```json
[
    {
        "CUI": "1234567890123",
        "nombre": "Juan",
        "apellido": "Perez",
        "telefono": "5551234",
        "correo": "juan.perez@example.com",
        "edad": 30,
        "codigo_Genero": 1,
        "fecha_Ingreso": "2023-01-01"
    }
]
```
## 2. Crear un Nuevo Cliente
<strong>URL</strong>: / \
<strong>Método</strong>: POST \
<strong>Descripción</strong>: Este endpoint permite agregar un nuevo cliente en la base de datos.

Parámetros en el cuerpo de la solicitud (JSON):

- <strong>CUI (int)</strong>: Identificador único del cliente.
- <strong>nombre (string)</strong>: Nombre del cliente.
- <strong>apellido (string)</strong>: Apellido del cliente.
- <strong>telefono (int)</strong>: Número de teléfono del cliente.
- <strong>correo (string)</strong>: Dirección de correo electrónico del cliente.
- <strong>edad (int)</strong>: Edad del cliente.
- <strong>codigo_Genero (int)</strong>: Código de género del cliente.
- <strong>fecha_Ingreso (date)</strong>: Fecha de ingreso del cliente.
Ejemplo de solicitud:

```json
{
    "CUI": 1234567890123,
    "nombre": "Juan",
    "apellido": "Perez",
    "telefono": 5551234,
    "correo": "juan.perez@example.com",
    "edad": 30,
    "codigo_Genero": 1,
    "fecha_Ingreso": "2023-01-01"
}
```
Respuesta esperado:

```json
{
    "CUI": "1234567890123"
}
```
# 3. Actualizar Información de un Cliente
<strong>URL</strong>: /:id \
<strong>Método</strong>: PUT \
<strong>Descripción</strong>: Este endpoint permite actualizar la información de un cliente existente.

Parámetros en la URL:

<strong>id (int)</strong>: El CUI del cliente cuya información se desea actualizar.

Ejemplo:

```json
{
    "telefono": 5555678,
    "correo": "juan.perez_nuevo@example.com"
}
```
Respuesta esperado:
```json
200 OK
```
No hay cuerpo en la respuesta.


