from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests


@api_view()
def pub_search(request):
    query = request.GET.get('query', None)
    page = request.GET.get('page', None)
    gtr_url = "http://gtr-api.herokuapp.com/search/" + query + "?page=" + page
    response = requests.get(gtr_url)
    return Response(data=response.json())
