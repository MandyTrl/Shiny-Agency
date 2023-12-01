import resume from '../../assets/resume.svg'

const Home = () => {
	return (
		<div className="flex justify-center items-center mx-auto max-w-screen-2xl px-22 mt-24 h-screen bg-[#F9F9FC]">
			<div className="mr-11">
				<div className="max-w-[552px] leading-relaxed text-5xl font-semibold">
					Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
				</div>
				<button className="bg-[#5843E4] text-white px-12 py-2 rounded-full cursor-pointer mt-14">
					Faire le test
				</button>
			</div>
			<div className="">
				<img src={resume} alt="resume" className="w-[540px]" />
			</div>
		</div>
	)
}

export default Home
