export const json = {
    "title": "Navy Interest Survey",
    "description": "Please fill out this survey and I will contact you with more information.",
    "logoPosition": "right",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "text",
                    "name": "question1",
                    "title": "First and last name",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "question2",
                    "title": "Phone number",
                    "isRequired": true,
                    "inputType": "number"
                },
                {
                    "type": "text",
                    "name": "Email address",
                    "isRequired": true,
                    "validators": [
                        {
                            "type": "email"
                        }
                    ],
                    "inputType": "email"
                },
                {
                    "type": "boolean",
                    "name": "question4",
                    "title": "Have you completed high school/GED program?",
                    "isRequired": true
                },
                {
                    "type": "text",
                    "name": "question3",
                    "visibleIf": "{question4} = false",
                    "title": "What is your anticipated high school graduation year?",
                    "isRequired": true,
                    "requiredIf": "{question4} = false"
                },
                {
                    "type": "radiogroup",
                    "name": "question6",
                    "title": "What is your highest level of education?",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "Some high school"
                        },
                        {
                            "value": "Item 2",
                            "text": "High school diploma or GED"
                        },
                        {
                            "value": "Item 3",
                            "text": "Some college"
                        },
                        {
                            "value": "Item 4",
                            "text": "Associate's"
                        },
                        {
                            "value": "Item 5",
                            "text": "Bachelor's"
                        },
                        {
                            "value": "Item 6",
                            "text": "Master's or higher"
                        }
                    ]
                },
                {
                    "type": "checkbox",
                    "name": "question5",
                    "title": "What are your interests?",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "Technology"
                        },
                        {
                            "value": "Item 2",
                            "text": "Healthcare"
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
                            "value": "Item 6",
                            "text": "Travel"
                        },
                        {
                            "value": "Item 7",
                            "text": "Physical Fitness"
                        },
                        {
                            "value": "Item 8",
                            "text": "Supporting others"
                        }
                    ],
                    "showOtherItem": true
                },
                {
                    "type": "checkbox",
                    "name": "question7",
                    "title": "What is your preferred method of communication?",
                    "isRequired": true,
                    "choices": [
                        {
                            "value": "Item 1",
                            "text": "Phone call"
                        },
                        {
                            "value": "Item 2",
                            "text": "Text"
                        },
                        {
                            "value": "Item 3",
                            "text": "Email"
                        }
                    ]
                },
                {
                    "type": "text",
                    "name": "question9",
                    "title": "Additional comments."
                },
                {
                    "type": "boolean",
                    "name": "question8",
                    "title": "Do you agree to be contacted by a Navy Talent Scout for more information about joining the Navy?",
                    "isRequired": true
                }
            ]
        }
    ],
    "headerView": "advanced"
}