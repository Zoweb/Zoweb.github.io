/**
 * Created by and copyright zachy on 17/06/2016.
 */

var info = {
    createdBy: "zachy",
    dateFirstMade: "17/06/2016"
};

var $home = $(".home"), $bh = $("body, html");

$(window).get(0).addEventListener('scroll', function() {
    var scrollTop = $bh.scrollTop();
    $home.css('background-position', '0px ' + (scrollTop/-2) + 'px');
});