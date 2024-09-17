import React from 'react';

export const RadioButton = (props: {
  value: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div>
      <input
        type="radio"
        id={props.value}
        name={props.name}
        value={props.value}
        className="hidden peer"
        checked={props.checked}
        onChange={props.onChange}
        required
      />
      <label
        htmlFor={props.value}
        className="inline-flex items-center justify-between text-sm py-1 px-3 text-center text-gray-500 bg-white  rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-violet-500 peer-checked:border-violet-600 peer-checked:text-violet-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <span className="text-sm font-simibold">{props.label}</span>
      </label>
    </div>
  );
};

export const RadioGroup = (props: {
  items: Array<{ label: string; value: string }>;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}) => {
  return (
    <ul className="flex gap-3">
      {props.items.map(item => (
        <RadioButton
          key={item.value}
          name={props.name}
          value={item.value}
          label={item.label}
          checked={props.value === item.value}
          onChange={props.onChange}
        />
      ))}
    </ul>
  );
};
