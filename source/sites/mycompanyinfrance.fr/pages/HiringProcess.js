/* @flow */
import Checklist from 'Components/Checklist'
import React from 'react'
import { Link } from 'react-router-dom'

// @TODO faire en sorte d'uniformiser les textes de la checklist.
// @TODO traduire les liens via google translate
export default Checklist({
	name: 'hire',
	title: `Checklist to hire an employee`,
	subtitle: `
			This checklist guides you through the legal steps to
			hire an employee.
	`,
	items: {
		contract: (
			<p>
				Sign an employment contract with your employee.{' '}
				<a
					href="https://www.service-public.fr/particuliers/vosdroits/N19871"
					target="_blank">
					More information (french)
				</a>
			</p>
		),
		dpae: (
			<p>
				Declare your hiring to the social administration. This form called DPAE
				must be done within 8 days before any hiring, and can{' '}
				<a href="https://www.due.urssaf.fr/declarant/index.jsf" target="_blank">
					be done online
				</a>{' '}
				(french)
			</p>
		),
		paySoftware: (
			<p>
				With less than 20 employees, payslips and declarations can be handled
				online by the{' '}
				<a href="http://www.letese.urssaf.fr" target="_blank">
					Tese (french)
				</a>. In any case, you can use{' '}
				<a href="http://www.dsn-info.fr/convention-charte.htm" target="_blank">
					private payslip software (french)
				</a>
			</p>
		),
		registre: (
			<p>
				Keep an updated staff register.{' '}
				<a
					href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F1784"
					target="_blank">
					More info
				</a>{' '}
				(french)
			</p>
		),
		complementaryPension: (
			<p>
				<a
					href="https://www.espace-entreprise.agirc-arrco.fr/simape/#/donneesDep<Paste>"
					target="_blank">
					find your assigned compulsory complementary pension institution
				</a>{' '}
				and contact them
				{/* // The AGIRC-ARRCO complementary pension is mandatory. Those are only federations,{' '} */}
			</p>
		),
		complementaryHealth: (
			<p>
				Choose a private complementary health insurance.
				{/* Covering a legal basic care basket */}
				{/* Expliquer les deux contrats de complémentaire santé (soins et prévoyance) */}
			</p>
		),
		workMedicine: (
			<p>
				Register to a work medicine office (and plan an initial appointment for
				each new hire)
			</p>
		)
	},

	conclusion: (
		<div>
			<h2>Then each month</h2>
			<p>
				Your have to compute the individual social contributions (use a pay
				software as described above), then declare them through the DSN, and
				deliver a standardised payslip to your employee.
			</p>
			<Link className="ui__ button" to="/social-security">
				Get an example payslip
			</Link>
		</div>
	)
})
