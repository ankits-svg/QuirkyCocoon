from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Department
from .serializers import DepartmentSerializer

@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def create_department(request):
    if request.method == 'POST':
        serializer = DepartmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_department(request, department_id):
    try:
        department = Department.objects.get(pk=department_id)
    except Department.DoesNotExist:
        return Response({'error': 'Department not found'}, status=404)

    serializer = DepartmentSerializer(department)
    return Response(serializer.data)

@api_view(['PUT'])
# @permission_classes([IsAuthenticated])
def update_department(request, department_id):
    try:
        department = Department.objects.get(pk=department_id)
    except Department.DoesNotExist:
        return Response({'error': 'Department not found'}, status=404)

    if request.method == 'PUT':
        serializer = DepartmentSerializer(department, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    else:
        return Response({'error': 'Method not allowed'}, status=405)

@api_view(['DELETE'])
# @permission_classes([IsAuthenticated])
def delete_department(request, department_id):
    try:
        department = Department.objects.get(pk=department_id)
    except Department.DoesNotExist:
        return Response({'error': 'Department not found'}, status=404)

    if request.method == 'DELETE':
        department.delete()
        return Response(status=204)
