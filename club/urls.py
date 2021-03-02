from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from club import views

urlpatterns = [
    path('', views.Club.as_view()),
    path('<int:pk>/', views.SingleClub.as_view()),
    path(r'searchclub/<str:search>', views.SearchClub.as_view()),
    path(r'table/', views.Table.as_view()),
    path(r'searchtable/<str:search>', views.SearchTable.as_view()),
    path(r'singletable/<int:pk>/', views.SingleTable.as_view()),
    path(r'event/', views.Event.as_view()),
    path(r'searchevent/<str:search>', views.SearchEvent.as_view()),
    path(r'singleevent/<int:pk>/', views.SingleEvent.as_view()),
    path(r'foodsmenu/', views.FoodsMenu.as_view()),
    path(r'searchfoodsmenu/<str:search>', views.SearchFoodsMenu.as_view()),
    path(r'singlefoodsmenu/<int:pk>/', views.SingleFoodsMenu.as_view()),
    path(r'drinksmenu/', views.DrinksMenu.as_view()),
    path(r'searchdrinksmenu/<str:search>', views.SearchDrinksMenu.as_view()),
    path(r'singledrinksmenu/<int:pk>/', views.SingleDrinksMenu.as_view()),
    path(r'food/', views.Food.as_view()),
    path(r'singlefood/<int:pk>/', views.SingleFood.as_view()),
    path(r'drink/', views.Drink.as_view()),
    path(r'singledrink/<int:pk>/', views.SingleDrink.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)