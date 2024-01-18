import { useEffect, useState } from "react";
import { NewsObject } from "../../typings";

interface RenderNewsCardProps {
	article?: NewsObject;
}

function Blog() {
	const [news, setNews] = useState<Array<NewsObject>>();
	const [loading, setLoading] = useState(true);
	const newsUrl = `https://api.mozambiquehe.re/news`;

	async function getNewsData(url: string) {
		if (!loading) setLoading(true);
		const headers: HeadersInit = {
			Authorization: `${process.env.NEXT_PUBLIC_APEX_STAT_API}`,
		};
		const opts: RequestInit = {
			method: "GET",
			headers: headers,
		};
		return await fetch(url, opts)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				let dataSplit = data.slice(0, 10);
				setNews(dataSplit);
			})
			.then(() => setLoading(false))
			.catch((err) => console.warn(err));
	}

	useEffect(() => {
		getNewsData(newsUrl)
			.then()
			.catch((err) => console.warn(err));
	}, []);

	return (
		<div className="xl:max-w-7xl lg:max-w-6xl lg:mx-auto mt-5 mb-1.5 p-2">
			{loading ? (
				<div className="text-3xl lg:text-7xl text-bright-light-red text-center py-10 lg:py-0 lg:p-20 m-10 animate-pulse">
					...Loading
				</div>
			) : (
				<div>
					<h2 className="text-3xl lg:text-4xl text-center my-1 py-1 font-medium">
						Apex News:
					</h2>
					<p className="text-sm text-center text-bright-light-red animate-pulse mb-2">
						Data/Images provided by{" "}
						<a
							target="_blank"
							href="https://apexlegendsstatus.com/"
							rel="noreferrer"
						>
							Apex Legends Status
						</a>
					</p>
					<section className="pt-1.5 pb-0.5 space-y-4 lg:space-y-6 bg-project-silver flex flex-col text-black rounded-lg border-2 border-black ">
						{news?.map((x) => (
							<RenderNewsCard article={x} key={x.title} />
						))}
					</section>
				</div>
			)}
		</div>
	);
}

export default Blog;

const RenderNewsCard = ({ article }: RenderNewsCardProps) => {
	return (
		<div className="flex flex-col items-center">
			<h1 className="text-xl md:text-2xl lg:text-3xl text-center font-medium py-1 mx-0.5">
				{article?.title}
			</h1>
			<a target="_blank" href={article?.link} rel="noreferrer">
				<img
					src={article?.img}
					alt={"ERR"}
					className="mx-auto my-1.5 h-32 lg:h-36"
				/>
			</a>
			<p className="flex text-base text-center ">{article?.short_desc}</p>
		</div>
	);
};
