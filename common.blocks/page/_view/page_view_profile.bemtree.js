block('page').mod('view', 'profile')(
    js()(true),
    content()(function () {
        return [
            {
                elem: 'header'
            },
            {
                elem: 'body',
                content: {
                    block: 'profile'
                }
            }
        ]
    })
);
