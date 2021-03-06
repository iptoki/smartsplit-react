import React from "react"
import { Svg, Path } from "react-native-svg"
import { Colors } from "../theme"

export default function LinkIcon(props) {
	const color = props.color || Colors.action
	const { ...nextProps } = props

	return (
		<Svg
			{...nextProps}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<Path
				fill={color}
				fillRule="evenodd"
				clipRule="evenodd"
				d="M9 16C9.55229 16 10 16.4477 10 17C10 17.5523 9.55229 18 9 18H6C4.4087 18 2.88258 17.3679 1.75736 16.2426C0.632141 15.1174 0 13.5913 0 12C0 8.68629 2.68629 6 6 6H9C9.55229 6 10 6.44772 10 7C10 7.55228 9.55229 8 9 8H6C3.79086 8 2 9.79086 2 12C2 13.0609 2.42143 14.0783 3.17157 14.8284C3.92172 15.5786 4.93913 16 6 16H9ZM15 8C14.4477 8 14 7.55228 14 7C14 6.44772 14.4477 6 15 6H18C19.5913 6 21.1174 6.63214 22.2426 7.75736C23.3679 8.88258 24 10.4087 24 12C24 15.3137 21.3137 18 18 18H15C14.4477 18 14 17.5523 14 17C14 16.4477 14.4477 16 15 16H18C20.2091 16 22 14.2091 22 12C22 10.9391 21.5786 9.92172 20.8284 9.17157C20.0783 8.42143 19.0609 8 18 8H15ZM16 13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13Z"
			/>
		</Svg>
	)
}
