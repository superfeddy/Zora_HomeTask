import { FC } from 'react';

import { AVAILABLE_COLORS } from '@constants/colors.const';
import { SORT_MODE } from '@constants/sortMode.const';

interface ISortFilterToolbar {
  sortMethod: string;
  setSortMethod: (newMethod: string) => void;
  colorFilter: string;
  setColorFilter: (color: string) => void;
}

const SortFilterToolbar: FC<ISortFilterToolbar> = ({
  sortMethod,
  setSortMethod,
  colorFilter,
  setColorFilter
}) => {
  return (
    <div className="flex flex-col gap-4 items-center border border-black rounded-xl p-3 w-full">
      <h2 className="text-3xl underline underline-offset-4">Image Filter</h2>
      <div className="flex justify-between w-full px-10">
        <div className="flex flex-row justify-start items-center gap-3">
          <p>Sort: </p>
          <select
            onChange={e => setSortMethod(e.target.value)}
            value={sortMethod}
            className="px-4 py-2"
          >
            {SORT_MODE.map(option => (
              <option key={option} value={option} className="capitalize">
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-row justify-end items-center gap-3">
          <p>Colors: </p>
          <select
            onChange={e => setColorFilter(e.target.value)}
            value={colorFilter}
            className="px-4 py-2"
          >
            <option value="" className="capitalize">
              all
            </option>
            {AVAILABLE_COLORS.map(color => (
              <option key={color} value={color} className="capitalize">
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortFilterToolbar;
