// src/components/URLBar.js
import { 
	RxArrowRight,
	RxArrowLeft,
	RxReload,
	RxHome,
	RxGlobe,
	RxStar,
	RxStarFilled,
	RxMagnifyingGlass,
	RxAvatar,
	RxMixerVertical
} from 'react-icons/rx';
import React, { useState } from 'react';

export default function URLBar() {
	const [starred, setStarred] = useState(false);

	function toggleStarred() {
		setStarred(!starred);
	}

    const url = "https://www.google.com/";

	const icon_size = 30;
	const icon_color = "#5A5A5A";
	const icon_top_margin = 5;
	const icon_horizontal_margin = 15;

    var starred_button = <RxStar color={icon_color} size={icon_size}/>;
	if (starred) {
		starred_button = <RxStarFilled color={icon_color} size={icon_size}/>;
	}

	return (
		<section id="urlbar">
			<div className="h-[50px] w-full bg-gray-200">
				<div className="flex flex-horizontal pt-[5px] align-center justify-middle leading-relaxed">
					<RxArrowLeft
						style={{
							marginLeft: icon_horizontal_margin,
							marginTop: icon_top_margin
						}}
						color={icon_color}
						size={icon_size}
					/>
					<RxArrowRight
						style={{
							marginLeft: icon_horizontal_margin,
							marginTop: icon_top_margin
						}}
						color={icon_color}
						size={icon_size}
					/>
					<RxReload
						style={{ 
							marginLeft: icon_horizontal_margin,
							marginTop: icon_top_margin
						}}
						color={icon_color}
						size={icon_size}
					/>
					<RxHome
						style={{ 
							marginLeft: icon_horizontal_margin,
							marginRight: icon_horizontal_margin,
							marginTop: icon_top_margin
						}}
						color={icon_color}
						size={icon_size}
					/>
					<div className="flex flex-horizontal px-[5px] py-[5px] rounded-full bg-gray-300 w-full">
						<RxGlobe color={icon_color} size={icon_size}/>
						<div className="ml-[10px] text-gray-600">
							{url}
						</div>
						<div className="flex-grow"></div> {/* This is a spacer */}
						<RxMagnifyingGlass color={icon_color} size={icon_size}/>
                        <button onClick={() => { 
						    toggleStarred();
					    }}>
						    {starred_button}
                        </button>
					</div>
					<RxAvatar
						style={{ 
							marginLeft: icon_horizontal_margin,
							marginTop: icon_top_margin
						}}
						color={icon_color}
						size={icon_size}
					/>
					<RxMixerVertical
						style={{ 
							marginLeft: icon_horizontal_margin,
							marginRight: icon_horizontal_margin,
							marginTop: icon_top_margin
						}}
						color={icon_color}
						size={icon_size}
					/>
				</div>
			</div>
		</section>
	);
}