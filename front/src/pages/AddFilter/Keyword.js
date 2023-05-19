import { useState } from "react";

const Keyword = () => {
  /* keyword */
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
    if (tags.includes(tag)) {
      setTag("");
      return;
    }
    setTags([...tags, tag]);
    setTag("");
  };

  return (
    <div classname="w-[350px] h-auto flex flex-col items-center justify-center overflow-auto">
      {tags.length !== 0 && (
        <div className="flex flex-wrap items-center w-[350px] mb-[10px] break-all">
          {tags.map((e, i) => (
            <div
              key={i}
              className="cursor-pointer flex justify-center items-center bg-light-blue rounded-3xl p-4 mt-[10px] mr-[10px] mb-[10px] h-[40px]"
              onClick={() => removeTag(i)}
            >
              <p className="font-main text-black text-[14px]">{e}</p>
            </div>
          ))}
        </div>
      )}
      <input
        className="w-[320px] mt-[15px] text-[15px] outline-none border-b border-gray-500"
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
