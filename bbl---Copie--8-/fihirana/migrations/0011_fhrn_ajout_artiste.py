# Generated by Django 4.2.10 on 2024-03-03 15:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("fihirana", "0010_alter_list_fihirana_ajout_titre"),
    ]

    operations = [
        migrations.AddField(
            model_name="fhrn_ajout",
            name="Artiste",
            field=models.CharField(default="", max_length=1000),
            preserve_default=False,
        ),
    ]
