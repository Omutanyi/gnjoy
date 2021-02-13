from rest_framework import serializers
from .models import club, table, event, foods_menu, drinks_menu, food, drink

class ClubSerializer(serializers.ModelSerializer):
  class Meta:
    model = club
    fields = ('club_id', 'name', 'location', 'description', 'licence_no', 'timestamp')

class TableSerializer(serializers.ModelSerializer):
  class Meta:
    model = table
    fields = ('table_id', 'table_name', 'club', 'seats', 'taken')

class EventSerializer(serializers.ModelSerializer):
  class Meta:
    model = event
    fields = ('event_id', 'title', 'photo', 'club', 'description', 'timestamp')

class FoodsMenuSerializer(serializers.ModelSerializer):
  class Meta:
    model = foods_menu
    fields = ('foods_menu_id', 'title', 'club', 'timestamp')

class DrinksMenuSerializer(serializers.ModelSerializer):
  class Meta:
    model = drinks_menu
    fields = ('drinks_menu_id', 'title', 'club', 'timestamp')

class FoodSerializer(serializers.ModelSerializer):
  class Meta:
    model = food
    fields = ('food_id', 'name', 'photo', 'menu', 'description', 'price', 'timestamp')

class DrinkSerializer(serializers.ModelSerializer):
  class Meta:
    model = drink
    fields = ('drink_id', 'name', 'photo', 'menu', 'description', 'price', 'timestamp')