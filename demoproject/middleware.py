import json
from django.utils.deprecation import MiddlewareMixin
from django.contrib.messages import get_messages

class HtmxMessageMiddleware(MiddlewareMixin):

    def process_response(self, request, response):

        response.headers["HX-Trigger"] = json.dumps({
            "messages": [
              {"message": message.message, "tags": message.tags}
              for message in get_messages(request)
            ]
        })

        return response