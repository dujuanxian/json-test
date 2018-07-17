const data = {
    "users": [
        {
            "name": "alice",
            "fullname": "Alice Foo"
        },
        {
            "name": "bob",
            "fullname": "Bob Bar"
        }
    ],
    "links": [
        {
            "name": "sub-task-link",
            "sourceId": "2",
            "destinationId": "1"
        },
        {
            "name": "Duplicate",
            "sourceId": "3",
            "destinationId": "2"
        }
    ],
    "projects": [
        {
            "name": "A Sample Project",
            "key": "ASM",
            "description": "JSON file description",
            "versions": [
                {
                    "name": "1.0",
                    "released": true,
                    "releaseDate": "2012-08-31T15:59:02.161+0100"
                },
                {
                    "name": "2.0"
                }
            ],
            "components": [
                "Component",
                "AnotherComponent"
            ],
            "issues": [
                {
                    "priority" : "Major",
                    "description" : "Some nice description here\nMaybe _italics_ or *bold*?",
                    "status" : "Closed",
                    "reporter" : "alice",
                    "labels" : [ "impossible", "to", "test" ],
                    "watchers" : [ "bob" ],
                    "issueType" : "Bug",
                    "resolution" : "Resolved",
                    "created" : "2012-08-31T17:59:02.161+0100",
                    "updated" : "P-1D",
                    "affectedVersions" : [ "1.0" ],
                    "summary" : "My chore for today",
                    "assignee" : "bob",
                    "fixedVersions" : [ "1.0", "2.0" ],
                    "components" : ["Component", "AnotherComponent"],
                    "externalId" : "1",
                    "history" : [
                        {
                            "author" : "alice",
                            "created": "2012-08-31T15:59:02.161+0100",
                            "items": [
                                {
                                    "fieldType" : "jira",
                                    "field" : "status",
                                    "from" : "1",
                                    "fromString" : "Open",
                                    "to" : "5",
                                    "toString" : "Resolved"
                                }
                            ]
                        }
                    ],
                    "customFieldValues": [
                        {
                            "fieldName": "Story Points",
                            "fieldType": "com.atlassian.jira.plugin.system.customfieldtypes:float",
                            "value": "15"
                        },
                        {
                            "fieldName": "Business Value",
                            "fieldType": "com.atlassian.jira.plugin.system.customfieldtypes:float",
                            "value": "34"
                        }
                    ],
                    "attachments" : [
                        {
                            "name" : "battarang.jpg",
                            "attacher" : "admin", 
                            "created" : "2012-08-31T17:59:02.161+0100",
                            "uri" : "http://optimus-prime/~batman/images/battarang.jpg",
							"description" : "This is optimus prime"
                        }
                    ]                    
                },
                {
                    "status" : "Open",
                    "reporter" : "bob",
                    "issueType": "Sub-task",
                    "created" : "P-3D",
                    "updated" : "P-1D",
                    "summary" : "Sub-task",
                    "externalId": "2"
                },
                {
                    "status" : "Closed",
                    "reporter" : "alice",
                    "issueType": "Sub-task",
                    "created" : "P-3D",
                    "updated" : "P-1D",
                    "resolution" : "Duplicate",
                    "summary" : "Duplicate Sub-task",
                    "externalId": "3"
                }
            ]
        },
        {
            "name": "A Sample Project",
            "key": "ASM",
            "description": "JSON file description",
            "versions": [
                {
                    "name": "1.0",
                    "released": true,
                    "releaseDate": "2012-08-31T15:59:02.161+0100"
                },
                {
                    "name": "2.0"
                }
            ],
            "components": [
                "Component",
                "AnotherComponent"
            ],
            "issues": [
                {
                    "priority" : "Major",
                    "description" : "Some nice description here\nMaybe _italics_ or *bold*?",
                    "status" : "Closed",
                    "reporter" : "alice",
                    "labels" : [ "impossible", "to", "test" ],
                    "watchers" : [ "bob" ],
                    "issueType" : "Bug",
                    "resolution" : "Resolved",
                    "created" : "2012-08-31T17:59:02.161+0100",
                    "updated" : "P-1D",
                    "affectedVersions" : [ "1.0" ],
                    "summary" : "My chore for today",
                    "assignee" : "bob",
                    "fixedVersions" : [ "1.0", "2.0" ],
                    "components" : ["Component", "AnotherComponent"],
                    "externalId" : "1",
                    "history" : [
                        {
                            "author" : "alice",
                            "created": "2012-08-31T15:59:02.161+0100",
                            "items": [
                                {
                                    "fieldType" : "jira",
                                    "field" : "status",
                                    "from" : "1",
                                    "fromString" : "Open",
                                    "to" : "5",
                                    "toString" : "Resolved"
                                }
                            ]
                        }
                    ],
                    "customFieldValues": [
                        {
                            "fieldName": "Story Points",
                            "fieldType": "com.atlassian.jira.plugin.system.customfieldtypes:float",
                            "value": "15"
                        },
                        {
                            "fieldName": "Business Value",
                            "fieldType": "com.atlassian.jira.plugin.system.customfieldtypes:float",
                            "value": "34"
                        }
                    ],
                    "attachments" : [
                        {
                            "name" : "battarang.jpg",
                            "attacher" : "admin", 
                            "created" : "2012-08-31T17:59:02.161+0100",
                            "uri" : "http://optimus-prime/~batman/images/battarang.jpg",
							"description" : "This is optimus prime"
                        }
                    ]                    
                },
                {
                    "status" : "Open",
                    "reporter" : "bob",
                    "issueType": "Sub-task",
                    "created" : "P-3D",
                    "updated" : "P-1D",
                    "summary" : "Sub-task",
                    "externalId": "2"
                },
                {
                    "status" : "Closed",
                    "reporter" : "alice",
                    "issueType": "Sub-task",
                    "created" : "P-3D",
                    "updated" : "P-1D",
                    "resolution" : "Duplicate",
                    "summary" : "Duplicate Sub-task",
                    "externalId": "3"
                }
            ]
        },
        {
            "name": "A Sample Project",
            "key": "ASM",
            "description": "JSON file description",
            "versions": [
                {
                    "name": "1.0",
                    "released": true,
                    "releaseDate": "2012-08-31T15:59:02.161+0100"
                },
                {
                    "name": "2.0"
                }
            ],
            "components": [
                "Component",
                "AnotherComponent"
            ],
            "issues": [
                {
                    "priority" : "Major",
                    "description" : "Some nice description here\nMaybe _italics_ or *bold*?",
                    "status" : "Closed",
                    "reporter" : "alice",
                    "labels" : [ "impossible", "to", "test" ],
                    "watchers" : [ "bob" ],
                    "issueType" : "Bug",
                    "resolution" : "Resolved",
                    "created" : "2012-08-31T17:59:02.161+0100",
                    "updated" : "P-1D",
                    "affectedVersions" : [ "1.0" ],
                    "summary" : "My chore for today",
                    "assignee" : "bob",
                    "fixedVersions" : [ "1.0", "2.0" ],
                    "components" : ["Component", "AnotherComponent"],
                    "externalId" : "1",
                    "history" : [
                        {
                            "author" : "alice",
                            "created": "2012-08-31T15:59:02.161+0100",
                            "items": [
                                {
                                    "fieldType" : "jira",
                                    "field" : "status",
                                    "from" : "1",
                                    "fromString" : "Open",
                                    "to" : "5",
                                    "toString" : "Resolved"
                                }
                            ]
                        }
                    ],
                    "customFieldValues": [
                        {
                            "fieldName": "Story Points",
                            "fieldType": "com.atlassian.jira.plugin.system.customfieldtypes:float",
                            "value": "15"
                        },
                        {
                            "fieldName": "Business Value",
                            "fieldType": "com.atlassian.jira.plugin.system.customfieldtypes:float",
                            "value": "34"
                        }
                    ],
                    "attachments" : [
                        {
                            "name" : "battarang.jpg",
                            "attacher" : "admin", 
                            "created" : "2012-08-31T17:59:02.161+0100",
                            "uri" : "http://optimus-prime/~batman/images/battarang.jpg",
							"description" : "This is optimus prime"
                        }
                    ]                    
                },
                {
                    "status" : "Open",
                    "reporter" : "bob",
                    "issueType": "Sub-task",
                    "created" : "P-3D",
                    "updated" : "P-1D",
                    "summary" : "Sub-task",
                    "externalId": "2"
                },
                {
                    "status" : "Closed",
                    "reporter" : "alice",
                    "issueType": "Sub-task",
                    "created" : "P-3D",
                    "updated" : "P-1D",
                    "resolution" : "Duplicate",
                    "summary" : "Duplicate Sub-task",
                    "externalId": "3"
                }
            ]
        },
        {
            "name": "A Sample Project",
            "key": "ASM",
            "description": "JSON file description",
            "versions": [
                {
                    "name": "1.0",
                    "released": true,
                    "releaseDate": "2012-08-31T15:59:02.161+0100"
                },
                {
                    "name": "2.0"
                }
            ],
            "components": [
                "Component",
                "AnotherComponent"
            ],
            "issues": [
                {
                    "priority" : "Major",
                    "description" : "Some nice description here\nMaybe _italics_ or *bold*?",
                    "status" : "Closed",
                    "reporter" : "alice",
                    "labels" : [ "impossible", "to", "test" ],
                    "watchers" : [ "bob" ],
                    "issueType" : "Bug",
                    "resolution" : "Resolved",
                    "created" : "2012-08-31T17:59:02.161+0100",
                    "updated" : "P-1D",
                    "affectedVersions" : [ "1.0" ],
                    "summary" : "My chore for today",
                    "assignee" : "bob",
                    "fixedVersions" : [ "1.0", "2.0" ],
                    "components" : ["Component", "AnotherComponent"],
                    "externalId" : "1",
                    "history" : [
                        {
                            "author" : "alice",
                            "created": "2012-08-31T15:59:02.161+0100",
                            "items": [
                                {
                                    "fieldType" : "jira",
                                    "field" : "status",
                                    "from" : "1",
                                    "fromString" : "Open",
                                    "to" : "5",
                                    "toString" : "Resolved"
                                }
                            ]
                        }
                    ],
                    "customFieldValues": [
                        {
                            "fieldName": "Story Points",
                            "fieldType": "com.atlassian.jira.plugin.system.customfieldtypes:float",
                            "value": "15"
                        },
                        {
                            "fieldName": "Business Value",
                            "fieldType": "com.atlassian.jira.plugin.system.customfieldtypes:float",
                            "value": "34"
                        }
                    ],
                    "attachments" : [
                        {
                            "name" : "battarang.jpg",
                            "attacher" : "admin", 
                            "created" : "2012-08-31T17:59:02.161+0100",
                            "uri" : "http://optimus-prime/~batman/images/battarang.jpg",
							"description" : "This is optimus prime"
                        }
                    ]                    
                },
                {
                    "status" : "Open",
                    "reporter" : "bob",
                    "issueType": "Sub-task",
                    "created" : "P-3D",
                    "updated" : "P-1D",
                    "summary" : "Sub-task",
                    "externalId": "2"
                },
                {
                    "status" : "Closed",
                    "reporter" : "alice",
                    "issueType": "Sub-task",
                    "created" : "P-3D",
                    "updated" : "P-1D",
                    "resolution" : "Duplicate",
                    "summary" : "Duplicate Sub-task",
                    "externalId": "3"
                }
            ]
        },{
            "name": "A Sample Project",
            "key": "ASM",
            "description": "JSON file description",
            "versions": [
                {
                    "name": "1.0",
                    "released": true,
                    "releaseDate": "2012-08-31T15:59:02.161+0100"
                },
                {
                    "name": "2.0"
                }
            ],
            "components": [
                "Component",
                "AnotherComponent"
            ],
            "issues": [
                {
                    "priority" : "Major",
                    "description" : "Some nice description here\nMaybe _italics_ or *bold*?",
                    "status" : "Closed",
                    "reporter" : "alice",
                    "labels" : [ "impossible", "to", "test" ],
                    "watchers" : [ "bob" ],
                    "issueType" : "Bug",
                    "resolution" : "Resolved",
                    "created" : "2012-08-31T17:59:02.161+0100",
                    "updated" : "P-1D",
                    "affectedVersions" : [ "1.0" ],
                    "summary" : "My chore for today",
                    "assignee" : "bob",
                    "fixedVersions" : [ "1.0", "2.0" ],
                    "components" : ["Component", "AnotherComponent"],
                    "externalId" : "1",
                    "history" : [
                        {
                            "author" : "alice",
                            "created": "2012-08-31T15:59:02.161+0100",
                            "items": [
                                {
                                    "fieldType" : "jira",
                                    "field" : "status",
                                    "from" : "1",
                                    "fromString" : "Open",
                                    "to" : "5",
                                    "toString" : "Resolved"
                                }
                            ]
                        }
                    ],
                    "customFieldValues": [
                        {
                            "fieldName": "Story Points",
                            "fieldType": "com.atlassian.jira.plugin.system.customfieldtypes:float",
                            "value": "15"
                        },
                        {
                            "fieldName": "Business Value",
                            "fieldType": "com.atlassian.jira.plugin.system.customfieldtypes:float",
                            "value": "34"
                        }
                    ],
                    "attachments" : [
                        {
                            "name" : "battarang.jpg",
                            "attacher" : "admin", 
                            "created" : "2012-08-31T17:59:02.161+0100",
                            "uri" : "http://optimus-prime/~batman/images/battarang.jpg",
							"description" : "This is optimus prime"
                        }
                    ]                    
                },
                {
                    "status" : "Open",
                    "reporter" : "bob",
                    "issueType": "Sub-task",
                    "created" : "P-3D",
                    "updated" : "P-1D",
                    "summary" : "Sub-task",
                    "externalId": "2"
                },
                {
                    "status" : "Closed",
                    "reporter" : "alice",
                    "issueType": "Sub-task",
                    "created" : "P-3D",
                    "updated" : "P-1D",
                    "resolution" : "Duplicate",
                    "summary" : "Duplicate Sub-task",
                    "externalId": "3"
                }
            ]
        },
        {
            "name": "A Sample Project",
            "key": "ASM",
            "description": "JSON file description",
            "versions": [
                {
                    "name": "1.0",
                    "released": true,
                    "releaseDate": "2012-08-31T15:59:02.161+0100"
                },
                {
                    "name": "2.0"
                }
            ],
            "components": [
                "Component",
                "AnotherComponent"
            ],
            "issues": [
                {
                    "priority" : "Major",
                    "description" : "Some nice description here\nMaybe _italics_ or *bold*?",
                    "status" : "Closed",
                    "reporter" : "alice",
                    "labels" : [ "impossible", "to", "test" ],
                    "watchers" : [ "bob" ],
                    "issueType" : "Bug",
                    "resolution" : "Resolved",
                    "created" : "2012-08-31T17:59:02.161+0100",
                    "updated" : "P-1D",
                    "affectedVersions" : [ "1.0" ],
                    "summary" : "My chore for today",
                    "assignee" : "bob",
                    "fixedVersions" : [ "1.0", "2.0" ],
                    "components" : ["Component", "AnotherComponent"],
                    "externalId" : "1",
                    "history" : [
                        {
                            "author" : "alice",
                            "created": "2012-08-31T15:59:02.161+0100",
                            "items": [
                                {
                                    "fieldType" : "jira",
                                    "field" : "status",
                                    "from" : "1",
                                    "fromString" : "Open",
                                    "to" : "5",
                                    "toString" : "Resolved"
                                }
                            ]
                        }
                    ],
                    "customFieldValues": [
                        {
                            "fieldName": "Story Points",
                            "fieldType": "com.atlassian.jira.plugin.system.customfieldtypes:float",
                            "value": "15"
                        },
                        {
                            "fieldName": "Business Value",
                            "fieldType": "com.atlassian.jira.plugin.system.customfieldtypes:float",
                            "value": "34"
                        }
                    ],
                    "attachments" : [
                        {
                            "name" : "battarang.jpg",
                            "attacher" : "admin", 
                            "created" : "2012-08-31T17:59:02.161+0100",
                            "uri" : "http://optimus-prime/~batman/images/battarang.jpg",
							"description" : "This is optimus prime"
                        }
                    ]                    
                },
                {
                    "status" : "Open",
                    "reporter" : "bob",
                    "issueType": "Sub-task",
                    "created" : "P-3D",
                    "updated" : "P-1D",
                    "summary" : "Sub-task",
                    "externalId": "2"
                },
                {
                    "status" : "Closed",
                    "reporter" : "alice",
                    "issueType": "Sub-task",
                    "created" : "P-3D",
                    "updated" : "P-1D",
                    "resolution" : "Duplicate",
                    "summary" : "Duplicate Sub-task",
                    "externalId": "3"
                }
            ]
        },
        {
            "name": "A Sample Project",
            "key": "ASM",
            "description": "JSON file description",
            "versions": [
                {
                    "name": "1.0",
                    "released": true,
                    "releaseDate": "2012-08-31T15:59:02.161+0100"
                },
                {
                    "name": "2.0"
                }
            ],
            "components": [
                "Component",
                "AnotherComponent"
            ],
            "issues": [
                {
                    "priority" : "Major",
                    "description" : "Some nice description here\nMaybe _italics_ or *bold*?",
                    "status" : "Closed",
                    "reporter" : "alice",
                    "labels" : [ "impossible", "to", "test" ],
                    "watchers" : [ "bob" ],
                    "issueType" : "Bug",
                    "resolution" : "Resolved",
                    "created" : "2012-08-31T17:59:02.161+0100",
                    "updated" : "P-1D",
                    "affectedVersions" : [ "1.0" ],
                    "summary" : "My chore for today",
                    "assignee" : "bob",
                    "fixedVersions" : [ "1.0", "2.0" ],
                    "components" : ["Component", "AnotherComponent"],
                    "externalId" : "1",
                    "history" : [
                        {
                            "author" : "alice",
                            "created": "2012-08-31T15:59:02.161+0100",
                            "items": [
                                {
                                    "fieldType" : "jira",
                                    "field" : "status",
                                    "from" : "1",
                                    "fromString" : "Open",
                                    "to" : "5",
                                    "toString" : "Resolved"
                                }
                            ]
                        }
                    ],
                    "customFieldValues": [
                        {
                            "fieldName": "Story Points",
                            "fieldType": "com.atlassian.jira.plugin.system.customfieldtypes:float",
                            "value": "15"
                        },
                        {
                            "fieldName": "Business Value",
                            "fieldType": "com.atlassian.jira.plugin.system.customfieldtypes:float",
                            "value": "34"
                        }
                    ],
                    "attachments" : [
                        {
                            "name" : "battarang.jpg",
                            "attacher" : "admin", 
                            "created" : "2012-08-31T17:59:02.161+0100",
                            "uri" : "http://optimus-prime/~batman/images/battarang.jpg",
							"description" : "This is optimus prime"
                        }
                    ]                    
                },
                {
                    "status" : "Open",
                    "reporter" : "bob",
                    "issueType": "Sub-task",
                    "created" : "P-3D",
                    "updated" : "P-1D",
                    "summary" : "Sub-task",
                    "externalId": "2"
                },
                {
                    "status" : "Closed",
                    "reporter" : "alice",
                    "issueType": "Sub-task",
                    "created" : "P-3D",
                    "updated" : "P-1D",
                    "resolution" : "Duplicate",
                    "summary" : "Duplicate Sub-task",
                    "externalId": "3"
                }
            ]
        }
    ]
};

document.write(JSON.stringify(data));
