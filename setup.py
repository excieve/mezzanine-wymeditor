from setuptools import setup


setup(
    name='mezzanine-wymeditor',
    version='0.2',
    author='Artem Hluvchynskyi',
    author_email='excieve@gmail.com',
    description='WYMeditor RichText widget for Mezzanine',
    license='BSD',
    keywords='mezzanine wymeditor',
    url='https://github.com/excieve/mezzanine-wymeditor',
    packages=['mezzanine_wymeditor'],
    include_package_data=True,
    zip_safe=False,
    long_description=open('README.rst').read(),
    classifiers=[
        'Development Status :: 4 - Beta',
        'Intended Audience :: Developers',
        'Topic :: Text Editors',
        'Topic :: Text Processing :: Markup :: HTML',
        'Topic :: Software Development :: Libraries :: Python Modules',
        'License :: OSI Approved :: BSD License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2',
        'Programming Language :: JavaScript',
        'Framework :: Django',
        'Environment :: Web Environment'
    ],
)
