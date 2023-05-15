import { useState } from "react";

const Keyword = () => {
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const removeTag = (i) => {
    const clonetags = tags.slice();
    clonetags.splice(i, 1);
    setTags(clonetags);
  };
  const addTag = (e) => {
    setTag(e.target.value);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  const handleClick = () => {
    setTags([...tags, tag]);
    setTag("");
  };

  return (
    <div classname="flex flex-col items-center justify-center">
      {tags.length !== 0 && (
        <div className="flex items-center w-[395px] h-[60px]">
          {tags.map((e, i) => (
            <div
              key={i}
              className="cursor-pointer flex justify-center items-center bg-light-blue rounded-3xl p-4 m-[10px] h-[40px]"
              onClick={() => removeTag(i)}
            >
              <p className="font-main text-black text-[14px]">{e}</p>
            </div>
          ))}
        </div>
      )}

      <input
        className="ml-[10px] mt-[5px] text-[15px] outline-none"
        type="text"
        placeholder="키워드를 입력하세요"
        value={tag}
        onChange={(e) => addTag(e)}
        onKeyPress={(e) => handleKeyPress(e)}
      />
    </div>
  );
};

export default Keyword;
