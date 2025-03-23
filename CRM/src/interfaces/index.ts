export interface IconProps {
  color?: string,
  size?: string,
  className?: string,
  width?: string,
  height?: string
}

export interface DropDownProps {
  item: {
    id: number,
    icon: string,
    name: string,
    items: itemProps[],
  }
}

export interface DropDownParentProps extends DropDownProps {
  item: DropDownProps['item'] & {
    [key: string]: string;
  };
}

export interface DropDownInnerProps extends DropDownProps {
  className?: string
}

export interface itemProps {
  id: number,
  name: string
}