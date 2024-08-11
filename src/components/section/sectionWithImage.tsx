export interface SectionWithImageItem {
	textTop: string
	subtitleTop: string
	imagePath: string
	subtitleBottom: string
}

export function SectionWithImage({ items }: Readonly<{ items: SectionWithImageItem[]}>) {

	function isEven(value: number): boolean {
		return value % 2 === 0
	}

	return (
		<div className="pt-12">
			{items.length > 0 && items.map((item, index) => {
				return (
					<section key={ item.textTop }className={`px-6 py-12 mx-auto flex flex-col items-center justify-center ${isEven(index) ? 'bg-gray-100' : 'bg-white'}`}>
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black text-center md:text-left">
							<span className="text-red-600">{item.textTop}</span>
						</h1>
						<p className="mt-4 text-lg md:text-xl text-gray-700 text-center md:text-left">
							{item.subtitleTop}
						</p>
						<img
							src={item.imagePath}
							alt=""
							className=" w-1/2 h-1/2 m-4"
						/>
						<p className="mt-2 text-md text-gray-600 text-center md:text-left">
							{item.subtitleBottom}
						</p>
					</section>
				)
			})}
		</div>
	);
}
