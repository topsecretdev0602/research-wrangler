from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests


@api_view()
def pub_search(request):
    query = request.GET.get('query', None)
    gtr_url = "http://gtr-api.herokuapp.com/search/" + query
    response = requests.get(gtr_url)
    # upw_url = "https://unpaywall.org/"
    # doi = ""
    # email = request.GET.get('email', None)
    # upw_url += doi+ "?email=" + email
    # response = requests.get(upw_url)
    return Response(data=response.json())
