block('compose-modal')(
    mod('mode', 'photo').replace()(
        function () {
            return {
                block: 'compose-modal',
                inner_blocks: [{name: 'dropzone', js: {url: window.config.api_server + '/api/user/image'}}]
            };
        }),
    mod('mode', 'url').replace()(
        function () {
            return [{
                block: 'compose-modal',
                inner_blocks: [
                    {name: 'url-input', js: true}
                ]
            }
            ];
        }
    ),
    content()(function () {
        var t = {
            block: 'modal-body',
            js: true,
            content:
                this.ctx.inner_blocks.map(function (block) {
                    return {
                        block: block.name,
                        js: block.js
                    };
                })
        };
        return t;

    }),
    js()(true)
);
