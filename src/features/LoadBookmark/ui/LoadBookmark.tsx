import { useContext, useState } from "react";
import sass from "./LoadBookmark.module.sass"

import { AiFillFileText } from 'react-icons/ai';
import { FaCloudUploadAlt } from 'react-icons/fa';

import { store, bookmarksType } from "../../../processes";
import { BaseModal, BaseButton, Notification } from "../../../shared/ui";
import {
  FillBookmark,
  JsonHelper,
  sendMesageNotification,
  LoadFile
} from "../../../shared/model";

const LoadBookmark = () => {

  const {
    bookmarksArray,
    tags,
    groups,
    filter,
    sort,
    setBookmarks,
    setTagCloud,
    setGroupLinks,
  }:any = useContext(store);

  const [modalActive, modalSetActive] = useState(false);

  const [notification, setNotification] = useState<object>();

  const loadObgect = (bookmarksList: string | ArrayBuffer | null):void => {
    const obgBookmarks = JsonHelper.getObject(String(bookmarksList)) as bookmarksType[];
    obgBookmarks.forEach((el) =>  {
      el.title = FillBookmark.getTitle(el.title, el.link);
      bookmarksArray.uploadBookmarks({ ...el });
    });
    const newBookmarksList = bookmarksArray.getBookmarks(filter, sort);
    setBookmarks(newBookmarksList);
    tags.updateState(setTagCloud, tags.getTags(newBookmarksList));
    groups.updateState(setGroupLinks, groups.getGroups(bookmarksArray.getBookmarks()));
    sendMesageNotification(
      { text: "Загруженно ссылок - " + obgBookmarks.length + "шт." },
      setNotification
    );
  }

  return (
    <div className={sass.main}>
      <Notification state={notification} />
      <BaseModal
        active={modalActive}
        setActive={modalSetActive}
      >
        <div className={sass.addBookFrom}>
          <h3>Загрузить фаил</h3>
          <label>
            <div
              className={sass.dropZone}
              onDrop={(e) => { LoadFile.onDrop(e, loadObgect); modalSetActive(false); }}
              onDragOver={(e) => e.preventDefault()}>
              <input
                className={sass.inputFile}
                type="file"
                onChange={(e) => { LoadFile.read(e.target, loadObgect); modalSetActive(false); }}
              />
              <div className={sass.iconUplad}><FaCloudUploadAlt /></div>
              <span className={sass.textUpload}><span>Выберите фаил</span>   или перетащите его сюда</span>
            </div>
          </label>
        </div>
      </BaseModal >
      <BaseButton
        text="Загрузить"
        callBack={() => { modalSetActive(true); }} >
        <AiFillFileText />
      </BaseButton>
    </div >
  );
}

export { LoadBookmark };