import React, { useContext } from 'react'
import emoji from 'react-easy-emoji'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { icons } from './ui/SocialIcon'
import { SitePathsContext } from './utils/withSitePaths'

export default function MoreInfosOnUs() {
	const { pathname } = useLocation()
	const sitePaths = useContext(SitePathsContext)
	const { language } = useTranslation().i18n

	if (language !== 'fr') {
		return null
	}

	return (
		<section
			className="ui__ full-width light-bg center-flex"
			css={`
				margin-top: 3rem;
			`}
		>
			<h3 style={{ textAlign: 'center', width: '100%' }}>
				Plus d'infos sur mon-entreprise.fr
			</h3>
			{!pathname.startsWith(sitePaths.nouveautés) && (
				<Link className="ui__ interactive card box" to={sitePaths.nouveautés}>
					<div className="ui__ big box-icon">{emoji('✨')}</div>
					<h3>Les nouveautés</h3>
					<p className="ui__ notice" css="flex: 1">
						Qu'avons-nous mis en production ces derniers mois ?
					</p>
					<div className="ui__ small simple button">Découvrir</div>
				</Link>
			)}
			<a
				href="https://mon-entreprise.fr/stats"
				className="ui__ interactive card box"
			>
				<div className="ui__ big box-icon">{emoji('📊')}</div>
				<h3>Les statistiques</h3>
				<p className="ui__ notice" css="flex: 1">
					Quel est notre impact ?
				</p>
				<div className="ui__ small simple button">Découvrir</div>
			</a>
			{!pathname.startsWith(sitePaths.budget) && (
				<Link className="ui__ interactive card box" to={sitePaths.budget}>
					<div className="ui__ big box-icon">{emoji('💶')}</div>
					<h3>Le budget</h3>
					<p className="ui__ notice" css="flex: 1">
						Quelles sont nos ressources et comment sont-elles employées ?
					</p>
					<div className="ui__ small simple button">Découvrir</div>
				</Link>
			)}
			<a
				href="https://github.com/betagouv/mon-entreprise"
				target="_blank"
				className="ui__ interactive card box"
			>
				<div className="ui__ big box-icon">
					{' '}
					<svg
						viewBox="15 15 34 34"
						style={{
							width: '3rem',
							height: '3rem',
							margin: 0
						}}
					>
						<g>
							<path d={icons['github'].icon} />
						</g>
					</svg>
				</div>
				<h3>Le code source</h3>
				<p className="ui__ notice" css="flex: 1">
					Nos travaux sont ouverts et libres de droit, ça se passe sur GitHub
				</p>
				<div className="ui__ small simple button">Découvrir</div>
			</a>
		</section>
	)
}
