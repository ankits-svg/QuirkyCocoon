from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .serializers import AssignmentSerializer
from .models import Assignment

@csrf_exempt
def assignmentApi(request,id=0):
    if request.method=='GET':
        assignment = Assignment.objects.all()
        assignment_serializer=AssignmentSerializer(assignment,many=True)
        return JsonResponse(assignment_serializer.data,safe=False)
    

    elif request.method=='POST':
        assignment_data=JSONParser().parse(request)
        assignment_serializer=AssignmentSerializer(data=assignment_data)
        if assignment_serializer.is_valid():
            course_id = assignment_data.get('course_id')
            assignment_data['course'] = course_id
            assignment_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse(assignment_serializer.errors,safe=False)
    

    elif request.method=='PUT':
        assignment_data=JSONParser().parse(request)
        assignment=Assignment.objects.get(assignment_id=id)
        assignment_serializer=AssignmentSerializer(assignment,data=assignment_data)
        if assignment_serializer.is_valid():
            assignment_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    
    
    elif request.method=='DELETE':
        assignment=Assignment.objects.get(assignment_id=id)
        assignment.delete()
        return JsonResponse("Deleted Successfully",safe=False)