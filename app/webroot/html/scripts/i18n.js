var _gettext = new Gettext({ domain : __locale, locale_data: __locale_data });
function _loc (str) { return _gettext.gettext(str);}
$(function(){
  $("a.ChangeLang").click(function () {
    var f = document.createElement('form');
    f.method = "post";
    var h = document.createElement('input');
    h.type = "hidden";
    h.name = "set_national_lang";
    h.value = $(this).data("changelang");
    f.appendChild(h);
    document.body.appendChild(f);                 
    f.submit();
    return false;
  });
});






  
