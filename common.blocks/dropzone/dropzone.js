modules.define('dropzone', ['i-bem__dom', 'jquery'], function (provide, BEMDOM, jQuery) {

// этот комментарий будет заменен `borschik`-ом на содержимое файла плагина
    /*borschik:include:../../node_modules/dropzone/dist/min/dropzone.min.js*/

    Dropzone.autoDiscover = false;

<<<<<<< 662e40a0254a4d90d66bbe23f5203ffba5cec5dc
    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            js: {
                inited: function () {
                    // в момент инициализации блока будет включен dropzone

                    if (this.params.url) {
                        var size = this.params.size || 200,
                            url = this.prefixURL(this.params.url),
                            current = this.prefixURL(this.params.current),
                            currentFile,
                            that = this,
                            dz = this.domElem.dropzone({
                                url: url,
                                paramName: this.params.paramName || 'file',
                                maxFiles: 1,
                                acceptedFiles: '.jpg,.png,.gif',
                                thumbnailWidth: size,
                                thumbnailHeight: size,
                                success: function (file, response) {
                                    var data = response;
                                    that.findBlockOutside('page').emit('upload_success', data);
                                },
                                dictDefaultMessage: 'Загрузите картинку'
                            });
                        dz = dz[0].dropzone;

                        if (current) {
                            currentFile = { };
                            dz.emit('addedfile', currentFile);
                            dz.createThumbnailFromUrl(currentFile, current);
                            dz.emit('complete', currentFile);
                            currentFile.previewElement.addEventListener('click', function () {
                                dz.hiddenFileInput.click();
                            });
                            // that.findBlockOutside('page').
                            //         emit('upload_success', {"status":"OK","image":current});
                        }

                        dz.on('addedfile', function (file) {
                            if (dz.files.length > 1) {
                                dz.removeFile(dz.files[0]);
                            }
                            if (currentFile) {
                                dz.removeFile(currentFile);
                                currentFile = null;
                            }
                            file.previewElement.addEventListener('click', function () {
                                dz.hiddenFileInput.click();
                            });
                        });
=======
    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                js: {
                    inited: function () {
                        // в момент инициализации блока будет включен dropzone
                        var that = this;
                        if (this.params.url) {
                            var size = this.params.size || 200,
                                url = this.prefixURL(this.params.url),
                                current = this.prefixURL(this.params.current),
                                currentFile,
                                dz = this.domElem.dropzone({
                                    url: url,
                                    paramName: this.params.paramName || 'file',
                                    maxFiles: 1,
                                    acceptedFiles: '.jpg,.png,.gif',
                                    thumbnailWidth: size,
                                    thumbnailHeight: size,
                                    success: function (file, response) {
                                        var data = response;
                                        that.findBlockOutside('page').emit('upload_success', data);
                                    },
                                    dictDefaultMessage: 'Загрузите картинку'
                                });
                            dz = dz[0].dropzone;

                            if (current) {

                                currentFile = {};
                                dz.emit('addedfile', currentFile);
                                dz.createThumbnailFromUrl(currentFile, current);
                                dz.emit('complete', currentFile);
                                currentFile.previewElement.addEventListener('click', function () {
                                    dz.hiddenFileInput.click();
                                });
                                // that.findBlockOutside('page').
                                //         emit('upload_success', {"status":"OK","image":current});
                            }
>>>>>>> фиксы по оформлению

                            dz.on('addedfile', function (file) {
                                if (dz.files.length > 1) {
                                    dz.removeFile(dz.files[0]);
                                }
                                if (currentFile) {
                                    dz.removeFile(currentFile);
                                    currentFile = null;
                                }
                                file.previewElement.addEventListener('click', function () {
                                    dz.hiddenFileInput.click();
                                });
                            });

                            window.dz = dz;

                        }
                    }
                }
            },
            prefixURL: function (url) {
                if (url && (!(/^https?:\/\//.test(url)))) {
                    url = window.config.api_server + url;
                }
                return url;
            }
        },
<<<<<<< 662e40a0254a4d90d66bbe23f5203ffba5cec5dc
        prefixURL: function (url) {
            if (url && (!/^https?:\/\//.test(url))) {
                url = window.config.api_server + url;
            }
            return url;
        }
    },
        {

        }
        ));

=======
        {}));
>>>>>>> фиксы по оформлению
});
