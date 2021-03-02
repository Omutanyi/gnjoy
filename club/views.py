from django.shortcuts import render
from rest_framework import viewsets  
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import status
from .models import club, table, event, foods_menu, drinks_menu, food, drink
from .serializers import ClubSerializer, TableSerializer, EventSerializer, FoodsMenuSerializer, DrinksMenuSerializer, FoodSerializer, DrinkSerializer
# Create your views here.

class Club(APIView):    
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = club.objects.all()
        serializer = ClubSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ClubSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SearchClub(APIView):
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, **kwargs):
        queryset = club.objects.all()
        query = self.kwargs.get('search')
        print('the query is', query)
        result = queryset.filter(name__icontains=query)
        serializer = ClubSerializer(result, many=True)
        return Response(serializer.data)

class SingleClub(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return club.objects.get(pk=pk)
        except club.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        club = self.get_object(pk)
        serializer = ClubSerializer(club)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        club = self.get_object(pk)
        serializer = ClubSerializer(club, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        club = self.get_object(pk)
        club.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class Table(APIView):    
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = table.objects.all()
        serializer = TableSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TableSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SearchTable(APIView):
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, **kwargs):
        queryset = table.objects.all()
        query = self.kwargs.get('search')
        print('the query is', query)
        result = queryset.filter(club__club_id__icontains=query)
        serializer = TableSerializer(result, many=True)
        return Response(serializer.data)

class SingleTable(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return table.objects.get(pk=pk)
        except table.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        table = self.get_object(pk)
        serializer = TableSerializer(table)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        table = self.get_object(pk)
        serializer = TableSerializer(table, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        table = self.get_object(pk)
        table.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class Event(APIView):    
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = event.objects.all()
        serializer = EventSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SearchEvent(APIView):
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, **kwargs):
        queryset = event.objects.all()
        query = self.kwargs.get('search')
        print('the query is', query)
        result = queryset.filter(title__icontains=query)
        serializer = EventSerializer(result, many=True)
        return Response(serializer.data)

class SingleEvent(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return event.objects.get(pk=pk)
        except event.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        event = self.get_object(pk)
        serializer = EventSerializer(event)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        event = self.get_object(pk)
        serializer = EventSerializer(event, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        event = self.get_object(pk)
        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class FoodsMenu(APIView):    
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = foods_menu.objects.all()
        serializer = FoodsMenuSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = FoodsMenuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SingleFoodsMenu(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return foods_menu.objects.get(pk=pk)
        except foods_menu.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        foods_menu = self.get_object(pk)
        serializer = FoodsMenuSerializer(foods_menu)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        foods_menu = self.get_object(pk)
        serializer = FoodsMenuSerializer(foods_menu, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        foods_menu = self.get_object(pk)
        foods_menu.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class DrinksMenu(APIView):    
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = drinks_menu.objects.all()
        serializer = DrinksMenuSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = DrinksMenuSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SingleDrinksMenu(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return drinks_menu.objects.get(pk=pk)
        except drinks_menu.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        drinks_menu = self.get_object(pk)
        serializer = DrinksMenuSerializer(drinks_menu)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        drinks_menu = self.get_object(pk)
        serializer = DrinksMenuSerializer(drinks_menu, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        drinks_menu = self.get_object(pk)
        drinks_menu.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class Food(APIView):    
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = food.objects.all()
        serializer = FoodSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = FoodSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SingleFood(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return food.objects.get(pk=pk)
        except food.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        food = self.get_object(pk)
        serializer = FoodSerializer(food)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        food = self.get_object(pk)
        serializer = FoodSerializer(food, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        food = self.get_object(pk)
        food.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class Drink(APIView):    
    @classmethod
    def get_extra_actions(cls):
        return []

    def get(self, request, format=None):
        queryset = drink.objects.all()
        serializer = DrinkSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = DrinkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SingleDrink(APIView):

    @classmethod
    def get_extra_actions(cls):
        return []

    def get_object(self, pk):
        try:
            return drink.objects.get(pk=pk)
        except drink.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        drink = self.get_object(pk)
        serializer = DrinkSerializer(drink)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        drink = self.get_object(pk)
        serializer = DrinkSerializer(drink, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        drink = self.get_object(pk)
        drink.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
