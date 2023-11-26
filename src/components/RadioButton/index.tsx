import React, { useState } from "react"
import { styled } from "styled-components"

interface RadioProps {
    checkedImage: string
    uncheckedImage: string
}

const RadioButtons: React.FC<RadioProps> = ({ checkedImage, uncheckedImage }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null)

    const handleChange = (value: string) => {
        setSelectedOption(value)
    }

    return (
        <div>
            {["option1", "option2", "option3"].map((option) => (
                <RadioWrapper
                    key={option}
                    checked={selectedOption === option}
                    checkedImage={checkedImage}
                    uncheckedImage={uncheckedImage}
                    onClick={() => handleChange(option)}
                />
            ))}
        </div>
    )
}

export default RadioButtons

const RadioWrapper = styled.div<{
    checked: boolean
    checkedImage: string
    uncheckedImage: string
}>``
