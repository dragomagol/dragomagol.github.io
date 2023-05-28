// src/components/TabBar.js
import {
	RxDividerHorizontal,
	RxCopy,
	RxCross2,
} from 'react-icons/rx';

var tabs = ["Home", "Skills", "Work History", "Projects", "Contact"];

export default function TabBar() {
	const icon_size = 20;
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
				<div className="flex flex-row">
				{ tabs.map((tab) => (
					<div className="rounded-lg mt-[20px] ml-2 h-[35px] w-[17%] text-gray-800 bg-gray-200 hover:bg-gray-300">
						<div className="text-left mt-1 ml-3">
							{tab}
						</div>
					</div>
				))}
				</div>
			</div>
		</section>
	);
}
