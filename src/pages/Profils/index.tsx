import ProfilCard from '../../components/ui/ProfilCard'
import { freelances } from '../../datas/freelances'

export type ProfilType = {
	id: string
	name: string
	job: string
	picture: string
	skills: string[]
	location: string
	available: boolean
	tjm: number
}

const Profils = () => {
	return (
		<div>
			<h1>Profils</h1>
			<div className="flex flex-wrap">
				{freelances.map((profil: ProfilType) => {
					return <ProfilCard profil={profil} />
				})}
			</div>
		</div>
	)
}
export default Profils
