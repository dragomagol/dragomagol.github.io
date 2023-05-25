// src/components/URLBar.js
import { 
	RxArrowRight,
	RxArrowLeft,
	RxReload,
	RxHome,
	RxGlobe,
	RxStar,
	RxMagnifyingGlass,
	RxAvatar,
	RxMixerVertical
} from 'react-icons/rx';

export default function URLBar() {
	var icon_size = 30;
	var icon_color = "#5A5A5A";
	var icon_top_margin = 5;
	var icon_horizontal_margin = 15;
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
							URL goes here!
						</div>
						<div className="flex-grow"></div> {/* This is a spacer */}
						<RxMagnifyingGlass color={icon_color} size={icon_size}/>
						<RxStar color={icon_color} size={icon_size}/>
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