// src/components/Toolbar.js
import {
	RxMoon,
	RxDividerVertical,
	RxFile,
	RxRocket,
	RxGithubLogo,
	RxLinkedinLogo,
	RxEnvelopeClosed,
	RxCaretUp,
	RxSpeakerLoud,
} from 'react-icons/rx';
import { RiWifiLine } from 'react-icons/ri';

import React, { useState, useEffect } from 'react';

export const DateTime = () => {
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		var timer = setInterval(() => setDate(new Date()), 1000);
		return function cleanup() {
			clearInterval(timer);
		};
	});

	return (
		<div className='float-right text-gray-800 mx-4'>
			{date.toLocaleTimeString(undefined, {timeStyle:"short"})}
			<br/>
			{date.toLocaleDateString()}
		</div>
	);
}

export default function Toolbar() {
	var button_class = "px-2 py-2 mr-3 rounded-md bg-gray-300 hover:bg-gray-400";
	var icon_color = "#5A5A5A";
	var icon_size = 35;
	return (
		<section id="urlbar">
			<div className="py-[7px] h-[65px] w-full bg-gray-300">
				<div className="flex flex-row">
					<div className="px-2 py-2 ml-3 rounded-md bg-gray-400">
						<RxMoon color={icon_color} size={icon_size}/>
					</div>
					<RxDividerVertical color="#AAAAAA" size="50px" />
					<div className={button_class}>
						<RxFile color={icon_color} size={icon_size}/>
					</div>
					<div className={"px-2 py-2 mr-3 rounded-md bg-gray-400"}>
						<RxRocket color={icon_color} size={icon_size}/>
					</div>
					<a href="https://github.com/dragomagol" target="_blank" rel="noreferrer noopener">
						<div className={button_class}>
							<RxGithubLogo color={icon_color} size={icon_size}/>
						</div>
					</a>
					<a href="https://www.linkedin.com/" target="_blank" rel="noreferrer noopener">
						<div className={button_class}>
							<RxLinkedinLogo color={icon_color} size={icon_size}/>
						</div>
					</a>
					<div className={button_class}>
						<RxEnvelopeClosed color={icon_color} size={icon_size}/>
					</div>
					<div className="flex-grow"></div> {/* This is a spacer */}
					<div className="flex flex-row py-[12px]">
						<RxCaretUp color={icon_color} size={25}/>
						<RiWifiLine style={{ marginLeft:10 }} color={icon_color} size={25}/>
						<RxSpeakerLoud style={{ marginLeft:10 }} color={icon_color} size={25}/>
					</div>
					<DateTime />
				</div>
			</div>
		</section>
	);
}
