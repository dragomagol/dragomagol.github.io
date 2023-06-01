// src/components/HistoryTab.js

// Sample work_data
const work_data = [
	{
		"title": "Software Engineer",
		"company": "Microsoft",
		"company_url": "https://www.microsoft.com/",
		"location": "Redmond, WA",
		"start_date": "Jan 2022",
		"end_date": "Present",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue ex, feugiat non ullamcorper id, sagittis quis tortor. Donec quis sodales felis. Etiam varius ultrices nulla sed gravida. Cras ornare ante lacus, ac tincidunt metus auctor mattis.",
		"technologies": [
			"TypeScript",
			"HTML/CSS",
			"SQL",
			"React",
			"Node.js",
			"Java",
		],
	},
	{
		"title": "Software Engineer",
		"company": "Google",
		"company_url": "https://www.google.com/",
		"location": "Mountain View, CA",
		"start_date": "May 2021",
		"end_date": "Dec 2021",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue ex, feugiat non ullamcorper id, sagittis quis tortor. Donec quis sodales felis. Etiam varius ultrices nulla sed gravida. Cras ornare ante lacus, ac tincidunt metus auctor mattis.",
		"technologies": [
			"React",
			"Node.js",
			"Express",
			"C++",
		],
	},
	{
		"title": "Software Engineer",
		"company": "Facebook",
		"company_url": "https://www.facebook.com/",
		"location": "Menlo Park, CA",
		"start_date": "Jan 2020",
		"end_date": "Dec 2020",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue ex, feugiat non ullamcorper id, sagittis quis tortor. Donec quis sodales felis. Etiam varius ultrices nulla sed gravida. Cras ornare ante lacus, ac tincidunt metus auctor mattis.",
		"technologies": [
			"React",
			"Node.js",
			"Express",
			"Python",
			"C#",
		],
	}
];

const volunteer_data = [
	{
		"title": "Volunteer",
		"company": "Red Cross",
		"company_url": "https://www.redcross.org/",
		"location": "Seattle, WA",
		"start_date": "Jan 2019",
		"end_date": "Present",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue ex, feugiat non ullamcorper id, sagittis quis tortor. Donec quis sodales felis. Etiam varius ultrices nulla sed gravida. Cras ornare ante lacus, ac tincidunt metus auctor mattis.",
	},
	{
		"title": "Volunteer",
		"company": "Habitat for Humanity",
		"company_url": "https://www.habitat.org/",
		"location": "Seattle, WA",
		"start_date": "Jan 2018",
		"end_date": "Dec 2018",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue ex, feugiat non ullamcorper id, sagittis quis tortor. Donec quis sodales felis. Etiam varius ultrices nulla sed gravida. Cras ornare ante lacus, ac tincidunt metus auctor mattis.",
	}
];

export default function HistoryTab() {
	return (
		<div className="w-[90%] m-auto">
			<h1 className="my-6 text-4xl text-left font-mono text-gray-100 font-bold">
				Work Experience
			</h1>
			{ work_data.map((job) => (
				<div className="text-left grid grid-cols-4 my-10">
					<div className="uppercase text-gray-500">
						{job.start_date} — {job.end_date}
					</div>
					<div className="col-span-3">
						<div className="text-lg text-gray-100 hover:text-gray-300">
							<a href={job.company_url}>{job.title} @ {job.company}</a>
						</div>
						<div className="text-sm text-gray-500 italic">
							{job.location}
						</div>
						<div className="text-gray-400 ml-4">
							{job.description}
						</div>
						<div className="flex flex-row ml-4">
							{ job.technologies.map((tech) => (
								<div className="rounded-full text-sm mt-4 mr-2 py-1 px-2 bg-blue-900 text-blue-200">
									{tech}
								</div>
							)) }
						</div>
					</div>
				</div>
			))}
			<h1 className="my-6 text-4xl text-left font-mono text-gray-100 font-bold">
				Volunteering
			</h1>
			{ volunteer_data.map((position) => (
				<div className="text-left grid grid-cols-4 my-10">
					<div className="uppercase text-gray-500">
						{position.start_date} — {position.end_date}
					</div>
					<div className="col-span-3">
						<div className="text-lg text-gray-100 hover:text-gray-300">
							<a href={position.company_url}>{position.title} @ {position.company}</a>
						</div>
						<div className="text-sm text-gray-500 italic">
							{position.location}
						</div>
						<div className="text-gray-400 ml-4">
							{position.description}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
