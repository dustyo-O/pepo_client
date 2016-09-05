
block('spinner')(
    tag()('div'),
    js()(true),
    content()(function(){
        var width = this.ctx.size ;
        var text = this.ctx.text ;
        var c = {
            elem: 'loading',
            content: 
            {
                elem: 'title'
            }
        };
        if (width != null)
            c.attrs = {style:'width:' + width + 'px; font-size:'+ width +'%'};
        if (text != null)
            c.content.content = text;
        
        return c;

    })
);


