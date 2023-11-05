import { useState } from "react";

const NewTask = () => {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setText("");
  }

  return (
    <div className='mb-4'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setText(e.target.value)}
          value={text}
          className='mr-2'
        />
        <button type='submit' disabled={!text}>
          Add
        </button>
      </form>
    </div>
  );
};

export default NewTask;
