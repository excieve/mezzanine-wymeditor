WYMeditor for Mezzanine
=======================

This is `WYMeditor <http://wymeditor.github.io/wymeditor/>`_ adapted as richtext widget for `Mezzanine CMS <http://mezzanine.jupo.org/>`_. It includes basic WYMeditor distribution along with custom image button for use with `filebrowser-safe <https://github.com/stephenmcd/filebrowser-safe>`_.

Installation
------------

To install mezzanine-wymeditor first make sure you meet the requirements.

   .. warning::

     Currently it **requires** at least Mezzanine 1.4.9 and a `fork of filebrowser-safe <https://github.com/excieve/filebrowser-safe/tree/generic-popup-fix>`_ (there's a pull request in process) to work correctly. It still *may* run on other versions with certain limitations. See `Caveats`_ for more details.

Now get it from pypi::

   pip install mezzanine-wymeditor

Or directly from source if you prefer::

   git clone https://github.com/excieve/mezzanine-wymeditor
   cd mezzanine-wymeditor
   python setup.py install

Once installed, set up ``RICHTEXT_WIDGET_CLASS`` in your ``local_settings.py`` like this::

   RICHTEXT_WIDGET_CLASS = 'mezzanine_wymeditor.widgets.WymeditorWidget'

and add the application to ``INSTALLED_APPS``::

   INSTALLED_APPS = (
       ...
       'mezzanine_wymeditor',
       ...
   )

Additionally you may override WYMeditor initialisation code (to set your own configs for instance)::

   WYMEDITOR_SETUP_JS = 'path/to/your/setup.js'

If everything goes well default editor will be replaced with WYMeditor everywhere.


Caveats
-------

#. Pull requests have been submitted to mezzanine and filebrowser-safe to make 3rd party richtext editors in general and WYMeditor in particular work better with them, which means you'll either have to experiment with unstable unpackaged software or wait until new versions become public. You may also try using mezzanine-wymeditor with different versions but it's guaranteed to break in more than one place. Here are specific issues:

   * jQuery plugins (WYMeditor being one of them) break in Mezzanine admin, doesn't happen with inline editing though (fixed in Mezzanine 1.4.9). With earlier versions one can *probably* workaround it by monkey-patching ``mezzanine.generic.forms.KeywordsWidget`` and removing jQuery from Media inner class.
   * WYMeditor's utilities break after media library call (pull request submitted, but not yet accepted)
   * Mezzanine's default theme (and very likely custom ones too) goes haywire after media library call via inline editing (pull request submitted, but not yet accepted)

#. Packaged WYMeditor is version *1.0.0b4*, which means it's a beta. While I consider it to be good enough for everyday use, bugs are possible - please submit them to WYMeditor developers. WYMeditor distribution will be updated upon new releases.
#. There's a tiny modification to WYMeditor sources to make it detect static URL properly in Mezzanine admin so it's not completely vanilla. There are no other changes to the original source.
#. There are currently two image buttons on the toolbar. The default one lets you insert an image from arbitrary URL and modify some attributes of existing images. The custom one (with filebrowser icon, always at the end) opens up the media library and lets you choose an image from there, which is immediately inserted at the cursor position.
#. You may want to disable (or relax) Mezzanine's HTML filtering (``RICHTEXT_FILTER_LEVEL``) as WYMeditor has its own but it's entirely up to you.
#. There's currently no convenient "insert video" functionality but one can still embed iframes in raw HTML provided ``RICHTEXT_FILTER_LEVEL = 2``.

Copyright
---------

| mezzanine-wymeditor is released under the BSD License.
| Copyright © 2013 Artem Hluvchynsky <excieve@gmail.com>.
