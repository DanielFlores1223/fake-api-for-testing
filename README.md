# FAKE API 

#### Requisitos para usar la api en tu pc:
1.  Instalar node js en tu pc:
	[Descargar aquí](http://https://nodejs.org/es/download/ "Descargar aquí")
1. Tener instalado Postgresql

#### Pasos para usar la api:
1. Clonar el repositorio
1. Correr comando `npm install`
1. Crear un archivo .env en la raíz del proyecto y colocar las siguientes variables.
```
PORT=3000
DB_HOST=localhost
DB_USER=
DB_PASS=
DB_NAME=
```

1.  Crear la base de datos manualmente en tu gestor de postgresql, con el mismo nombre que colocaste en la variabe  `DB_NAME`
1.  Ahora corremos las seeds con el siguiente comando: `npm run db:import`
*** Nota:** si quieres borrar las seeds lo puedes hacer con el comando `npm run db:delete*
1. Para correr el servidor es con el comando `npm run server`

###### Para acceder al end point es con la url 
Obtener un registro con un folio especifico:
`localhost:3000/api/main?folio=1001`

Obtener todos los registros:
`localhost:4000/api/main?folio=`
		o
`localhost:4000/api/main`