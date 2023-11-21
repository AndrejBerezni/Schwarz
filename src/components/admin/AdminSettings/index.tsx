import { useEffect, useState, useRef } from 'react'
import {
  setupPageItems,
  getUIElements,
} from '../../../firebase/admin/firebase-admincontent'
import { EditUIForm, StyledSelect, EditUILabel } from './AdminSettings.styles'
import {
  AdminTitle,
  AdminSubtitle,
  AdminInput,
} from '../../../pages/Admin/Admin.styles'
import { IHeroItem } from '../../../compiler/heroItemInterface'
import { PrimaryButton } from '../../../GlobalStyles'
export default function AdminSettings() {
  const [uiElements, setUiElements] = useState<string[]>([])
  const [currentElement, setCurrentElement] = useState<IHeroItem>({
    title: '',
    subtitle: '',
    buttonText: '',
    link: '',
    img: '',
  })
  const selectRef = useRef<HTMLSelectElement>(null)

  //When element is selected, fetch its data and display in the edit form
  const handleSelectChange = async () => {
    if (selectRef.current) {
      const fetchedElementData = await setupPageItems([
        selectRef.current!.value,
      ])
      if (fetchedElementData) {
        setCurrentElement(fetchedElementData[0])
      }
    }
  }

  useEffect(() => {
    const fetchUiElements = async () => {
      const fetchedElements = await getUIElements()
      if (fetchedElements) {
        setUiElements(fetchedElements)
      }
    }
    fetchUiElements()
  }, [])

  return (
    <>
      <AdminTitle>Edit Home Page Elements</AdminTitle>
      <AdminSubtitle>Choose an element to edit</AdminSubtitle>
      {uiElements && (
        <StyledSelect
          name="elements"
          id="ui-elements-select"
          ref={selectRef}
          onChange={handleSelectChange}
        >
          {uiElements.map((el) => (
            <option value={el} key={`${el}-eo`}>
              {el}
            </option>
          ))}
        </StyledSelect>
      )}
      {currentElement && (
        <EditUIForm>
          <EditUILabel>
            Title:
            <AdminInput
              type="text"
              value={currentElement.title}
              onChange={(e) =>
                setCurrentElement((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
            />
          </EditUILabel>
          <EditUILabel>
            Subtitle:
            <AdminInput
              type="text"
              value={currentElement.subtitle}
              onChange={(e) =>
                setCurrentElement((prev) => ({
                  ...prev,
                  subtitle: e.target.value,
                }))
              }
            />
          </EditUILabel>
          <EditUILabel>
            Button Text:
            <AdminInput
              type="text"
              value={currentElement.buttonText}
              onChange={(e) =>
                setCurrentElement((prev) => ({
                  ...prev,
                  buttonText: e.target.value,
                }))
              }
            />
          </EditUILabel>
          <EditUILabel>
            Link to:
            <AdminInput
              type="text"
              value={currentElement.link}
              onChange={(e) =>
                setCurrentElement((prev) => ({
                  ...prev,
                  link: e.target.value,
                }))
              }
            />
          </EditUILabel>
          <EditUILabel>
            Image:
            <AdminInput type="file" />
          </EditUILabel>
          <PrimaryButton>Update</PrimaryButton>
        </EditUIForm>
      )}
    </>
  )
}
