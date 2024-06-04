from django.db import models
from django.contrib.auth.models import AbstractUser

class Role_user(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class User(AbstractUser):
    # ... autres champs du modèle User ...
    role = models.ForeignKey(Role_user, on_delete=models.CASCADE, null=True, blank=True)
    # Modifier les champs groups et user_permissions
    groups = models.ManyToManyField(
        'auth.Group',
        verbose_name='groups',
        blank=True,
        related_name='custom_user_set',  # Ajouter related_name
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        verbose_name='user permissions',
        blank=True,
        related_name='custom_user_set',  # Ajouter related_name
    )