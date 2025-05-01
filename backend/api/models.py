from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    userID = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    birthDate = models.DateField()
    schoolYear = models.IntegerField()
    gender = models.CharField(max_length=1)
    
    class Meta:
        abstract = True

class Student(User):
        schoolYear = models.IntegerField()
        recommendations = models.CharField(max_length=1000, default="None")

class Teacher(User):
        accessCode = models.CharField(max_length=100)

class Class(models.Model):
    name = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    classID = models.CharField(max_length=100, unique=True)
    schoolYear = models.IntegerField()
    accessCode = models.CharField(max_length=8, unique=True)
    semester = models.IntegerField()