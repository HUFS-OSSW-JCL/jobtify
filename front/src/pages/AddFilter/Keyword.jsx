import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { keywordState } from "../../util/atom";

const Keyword = (props) => {
  /* keyword */
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");

  const removeTag = (i) => {
    const clonetags = tags.slice();
    clonetags.splice(i, 1);
    setTags(clonetags);
    setKeyword(tags);
    // console.log(keyword);
  };

  const addTag = (e) => {
    // 태그 입력 관리
    setTag(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEnter();
      // setKeyword([tags]);
      // console.log(tags);
    }
  };

  const handleEnter = () => {
    if (tags.includes(tag)) {
      setTag("");
      return;
    }
    if (tag === "") return;
    setTags([...tags, tag]);
    setKeyword(tags);
    // console.log(keyword);
    setTag("");
  };

  useEffect(() => {
    setKeyword(tags);
    console.log(keyword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setKeyword, tags]);

  // useEffect(() => {
  //   console.log(tags);
  //   setKeyword([tags]);
  //   console.log(keyword);
  // }, [setKeyword, tags]);

  return (
    <div className="w-[350px] h-auto flex flex-col items-center justify-center overflow-auto">
      {tags.length !== 0 && (
        <div className="pl-[12px] flex flex-wrap items-center w-[350px] mb-[10px] break-all">
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
      <input type="text" className="hidden" />
      <input
        className="w-[320px] mt-[5px] text-[15px] outline-none border-b border-gray-300"
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
