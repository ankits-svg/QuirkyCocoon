from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .serializers import EnrollmentSerializer
from .models import Enrollment

@csrf_exempt
def enrollmentApi(request,id=0):
    if request.method=='GET':
        enrollment = Enrollment.objects.all()
        enrollment_serializer=EnrollmentSerializer(enrollment,many=True)
        return JsonResponse(enrollment_serializer.data,safe=False)
    

    elif request.method=='POST':
        enrollment_data=JSONParser().parse(request)
        enrollment_serializer=EnrollmentSerializer(data=enrollment_data)
        if enrollment_serializer.is_valid():
            enrollment_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse(enrollment_serializer.errors,safe=False)
    

    elif request.method=='PUT':
        enrollment_data=JSONParser().parse(request)
        enrollment=Enrollment.objects.get(enrollment_id=id)
        enrollment_serializer=EnrollmentSerializer(enrollment,data=enrollment_data)
        if enrollment_serializer.is_valid():
            enrollment_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    
    
    elif request.method=='DELETE':
        enrollment=Enrollment.objects.get(enrollment_id=id)
        enrollment.delete()
        return JsonResponse("Deleted Successfully",safe=False)