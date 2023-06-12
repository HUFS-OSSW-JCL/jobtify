const DropDown = ({ options, comboBoxHandler, onClick }) => {
  return (
    <div className="z-30 bg-white block ml-auto mr-auto list-none mt-[-1px] p-1 border border-gray-300">
      {options.map((x, i) =>
        x.indexOf(comboBoxHandler) > -1 ? (
          <div key={i} onClick={() => onClick(i)}>
            {x}
          </div>
        ) : null
      )}
    </div>
  );
};

export default DropDown;
