(function(){
    ymaps.ready(init);

    function init(){
        var myMap = new ymaps.Map("map", {
            center: [59.92143925796709,30.308313499999908],
            zoom: 16,
            controls : []
        });

        var myPlacemark = new ymaps.Placemark(
            [59.92143925796709,30.308313499999908],
            {
                hintContent: 'Hipsweet',
                balloonContent: 'Кексики'
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'pics/cupcake/marker.png',
                iconImageSize: [42, 59],
                iconImageOffset: [-20, -55]
            });

        myMap.behaviors.disable(['scrollZoom']);


        myMap.geoObjects.add(myPlacemark);
    }

}());