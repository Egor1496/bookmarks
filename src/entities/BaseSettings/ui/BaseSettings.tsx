import { useContext, useState } from "react";

import sass from "./BaseSettings.module.sass";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineCloseCircle } from 'react-icons/ai';

import { store } from "../../../processes";
import { ThemeParams } from "../../../features"; //!!!!!!!!!!!!!!!! fsd
import { ThemeSelect } from "../../../entities"; //!!!!!!!!!!!!!!!! fsd
import { LocalStorage } from "../../../shared/model";
import { BaseButton, BaseToggleRadio } from "../../../shared/ui";

type contextTypse = {
  enableGroups?:boolean;
  setEnableGroups?:(newState:boolean) => void;
  enableTags?:boolean;
  setEnableTags?:(newState:boolean) => void;
  enableBg?:boolean;
  setEnableBg?:(newState:boolean) => void;
}

const BaseSettings = () => {
  const {
    enableGroups = false,
    setEnableGroups = () => {},
    enableTags = false,
    setEnableTags = () => {},
    enableBg = false,
    setEnableBg = () => {},
  }:contextTypse = useContext(store);

  const storageTheme = LocalStorage.getStore("themeNumber", String(1));

  const [numberTheme, setTheme] = useState(Number(storageTheme));

  const [themeModal, setModalActive] = useState(false);

  const handlerClickSettings = () => {
    setModalActive(!themeModal);
  }

  const handlerClickClose = () => {
    setModalActive(false)
  }

  const enableSelectGroup = (isChecked:boolean) => {
    setEnableGroups(isChecked);
    LocalStorage.setStore("enableGroups", String(Number(isChecked)));
  }

  const enableSelectTags = (isChecked:boolean) => {
    setEnableTags(isChecked);
    LocalStorage.setStore("enableTags", String(Number(isChecked)));
  }

  const enableSelectBg = (isChecked:boolean) => {
    setEnableBg(isChecked);
    LocalStorage.setStore("enableBg", String(Number(isChecked)));
  }


  return (
    <div className={sass.settings}>
      <BaseButton styleNameList={["transparentStyle", "baseSettings"]} callBack={handlerClickSettings}><IoMdSettings /></BaseButton>
      {
        themeModal && (
          <>
            <div className={sass.modalBg}
              onClick={handlerClickClose}></div>
            <div className={sass.modal}>
              <div className={sass.close} onClick={handlerClickClose} >
                <AiOutlineCloseCircle />
              </div>
              <div className={sass["enable-wrap"]}>
                <div className={sass["groups-enable"]}>
                  <h2>Группы</h2>
                  <BaseToggleRadio onClickChange={enableSelectGroup} defaultChecked={enableGroups} />
                </div>
                <div className={sass["tags-enable"]}>
                  <h2>Тэги</h2>
                  <BaseToggleRadio onClickChange={enableSelectTags} defaultChecked={enableTags} />
                </div>
                <div className={sass["bg-enable"]}>
                  <h2>Фон</h2>
                  <BaseToggleRadio onClickChange={enableSelectBg} defaultChecked={enableBg} />
                </div>
              </div>
              <ThemeSelect setTheme={setTheme} />
            </div>
          </>
        )
      }
      <ThemeParams thisNumberTheme={numberTheme} />
    </div >
  );
}

export { BaseSettings };