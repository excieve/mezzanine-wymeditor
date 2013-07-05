from mezzanine.conf import register_setting


register_setting(
    name='WYMEDITOR_SETUP_JS',
    description='URL for the JavaScript file (relative to ``STATIC_URL``) '
    'that handles configuring WYMeditor when corresponding widget is used.',
    editable=False,
    default='mezzanine_wymeditor/js/setup.js'
)
