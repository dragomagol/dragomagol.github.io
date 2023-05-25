// src/components/TabBar.js
import {
	RxDividerHorizontal,
	RxCopy,
	RxCross2,
} from 'react-icons/rx';

export default function TabBar() {
	var icon_size = 20;
	return (
		<section id="tabbar">
			<div className="h-[50px] w-full bg-gray-400">
				<div className="mt-[5px] float-right flex flex-horizontal">
					<RxDividerHorizontal 
						style={{ marginRight: '20px' }}
						size={icon_size}
					/>
					<RxCopy
						style={{ marginRight: '20px' }}
						size={icon_size}
					/>
					<RxCross2
						style={{ marginRight: '10px' }}
						size={icon_size}
					/>
				</div>
				{/* Generate these tabs & widths programatically */}
				<div className="rounded-lg w-[120px] ml-1 align-bottom bg-gray-200 hover:bg-gray-300">
					Tabs go here!
				</div>
			</div>
		</section>
	);
}
