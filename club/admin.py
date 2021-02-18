from django.contrib import admin
from .models import club, table, event, foods_menu, drinks_menu, food, drink


class ClubAdmin(admin.ModelAdmin): 
  list_display = ('club_id', 'name', 'location','logo', 'is_open', 'description', 'licence_no', 'timestamp')

class TableAdmin(admin.ModelAdmin): 
  list_display = ('table_id', 'table_name', 'club', 'seats', 'taken')

class EventAdmin(admin.ModelAdmin): 
  list_display = ('event_id', 'title', 'photo', 'club', 'description', 'timestamp')

class FoodsMenuAdmin(admin.ModelAdmin): 
  list_display = ('foods_menu_id', 'title', 'club', 'timestamp')

class DrinksMenuAdmin(admin.ModelAdmin): 
  list_display = ('drinks_menu_id', 'title', 'club', 'timestamp')

class FoodAdmin(admin.ModelAdmin): 
  list_display = ('food_id', 'name', 'photo', 'menu', 'description', 'price', 'timestamp')

class DrinkAdmin(admin.ModelAdmin): 
  list_display = ('drink_id', 'name', 'photo', 'menu', 'description', 'price', 'timestamp')


# Register your models here.

admin.site.register(club, ClubAdmin)
admin.site.register(table, TableAdmin)
admin.site.register(event, EventAdmin)
admin.site.register(foods_menu, FoodsMenuAdmin)
admin.site.register(drinks_menu, DrinksMenuAdmin)
admin.site.register(food, FoodAdmin)
admin.site.register(drink, DrinkAdmin)