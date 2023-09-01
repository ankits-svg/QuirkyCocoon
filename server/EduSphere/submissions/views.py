# from rest_framework.decorators import api_view, permission_classes
# # from rest_framework.permissions import IsAuthenticated
# from rest_framework.response import Response

# from .models import Submission
# from .serializers import SubmissionSerializer

# @api_view(['POST'])
# # @permission_classes([IsAuthenticated])
# def create_submission(request):
#     if request.method == 'POST':
#         serializer = SubmissionSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=201)
#         return Response(serializer.errors, status=400)

# @api_view(['GET'])
# # @permission_classes([IsAuthenticated])
# def get_submission(request, submission_id):
#     try:
#         submission = Submission.objects.get(pk=submission_id)
#     except Submission.DoesNotExist:
#         return Response({'error': 'Submission not found'}, status=404)

#     serializer = SubmissionSerializer(submission)
#     return Response(serializer.data)

# @api_view(['PUT'])
# # @permission_classes([IsAuthenticated])
# def update_submission(request, submission_id):
#     try:
#         submission = Submission.objects.get(pk=submission_id)
#     except Submission.DoesNotExist:
#         return Response({'error': 'Submission not found'}, status=404)

#     if request.method == 'PUT':
#         serializer = SubmissionSerializer(submission, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status=400)
#     else:
#         return Response({'error': 'Method not allowed'}, status=405)

# @api_view(['DELETE'])
# # @permission_classes([IsAuthenticated])
# def delete_submission(request, submission_id):
#     try:
#         submission = Submission.objects.get(pk=submission_id)
#     except Submission.DoesNotExist:
#         return Response({'error': 'Submission not found'}, status=404)

#     if request.method == 'DELETE':
#         submission.delete()
#         return Response(status=204)
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .models import Submission
from .serializers import SubmissionSerializer

@csrf_exempt
def submissionApi(request,id=0):
    if request.method=='GET':
        submission = Submission.objects.all()
        submission_serializer=SubmissionSerializer(submission,many=True)
        return JsonResponse(submission_serializer.data,safe=False)
    

    elif request.method=='POST':
        submission_data=JSONParser().parse(request)
        submission_serializer=SubmissionSerializer(data=submission_data)
        if submission_serializer.is_valid():
            submission_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse(submission_serializer.errors,safe=False)
    

    elif request.method=='PUT':
        submission_data=JSONParser().parse(request)
        submission=Submission.objects.get(submission_id=id)
        submission_serializer=SubmissionSerializer(submission,data=submission_data)
        if submission_serializer.is_valid():
            submission_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Failed to Update")
    
    
    elif request.method=='DELETE':
        submission=Submission.objects.get(submission_id=id)
        submission.delete()
        return JsonResponse("Deleted Successfully",safe=False)