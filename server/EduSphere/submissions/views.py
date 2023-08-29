from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Submission
from .serializers import SubmissionSerializer

@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def create_submission(request):
    if request.method == 'POST':
        serializer = SubmissionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_submission(request, submission_id):
    try:
        submission = Submission.objects.get(pk=submission_id)
    except Submission.DoesNotExist:
        return Response({'error': 'Submission not found'}, status=404)

    serializer = SubmissionSerializer(submission)
    return Response(serializer.data)

@api_view(['PUT'])
# @permission_classes([IsAuthenticated])
def update_submission(request, submission_id):
    try:
        submission = Submission.objects.get(pk=submission_id)
    except Submission.DoesNotExist:
        return Response({'error': 'Submission not found'}, status=404)

    if request.method == 'PUT':
        serializer = SubmissionSerializer(submission, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    else:
        return Response({'error': 'Method not allowed'}, status=405)

@api_view(['DELETE'])
# @permission_classes([IsAuthenticated])
def delete_submission(request, submission_id):
    try:
        submission = Submission.objects.get(pk=submission_id)
    except Submission.DoesNotExist:
        return Response({'error': 'Submission not found'}, status=404)

    if request.method == 'DELETE':
        submission.delete()
        return Response(status=204)
