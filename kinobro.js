// kinobro.js

(function(){
    var kinobro = {
        type: 'video',
        version: '1.0.0',
        name: 'KinoBro',
        description: 'Плагин тестовый. Будет подключать видео или плейлисты.',
        icon: 'https://img.icons8.com/fluency/96/movie-projector.png',

        onContextMenu: function(){
            alert('Плагин KinoBro подключен!');
        },

        init: function(){
            console.log('KinoBro plugin is active');
        }
    };

    // 🔥 Вот это важно! Зарегистрировать в Lampa
    if (typeof Lampa !== 'undefined') {
        Lampa.Plugin.register('kinobro', kinobro);
    } else {
        console.warn('Lampa not found. Плагин не зарегистрирован');
    }
})();
