# Use the official Node.js image as the base image
FROM python:3.13-alpine 

# Copy root
COPY requirements.txt ./

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt \ python manage.py makemigrations \ python manage.py migrate

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Command to run the application in development mode
CMD ["python", "manage.py", "runserver"]