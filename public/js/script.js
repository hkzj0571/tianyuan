var Applocation = {
    init: function () {

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
                'Authorization': $('meta[name="api_token"]').attr('content')
            }
        })

        $('[data-toggle="tooltip"]').tooltip()

        $('.destroy').on('click', function (event) {
            event.preventDefault()
            var url = $(this).attr('href')
            iziToast.question({
                timeout: 10000,
                close: false,
                overlay: true,
                toastOnce: true,
                backgroundColor: '#DC143C',
                theme: 'dark',
                progressBarColor: '#fff',
                id: 'Notice_Delete',
                zindex: 999,
                title: '警告',
                message: '确定要执行删除操作吗?',
                position: 'center',
                buttons: [
                    ['<button><b>确定</b></button>', function (instance, toast) {
                        instance.hide(toast, {transitionOut: 'fadeOut'}, 'button')
                        $.ajax({
                            type: 'POST',
                            url: url,
                            data: {_method: 'delete'},
                            success: respond => {
                                return respond.status
                                    ? succeed(respond.message, window.location.href)
                                    : failed(respond.message)
                            }
                        })
                    }],
                    ['<button>取消</button>', function (instance, toast) {
                        instance.hide(toast, {transitionOut: 'fadeOut'}, 'button')
                    }]
                ]
            })
        })

        $('.loon').each(function () {
            if ($(this).attr('href') == window.location.href) {
                $(this).parent().addClass('active').parent().parent().addClass('active')
            }
        })

        $('.loon').on('click', function () {
            $('.loon').parent().removeClass('active').parent().parent().removeClass('active')
            $(this).parent().addClass('active').parent().parent().addClass('active')
        })

        window.failed = (message, url = null) => iziToast.error({
            title: message,
            transitionIn: 'fadeInDown',
            zindex: 9999999999999,
            onClosed: () => {
                if (url !== null) return typeof url == 'function' ? url() : to(url)
            }
        })

        window.succeed = (message, url = null) => iziToast.success({
            title: message,
            transitionIn: 'fadeInDown',
            zindex: 9999999999999,
            onClosed: () => {
                if (url !== null) return typeof url == 'function' ? url() : to(url)
            }
        })

        window.to = url => $('#anchor').attr('href', url).click()

        window.toSubmit = function (init) {
            $.ajax({
                type: init.method,
                url: init.action,
                data: init.el.serialize(),
                success: respond => {
                    return respond.status
                        ? (init.callback
                            ? init.callback()
                            : succeed(respond.message, init.jump))
                        : failed(respond.message)
                }
            })
        }

        $('.select-all').on('click', function () {
            $('.table-check').click()
        })

        $('.btn-file').on('click', function () {
            var self = $(this)
            var input = document.createElement('input')
            input.setAttribute('type', 'file')
            input.click()

            $(input).on('change', function () {
                var formData = new FormData();
                formData.append('file', $(this)[0].files[0]);
                $.ajax({
                    url: '/admin/upload',
                    type: 'POST',
                    data: formData,
                    processData: false,
                    contentType: false,
                    success: function (respond) {
                        if (respond.status) {
                            succeed('文件上传成功')
                            self.parent().prev().val(respond.data.url)
                        } else {
                            failed(respond.message)
                        }
                },
                error: function (responseStr) {
                    failed('文件上传失败！')
                }
            });
            })
        })

        try {
            var editor = new wangEditor('PickEditor')
            editor.config.uploadImgUrl = '/wangeditor/server'
            editor.create()
        } catch(error) {

        }


        $('.btn-batch').on('click', function () {
            var url = $(this).attr('batch-url')
            iziToast.question({
                timeout: 10000,
                close: false,
                overlay: true,
                toastOnce: true,
                backgroundColor: '#DC143C',
                theme: 'dark',
                progressBarColor: '#fff',
                id: 'Notice_Delete',
                zindex: 999,
                title: '警告',
                message: '确定要执行批量删除操作吗?',
                position: 'center',
                buttons: [
                    ['<button><b>确定</b></button>', function (instance, toast) {
                        instance.hide(toast, {transitionOut: 'fadeOut'}, 'button')
                        var id = []
                        $('.table-check').each(function () {
                            if ($(this).is(":checked")) id.push($(this).val())
                        })
                        $.ajax({
                            type: "POST",
                            url: url,
                            data: {id: id, _method: 'delete'},
                            async: false,
                            success: function (respond) {
                                return respond.status
                                    ? succeed(respond.message, window.location.href)
                                    : failed(respond.message)
                            }
                        })
                    }],
                    ['<button>取消</button>', function (instance, toast) {
                        instance.hide(toast, {transitionOut: 'fadeOut'}, 'button')
                    }]
                ]
            })
        })
    }
}

$(document).ready(function () {
    Applocation.init()
    $(document).pjax('a:not(a[target="_blank"])', '#main', {timeout: 1600, maxCacheLength: 500})
    $(document).on('pjax:start', function () {
        NProgress.start()
    })
    $(document).on('pjax:end', function () {
        NProgress.done()
        Applocation.init()
    })
})
