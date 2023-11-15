import sass from "./DialogModal.module.sass";

import { BaseButton, BaseModal } from "../../../shared/ui";

type propsTypes = {
  modalActive?: boolean;
  modalSetActive?:(isActive:boolean) => void;
  onАccept?:() => void;
  modalTitle?:string;
  modalDescription?:string;
  textAccept?:string;
  textСancele?:string;
}

const DialogModal = (props:propsTypes) => {

  const {
    modalActive = false,
    modalSetActive = () => {},
    onАccept = () => {},
    modalTitle = "",
    modalDescription = "",
    textAccept = "",
    textСancele = ""
  } = props;

  const handlerCallbackAccept = () => { modalSetActive(false); onАccept(); }

  const handlerCallbackClose = () => { modalSetActive(false) }

  return (
    <BaseModal active={modalActive} setActive={modalSetActive}>
      <div className={sass.BookFrom}>
        <h3 className={sass.title}>{modalTitle}</h3>
        <p className={sass.description}>{modalDescription}</p>
        <div className={sass.buttonWrap}>
          <BaseButton
            text={textAccept}
            callBack={handlerCallbackAccept}
          />
          <BaseButton
            text={textСancele}
            styleName="transparentStyle"
            callBack={handlerCallbackClose}
          />
        </div>
      </div>
    </BaseModal>
  );
}

export { DialogModal };