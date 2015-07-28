from django import forms

from mezzanine.conf import settings


class WymeditorWidget(forms.Textarea):

    class Media:
        css = {
            'all': (
                'mezzanine/css/smoothness/jquery-ui-1.9.1.custom.min.css',
                'mezzanine_wymeditor/wymeditor/skins/default/skin.css',
                'mezzanine_wymeditor/css/wym.css'
            )
        }
        js = (
            'mezzanine/js/' + settings.JQUERY_UI_FILENAME,
            'filebrowser/js/filebrowser-popup.js',
            'mezzanine_wymeditor/wymeditor/jquery.wymeditor.min.js',
            'mezzanine_wymeditor/wymeditor/plugins/embed/jquery.wymeditor.embed.js',
            'mezzanine_wymeditor/wymeditor/plugins/table/jquery.wymeditor.table.js',
            'mezzanine_wymeditor/wymeditor/plugins/resizable/jquery.wymeditor.resizable.js',
            'mezzanine_wymeditor/wymeditor/skins/default/skin.js',
            settings.WYMEDITOR_SETUP_JS
        )

    def __init__(self, *args, **kwargs):
        super(WymeditorWidget, self).__init__(*args, **kwargs)
        base_class = self.attrs.get('class', None)
        editor_class = 'wymeditor'
        if base_class:
            editor_class = base_class + ' %s' % editor_class
        self.attrs['class'] = editor_class
