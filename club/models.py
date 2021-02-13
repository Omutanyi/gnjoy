from django.db import models

# Create your models here.

class club(models.Model):
    club_id = models.AutoField(primary_key = True)
    name = models.CharField(max_length=100, null=True)
    location = models.CharField(max_length=100, null=True)
    description = models.TextField(default = 'The club description goes here')
    licence_no = models.CharField(max_length=100, null=True)
    timestamp = models.DateTimeField(auto_now_add=True, null=True)
    
    def __int__(self):
        return self.club_id

class table(models.Model):
    table_id = models.AutoField(primary_key = True)
    table_name = models.CharField(max_length=10, null=True)
    club = models.ForeignKey(club, on_delete = models.CASCADE, null=True)
    seats = models.IntegerField(null=True)
    taken = models.BooleanField(default=False)

    def __int__(self):
        return self.table_id

class event(models.Model):
    event_id = models.AutoField(primary_key = True)
    title = models.CharField(max_length=20, null=True)
    photo = models.ImageField(upload_to ='uploads/% Y/% m/% d/', blank=True, null=True)
    club = models.ForeignKey(club, on_delete = models.CASCADE, null=True)
    description = models.TextField(default = 'The event description goes here')
    timestamp = models.DateTimeField(auto_now_add=True, null=True)

    def __int__(self):
        return self.table_id

class foods_menu(models.Model):
    foods_menu_id = models.AutoField(primary_key = True)
    title = models.CharField(max_length=20, null=True)
    club = models.ForeignKey(club, on_delete = models.CASCADE, null=True)
    timestamp = models.DateTimeField(auto_now_add=True, null=True)

    def __int__(self):
        return self.foods_menu_id

class drinks_menu(models.Model):
    drinks_menu_id = models.AutoField(primary_key = True)
    title = models.CharField(max_length=20, null=True)
    club = models.ForeignKey(club, on_delete = models.CASCADE, null=True)
    timestamp = models.DateTimeField(auto_now_add=True, null=True)

    def __int__(self):
        return self.drinks_menu_id

class food(models.Model):
    food_id = models.AutoField(primary_key = True)
    name = models.CharField(max_length=20, null=True)
    photo = models.ImageField(upload_to ='uploads/% Y/% m/% d/', blank=True, null=True)
    description = models.TextField(default = 'The food description goes here')
    menu = models.ForeignKey(foods_menu, on_delete = models.CASCADE, null=True)
    price = models.IntegerField(null=True)
    timestamp = models.DateTimeField(auto_now_add=True, null=True)

    def __int__(self):
        return self.food_id

class drink(models.Model):
    drink_id = models.AutoField(primary_key = True)
    name = models.CharField(max_length=20, null=True)
    photo = models.ImageField(upload_to ='uploads/% Y/% m/% d/', blank=True, null=True)
    description = models.TextField(default = 'The food description goes here')
    menu = models.ForeignKey(drinks_menu, on_delete = models.CASCADE, null=True)
    price = models.IntegerField(null=True)
    timestamp = models.DateTimeField(auto_now_add=True, null=True)

    def __int__(self):
        return self.drink_id