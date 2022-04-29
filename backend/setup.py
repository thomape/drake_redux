from gettext import install
from setuptools import setup

setup(
    name='drake_back',
    packages=['drake_back'],
    include_package_data=True,
    install_requires=[
        'flask',
    ]
)