# Use the official Node.js image as the base image
FROM python:3.13-alpine 

WORKDIR /app

RUN apk add --no-cache postgresql-dev gcc musl-dev
# Copy root
COPY requirements.txt .
# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt


# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 4000

ENV DJANGO_SETTINGS_MODULE=efidu.settings

# RUN python manage.py makemigrations && python manage.py migrate

# Command to run the application in development mode
CMD ["python", "manage.py", "runserver", "0.0.0.0:4000"]