// src/components/TabBar.js
import {
	RxDividerHorizontal,
	RxCopy,
	RxCross2,
} from 'react-icons/rx';

import HomeTab from "./HomeTab";
import SkillsTab from "./SkillsTab";
import HistoryTab from "./HistoryTab";
import ProjectsTab from "./ProjectsTab";
import ContactTab from "./ContactTab";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

var tabs = {
	"Home": <HomeTab />, 
	"Skills": <SkillsTab />, 
	"Work History": <HistoryTab />,
	"Projects": <ProjectsTab />,
	"Contact": <ContactTab />
};

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
				<Tabs>
					<TabList className="flex flex-row">
						{ Object.keys(tabs).map((tab) => (
							<Tab 
							className="px-10 pt-1 pb-2 rounded-t-lg mt-[14px] ml-4 bg-gray-200 hover:bg-gray-300"
							selectedClassName="bg-gray-300"
							>
								{ tab }
							</Tab>
						))}
					</TabList>
					{ Object.keys(tabs).map((tab) => (
						<TabPanel>
							{ tabs[tab] }
						</TabPanel>
					))}
				</Tabs>
				</div>
		</section>
	);
}
