from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Assignment
from .serializers import AssignmentSerializer

@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def create_assignment(request):
    if request.method == 'POST':
        serializer = AssignmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_assignment(request, assignment_id):
    try:
        assignment = Assignment.objects.get(pk=assignment_id)
    except Assignment.DoesNotExist:
        return Response({'error': 'Assignment not found'}, status=404)

    serializer = AssignmentSerializer(assignment)
    return Response(serializer.data)

@api_view(['PUT'])
# @permission_classes([IsAuthenticated])
def update_assignment(request, assignment_id):
    try:
        assignment = Assignment.objects.get(pk=assignment_id)
    except Assignment.DoesNotExist:
        return Response({'error': 'Assignment not found'}, status=404)

    if request.method == 'PUT':
        serializer = AssignmentSerializer(assignment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    else:
        return Response({'error': 'Method not allowed'}, status=405)

@api_view(['DELETE'])
# @permission_classes([IsAuthenticated])
def delete_assignment(request, assignment_id):
    try:
        assignment = Assignment.objects.get(pk=assignment_id)
    except Assignment.DoesNotExist:
        return Response({'error': 'Assignment not found'}, status=404)

    if request.method == 'DELETE':
        assignment.delete()
        return Response(status=204)
