import {SVGAttributes} from "react"

export default interface IIcon extends Omit<SVGAttributes<SVGElement>, 'height' | 'width'> {
    size?: number
}
