# Generated by Django 2.2 on 2019-04-04 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('referrals', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='referral',
            name='click_count',
            field=models.IntegerField(default=0),
        ),
    ]