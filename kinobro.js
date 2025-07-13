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
            // Вызывается при инициализации
            console.log('KinoBro plugin is active');
        },

        // Пример кнопки
        onCreateButton: function(){
            Lampa.Settings.main().update({
                title: 'KinoBro',
                subtitle: 'Нажми чтобы проверить',
                callback: function(){
                    alert('KinoBro работает!');
                }
            });
        }
    };

    // Подключаем в Lampa
    Lampa.Plugin.register('kinobro', kinobro);
})();
