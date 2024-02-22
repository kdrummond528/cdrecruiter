import React from 'react';
import { Box, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from '@chakra-ui/react'

const steps = [
    { title: 'First', description: 'Initial Contact' },
    { title: 'Second', description: 'Initial Appointment' },
    { title: 'Third', description: 'MEPs' },
]
function Steps() {
    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
    })

    return (
        <Stepper index={activeStep}>
            {steps.map((step, index) => (
                <Step key={index}>
                    <StepIndicator>
                        <StepStatus
                            complete={<StepIcon />}
                            incomplete={<StepNumber />}
                            active={<StepNumber />}
                        />
                    </StepIndicator>

                    <Box flexShrink='0'>
                        <StepTitle>{step.title}</StepTitle>
                        <StepDescription>{step.description}</StepDescription>
                    </Box>

                    <StepSeparator />
                </Step>
            ))}
        </Stepper>
    )
}

export default Steps;