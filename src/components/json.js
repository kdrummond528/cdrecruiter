export const json = {
    "title": "Interest Survey",
    "description": "Please fill out this form with your information, and I will contact you as soon as possible.",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "text",
                    "name": "textlengthvalidator",
                    "title": "First & last name",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "text",
                            "minLength": 10,
                            "maxLength": 280
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "numericvalidator",
                    "title": "Phone number",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "numeric",
                            "text": "Value must be within the range of 0 to 100",
                            "minValue": 0,
                            "maxValue": 100
                        }
                    ],
                    "maxLength": 0
                },
                {
                    "type": "text",
                    "name": "emailvalidator",
                    "title": "E-mail address",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "email"
                        }
                    ]
                },
                {
                    "type": "boolean",
                    "name": "question1",
                    "title": "Have you completed High School/GED?",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "question2",
                    "title": "What is your high school graduation year/anticipated graduation year?",
                    "isRequired": true
                },
                {
                    "type": "radiogroup",
                    "name": "question4",
                    "title": "What is you highest level of education?",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "Item 5",
                            "text": "Some high school"
                        },
                        {
                            "value": "Item 1",
                            "text": "High school diploma/GED"
                        },
                        {
                            "value": "Item 6",
                            "text": "Some college"
                        },
                        {
                            "value": "Item 2",
                            "text": "Associate's Degree"
                        },
                        {
                            "value": "Item 3",
                            "text": "Bachelor's Degree"
                        },
                        {
                            "value": "Item 4",
                            "text": "Master's Degree or higher"
                        }
                    ]
                },
                {
                    "type": "checkbox",
                    "name": "question3",
                    "title": "What are your interests?",
                    "description": "Select at least one.",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "Technology"
                        },
                        {
                            "value": "Item 2",
                            "text": "Medical"
                        },
                        {
                            "value": "Item 3",
                            "text": "Engineering"
                        },
                        {
                            "value": "Item 4",
                            "text": "Aviation"
                        },
                        {
                            "value": "Item 5",
                            "text": "Math/Science"
                        },
                        {
                            "value": "Item 7",
                            "text": "Travel"
                        },
                        {
                            "value": "Item 8",
                            "text": "Physical fitness"
                        },
                        {
                            "value": "Item 6",
                            "text": "Supporting others"
                        }
                    ],
                    "showOtherItem": true,
                    "showNoneItem": true
                },
                {
                    "type": "tagbox",
                    "name": "question6",
                    "title": "What is your preffered method of communication?",
                    "description": "Select at least one, or multiple.",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "Text"
                        },
                        {
                            "value": "Item 2",
                            "text": "Phone call"
                        },
                        {
                            "value": "Item 3",
                            "text": "Email"
                        }
                    ],
                    "maxSelectedChoices": 3,
                    "minSelectedChoices": 1
                },
                {
                    "type": "boolean",
                    "name": "question5",
                    "title": "Do you agree to be contacted by a Navy Talent Scout for more information regarding joining the Navy?",
                    "isRequired": true
                }
            ]
        }
    ],
    "showQuestionNumbers": "off",
    "checkErrorsMode": "onValueChanged",
    "headerView": "advanced"
}