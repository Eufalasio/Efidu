from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class CustomUser(models.Model):
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=100)
    userID = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    birthDate = models.DateField()
    gender = models.CharField(max_length=1)
    password = models.CharField(max_length=100, default=email)
    
    class Meta:
        abstract = True

class Interests(models.Model):
    interestID = models.CharField(max_length=100, unique=True)
    interest = models.CharField(max_length=100)

class Student(CustomUser):
    schoolYear = models.IntegerField()
    recommendations = models.CharField(max_length=1000, default="None")
    wifiAtHome = models.BooleanField(default=True)
    interests = models.ManyToManyField(Interests)

class Teacher(CustomUser):
        accessCode = models.CharField(max_length=100)

class Class(models.Model):
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, null=True)
    students = models.ManyToManyField(Student)
    name = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    classID = models.CharField(max_length=100, unique=True)
    schoolYear = models.IntegerField()
    accessCode = models.CharField(max_length=8, unique=True)
    semester = models.IntegerField()

class Course(models.Model):
    courseID = models.CharField(max_length=100, unique=True)
    interests = models.ManyToManyField(Interests, through='CourseInterestWeights')
    schoolYear = models.IntegerField()
    name = models.CharField(max_length=100)


class CourseInterestWeights(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    interest = models.ForeignKey(Interests, on_delete=models.CASCADE)
    weight = models.FloatField()

class StudyHabits(models.Model):
    students = models.OneToOneField(Student, on_delete=models.CASCADE, null=True)
    weeklyStudyHours = models.IntegerField()
    weeklyStudySessions = models.IntegerField()
    sessionLength = models.FloatField()
    contentType = models.JSONField(default=list) 

class Content(models.Model):
    contentID = models.CharField(max_length=100, unique=True)
    subject = models.CharField(max_length=100)
    publisherTeacher = models.ForeignKey(Teacher, on_delete=models.CASCADE, null=True) #publisher of the content
    length = models.FloatField() #length in minutes for videos, time expected to complete the content for other types
    timeSpent= models.FloatField()
    dateCreated = models.DateField(auto_now_add=True)
    dateModified = models.DateField(auto_now=True)

    class Meta:
        abstract = True


class Quizz(Content):
    contentType = models.CharField(max_length=100, default="Quizz")
    contentURL = models.URLField()
    contentDescription = models.TextField()
    questions = models.JSONField(default=list) #list of questions and answers
    correctAnswers = models.JSONField(default=list) #list of correct answers
    students = models.ManyToManyField(Student, through='QuizzInteractions')

class QuizzInteractions(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE, null=True)
    content = models.ForeignKey(Quizz, on_delete=models.SET_DEFAULT, null=True, default="Quizz")
    date = models.DateField(auto_now_add=True)
    score = models.FloatField()
    studentAnswers = models.JSONField(default=list) #list of student answers
    questionTimes = models.JSONField(default=list) #list of times spent on each question
    questionCertainty = models.JSONField(default=list) # 0~1 certainty for each question based no number of attempts (0 = 3+ attempts, 1 = 1 attempt)
    questionAttempts = models.JSONField(default=list) #number of attempts for each question
    
