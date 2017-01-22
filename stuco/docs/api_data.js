define({ "api": [
  {
    "type": "get",
    "url": "/api/badge/v1/:badgeid",
    "title": "Get a specific badge",
    "version": "1.0.0",
    "name": "GetBadge",
    "group": "Badges",
    "description": "<p>Returns the details on a single badge</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "badge",
            "description": "<p>List of badge</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "badge.bid",
            "description": "<p>The badge's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "badge.name",
            "description": "<p>The name of the badge</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "badge.desc",
            "description": "<p>The description of the badge</p>"
          },
          {
            "group": "Success 200",
            "type": "Strng",
            "optional": false,
            "field": "badge.earn",
            "description": "<p>How the badge is earned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "badge.reward",
            "description": "<p>How many points earning the badge will reward</p>"
          }
        ]
      }
    },
    "filename": "web/router/api/badge/v1/index.js",
    "groupTitle": "Badges",
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
          "title": "Authorization",
          "content": "{\n  \"Authorization\": \"JWT WVYpCSuZiyx.yr4j1ZUScxn7JjOjenlaEDPJmuNvgooXpgZyN.8kDly6p5L23J\"\n}",
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
            "description": "<p>User was unable to be authenticated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authentication Error",
          "content": "HTTP/1.1 401 Unauthorized\nUnauthorized",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/badge/v1/",
    "title": "Get a list of badges",
    "version": "1.0.0",
    "name": "GetBadges",
    "group": "Badges",
    "description": "<p>Returns an array of all badges</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "badges",
            "description": "<p>List of badges</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "badges.bid",
            "description": "<p>The badge's id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "badges.name",
            "description": "<p>The name of the badge</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "badges.desc",
            "description": "<p>The description of the badge</p>"
          },
          {
            "group": "Success 200",
            "type": "Strng",
            "optional": false,
            "field": "badges.earn",
            "description": "<p>How the badge is earned</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "badges.reward",
            "description": "<p>How many points earning the badge will reward</p>"
          }
        ]
      }
    },
    "filename": "web/router/api/badge/v1/index.js",
    "groupTitle": "Badges",
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
          "title": "Authorization",
          "content": "{\n  \"Authorization\": \"JWT WVYpCSuZiyx.yr4j1ZUScxn7JjOjenlaEDPJmuNvgooXpgZyN.8kDly6p5L23J\"\n}",
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
            "description": "<p>User was unable to be authenticated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authentication Error",
          "content": "HTTP/1.1 401 Unauthorized\nUnauthorized",
          "type": "String"
        }
      ]
    }
  },
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
          "title": "Authorization",
          "content": "{\n  \"Authorization\": \"JWT WVYpCSuZiyx.yr4j1ZUScxn7JjOjenlaEDPJmuNvgooXpgZyN.8kDly6p5L23J\"\n}",
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
            "description": "<p>User was unable to be authenticated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authentication Error",
          "content": "HTTP/1.1 401 Unauthorized\nUnauthorized",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/user/v1/:googleid/score/all",
    "title": "Get all scores",
    "version": "1.0.0",
    "name": "GetAllScores",
    "group": "User",
    "description": "<p>Returns the all scores for the requested user</p>",
    "permission": [
      {
        "name": "teacher",
        "title": "teacher",
        "description": "<p>Teacher role for micromanaging the public side of the application</p>"
      },
      {
        "name": "stuco",
        "title": "stuco",
        "description": "<p>Student council role allowing managing for maintaining the public side of the application</p>"
      },
      {
        "name": "developer",
        "title": "developer",
        "description": "<p>Developer role with features any feature needed to modify or continue progress on the public or private application</p>"
      },
      {
        "name": "admin",
        "title": "admin",
        "description": "<p>Admin role with any permissions required for running the application</p>"
      },
      {
        "name": "self",
        "title": "self",
        "description": "<p>Assumed role if authenticated user and target user are the same, used for managing account</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "scores",
            "description": "<p>The user's scores</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "scores.bid",
            "description": "<p>A score's associated badge</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "scores.eid",
            "description": "<p>A score's associated event</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "scores.timestamp",
            "description": "<p>The time the score was awarded</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "scores.value",
            "description": "<p>The number of points the score gave</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "scores.type",
            "defaultValue": "unknown",
            "description": "<p>The type of score added</p>"
          }
        ]
      }
    },
    "filename": "web/router/api/user/v1/score.js",
    "groupTitle": "User",
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
          "title": "Authorization",
          "content": "{\n  \"Authorization\": \"JWT WVYpCSuZiyx.yr4j1ZUScxn7JjOjenlaEDPJmuNvgooXpgZyN.8kDly6p5L23J\"\n}",
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
            "description": "<p>User was unable to be authenticated</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The requested user was unable to be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authentication Error",
          "content": "HTTP/1.1 401 Unauthorized\nUnauthorized",
          "type": "String"
        },
        {
          "title": "User Not Found Error",
          "content": "{\n  \"error\": \"User Not Found\",\n  \"errorid\": 0\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "googleid",
            "description": "<p>A user's Google profile's unique identifier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GoogleId Example",
          "content": "\"108718953214804737014\"",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/user/v1/:googleid/details",
    "title": "Get details on specified user",
    "version": "1.0.0",
    "name": "GetDetailedUser",
    "group": "User",
    "description": "<p>Returns the details profile of the requested user</p>",
    "permission": [
      {
        "name": "teacher",
        "title": "teacher",
        "description": "<p>Teacher role for micromanaging the public side of the application</p>"
      },
      {
        "name": "stuco",
        "title": "stuco",
        "description": "<p>Student council role allowing managing for maintaining the public side of the application</p>"
      },
      {
        "name": "developer",
        "title": "developer",
        "description": "<p>Developer role with features any feature needed to modify or continue progress on the public or private application</p>"
      },
      {
        "name": "admin",
        "title": "admin",
        "description": "<p>Admin role with any permissions required for running the application</p>"
      },
      {
        "name": "self",
        "title": "self",
        "description": "<p>Assumed role if authenticated user and target user are the same, used for managing account</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user's detailed profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.uid",
            "description": "<p>The user's unique id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>The user's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.nickname",
            "description": "<p>The user's nickname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>The user's email</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user.scores",
            "description": "<p>The user's scores</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.scores.bid",
            "description": "<p>A score's associated badge</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.scores.eid",
            "description": "<p>A score's associated event</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.scores.timestamp",
            "description": "<p>The time the score was awarded</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.scores.value",
            "description": "<p>The number of points the score gave</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "user.badges",
            "description": "<p>List of badge ids the user has</p>"
          },
          {
            "group": "Success 200",
            "type": "Strine",
            "optional": false,
            "field": "user.role",
            "description": "<p>The users current permission role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.apikey",
            "description": "<p>The user's API key</p>"
          }
        ]
      }
    },
    "filename": "web/router/api/user/v1/user.js",
    "groupTitle": "User",
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
          "title": "Authorization",
          "content": "{\n  \"Authorization\": \"JWT WVYpCSuZiyx.yr4j1ZUScxn7JjOjenlaEDPJmuNvgooXpgZyN.8kDly6p5L23J\"\n}",
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
            "description": "<p>User was unable to be authenticated</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The requested user was unable to be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authentication Error",
          "content": "HTTP/1.1 401 Unauthorized\nUnauthorized",
          "type": "String"
        },
        {
          "title": "User Not Found Error",
          "content": "{\n  \"error\": \"User Not Found\",\n  \"errorid\": 0\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "googleid",
            "description": "<p>A user's Google profile's unique identifier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GoogleId Example",
          "content": "\"108718953214804737014\"",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/user/v1/:googleid/all",
    "title": "Get all information on specified user",
    "version": "1.0.0",
    "name": "GetFullUser",
    "group": "User",
    "description": "<p>Returns the full profile of the requested user</p>",
    "permission": [
      {
        "name": "developer",
        "title": "developer",
        "description": "<p>Developer role with features any feature needed to modify or continue progress on the public or private application</p>"
      },
      {
        "name": "admin",
        "title": "admin",
        "description": "<p>Admin role with any permissions required for running the application</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user's full profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>The user's database unique id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.uid",
            "description": "<p>The user's unique id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.email",
            "description": "<p>The user's email</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.__v",
            "description": "<p>The user's version indicator</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.lastlogin",
            "description": "<p>The last time the user successfully authenticated</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "user.created",
            "description": "<p>When the user first authenticated</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.apikey",
            "description": "<p>The user's API key</p>"
          },
          {
            "group": "Success 200",
            "type": "Strine",
            "optional": false,
            "field": "user.role",
            "description": "<p>The users current permission role</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "user.badges",
            "description": "<p>List of badge ids the user has</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user.scores",
            "description": "<p>The user's scores</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.scores.bid",
            "description": "<p>A score's associated badge</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.scores.eid",
            "description": "<p>A score's associated event</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.scores.timestamp",
            "description": "<p>The time the score was awarded</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.scores.value",
            "description": "<p>The number of points the score gave</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.nickname",
            "description": "<p>The user's nickname</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>The user's name</p>"
          }
        ]
      }
    },
    "filename": "web/router/api/user/v1/user.js",
    "groupTitle": "User",
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
          "title": "Authorization",
          "content": "{\n  \"Authorization\": \"JWT WVYpCSuZiyx.yr4j1ZUScxn7JjOjenlaEDPJmuNvgooXpgZyN.8kDly6p5L23J\"\n}",
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
            "description": "<p>User was unable to be authenticated</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The requested user was unable to be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authentication Error",
          "content": "HTTP/1.1 401 Unauthorized\nUnauthorized",
          "type": "String"
        },
        {
          "title": "User Not Found Error",
          "content": "{\n  \"error\": \"User Not Found\",\n  \"errorid\": 0\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "googleid",
            "description": "<p>A user's Google profile's unique identifier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GoogleId Example",
          "content": "\"108718953214804737014\"",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/user/v1/leaderboard",
    "title": "Get the leaderboard",
    "version": "1.0.0",
    "name": "GetLeaderboard",
    "group": "User",
    "description": "<p>Returns an array of the public profile in order of score</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "user",
            "description": "<p>The user's public profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.uid",
            "description": "<p>The user's unique id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>The user's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.nickname",
            "description": "<p>The user's nickname</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.score",
            "description": "<p>The user's total score</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "user.badges",
            "description": "<p>List of badge ids the user has</p>"
          },
          {
            "group": "Success 200",
            "type": "Strine",
            "optional": false,
            "field": "user.role",
            "description": "<p>The users current permission role</p>"
          }
        ]
      }
    },
    "filename": "web/router/api/user/v1/index.js",
    "groupTitle": "User",
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
          "title": "Authorization",
          "content": "{\n  \"Authorization\": \"JWT WVYpCSuZiyx.yr4j1ZUScxn7JjOjenlaEDPJmuNvgooXpgZyN.8kDly6p5L23J\"\n}",
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
            "description": "<p>User was unable to be authenticated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authentication Error",
          "content": "HTTP/1.1 401 Unauthorized\nUnauthorized",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/user/v1/:googleid/nickname",
    "title": "Get a user's nickname",
    "version": "1.0.0",
    "name": "GetName",
    "group": "User",
    "description": "<p>Returns the nickname of the target user</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The user's nickname</p>"
          }
        ]
      }
    },
    "filename": "web/router/api/user/v1/nickname.js",
    "groupTitle": "User",
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
          "title": "Authorization",
          "content": "{\n  \"Authorization\": \"JWT WVYpCSuZiyx.yr4j1ZUScxn7JjOjenlaEDPJmuNvgooXpgZyN.8kDly6p5L23J\"\n}",
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
            "description": "<p>User was unable to be authenticated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authentication Error",
          "content": "HTTP/1.1 401 Unauthorized\nUnauthorized",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/user/v1/:googleid/name",
    "title": "Get a user's name",
    "version": "1.0.0",
    "name": "GetName",
    "group": "User",
    "description": "<p>Returns the name of the target user</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The user's name</p>"
          }
        ]
      }
    },
    "filename": "web/router/api/user/v1/name.js",
    "groupTitle": "User",
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
          "title": "Authorization",
          "content": "{\n  \"Authorization\": \"JWT WVYpCSuZiyx.yr4j1ZUScxn7JjOjenlaEDPJmuNvgooXpgZyN.8kDly6p5L23J\"\n}",
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
            "description": "<p>User was unable to be authenticated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authentication Error",
          "content": "HTTP/1.1 401 Unauthorized\nUnauthorized",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/user/v1/:googleid/score/all",
    "title": "Get total score",
    "version": "1.0.0",
    "name": "GetScore",
    "group": "User",
    "description": "<p>Returns the total score for the requested user</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "score",
            "description": "<p>The user's total score</p>"
          }
        ]
      }
    },
    "filename": "web/router/api/user/v1/score.js",
    "groupTitle": "User",
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
          "title": "Authorization",
          "content": "{\n  \"Authorization\": \"JWT WVYpCSuZiyx.yr4j1ZUScxn7JjOjenlaEDPJmuNvgooXpgZyN.8kDly6p5L23J\"\n}",
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
            "description": "<p>User was unable to be authenticated</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The requested user was unable to be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authentication Error",
          "content": "HTTP/1.1 401 Unauthorized\nUnauthorized",
          "type": "String"
        },
        {
          "title": "User Not Found Error",
          "content": "{\n  \"error\": \"User Not Found\",\n  \"errorid\": 0\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "googleid",
            "description": "<p>A user's Google profile's unique identifier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GoogleId Example",
          "content": "\"108718953214804737014\"",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/user/v1/",
    "title": "Get current user",
    "version": "1.0.0",
    "name": "GetSelfUser",
    "group": "User",
    "description": "<p>Returns the public profile of the currently authenticated user</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user's public profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.uid",
            "description": "<p>The user's unique id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>The user's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.nickname",
            "description": "<p>The user's nickname</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.score",
            "description": "<p>The user's total score</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "user.badges",
            "description": "<p>List of badge ids the user has</p>"
          },
          {
            "group": "Success 200",
            "type": "Strine",
            "optional": false,
            "field": "user.role",
            "description": "<p>The users current permission role</p>"
          }
        ]
      }
    },
    "filename": "web/router/api/user/v1/index.js",
    "groupTitle": "User",
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
          "title": "Authorization",
          "content": "{\n  \"Authorization\": \"JWT WVYpCSuZiyx.yr4j1ZUScxn7JjOjenlaEDPJmuNvgooXpgZyN.8kDly6p5L23J\"\n}",
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
            "description": "<p>User was unable to be authenticated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authentication Error",
          "content": "HTTP/1.1 401 Unauthorized\nUnauthorized",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/user/v1/:googleid",
    "title": "Get a specified user",
    "version": "1.0.0",
    "name": "GetUser",
    "group": "User",
    "description": "<p>Returns the public profile of the requested user</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The user's public profile</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.uid",
            "description": "<p>The user's unique id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>The user's name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.nickname",
            "description": "<p>The user's nickname</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.score",
            "description": "<p>The user's total score</p>"
          },
          {
            "group": "Success 200",
            "type": "Number[]",
            "optional": false,
            "field": "user.badges",
            "description": "<p>List of badge ids the user has</p>"
          },
          {
            "group": "Success 200",
            "type": "Strine",
            "optional": false,
            "field": "user.role",
            "description": "<p>The users current permission role</p>"
          }
        ]
      }
    },
    "filename": "web/router/api/user/v1/user.js",
    "groupTitle": "User",
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
          "title": "Authorization",
          "content": "{\n  \"Authorization\": \"JWT WVYpCSuZiyx.yr4j1ZUScxn7JjOjenlaEDPJmuNvgooXpgZyN.8kDly6p5L23J\"\n}",
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
            "description": "<p>User was unable to be authenticated</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The requested user was unable to be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authentication Error",
          "content": "HTTP/1.1 401 Unauthorized\nUnauthorized",
          "type": "String"
        },
        {
          "title": "User Not Found Error",
          "content": "{\n  \"error\": \"User Not Found\",\n  \"errorid\": 0\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "googleid",
            "description": "<p>A user's Google profile's unique identifier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GoogleId Example",
          "content": "\"108718953214804737014\"",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/user/v1/:googleid/score",
    "title": "Give a score",
    "version": "1.0.0",
    "name": "GiveScore",
    "group": "User",
    "description": "<p>Give a user a score</p>",
    "permission": [
      {
        "name": "developer",
        "title": "developer",
        "description": "<p>Developer role with features any feature needed to modify or continue progress on the public or private application</p>"
      },
      {
        "name": "admin",
        "title": "admin",
        "description": "<p>Admin role with any permissions required for running the application</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "value",
            "defaultValue": "0",
            "description": "<p>The point reward for the score to be added</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "defaultValue": "unknown",
            "description": "<p>The type of the score</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "eid",
            "defaultValue": "-1",
            "description": "<p>The event id associated with the score</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "bid",
            "defaultValue": "-1",
            "description": "<p>The badge id associated with the score</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timestamp",
            "defaultValue": "now",
            "description": "<p>The time the score was awarded</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "googleid",
            "description": "<p>A user's Google profile's unique identifier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GoogleId Example",
          "content": "\"108718953214804737014\"",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "scores",
            "description": "<p>The user's scores</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "scores.bid",
            "description": "<p>A score's associated badge</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "scores.eid",
            "description": "<p>A score's associated event</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "scores.timestamp",
            "description": "<p>The time the score was awarded</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "scores.value",
            "description": "<p>The number of points the score gave</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "scores.type",
            "defaultValue": "unknown",
            "description": "<p>The type of score added</p>"
          }
        ]
      }
    },
    "filename": "web/router/api/user/v1/score.js",
    "groupTitle": "User",
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
          "title": "Authorization",
          "content": "{\n  \"Authorization\": \"JWT WVYpCSuZiyx.yr4j1ZUScxn7JjOjenlaEDPJmuNvgooXpgZyN.8kDly6p5L23J\"\n}",
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
            "description": "<p>User was unable to be authenticated</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The requested user was unable to be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authentication Error",
          "content": "HTTP/1.1 401 Unauthorized\nUnauthorized",
          "type": "String"
        },
        {
          "title": "User Not Found Error",
          "content": "{\n  \"error\": \"User Not Found\",\n  \"errorid\": 0\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/user/v1/:googleid/name",
    "title": "Set a user's name",
    "version": "1.0.0",
    "name": "SetName",
    "group": "User",
    "description": "<p>Set a new name for the target user</p>",
    "permission": [
      {
        "name": "teacher",
        "title": "teacher",
        "description": "<p>Teacher role for micromanaging the public side of the application</p>"
      },
      {
        "name": "developer",
        "title": "developer",
        "description": "<p>Developer role with features any feature needed to modify or continue progress on the public or private application</p>"
      },
      {
        "name": "admin",
        "title": "admin",
        "description": "<p>Admin role with any permissions required for running the application</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The user's new name</p>"
          }
        ]
      }
    },
    "filename": "web/router/api/user/v1/name.js",
    "groupTitle": "User",
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
          "title": "Authorization",
          "content": "{\n  \"Authorization\": \"JWT WVYpCSuZiyx.yr4j1ZUScxn7JjOjenlaEDPJmuNvgooXpgZyN.8kDly6p5L23J\"\n}",
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
            "description": "<p>User was unable to be authenticated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authentication Error",
          "content": "HTTP/1.1 401 Unauthorized\nUnauthorized",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/user/v1/:googleid/nickname",
    "title": "Set a user's nickname",
    "version": "1.0.0",
    "name": "SetNickname",
    "group": "User",
    "description": "<p>Set a new nickname for the target user</p>",
    "permission": [
      {
        "name": "teacher",
        "title": "teacher",
        "description": "<p>Teacher role for micromanaging the public side of the application</p>"
      },
      {
        "name": "developer",
        "title": "developer",
        "description": "<p>Developer role with features any feature needed to modify or continue progress on the public or private application</p>"
      },
      {
        "name": "admin",
        "title": "admin",
        "description": "<p>Admin role with any permissions required for running the application</p>"
      },
      {
        "name": "self",
        "title": "self",
        "description": "<p>Assumed role if authenticated user and target user are the same, used for managing account</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The user's new nickname</p>"
          }
        ]
      }
    },
    "filename": "web/router/api/user/v1/nickname.js",
    "groupTitle": "User",
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
          "title": "Authorization",
          "content": "{\n  \"Authorization\": \"JWT WVYpCSuZiyx.yr4j1ZUScxn7JjOjenlaEDPJmuNvgooXpgZyN.8kDly6p5L23J\"\n}",
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
            "description": "<p>User was unable to be authenticated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authentication Error",
          "content": "HTTP/1.1 401 Unauthorized\nUnauthorized",
          "type": "String"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/api/user/v1/:googleid/score",
    "title": "Take a score",
    "version": "1.0.0",
    "name": "TakeScore",
    "group": "User",
    "description": "<p>Search and remove a score by parameters</p>",
    "permission": [
      {
        "name": "developer",
        "title": "developer",
        "description": "<p>Developer role with features any feature needed to modify or continue progress on the public or private application</p>"
      },
      {
        "name": "admin",
        "title": "admin",
        "description": "<p>Admin role with any permissions required for running the application</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "value",
            "defaultValue": "0",
            "description": "<p>The point reward for the score to be added</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "defaultValue": "unknown",
            "description": "<p>The type of the score</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "eid",
            "defaultValue": "-1",
            "description": "<p>The event id associated with the score</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "bid",
            "defaultValue": "-1",
            "description": "<p>The badge id associated with the score</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "timestamp",
            "defaultValue": "now",
            "description": "<p>The time the score was awarded</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "googleid",
            "description": "<p>A user's Google profile's unique identifier</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Remove-Score-From-Badge:",
          "content": "{\n  \"bid\": 3\n}",
          "type": "json"
        },
        {
          "title": "GoogleId Example",
          "content": "\"108718953214804737014\"",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "scores",
            "description": "<p>The user's scores</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "scores.bid",
            "description": "<p>A score's associated badge</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "scores.eid",
            "description": "<p>A score's associated event</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "scores.timestamp",
            "description": "<p>The time the score was awarded</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "scores.value",
            "description": "<p>The number of points the score gave</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "scores.type",
            "defaultValue": "unknown",
            "description": "<p>The type of score added</p>"
          }
        ]
      }
    },
    "filename": "web/router/api/user/v1/score.js",
    "groupTitle": "User",
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
          "title": "Authorization",
          "content": "{\n  \"Authorization\": \"JWT WVYpCSuZiyx.yr4j1ZUScxn7JjOjenlaEDPJmuNvgooXpgZyN.8kDly6p5L23J\"\n}",
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
            "description": "<p>User was unable to be authenticated</p>"
          },
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The requested user was unable to be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Authentication Error",
          "content": "HTTP/1.1 401 Unauthorized\nUnauthorized",
          "type": "String"
        },
        {
          "title": "User Not Found Error",
          "content": "{\n  \"error\": \"User Not Found\",\n  \"errorid\": 0\n}",
          "type": "json"
        }
      ]
    }
  }
] });
