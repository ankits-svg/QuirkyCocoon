from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .serializers import AnnouncementSerializer
from .models import Announcement

@csrf_exempt
def announcementApi(request,id=0):
    if request.method=='GET':
        announce = Announcement.objects.all()
        announce_serializer=AnnouncementSerializer(announce,many=True)
        return JsonResponse(announce_serializer.data,safe=False)
    

    elif request.method=='POST':
        announce_data=JSONParser().parse(request)
        announce_serializer=AnnouncementSerializer(data=announce_data)
        if announce_serializer.is_valid():
            announce_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse(announce_serializer.errors,safe=False)
    

    elif request.method=='PUT':
        announce_data=JSONParser().parse(request)
        announce=Announcement.objects.get(announcement_id=id)
        announce_serializer=AnnouncementSerializer(announce,data=announce_data)
        if announce_serializer.is_valid():
            announce_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    
    
    elif request.method=='DELETE':
        announce=Announcement.objects.get(announcement_id=id)
        announce.delete()
        return JsonResponse("Deleted Successfully",safe=False)