import { useContext, useState } from "react";

import sass from "./Bookmarks.module.sass";

import { Bookmark } from "../../../features"; //!!!!!!!!!fsd
import { BookmarkModal, DialogModal } from "../../../entities";
import { Notification } from "../../../shared/ui";
import { sendMesageNotification } from "../../../shared/model";
import { store } from "../../../processes";

const Bookmarks = ({ styleNumber }:any) => {

  const {
    bookmarksArray,
    bookmarks,
    tags,
    groups,
    filter,
    sort,
    setBookmarks,
    setTagCloud,
    setGroupLinks,
  }:any = useContext(store);

  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const [editModalActive, editModalSetActive] = useState(false);
  const [notification, setNotification] = useState();

  const [form, setForm] = useState({
    id: 0,
    title:"..."
  });

  const onDeleteBookmark = (elem:any) => {
    setForm({ ...elem });
    setDeleteModalActive(true);
  }

  const onEditBookmark = (elem:any) => {
    setForm({ ...elem });
    editModalSetActive(true);
  }

  const handlerAcceptEdit = (newBookmark:any) => {
    bookmarksArray.editBookmark(form.id, newBookmark);
    const newBookmarksList = bookmarksArray.getBookmarks(filter, sort);
    setBookmarks(newBookmarksList);
    tags.updateState(setTagCloud, tags.getTags(newBookmarksList));
    groups.updateState(setGroupLinks, groups.getGroups(bookmarksArray.getBookmarks()));
    sendMesageNotification({ text: "Ссылка редактирована!" }, setNotification);
  }

  const handlerAcceptDelete = () => {
    bookmarksArray.deleteBookmark(form.id);
    const newBookmarksList = bookmarksArray.getBookmarks(filter, sort);
    setBookmarks(newBookmarksList);
    tags.updateState(setTagCloud, tags.getTags(newBookmarksList));
    groups.updateState(setGroupLinks, groups.getGroups(bookmarksArray.getBookmarks()));
    sendMesageNotification({ text: "Ссылка удалена!", alarm: true }, setNotification);
  }

  return (
    <>
      <Notification state={notification} />
      <DialogModal
        modalTitle={`Удалить "${form.title}" ?`}
        textAccept="Удалить"
        textСancele="Отмена"
        modalActive={deleteModalActive}
        modalSetActive={setDeleteModalActive}
        onАccept={() => {
          handlerAcceptDelete()
        }}
      />
      <BookmarkModal
        modalTitle={`Редактировать "${form.title}"`}
        modalActive={editModalActive}
        modalSetActive={editModalSetActive}
        onАccept={(newBookmark:any) => handlerAcceptEdit(newBookmark)}
        state={form}
        setState={setForm}
      />
      <div className={sass["bookmarks-wrap"]}>
        {
          bookmarks.map((elem:any) => {
            return <Bookmark
              key={elem.id}
              bookmark={elem}
              styleNumber={styleNumber}
              onDeleteBookmark={() => { onDeleteBookmark(elem); }}
              onEditBookmark={() => { onEditBookmark(elem); }}
            />
          })
        }
      </div>
    </>
  );
}

export { Bookmarks };