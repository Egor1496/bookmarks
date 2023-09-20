import { useState } from "react";
import sass from "./GetFile.module.sass"

import { FcDownload } from 'react-icons/fc';

import { BaseButton, Notification } from "../../../shared/ui";
import { LocalStorage, sendMesageNotification } from "../../../shared/model";

const GetFile = () => {

  const [notification, setNotification] = useState<object>();

  const onAcept = () => {
    downloadTxtFile(`${LocalStorage.getStore("bookmarks")}`);
  }

  const downloadTxtFile = (text:any) => {
    const elem = document.createElement("a");
    const file = new Blob(
      [text],
      { type: 'text/plain;charset=utf-8' }
    );
    elem.href = URL.createObjectURL(file);
    elem.download = "bookmarkss(json).txt";
    document.body.appendChild(elem);
    elem.click();
    sendMesageNotification({ text: "Файл скачен!" }, setNotification);
  }

  return (
    <div className={sass.main}>
      <Notification state={notification} />
      <BaseButton
        text="Скачать"
        callBack={onAcept}>
        <FcDownload />
      </BaseButton>
    </div >
  );
}

export { GetFile };