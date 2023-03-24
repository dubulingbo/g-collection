layui.use(['element'], function () {
    const $ = layui.$
    const element = layui.element
    
    $.getJSON('./data/catalog.json', function (r) {
        // console.log(r)
        let menu = $("#leftCatalog")
        $.each(r, (i, o) => {
            if (o.children && o.children.length > 0) {
                let str = "<li class=\"layui-nav-item\"><a href=\"javascript:;\">"
                    + o.name + "</a>" + "<dl class=\"layui-nav-child\">"

                $.each(o.children, (ii, oo) => {
                    str += "<dd><a href=\"#CATALOG_ITEM_" + oo.id + "\">" + oo.name + "</a></dd>"
                })

                str += "</dl></li>"
                menu.append(str)
            } else {
                menu.append("<li class=\"layui-nav-item\">"
                    + "<a href=\"#CATALOG_ITEM_" + o.id + "\">"
                    + o.name + "</a></li>")
            }
        })

        element.render('nav')
    })

    $.getJSON("./data/cards.json", r => {
        // console.log(r)
        let el = $("#cardShow")
        for (let i = 0; i < r.length; ++i) {
            if (r[i].resources && r[i].resources.length > 0) {
                let str = '<div class="catalog-title" id="CATALOG_ITEM_' + r[i].catalogId
                    + '"><i class="layui-icon layui-icon-note"></i><span>'
                    + r[i].catalogName + '</span></div>'
                    + '<div class="g-card-block">'

                $.each(r[i].resources, (i, c) => {
                    let s = '<div class="g-card">'
                        + '<img class="card-icon" src="' + c.logo + '" alt="' + c.name + '">'
                        + '<div class="card-main">'
                        + '<a class="card-link" target="_blank" href="' + c.url + '" title="' + c.name + '">' + c.name + '</a>'
                        + '<div class="card-desc" title="' + c.description + '">' + c.description + '</div>'
                        + '</div>'
                        + '</div>'
                    str += s
                })

                str += '</div>'
                el.append(str)
            }

            
        }
    })

    element.on('nav(left-catalog)', function(o) {
        // let id = $(this).attr('id')
    })
})

function goto(id) {
    if (id != '') {
        $('html,body').animate({ scrollTop: $(id).offset.top }, 300)
    }
}