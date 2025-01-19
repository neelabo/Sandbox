function setCultureSwitch() {

    var element = document.getElementById("culture_switch");
    if (element == null) return;

    var path = location.pathname.split('/');
    var cultureIndex = path.length - 2;

    switch (path[cultureIndex]) {
        case "ja-jp":
            var nextCulture = "en-us";
            var nextCultureString = "ENGLISH"
            break;
        case "en-us":
            var nextCulture = "ja-jp";
            var nextCultureString = "日本語"
            break;
        default:
            return;
    }

    path[cultureIndex] = nextCulture;
    var nextPath = path.join('/');

    element.innerHTML = `<a href=\"${nextPath}\">${nextCultureString}</a>`;
}

setCultureSwitch();
