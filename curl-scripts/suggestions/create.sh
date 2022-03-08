#!/bin/bash

API="http://localhost:4741"
URL_PATH="/suggestions"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "suggestion": {
      "title": "'"${TITLE}"'",
      "description": "'"${TEXT}"'",
    }
  }'

echo
