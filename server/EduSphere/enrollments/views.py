from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Enrollment
from .serializers import EnrollmentSerializer

@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def enroll_student_in_course(request):
    if request.method == 'POST':
        serializer = EnrollmentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_student_enrollments(request, student_id):
    enrollments = Enrollment.objects.filter(student_id=student_id)
    serializer = EnrollmentSerializer(enrollments, many=True)
    return Response(serializer.data)
