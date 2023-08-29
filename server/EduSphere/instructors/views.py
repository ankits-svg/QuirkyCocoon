from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Instructor
from .serializers import InstructorSerializer

@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def create_instructor_profile(request):
    if request.method == 'POST':
        serializer = InstructorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_instructor_profile(request, instructor_id):
    try:
        instructor = Instructor.objects.get(pk=instructor_id)
    except Instructor.DoesNotExist:
        return Response({'error': 'Instructor profile not found'}, status=404)

    serializer = InstructorSerializer(instructor)
    return Response(serializer.data)

@api_view(['PUT'])
# @permission_classes([IsAuthenticated])
def update_instructor_profile(request, instructor_id):
    try:
        instructor = Instructor.objects.get(pk=instructor_id)
    except Instructor.DoesNotExist:
        return Response({'error': 'Instructor profile not found'}, status=404)

    if request.method == 'PUT':
        serializer = InstructorSerializer(instructor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    else:
        return Response({'error': 'Method not allowed'}, status=405)

@api_view(['DELETE'])
# @permission_classes([IsAuthenticated])
def delete_instructor_profile(request, instructor_id):
    try:
        instructor = Instructor.objects.get(pk=instructor_id)
    except Instructor.DoesNotExist:
        return Response({'error': 'Instructor profile not found'}, status=404)

    if request.method == 'DELETE':
        instructor.delete()
        return Response(status=204)
