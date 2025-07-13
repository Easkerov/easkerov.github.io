(function(){
    var kinobro = {
        type: 'video',
        version: '1.0.0',
        name: 'KinoBro',
        description: 'Плагин тестовый. Подключает видео.',
        icon: 'https://img.icons8.com/fluency/96/movie-projector.png',

        onContextMenu: function(){
            alert('Плагин KinoBro подключен!');
        },

        // ✅ ЭТО ГЛАВНОЕ!
        play: function(object, resolve, reject){
            console.log('Вызвана функция play:', object);

            // Пример HLS потока (можно заменить на свой .m3u8 или .mp4)
            resolve([{
                title: 'KinoBro: Тестовое видео',
                file: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
                quality: 'HD',
                info: 'Тестовый источник от KinoBro'
            }]);
        },

        init: function(){
            console.log('KinoBro plugin initialized');
        }
    };

    if (typeof Lampa !== 'undefined') {
        Lampa.Plugin.register('kinobro', kinobro);
    }
})();
