# from rest_framework.decorators import api_view, permission_classes
# # from rest_framework.permissions import IsAuthenticated
# from rest_framework.response import Response

# from .models import Student
# from .serializers import StudentSerializer

# @api_view(['POST'])
# # @permission_classes([IsAuthenticated])
# def create_student_profile(request):
#     if request.method == 'POST':
#         serializer = StudentSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)

# @api_view(['GET'])
# # @permission_classes([IsAuthenticated])
# def get_student_profile(request, student_id):
#     try:
#         student = Student.objects.get(pk=student_id)
#     except Student.DoesNotExist:
#         return Response({'error': 'Student profile not found'}, status=404)

#     serializer = StudentSerializer(student)
#     return Response(serializer.data)

# @api_view(['GET'])
# # @permission_classes([IsAuthenticated])
# def get_all_student_profile(request):
#     try:
#         student = Student.objects.all()
#     except Student.DoesNotExist:
#         return Response({'error': 'Student profile not found'}, status=404)

#     serializer = StudentSerializer(student,many=True)
#     return Response(serializer.data)

# @api_view(['PUT'])
# # @permission_classes([IsAuthenticated])
# def update_student_profile(request, student_id):
#     try:
#         student = Student.objects.get(pk=student_id)
#     except Student.DoesNotExist:
#         return Response({'error': 'Student profile not found'}, status=404)

#     if request.method == 'PUT':
#         serializer = StudentSerializer(student, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=400)
#     else:
#         return Response({'error': 'Method not allowed'}, status=405)
# @api_view(['DELETE'])
# # @permission_classes([IsAuthenticated])
# def delete_student_profile(request, student_id):
#     try:
#         student = Student.objects.get(pk=student_id)
#     except Student.DoesNotExist:
#         return Response({'error': 'Student profile not found'}, status=404)

#     if request.method == 'DELETE':
#         student.delete()
#         return Response(status=204)
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .serializers import StudentSerializer
from .models import Student

@csrf_exempt
def studentApi(request,id=0):
    if request.method=='GET':
        student = Student.objects.all()
        student_serializer=StudentSerializer(student,many=True)
        return JsonResponse(student_serializer.data,safe=False)
    

    elif request.method=='POST':
        student_data=JSONParser().parse(request)
        student_serializer=StudentSerializer(data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse(student_serializer.errors,safe=False)
    

    elif request.method=='PUT':
        student_data=JSONParser().parse(request)
        student=Student.objects.get(student_id=id)
        student_serializer=StudentSerializer(student,data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    
    
    elif request.method=='DELETE':
        student=Student.objects.get(student_id=id)
        student.delete()
        return JsonResponse("Deleted Successfully",safe=False)