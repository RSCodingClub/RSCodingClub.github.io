define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/bugreport",
    "title": "Submit a bug report",
    "version": "1.0.0",
    "name": "Submit",
    "group": "Bugreport",
    "description": "<p>Submit a bug report to bugreport database and github issues</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"crash\"",
              "\"ui\"",
              "\"login\"",
              "\"event\"",
              "\"other\""
            ],
            "optional": false,
            "field": "bugtype",
            "description": "<p>The type or category of bug</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "1..512",
            "optional": false,
            "field": "summary",
            "description": "<p>Title for the bug occuring</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "16..4096",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the bug</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "syslogs",
            "description": "<p>System logs at the time of the bug</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "applogs",
            "description": "<p>Application logs associated with the bug</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "submitter",
            "description": "<p>User ID of the submitter</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "closed",
            "description": "<p>Whether or not the issue has been handled</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summary",
            "description": "<p>Submitted title of the bugreport</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Submitted description of the bugreport</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bugtype",
            "description": "<p>Submitted type of the bugreport</p>"
          }
        ]
      }
    },
    "filename": "web/router/api/bugreport/v1/index.js",
    "groupTitle": "Bugreport",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Prefixed Google JWT token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authorization:",
          "content": "{\n  \"Authorization\": \"JWT WVYpCSuZiyxyr4j1ZUScxn7JjOjenlaEDPJmuNvgooXpgZyN8kDly6p5L23J\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "AuthError",
            "description": "<p>Unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response:",
          "content": "HTTP/1.1 401 Unauthorized\nUnauthorized",
          "type": "String"
        }
      ]
    }
  }
] });
