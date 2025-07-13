(function(){
    var kinobro = {
        type: 'video',
        version: '1.0.0',
        name: 'KinoBro',
        description: 'Тестовый плагин. Показывает одно видео.',
        icon: 'https://img.icons8.com/fluency/96/movie-projector.png',

        onContextMenu: function(){
            alert('KinoBro подключен');
        },

        // 🟢 Главное: функция play
        play: function(object, resolve, reject){
            console.log('KinoBro play called:', object);

            // Пример простого видео-файла
            resolve([{
                title: 'KinoBro Test Video',
                file: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
                quality: 'HD',
                info: 'Тестовое видео'
            }]);
        },

        init: function(){
            console.log('KinoBro инициализирован');
        }
    };

    if (typeof Lampa !== 'undefined') {
        Lampa.Plugin.register('kinobro', kinobro);
    }
})();
