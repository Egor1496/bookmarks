import sass from "./BookmarkModal.module.sass";

import { BaseButton, BaseInput, BaseModal, BaseTextarea, MyLabel } from "../../../shared/ui";

type stateTypse = {
  id?: number | undefined;
  title?: string;
  description?: string;
  link?: string;
  tags?: string;
  group?: string;
}

type propsTypse = {
  modalActive?:boolean;
  modalSetActive?:(isActive:boolean) => void;
  modalTitle?:string;
  onАccept?:(newState:stateTypse) => void;
  state?:stateTypse;
	setState?:(newState:stateTypse) => void;
}

const BookmarkModal = (props:propsTypse) => {
  const {
    modalActive = false,
    modalSetActive = () => {},
    modalTitle = "",
    onАccept = () => {},
    state = {},
    setState = () => {},
  } = props;

  const plhld = {
    title: "YouTube",
    description: "Видеохостинг, предоставляющий пользователям услуги хранения, доставки и показа видео.",
    link: "https://www.youtube.com/",
    tags: "видео, соц сеть",
    group: "избранные"
  };

  const handlerClickAccept = () => {
    modalSetActive(false);
    onАccept({
      link: state?.link,
      title: state?.title,
      description: state?.description,
      tags: state?.tags,
      group: state?.group,
    });
  }

  const handlerClickClose = () => { modalSetActive(false) }

  return (
    <BaseModal active={modalActive} setActive={modalSetActive}>
      <div className={sass.addBookFrom}>
        <h3>{modalTitle}</h3>
        <div className={sass.formWrap}>
          <MyLabel labelText="Ссылка">
            <BaseInput
              state={state.link}
              setState={(newLink:string) => setState({ ...state, link: newLink })}
              placeholder={plhld.link}
            />
          </MyLabel>
          <MyLabel labelText="Заголовок">
            <BaseInput
              state={state.title}
              setState={(newTitle:string) => setState({ ...state, title: newTitle })}
              placeholder={plhld.title}
            />
          </MyLabel>
        </div>
        <MyLabel labelText="Описание" width="maxWidth">
          <BaseTextarea
            state={state.description}
            setState={(newDescr:string) => setState({ ...state, description: newDescr })}
            placeholder={plhld.description}
            width="maxWidth"
          />
        </MyLabel>
        <div className={sass.formWrap}>
          <MyLabel labelText="Тэги">
            <BaseInput
              state={state.tags}
              setState={(newTags:string) => setState({ ...state, tags: newTags })}
              placeholder={plhld.tags}
            />
          </MyLabel>
          <MyLabel labelText="Группа">
            <BaseInput
              state={state.group}
              setState={(newGroup:string) => setState({ ...state, group: newGroup })}
              placeholder={plhld.group}
            />
          </MyLabel>
        </div>
        <div className={sass.buttonWrap}>
          <BaseButton text="Принять"
            callBack={handlerClickAccept}
          />
          <BaseButton text="Отмена" styleName="transparentStyle"
            callBack={handlerClickClose}
          />
        </div>
      </div>
    </BaseModal>
  );
}

export { BookmarkModal };