WYMeditor for Mezzanine
=======================

This is `WYMeditor <http://wymeditor.github.io/wymeditor/>`_ adapted as richtext widget for `Mezzanine CMS <http://mezzanine.jupo.org/>`_. It includes basic WYMeditor distribution along with custom image button for use with `filebrowser-safe <https://github.com/stephenmcd/filebrowser-safe>`_.

Screenshots
-----------

WYMeditor widget in Mezzanine admin:

   .. image:: http://excieve.github.com/mezzanine-wymeditor/img/mezzanine_wymeditor_admin.jpg

With a media library popup:

   .. image:: http://excieve.github.com/mezzanine-wymeditor/img/mezzanine_wymeditor_gallery.jpg

With inline editing:

   .. image:: http://excieve.github.com/mezzanine-wymeditor/img/mezzanine_wymeditor_inline.jpg

Installation
------------

To install mezzanine-wymeditor first make sure you meet the requirements.

   .. warning::

     It **requires** at least Mezzanine 1.4.9 and filebrowser-safe 0.2.28 to work correctly.

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

#. Packaged WYMeditor is version *1.0.0b7*, which means it's a beta. While I consider it to be good enough for everyday use, bugs are possible - please submit them to WYMeditor developers. WYMeditor distribution will be updated upon new releases.
#. There's a tiny modification to WYMeditor sources to make it detect static URL properly in Mezzanine admin so it's not completely vanilla. There are no other changes to the original source.
#. There are currently two image buttons on the toolbar. The default one lets you insert an image from arbitrary URL and modify some attributes of existing images. The custom one (with filebrowser icon, always at the end) opens up the media library and lets you choose an image from there, which is immediately inserted at the cursor position.
#. You may want to disable (or relax) Mezzanine's HTML filtering (``RICHTEXT_FILTER_LEVEL``) as WYMeditor has its own but it's entirely up to you.
#. There's currently no convenient "insert video" functionality but one can still embed iframes in raw HTML provided ``RICHTEXT_FILTER_LEVEL = 2``.

Copyright
---------

| mezzanine-wymeditor is released under the BSD License.
| Copyright © 2013 Artem Hluvchynsky <excieve@gmail.com>.
