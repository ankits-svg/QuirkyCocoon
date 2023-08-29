from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Announcement
from .serializers import AnnouncementSerializer

@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def create_announcement(request):
    if request.method == 'POST':
        serializer = AnnouncementSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_announcement(request, announcement_id):
    try:
        announcement = Announcement.objects.get(pk=announcement_id)
    except Announcement.DoesNotExist:
        return Response({'error': 'Announcement not found'}, status=404)

    serializer = AnnouncementSerializer(announcement)
    return Response(serializer.data)

@api_view(['PUT'])
# @permission_classes([IsAuthenticated])
def update_announcement(request, announcement_id):
    try:
        announcement = Announcement.objects.get(pk=announcement_id)
    except Announcement.DoesNotExist:
        return Response({'error': 'Announcement not found'}, status=404)

    if request.method == 'PUT':
        serializer = AnnouncementSerializer(announcement, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    else:
        return Response({'error': 'Method not allowed'}, status=405)

@api_view(['DELETE'])
# @permission_classes([IsAuthenticated])
def delete_announcement(request, announcement_id):
    try:
        announcement = Announcement.objects.get(pk=announcement_id)
    except Announcement.DoesNotExist:
        return Response({'error': 'Announcement not found'}, status=404)

    if request.method == 'DELETE':
        announcement.delete()
        return Response(status=204)
