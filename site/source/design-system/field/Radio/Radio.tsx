import { useRadio } from '@react-aria/radio'
import { RadioGroupState } from '@react-stately/radio'
import { AriaRadioProps } from '@react-types/radio'
import { FocusStyle } from '@/design-system/global-style'
import { Body } from '@/design-system/typography/paragraphs'
import { createContext, useContext, useRef } from 'react'
import styled, { css } from 'styled-components'

export const RadioContext = createContext<RadioGroupState | null>(null)

type RadioProps = AriaRadioProps & {
	hideRadio?: boolean
	className?: string
}

export function Radio(props: RadioProps) {
	const { hideRadio, children } = props

	return (
		<RadioSkeleton {...props}>
			{!hideRadio && <RadioPoint />}
			<LabelBody $hideRadio={hideRadio}>{children}</LabelBody>
		</RadioSkeleton>
	)
}

export const RadioSkeleton = (props: RadioProps) => {
	const { hideRadio, ...ariaProps } = props
	const { children } = ariaProps
	const state = useContext(RadioContext)
	if (!state) {
		throw new Error("Radio can't be instanciated outside a RadioContext")
	}

	const ref = useRef(null)
	const { inputProps } = useRadio(ariaProps, state, ref)

	return (
		<Label $hideRadio={hideRadio} className={props.className}>
			<InputRadio {...inputProps} className="sr-only" ref={ref} />
			<VisibleRadio>{children}</VisibleRadio>
		</Label>
	)
}

export const RadioPoint = ({ className }: { className?: string }) => (
	<RadioButton aria-hidden="true" className={className}>
		<OutsideCircle />
		<InsideCircle />
	</RadioButton>
)

const Label = styled.label<{ $hideRadio?: boolean }>`
	${({ $hideRadio }) =>
		$hideRadio &&
		css`
			margin-top: -1px;
		`}
`

const OutsideCircle = styled.span`
	position: absolute;
	border: 2px solid ${({ theme }) => theme.colors.extended.grey[600]};
	transition: all 0.2s;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.extended.grey[100]};

	height: 100%;
	width: 100%;
`

const InsideCircle = styled.span`
	--padding: 0.25rem;
	position: absolute;
	background-color: ${({ theme }) => theme.colors.bases.primary[700]};
	color-adjust: exact;
	border-radius: 50%;
	transform: scale(0);
	transition: all 0.2s;
	top: var(--padding);
	left: var(--padding);
	height: calc(100% - 2 * var(--padding));
	width: calc(100% - 2 * var(--padding));
`

export const RadioButton = styled.span`
	--size: ${({ theme }) => theme.spacings.md};
	--halo: ${({ theme }) => theme.spacings.sm};
	height: var(--size);
	width: var(--size);
	cursor: pointer;
	flex-shrink: 0;
	position: relative;
	margin-right: var(--halo);
	::before {
		content: '';
		position: absolute;
		top: calc(var(--halo) * -1);
		left: calc(var(--halo) * -1);
		width: calc(var(--halo) * 2 + var(--size));
		height: calc(var(--halo) * 2 + var(--size));
		border-radius: 50%;
		background: ${({ theme }) => theme.colors.bases.primary[100]};
		z-index: 0;
		opacity: 0;
		transition: all 0.15s ease;
		transform: scale(0.5);
	}
`

export const VisibleRadio = styled.div`
	display: inline-flex;
	align-items: center;
	text-align: initial;
	padding: 0 ${({ theme }) => theme.spacings.sm};
	margin: 0 calc(-1 * ${({ theme }) => theme.spacings.sm});
	border-radius: ${({ theme }) => theme.box.borderRadius};
	z-index: 1;
	:hover > ${RadioButton}::before {
		opacity: 1;
		transform: scale(1);
	}

	:hover ${OutsideCircle} {
		border-color: ${({ theme }) => theme.colors.bases.primary[700]};
	}
`

export const LabelBody = styled(Body)<{ $hideRadio?: boolean }>`
	margin: ${({ theme }) => theme.spacings.xs} 0px;
	margin-left: ${({ theme }) => theme.spacings.xxs};
	${({ $hideRadio }) =>
		$hideRadio &&
		css`
			margin: 0 !important;
		`}
`

export const InputRadio = styled.input`
	:focus
		+ ${VisibleRadio}
		${OutsideCircle},
		:checked
		+ ${VisibleRadio}
		${OutsideCircle} {
		border-color: ${({ theme }) => theme.colors.bases.primary[700]};
	}
	:focus-visible + ${VisibleRadio} {
		${FocusStyle}
		outline-offset: 0;
	}

	:checked + ${VisibleRadio} ${InsideCircle} {
		transform: scale(1);
	}
`
