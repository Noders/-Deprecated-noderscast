# [Noderscast](www.noderscast.com) 


Sitio oficial de Noderscast, el podcast oficial de

[![Noders](../master/assets/img/noders3-rectangle-150.png)](http://www.noders.com)
> 

## Instrucciones
1. Forkear repositorio 
2. `npm run` (Internamente corre `npm install | webpack-dev-server`) para instalar los paquetes de npm y correr el servidor de webpack
3. Open [http://localhost:3000](http://localhost:3000)
4. Realizar cambios y hacer pull requests!! 

## Rutas
Actualmente hay 3 rutas con sus consiguientes componentes base

Ruta | Componente React
--- | --- 
`/` | `assets/routes/home/home.jsx`
`/episodios` | `assets/routes/episodios/episodios.jsx`
`/episodios/:id` | `assets/routes/episodio/episodio.jsx`


## TODO
- [x] Define initial project
- [x] Define and create Routes
- [x] Add "Internal API JSON"
- [x] Add "Noders Audio Player Component"
- [x] Migrate to ReactRouter 1.0
- [x] Create Readme
- [ ] Fix Audio component to correctly reset timer on stop and restart
- [ ] Fix css for `/`
	- [ ] Fix css for `/` -> area `Episodes`
	- [ ] Fix css for `/` -> area `SocialNetworks`
	- [ ] Fix css for `/` -> area `Hosts`
- [ ] Fix css for `/episodios`
- [ ] Fix css for `/episodios/:id`
- [ ] Fix css for `/footer`
- [ ] Publish
- [ ] ...?????
- [ ] Profit.

## Stack
- ReactJS
- React Router
- Webpack