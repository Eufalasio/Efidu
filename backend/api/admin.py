from django.contrib import admin
from .models import CustomUser, Student, Teacher, Class, Interests, Course, CourseInterestWeights
# Register your models here.

admin.site.register(Student)