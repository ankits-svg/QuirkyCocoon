from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .serializers import DepartmentSerializer
from .models import Department

@csrf_exempt
def departmentApi(request,id=0):
    if request.method=='GET':
        department = Department.objects.all()
        department_serializer=DepartmentSerializer(department,many=True)
        return JsonResponse(department_serializer.data,safe=False)
    

    elif request.method=='POST':
        department_data=JSONParser().parse(request)
        department_serializer=DepartmentSerializer(data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse(department_serializer.errors,safe=False)
    

    elif request.method=='PUT':
        department_data=JSONParser().parse(request)
        department=Department.objects.get(department_id=id)
        department_serializer=DepartmentSerializer(department,data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    
    
    elif request.method=='DELETE':
        department=Department.objects.get(department_id=id)
        department.delete()
        return JsonResponse("Deleted Successfully",safe=False)