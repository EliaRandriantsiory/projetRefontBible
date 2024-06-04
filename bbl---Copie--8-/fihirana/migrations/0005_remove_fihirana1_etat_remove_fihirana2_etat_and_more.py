# Generated by Django 4.2.7 on 2023-11-14 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("fihirana", "0004_remove_list_fihirana1_etat"),
    ]

    operations = [
        migrations.RemoveField(model_name="fihirana1", name="etat",),
        migrations.RemoveField(model_name="fihirana2", name="etat",),
        migrations.AddField(
            model_name="list_fihirana1",
            name="etat",
            field=models.BooleanField(default=False),
        ),
    ]
