import { ProfilType } from '@/pages/Profils'

type ProficalCardProps = {
	profil: ProfilType
}

const ProfilCard = ({ profil }: ProficalCardProps) => {
	return (
		<div className="flex flex-col justify-around items-center w-80 h-80 rounded-[30px] bg-lilac mx-8 my-6 px-8 py-1">
			<p className="text-violet text-m self-start">{profil.job}</p>
			<div>
				<img
					className="w-36 h-38 rounded-full object-cover"
					src={profil.picture}
					alt={`profil of ${profil.name}`}
				/>
				<p className="text-lg mt-8 text-center">{profil.name}</p>
			</div>
		</div>
	)
}

export default ProfilCard
