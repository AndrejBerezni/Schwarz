import { useEffect, useState, useRef, FormEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyledSelect } from './AdminSettings.styles'
import { IHeroItem } from '../../../compiler/heroItemInterface'
import {
  setupPageItems,
  getUIElements,
  updateUIElement,
} from '../../../firebase/admin/firebase-admincontent'
import { PrimaryButton } from '../../../GlobalStyles'
import {
  AdminTitle,
  AdminSubtitle,
  AdminInput,
  AdminForm,
  AdminFormCol,
  AdminLabel,
} from '../../../pages/Admin/Admin.styles'
import { displayAlert } from '../../../store/alert'
import { getShowAlert, getAlert } from '../../../store/alert/selectors'
import AlertMessage from '../../AlertMessage'

export default function AdminSettings() {
  const dispatch = useDispatch()
  const showAlert = useSelector(getShowAlert)
  const alert = useSelector(getAlert)

  const [uiElements, setUiElements] = useState<string[]>([])
  const [currentElement, setCurrentElement] = useState<IHeroItem>({
    title: '',
    subtitle: '',
    buttonText: '',
    link: '',
    img: '',
  })

  const selectRef = useRef<HTMLSelectElement>(null)
  const titleRef = useRef<HTMLInputElement>(null)
  const subtitleRef = useRef<HTMLInputElement>(null)
  const buttonTextRef = useRef<HTMLInputElement>(null)
  const linkRef = useRef<HTMLInputElement>(null)
  const imageRef = useRef<HTMLInputElement>(null)

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
  // Setup select options based on what is in the database:
  useEffect(() => {
    const fetchUiElements = async () => {
      const fetchedElements = await getUIElements()
      if (fetchedElements) {
        setUiElements(fetchedElements)
      }
    }
    fetchUiElements()
  }, [])

  // useEffect to handle the initial setting of currentElement:
  useEffect(() => {
    if (uiElements.length > 0) {
      handleSelectChange()
    }
  }, [uiElements])

  // Handle form submit
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const newHeroItem: Omit<IHeroItem, 'img'> = {
        title: titleRef.current!.value,
        subtitle: subtitleRef.current!.value,
        buttonText: buttonTextRef.current!.value,
        link: linkRef.current!.value,
      }
      if (imageRef.current!.files) {
        const image = imageRef.current!.files[0]
        await updateUIElement(selectRef.current!.value, newHeroItem, image)
      } else {
        await updateUIElement(selectRef.current!.value, newHeroItem)
      }
      dispatch(
        displayAlert({
          type: 'editUI',
          message: 'Element successfully updated!',
        })
      )
    } catch (error) {
      if (error instanceof Error) {
        dispatch(displayAlert({ type: 'editUI', message: error.message }))
      }
    }
  }

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
        <AdminForm onSubmit={(e) => handleSubmit(e)}>
          <AdminFormCol>
            <AdminLabel>
              Title:
              <AdminInput
                required
                type="text"
                value={currentElement.title}
                maxLength={32}
                ref={titleRef}
                onChange={(e) =>
                  setCurrentElement((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
              />
            </AdminLabel>
            <AdminLabel>
              Subtitle:
              <AdminInput
                required
                type="text"
                value={currentElement.subtitle}
                maxLength={24}
                ref={subtitleRef}
                onChange={(e) =>
                  setCurrentElement((prev) => ({
                    ...prev,
                    subtitle: e.target.value,
                  }))
                }
              />
            </AdminLabel>
            <AdminLabel>
              Button Text:
              <AdminInput
                required
                type="text"
                value={currentElement.buttonText}
                maxLength={16}
                ref={buttonTextRef}
                onChange={(e) =>
                  setCurrentElement((prev) => ({
                    ...prev,
                    buttonText: e.target.value,
                  }))
                }
              />
            </AdminLabel>
            <AdminLabel>
              Link to:
              <AdminInput
                required
                type="text"
                value={currentElement.link}
                ref={linkRef}
                onChange={(e) =>
                  setCurrentElement((prev) => ({
                    ...prev,
                    link: e.target.value,
                  }))
                }
              />
            </AdminLabel>
            <AdminLabel>
              Image:
              <AdminInput type="file" ref={imageRef} />
            </AdminLabel>
            <PrimaryButton>Update</PrimaryButton>
            {showAlert && alert.type === 'editUI' && <AlertMessage />}
          </AdminFormCol>
        </AdminForm>
      )}
    </>
  )
}
