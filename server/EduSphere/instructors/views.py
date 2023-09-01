from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .serializers import InstructorSerializer
from .models import Instructor

@csrf_exempt
def instructorApi(request,id=0):
    if request.method=='GET':
        instructor = Instructor.objects.all()
        instructor_serializer=InstructorSerializer(instructor,many=True)
        return JsonResponse(instructor_serializer.data,safe=False)
    

    elif request.method=='POST':
        instructor_data=JSONParser().parse(request)
        instructor_serializer=InstructorSerializer(data=instructor_data)
        if instructor_serializer.is_valid():
            instructor_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse(instructor_serializer.errors,safe=False)
    

    elif request.method=='PUT':
        instructor_data=JSONParser().parse(request)
        instructor=Instructor.objects.get(instructor_id=id)
        instructor_serializer=InstructorSerializer(instructor,data=instructor_data)
        if instructor_serializer.is_valid():
            instructor_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    
    
    elif request.method=='DELETE':
        instructor=Instructor.objects.get(instructor_id=id)
        instructor.delete()
        return JsonResponse("Deleted Successfully",safe=False)