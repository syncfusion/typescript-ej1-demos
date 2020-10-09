/// <reference path="../tsfiles/jquery.d.ts" />
/// <reference path="../tsfiles/ej.web.all.d.ts" />

module TileViewComponent {
    $(function () {
        var tile1 = new ej.Tile($("#tile1"), {
            imagePosition:"fill",
			caption:{text:"People"},
			tileSize:"medium",
			imageUrl:'content/images/tile/windows/people_1.png'
        });
		var tile2 = new ej.Tile($("#tile2"), {
            imagePosition:"center",
			tileSize:"small",
			imageUrl:'content/images/tile/windows/alerts.png',
        });
		var tile3 = new ej.Tile($("#tile3"), {
            imagePosition:"center",
			tileSize:"small",
			imageUrl:'content/images/tile/windows/bing.png',
        });
		var tile4 = new ej.Tile($("#tile4"), {
            tileSize:"small",
		 	imageUrl:'content/images/tile/windows/camera.png',
        });
		var tile5 = new ej.Tile($("#tile5"), {
            imagePosition:"center",
			tileSize:"small",
			imageUrl:'content/images/tile/windows/messages.png',
        });
		var tile6 = new ej.Tile($("#tile6"), {
            imagePosition:"center",
			tileSize:"medium",
			imageUrl:'content/images/tile/windows/games.png',
			caption:{text:"Play"}
        });
		var tile7 = new ej.Tile($("#tile7"), {
			tileSize:"medium",
			imageUrl:'content/images/tile/windows/map.png',
			caption:{text:"Maps"}
        });
		var tile8 = new ej.Tile($("#tile8"), {
            imagePosition:"fill",
			tileSize:"wide",
			imageUrl:'content/images/tile/windows/sports.png',
			caption:{text:"Sports"}
        });
		var tile9 = new ej.Tile($("#tile9"), {
            imagePosition:"fill",
			tileSize:"medium",
			imageUrl:'content/images/tile/windows/people_2.png',
			caption:{text:"People"}
        });
		var tile10 = new ej.Tile($("#tile10"), {
            imagePosition:"center",
			tileSize:"medium",
			imageUrl:'content/images/tile/windows/pictures.png',
			caption:{text:"Photo"}
        });
		var tile11 = new ej.Tile($("#tile11"), {
            imagePosition:"center",
			tileSize:"wide",
			imageUrl:'content/images/tile/windows/weather.png',
			caption:{text:"Weather"}
        });
		var tile12 = new ej.Tile($("#tile12"), {
            imagePosition:"center",
			tileSize:"medium",
			imageUrl:'content/images/tile/windows/music.png',
			caption:{text:"Music"}
        });
		var tile13 = new ej.Tile($("#tile13"), {
            imagePosition:"center",
			tileSize:"medium",
			imageUrl:'content/images/tile/windows/favs.png',
			caption:{text:"Favorites"}
        });
    });
}