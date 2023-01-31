import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));

      setTitle("");
      setContent("");
      setUserId("");
    }
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>新しいポストを追加する</h2>
      <form>
        <label htmlFor="postTitle">タイトル:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">著者:</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={onAuthorChanged}
        >
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">内容:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          保存
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
